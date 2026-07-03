import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, 'dist')
const serverDir = join(__dirname, 'dist-server')
const templatePath = join(distDir, 'index.html')

const { render, routes, siteUrl } = await import(join(serverDir, 'entry-server.js'))

const template = readFileSync(templatePath, 'utf-8')
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
    .replace(headPlaceholder, head)
    .replace(rootPlaceholder, `<div id="root">${html}</div>`)

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
    .replace(headPlaceholder, head)
    .replace(rootPlaceholder, `<div id="root">${html}</div>`)
  writeFileSync(join(distDir, '404.html'), output)
  console.log('✓ 404.html')
}

// Regenerate sitemap.xml from the route list.
const lastmod = new Date().toISOString().slice(0, 10)
const urls = routes
  .map(r => {
    const priority = r.path === '/' ? '1.0' : '0.8'
    return `  <url>
    <loc>${siteUrl}${r.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
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
