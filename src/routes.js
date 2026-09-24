import { services } from './data/services'
import { locations } from './data/locations'
import { blogPosts, getPublishedPosts, todayForRender } from './data/blog'
import { cityServices } from './data/cityServices'

// Central route registry. Shared by the server (prerender) and the client
// (hydration) so both resolve the same component + data for a given path.
// No react-router: every page is its own prerendered HTML document and
// navigation is plain full-page loads.
const pageRoutes = [
  { path: '/', kind: 'home', data: null },
  ...services.map(s => ({ path: `/services/${s.slug}/`, kind: 'service', data: s })),
  ...locations.map(l => ({ path: `/service-areas/${l.slug}/`, kind: 'location', data: l })),
  ...cityServices.map(cs => ({
    path: `/service-areas/${cs.citySlug}/${cs.slug}/`,
    kind: 'city-service',
    data: cs,
  })),
  { path: '/faq/', kind: 'faq', data: null },
  { path: '/blog/', kind: 'blog', data: null },
]

const postRoute = p => ({ path: `/blog/${p.slug}/`, kind: 'blog-post', data: p })

// Every page that gets prerendered, scheduled posts included. Prerender only.
export const allRoutes = [...pageRoutes, ...blogPosts.map(postRoute)]

// The pages that exist on `today`: what the sitemap lists and what a URL
// resolves to. A scheduled post is a 404 until its date.
export function routesFor(today) {
  return [...pageRoutes, ...getPublishedPosts(today).map(postRoute)]
}

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
// hydration mismatch. 404 is never in the route list, so it stays out of the
// sitemap; prerender writes dist/404.html separately.
export function matchRoute(pathname, today = todayForRender()) {
  const p = normalize(pathname)
  return routesFor(today).find(r => r.path === p) || { path: p, kind: '404', data: null }
}
