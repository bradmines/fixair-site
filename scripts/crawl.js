#!/usr/bin/env node
// Crawl every URL in the sitemap and report status, redirect chain, title,
// canonical and word count. Read-only: issues GETs and nothing else.
//
//   node scripts/crawl.js                      # crawl the live site
//   node scripts/crawl.js http://localhost:3000  # crawl a local `node server.js`
//
// Pass a base origin to rewrite each sitemap URL onto that origin, so the same
// sitemap can be checked against production, staging or a local server.

import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const sitemapPath = join(__dirname, '..', 'dist', 'sitemap.xml')

const baseOverride = process.argv[2] || null

const xml = readFileSync(sitemapPath, 'utf-8')
const sitemapUrls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1])

// Rewrite onto a different origin while keeping the path.
function target(url) {
  if (!baseOverride) return url
  const u = new URL(url)
  return new URL(u.pathname + u.search, baseOverride).toString()
}

function textBetween(html, re) {
  const m = html.match(re)
  return m ? m[1].trim() : null
}

// Strip script/style/head, then tags, and count whitespace-delimited words in
// the visible body. Approximate by design — it only needs to separate a thin
// page from a substantial one.
function wordCount(html) {
  const body = html
    .replace(/<head[\s\S]*?<\/head>/gi, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/gi, ' ')
  return body.split(/\s+/).filter(Boolean).length
}

// Follow redirects manually so we can record every hop, not just the endpoint.
async function fetchChain(startUrl, maxHops = 10) {
  const chain = []
  let url = startUrl
  for (let i = 0; i < maxHops; i++) {
    let res
    try {
      res = await fetch(url, { redirect: 'manual', headers: { 'User-Agent': 'FixAirCrawler/1.0' } })
    } catch (err) {
      return { chain, error: err.message, status: null, finalUrl: url, body: '' }
    }
    chain.push({ url, status: res.status })
    const loc = res.headers.get('location')
    if (res.status >= 300 && res.status < 400 && loc) {
      url = new URL(loc, url).toString()
      continue
    }
    const body = await res.text()
    return { chain, error: null, status: res.status, finalUrl: url, body }
  }
  return { chain, error: 'too many redirects', status: null, finalUrl: url, body: '' }
}

const results = []
for (const sitemapUrl of sitemapUrls) {
  const start = target(sitemapUrl)
  const r = await fetchChain(start)
  const html = r.body || ''
  results.push({
    sitemapUrl,
    requested: start,
    status: r.status,
    error: r.error,
    hops: r.chain.length - 1,
    chain: r.chain,
    finalUrl: r.finalUrl,
    title: textBetween(html, /<title[^>]*>([\s\S]*?)<\/title>/i),
    canonical: textBetween(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i),
    h1: textBetween(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i)?.replace(/<[^>]+>/g, '').trim(),
    words: html ? wordCount(html) : 0,
  })
  process.stderr.write('.')
}
process.stderr.write('\n')

// --- report ---------------------------------------------------------------

const pad = (s, n) => String(s ?? '').padEnd(n).slice(0, n)

console.log('\n=== CRAWL: ' + (baseOverride || 'production') + ' ===\n')
console.log(
  pad('STATUS', 7) + pad('HOPS', 5) + pad('WORDS', 7) + pad('PATH', 52) + 'TITLE'
)
console.log('-'.repeat(150))
for (const r of results) {
  const path = new URL(r.sitemapUrl).pathname
  console.log(
    pad(r.error ? 'ERR' : r.status, 7) +
      pad(r.hops, 5) +
      pad(r.words, 7) +
      pad(path, 52) +
      (r.title || r.error || '')
  )
}

const bad = results.filter(r => r.error || r.status >= 400)
const redirected = results.filter(r => !r.error && r.hops > 0)
const canonMismatch = results.filter(
  r => !r.error && r.status === 200 && r.canonical && r.canonical !== r.sitemapUrl
)
const thin = results.filter(r => !r.error && r.status === 200 && r.words < 400)
const longTitles = results.filter(r => r.title && r.title.length > 60)

function section(label, rows, fmt) {
  console.log('\n' + label + ' (' + rows.length + ')')
  if (!rows.length) return console.log('  none')
  for (const r of rows) console.log('  ' + fmt(r))
}

section('!! NON-200', bad, r => `${r.status || r.error}  ${new URL(r.sitemapUrl).pathname}`)
section('!! IN SITEMAP BUT REDIRECTS', redirected, r =>
  `${new URL(r.sitemapUrl).pathname}\n      ${r.chain.map(c => `${c.status} ${c.url}`).join('\n   -> ')}`
)
section('!! CANONICAL != SITEMAP URL', canonMismatch, r =>
  `${new URL(r.sitemapUrl).pathname}\n      canonical: ${r.canonical}`
)
section('THIN (<400 words)', thin, r => `${r.words}w  ${new URL(r.sitemapUrl).pathname}`)
section('TITLE > 60 CHARS', longTitles, r =>
  `${String(r.title.length).padStart(3)}  ${new URL(r.sitemapUrl).pathname}\n      ${r.title}`
)

console.log(
  `\nTotals: ${results.length} urls | ${results.filter(r => r.status === 200 && r.hops === 0).length} clean 200 | ` +
    `${bad.length} broken | ${redirected.length} redirecting | ${thin.length} thin`
)
