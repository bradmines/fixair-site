import { services } from './data/services'
import { locations } from './data/locations'
import { blogPosts } from './data/blog'

// Central route registry. Shared by the server (prerender) and the client
// (hydration) so both resolve the same component + data for a given path.
// No react-router: every page is its own prerendered HTML document and
// navigation is plain full-page loads.
export const routes = [
  { path: '/', kind: 'home', data: null },
  ...services.map(s => ({ path: `/services/${s.slug}/`, kind: 'service', data: s })),
  ...locations.map(l => ({ path: `/service-areas/${l.slug}/`, kind: 'location', data: l })),
  { path: '/faq/', kind: 'faq', data: null },
  { path: '/blog/', kind: 'blog', data: null },
  ...blogPosts.map(p => ({ path: `/blog/${p.slug}/`, kind: 'blog-post', data: p })),
]

// Normalize a pathname to a canonical, trailing-slash form.
function normalize(pathname) {
  let p = pathname || '/'
  const q = p.indexOf('?')
  if (q !== -1) p = p.slice(0, q)
  const h = p.indexOf('#')
  if (h !== -1) p = p.slice(0, h)
  if (!p.endsWith('/')) p += '/'
  return p
}

// Resolve a pathname to a route. Unknown paths resolve to a 404 route so the
// server (prerender) and client (hydration) render the same thing — avoiding a
// hydration mismatch. The `routes` array is unchanged, so 404 stays out of the
// sitemap; prerender writes dist/404.html separately.
export function matchRoute(pathname) {
  const p = normalize(pathname)
  return routes.find(r => r.path === p) || { path: p, kind: '404', data: null }
}
