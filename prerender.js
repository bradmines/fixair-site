import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'fs'
import { fileURLToPath, pathToFileURL } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, 'dist')
const serverDir = join(__dirname, 'dist-server')
const templatePath = join(distDir, 'index.html')

const { render, allRoutes, routesFor, blogPosts, BUILD_TODAY, siteUrl } = await import(
  pathToFileURL(join(serverDir, 'entry-server.js')).href
)

const template = readFileSync(templatePath, 'utf-8')

// String.replace() interprets $$, $&, $` and $' inside the REPLACEMENT string
// as substitution patterns, so page copy or JSON-LD containing them would be
// silently corrupted (a priceRange of '$$' came out as '$'). Passing a
// function as the replacement disables that interpretation entirely.
const literal = value => () => value
const rootPlaceholder = '<div id="root"></div>'
const headPlaceholder = '<!--app-head-->'
const todayPlaceholder = "window.__TODAY__='%%TODAY%%'"
for (const needle of [rootPlaceholder, headPlaceholder, todayPlaceholder]) {
  if (!template.includes(needle)) {
    throw new Error(`prerender: could not find ${needle} in dist/index.html`)
  }
}

function pageHtml(path, today) {
  const { html, head } = render(path, today)
  return template
    .replace(headPlaceholder, literal(head))
    .replace(rootPlaceholder, literal(`<div id="root">${html}</div>`))
}

// '/' -> dist/index.html ; '/services/furnaces/' -> dist/services/furnaces/index.html
// A dated variant sits beside it as index@YYYY-MM-DD.html.
function writePage(path, output, variant = '') {
  const relDir = path.replace(/^\/|\/$/g, '') // trim leading/trailing slash
  const outDir = relDir ? join(distDir, relDir) : distDir
  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, variant ? `index@${variant}.html` : 'index.html'), output)
}

// Scheduled publishing, without cron jobs or rebuilds.
//
// Every page is rendered as of BUILD_TODAY. Then, for each future post date D,
// each page is rendered again as of D, and kept as a variant only if it came
// out different (in practice: the blog index and any page listing related
// articles). server.js picks the newest variant whose date has arrived, so a
// post appears in lists and the sitemap on its date with no deploy.
const futureDates = [...new Set(blogPosts.map(p => p.date).filter(d => d > BUILD_TODAY))].sort()
const variantsByPath = {}

for (const route of allRoutes.filter(r => r.kind !== 'blog-post')) {
  let prev = pageHtml(route.path, BUILD_TODAY)
  writePage(route.path, prev)
  for (const date of futureDates) {
    const output = pageHtml(route.path, date)
    if (output === prev) continue
    writePage(route.path, output, date)
    ;(variantsByPath[route.path] ||= []).push(date)
    prev = output
  }
  const n = variantsByPath[route.path]?.length
  console.log(`✓ ${route.path}${n ? ` (+${n} dated)` : ''}`)
}

// Every post page, scheduled ones included, rendered as of its own date.
// server.js answers 404 for a post until that date arrives.
for (const route of allRoutes.filter(r => r.kind === 'blog-post')) {
  writePage(route.path, pageHtml(route.path, route.data.date))
  console.log(`✓ ${route.path}${route.data.date > BUILD_TODAY ? ` (scheduled ${route.data.date})` : ''}`)
}

// Render the 404 page (any unknown path resolves to the 404 route) to
// dist/404.html. Not added to the sitemap.
writeFileSync(join(distDir, '404.html'), pageHtml('/__404__', BUILD_TODAY))
console.log('✓ 404.html')

// Sitemap, once as of the build date and once per future post date.
//
// lastmod is only useful to Google if it's true. Stamping every URL with the
// build date told crawlers the entire site changed on every deploy, which
// devalues the signal for the pages that genuinely did change. Articles carry
// their own publish/update date; evergreen pages fall back to the build date
// since that's the last point their content could have moved.
function sitemapFor(today) {
  const routes = routesFor(today)

  function lastmodFor(route) {
    if (route.kind === 'blog-post') return route.data.updated || route.data.date
    // The blog index changes whenever its newest post does.
    if (route.kind === 'blog') {
      const dates = routes
        .filter(r => r.kind === 'blog-post')
        .map(r => r.data.updated || r.data.date)
        .sort()
      return dates.length ? dates[dates.length - 1] : BUILD_TODAY
    }
    return BUILD_TODAY
  }

  // Crawl priority by page type: the homepage first, then the money pages
  // (city+service landing pages and services), then areas, then articles.
  function priorityFor(route) {
    if (route.path === '/') return '1.0'
    if (route.kind === 'city-service') return '0.9'
    if (route.kind === 'service') return '0.9'
    if (route.kind === 'location') return '0.8'
    if (route.kind === 'faq') return '0.6'
    if (route.kind === 'blog') return '0.6'
    return '0.5'
  }

  function changefreqFor(route) {
    if (route.path === '/') return 'weekly'
    if (route.kind === 'blog') return 'weekly'
    if (route.kind === 'blog-post') return 'yearly'
    return 'monthly'
  }

  const urls = routes
    .map(r => {
      return `  <url>
    <loc>${siteUrl}${r.path}</loc>
    <lastmod>${lastmodFor(r)}</lastmod>
    <changefreq>${changefreqFor(r)}</changefreq>
    <priority>${priorityFor(r)}</priority>
  </url>`
    })
    .join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
  return { xml, count: routes.length }
}

const baseSitemap = sitemapFor(BUILD_TODAY)
writeFileSync(join(distDir, 'sitemap.xml'), baseSitemap.xml)
console.log(`✓ sitemap.xml (${baseSitemap.count} urls)`)
for (const date of futureDates) {
  const { xml, count } = sitemapFor(date)
  writeFileSync(join(distDir, `sitemap@${date}.xml`), xml)
  console.log(`✓ sitemap@${date}.xml (${count} urls)`)
}

// What server.js needs to pick the right file per request. Never served.
const schedule = {
  buildToday: BUILD_TODAY,
  dates: futureDates,
  posts: Object.fromEntries(blogPosts.map(p => [p.slug, p.date])),
  pages: variantsByPath,
  sitemap: futureDates,
}
writeFileSync(join(distDir, 'schedule.json'), JSON.stringify(schedule, null, 2))
console.log(`✓ schedule.json (${futureDates.length} scheduled dates)`)

// Remove the temporary SSR build output.
rmSync(serverDir, { recursive: true, force: true })

console.log(`✓ prerendered ${allRoutes.length} pages`)
