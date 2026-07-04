import Home from './pages/Home'
import ServicePage from './pages/ServicePage'
import LocationPage from './pages/LocationPage'
import FaqPage from './pages/FaqPage'
import NotFound from './pages/NotFound'

// Renders the page for the matched route. `route` comes from routes.js
// (matchRoute) on both the server (prerender) and client (hydration).
export default function App({ route }) {
  if (route?.kind === 'service') return <ServicePage service={route.data} />
  if (route?.kind === 'location') return <LocationPage location={route.data} />
  if (route?.kind === 'faq') return <FaqPage />
  if (route?.kind === '404') return <NotFound />
  return <Home />
}
