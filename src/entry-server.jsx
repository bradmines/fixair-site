import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import { routes, matchRoute } from './routes.js'
import { buildHead } from './head.js'
import { BUSINESS } from './data/business.js'

export { routes }
export const siteUrl = BUSINESS.url

// Renders a single route to { html, head } for the prerender step.
export function render(pathname) {
  const route = matchRoute(pathname)
  const html = renderToString(
    <React.StrictMode>
      <App route={route} />
    </React.StrictMode>
  )
  const head = buildHead(route)
  return { html, head }
}
