import { useEffect } from 'react'
import Home from './pages/Home'
import ServicePage from './pages/ServicePage'
import LocationPage from './pages/LocationPage'
import FaqPage from './pages/FaqPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import NotFound from './pages/NotFound'

// Renders the page for the matched route. `route` comes from routes.js
// (matchRoute) on both the server (prerender) and client (hydration).
export default function App({ route }) {
  // Scroll handling: disable browser scroll restoration so reloads always start
  // at the top of the page. If there's a hash, scroll to that section instead.
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    const hash = window.location.hash
    if (hash) {
      const id = hash.slice(1)
      const t = setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'auto' })
      }, 0)
      return () => clearTimeout(t)
    } else {
      window.scrollTo(0, 0)
    }
  }, [])

  if (route?.kind === 'service') return <ServicePage service={route.data} />
  if (route?.kind === 'location') return <LocationPage location={route.data} />
  if (route?.kind === 'faq') return <FaqPage />
  if (route?.kind === 'blog') return <BlogPage />
  if (route?.kind === 'blog-post') return <BlogPostPage post={route.data} />
  if (route?.kind === '404') return <NotFound />
  return <Home />
}
