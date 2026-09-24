import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import { allRoutes, routesFor, matchRoute } from './routes.js'
import { buildHead } from './head.js'
import { BUSINESS } from './data/business.js'
import { blogPosts, BUILD_TODAY } from './data/blog.js'

export { allRoutes, routesFor, blogPosts, BUILD_TODAY }
export const siteUrl = BUSINESS.url

// Renders a single route to { html, head } for the prerender step, as the
// site looks on `today`. Components read the date through todayForRender(),
// so it is set globally for the duration of this synchronous render.
export function render(pathname, today = BUILD_TODAY) {
  const prev = globalThis.__TODAY__
  globalThis.__TODAY__ = today
  try {
    const route = matchRoute(pathname, today)
    const html = renderToString(
      <React.StrictMode>
        <App route={route} />
      </React.StrictMode>
    )
    const head = buildHead(route)
    return { html, head }
  } finally {
    globalThis.__TODAY__ = prev
  }
}
