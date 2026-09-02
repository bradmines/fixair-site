#!/usr/bin/env node
// Build an internal-link graph from the prerendered HTML in dist/ and report,
// for every URL in the sitemap, how many OTHER pages link to it.
//
//   node scripts/linkgraph.js
//
// Counts unique linking pages, not raw <a> tags: ten links from one page is
// still one page's worth of endorsement, and self-links are ignored. Nav and
// footer links are counted separately so a page propped up only by sitewide
// boilerplate is still visibly orphaned.

import { readFileSync, existsSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')

const xml = readFileSync(join(distDir, 'sitemap.xml'), 'utf-8')
const paths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => new URL(m[1]).pathname)

// Normalize an href to a comparable site path, or null if it's external /
// an anchor / a mailto or tel link.
function normalize(href, fromPath) {
  if (!href) return null
  if (/^(https?:)?\/\//i.test(href)) {
    if (!/fixairheatandcool\.ca/i.test(href)) return null
    href = href.replace(/^https?:\/\/[^/]+/i, '') || '/'
  }
  if (/^(mailto:|tel:|javascript:|#)/i.test(href)) return null
  if (!href.startsWith('/')) href = join(dirname(fromPath), href)
  href = href.split('#')[0].split('?')[0]
  if (!href) return null
  if (!href.endsWith('/') && !href.slice(href.lastIndexOf('/')).includes('.')) href += '/'
  return href
}

// Split a page into (footer+header boilerplate) and (main body), so we can tell
// a real contextual link from a sitewide one.
function regions(html) {
  const footer = (html.match(/<footer[\s\S]*?<\/footer>/gi) || []).join(' ')
  const header = (html.match(/<header[\s\S]*?<\/header>/gi) || []).join(' ')
  const body = html.replace(/<footer[\s\S]*?<\/footer>/gi, ' ').replace(/<header[\s\S]*?<\/header>/gi, ' ')
  return { chrome: header + ' ' + footer, body }
}

function hrefsIn(chunk) {
  return [...chunk.matchAll(/<a\b[^>]*?href=["']([^"']+)["']/gi)].map(m => m[1])
}

// path -> { body:Set<fromPath>, chrome:Set<fromPath> }
const inbound = new Map(paths.map(p => [p, { body: new Set(), chrome: new Set() }]))

for (const from of paths) {
  const file = join(distDir, from === '/' ? 'index.html' : join(from, 'index.html'))
  if (!existsSync(file)) continue
  const html = readFileSync(file, 'utf-8')
  const { chrome, body } = regions(html)
  for (const [region, chunk] of [['body', body], ['chrome', chrome]]) {
    for (const raw of hrefsIn(chunk)) {
      const to = normalize(raw, from)
      if (!to || to === from) continue
      const rec = inbound.get(to)
      if (rec) rec[region].add(from)
    }
  }
}

const pad = (s, n) => String(s ?? '').padEnd(n)
const lpad = (s, n) => String(s ?? '').padStart(n)

const rows = paths.map(p => {
  const r = inbound.get(p)
  // A body link from a page that also links sitewide still counts once.
  const total = new Set([...r.body, ...r.chrome]).size
  return { path: p, body: r.body.size, chrome: r.chrome.size, total }
})

console.log('\nINTERNAL LINKS INTO EACH SITEMAP URL (unique linking pages)\n')
console.log(pad('PATH', 52) + lpad('BODY', 6) + lpad('NAV/FT', 8) + lpad('TOTAL', 7) + '  FLAG')
console.log('-'.repeat(82))
for (const r of rows.sort((a, b) => a.total - b.total || a.path.localeCompare(b.path))) {
  const flag = r.total < 3 ? '<< UNDER 3' : r.body === 0 ? '<< no contextual links' : ''
  console.log(pad(r.path, 52) + lpad(r.body, 6) + lpad(r.chrome, 8) + lpad(r.total, 7) + '  ' + flag)
}

const under3 = rows.filter(r => r.total < 3)
const noBody = rows.filter(r => r.body === 0)
console.log(
  `\n${rows.length} urls | ${under3.length} with fewer than 3 inbound | ` +
    `${noBody.length} with zero contextual (non-nav/footer) links`
)
if (noBody.length) {
  console.log('\nZero contextual inbound links:')
  for (const r of noBody) console.log('  ' + r.path)
}
