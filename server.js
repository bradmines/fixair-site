import express from 'express'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const port = process.env.PORT || 3000

// Railway terminates TLS upstream, so the real scheme arrives in
// x-forwarded-proto. Without this, req.secure is always false.
app.set('trust proxy', true)

const CANONICAL_HOST = 'www.fixairheatandcool.ca'

app.use((_req, res, next) => {
  // Allow this site to be framed by itself and bradmines.com (portfolio embed).
  // frame-ancestors replaces X-Frame-Options, which can't allowlist a specific
  // cross-origin site in modern browsers (ALLOW-FROM is deprecated).
  res.setHeader(
    'Content-Security-Policy',
    "frame-ancestors 'self' https://bradmines.com https://www.bradmines.com"
  )
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
  next()
})

// Send every request to one canonical origin (https + www) with a single 301.
// Serving the same page on apex/www or http/https splits link equity and makes
// Google pick a canonical for us. Skipped for local dev and Railway's own
// *.railway.app preview domain, which should stay reachable as-is.
app.use((req, res, next) => {
  const host = (req.headers.host || '').toLowerCase().split(':')[0]
  const isLocal = host === 'localhost' || host === '127.0.0.1' || host.endsWith('.railway.app')
  if (isLocal) return next()

  const needsHost = host !== CANONICAL_HOST
  const needsHttps = req.protocol !== 'https'
  if (needsHost || needsHttps) {
    return res.redirect(301, `https://${CANONICAL_HOST}${req.originalUrl}`)
  }
  next()
})

const YEAR = 60 * 60 * 24 * 365
const WEEK = 60 * 60 * 24 * 7

app.use(
  express.static(join(__dirname, 'dist'), {
    setHeaders(res, path) {
      if (path.endsWith('.html')) {
        // Prerendered HTML must revalidate, or a deploy won't reach visitors
        // who already have the page cached.
        res.setHeader('Cache-Control', 'no-cache')
      } else if (path.includes('/assets/')) {
        // Vite fingerprints these filenames, so they can never go stale.
        res.setHeader('Cache-Control', `public, max-age=${YEAR}, immutable`)
      } else {
        // Images, video and fonts: stable names, so cache hard but allow
        // revalidation in case one is replaced in place.
        res.setHeader('Cache-Control', `public, max-age=${WEEK}`)
      }
    },
  })
)

// Anything not matched by a prerendered static file is a real 404.
app.get('/{*path}', (_req, res) => {
  res.status(404).sendFile(join(__dirname, 'dist', '404.html'))
})

app.listen(port, () => {
  console.log(`FixAIR preview running on port ${port}`)
})
