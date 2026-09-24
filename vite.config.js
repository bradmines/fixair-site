import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { torontoToday, showFuturePosts } from './scripts/today.js'

const BUILD_TODAY = torontoToday()

// In production server.js fills in window.__TODAY__ per request. The dev server
// never goes through server.js, so fill it here the same way.
function devToday() {
  return {
    name: 'dev-today',
    apply: 'serve',
    transformIndexHtml(html) {
      return html.replace('%%TODAY%%', showFuturePosts() ? '9999-12-31' : torontoToday())
    },
  }
}

export default defineConfig({
  plugins: [react(), devToday()],
  define: {
    __BUILD_TODAY__: JSON.stringify(BUILD_TODAY),
  },
})
