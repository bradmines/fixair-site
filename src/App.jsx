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
  // Hash-scroll fix: React renders async, so the browser's native hash-scroll
  // fires before the target element exists. We re-scroll after mount.
  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return
    const id = hash.slice(1)
    // setTimeout(0) yields after React flushes the render, giving the DOM time to settle.
    const t = setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'auto' })
    }, 0)
    return () => clearTimeout(t)
  }, [])

  if (route?.kind === 'service') return <ServicePage service={route.data} />
  if (route?.kind === 'location') return <LocationPage location={route.data} />
  if (route?.kind === 'faq') return <FaqPage />
  if (route?.kind === 'blog') return <BlogPage />
  if (route?.kind === 'blog-post') return <BlogPostPage post={route.data} />
  if (route?.kind === '404') return <NotFound />
  return <Home />
}
