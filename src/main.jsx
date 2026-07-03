import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { matchRoute } from './routes.js'
import './index.css'

const rootEl = document.getElementById('root')
const route = matchRoute(window.location.pathname)
const app = (
  <React.StrictMode>
    <App route={route} />
  </React.StrictMode>
)

// If the HTML was prerendered (has content), hydrate it; otherwise mount fresh (dev).
if (rootEl.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootEl, app)
} else {
  ReactDOM.createRoot(rootEl).render(app)
}
