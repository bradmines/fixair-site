#!/usr/bin/env node
// Content-hash the static assets Vite copies verbatim out of public/.
//
// Vite fingerprints everything it bundles into /assets/, so those files can be
// cached forever and can never go stale. Files in public/ keep their original
// names, so replacing one in place leaves every CDN and browser serving the old
// bytes until the cache header expires — a week, in our case. That is exactly
// what happened when the oversized images were resized: Cloudflare kept serving
// the old ones (cf-cache-status: HIT) until the cache was purged by hand.
//
// This closes that hole. Each asset is renamed to name.<hash>.ext, where the
// hash is derived from its contents, and every reference in the built HTML, CSS
// and JS is rewritten to match. Change an image and its URL changes with it, so
// caches miss it automatically. Leave it alone and the URL is byte-identical
// across deploys, so the cache stays warm.
//
// Run after prerender, as the last step of the build.

import { readFileSync, writeFileSync, renameSync, readdirSync, statSync } from 'fs'
import { createHash } from 'crypto'
import { fileURLToPath } from 'url'
import { dirname, join, extname, basename, relative } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')

// Assets worth fingerprinting. Anything a browser caches hard and that we might
// one day replace in place.
const HASHABLE = new Set([
  '.jpg', '.jpeg', '.png', '.avif', '.webp', '.gif',
  '.mp4', '.webm', '.mov',
  '.woff2', '.woff',
])

// Fixed paths that must never move: crawlers and browsers request these by
// exact name, so a hash would simply make them unreachable.
const PINNED = new Set(['robots.txt', 'sitemap.xml', 'favicon.svg', 'favicon.ico'])

// Files whose contents get rewritten to point at the new names.
const REWRITABLE = new Set(['.html', '.css', '.js', '.json', '.xml'])

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) walk(full, out)
    else out.push(full)
  }
  return out
}

const allFiles = walk(distDir)

// --- 1. hash and rename -----------------------------------------------------

// path-as-served -> path-as-served-after-hashing
const rewrites = new Map()

for (const file of allFiles) {
  const ext = extname(file).toLowerCase()
  const name = basename(file)
  if (!HASHABLE.has(ext) || PINNED.has(name)) continue

  // Vite already fingerprints /assets/; re-hashing would be pointless churn.
  const served = '/' + relative(distDir, file).split('\\').join('/')
  if (served.startsWith('/assets/')) continue

  const bytes = readFileSync(file)
  const hash = createHash('sha256').update(bytes).digest('hex').slice(0, 8)
  const hashedName = `${basename(name, ext)}.${hash}${ext}`
  const hashedPath = join(dirname(file), hashedName)
  const hashedServed = '/' + relative(distDir, hashedPath).split('\\').join('/')

  renameSync(file, hashedPath)
  rewrites.set(served, hashedServed)
}

// --- 2. rewrite references --------------------------------------------------

// Longest paths first, so /a/logo.png is never partially matched by /logo.png.
const ordered = [...rewrites.entries()].sort((a, b) => b[0].length - a[0].length)

const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

// A reference is only rewritten when the path is delimited — preceded by a
// quote, parenthesis, whitespace, = or the site origin, and followed by a
// quote, parenthesis, whitespace, > or end. Prevents matching a path that
// happens to be a substring of a longer one.
function rewriteIn(text) {
  let out = text
  let count = 0
  for (const [from, to] of ordered) {
    const re = new RegExp(`(["'\`(=\\s])(https://www\\.fixairheatandcool\\.ca)?${esc(from)}(?=["'\`)\\s>?#])`, 'g')
    out = out.replace(re, (_m, lead, origin) => {
      count++
      return `${lead}${origin || ''}${to}`
    })
  }
  return { out, count }
}

let filesTouched = 0
let refsRewritten = 0
for (const file of walk(distDir)) {
  if (!REWRITABLE.has(extname(file).toLowerCase())) continue
  const before = readFileSync(file, 'utf-8')
  const { out, count } = rewriteIn(before)
  if (count > 0) {
    writeFileSync(file, out)
    filesTouched++
    refsRewritten += count
  }
}

// --- 3. verify --------------------------------------------------------------

// Nothing in the built output may still point at a pre-hash path. If it does,
// that reference would 404 in production, so fail the build rather than ship it.
const stale = []
for (const file of walk(distDir)) {
  if (!REWRITABLE.has(extname(file).toLowerCase())) continue
  const text = readFileSync(file, 'utf-8')
  for (const [from] of ordered) {
    const re = new RegExp(`(["'\`(=\\s])(https://www\\.fixairheatandcool\\.ca)?${esc(from)}(?=["'\`)\\s>?#])`)
    if (re.test(text)) stale.push(`${relative(distDir, file)} -> ${from}`)
  }
}

console.log(`✓ fingerprinted ${rewrites.size} assets, rewrote ${refsRewritten} references in ${filesTouched} files`)
if (stale.length) {
  console.error('\n✗ references left pointing at unhashed paths:')
  for (const s of stale.slice(0, 20)) console.error('   ' + s)
  process.exit(1)
}
