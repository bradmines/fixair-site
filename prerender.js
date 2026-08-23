import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, 'dist')
const serverDir = join(__dirname, 'dist-server')
const templatePath = join(distDir, 'index.html')

const { render, routes, siteUrl } = await import(join(serverDir, 'entry-server.js'))

const template = readFileSync(templatePath, 'utf-8')

// String.replace() interprets $$, $&, $` and $' inside the REPLACEMENT string
// as substitution patterns, so page copy or JSON-LD containing them would be
// silently corrupted (a priceRange of '$$' came out as '$'). Passing a
// function as the replacement disables that interpretation entirely.
const literal = value => () => value
const rootPlaceholder = '<div id="root"></div>'
const headPlaceholder = '<!--app-head-->'
if (!template.includes(rootPlaceholder)) {
  throw new Error('prerender: could not find <div id="root"></div> in dist/index.html')
}
if (!template.includes(headPlaceholder)) {
  throw new Error('prerender: could not find <!--app-head--> in dist/index.html')
}

// Render each route to its own static HTML file.
for (const route of routes) {
  const { html, head } = render(route.path)
  const output = template
    .replace(headPlaceholder, literal(head))
    .replace(rootPlaceholder, literal(`<div id="root">${html}</div>`))

  // '/' -> dist/index.html ; '/services/furnaces/' -> dist/services/furnaces/index.html
  const relDir = route.path.replace(/^\/|\/$/g, '') // trim leading/trailing slash
  const outDir = relDir ? join(distDir, relDir) : distDir
  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'index.html'), output)
  console.log(`✓ ${route.path}`)
}

// Render the 404 page (any unknown path resolves to the 404 route) to
// dist/404.html. Not added to the sitemap.
{
  const { html, head } = render('/__404__')
  const output = template
    .replace(headPlaceholder, literal(head))
    .replace(rootPlaceholder, literal(`<div id="root">${html}</div>`))
  writeFileSync(join(distDir, '404.html'), output)
  console.log('✓ 404.html')
}

// Regenerate sitemap.xml from the route list.
//
// lastmod is only useful to Google if it's true. Stamping every URL with the
// build date told crawlers the entire site changed on every deploy, which
// devalues the signal for the pages that genuinely did change. Articles carry
// their own publish/update date; evergreen pages fall back to the build date
// since that's the last point their content could have moved.
const buildDate = new Date().toISOString().slice(0, 10)

function lastmodFor(route) {
  if (route.kind === 'blog-post') return route.data.updated || route.data.date
  // The blog index changes whenever its newest post does.
  if (route.kind === 'blog') {
    const dates = routes
      .filter(r => r.kind === 'blog-post')
      .map(r => r.data.updated || r.data.date)
      .sort()
    return dates.length ? dates[dates.length - 1] : buildDate
  }
  return buildDate
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
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
writeFileSync(join(distDir, 'sitemap.xml'), sitemap)
console.log(`✓ sitemap.xml (${routes.length} urls)`)

// Remove the temporary SSR build output.
rmSync(serverDir, { recursive: true, force: true })

console.log(`✓ prerendered ${routes.length} pages`)
