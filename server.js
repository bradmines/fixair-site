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
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`

// Canonical path form for a request.
//
// Every indexable page is prerendered to <route>/index.html and is canonicalled
// at the trailing-slash URL, so exactly one URL per page may return 200:
//   /services/furnaces        -> /services/furnaces/   (add the slash)
//   /services/furnaces/index.html -> /services/furnaces/   (hide the file)
//   /index.html               -> /
// Anything whose last segment contains a dot is a real asset (/assets/x.js,
// /robots.txt, /hero-poster.jpg) and is left exactly as-is.
function canonicalPath(pathname) {
  let p = pathname || '/'

  // Collapse accidental double slashes; they serve the same page otherwise.
  p = p.replace(/\/{2,}/g, '/')

  // /index.html and /any/path/index.html are duplicates of their directory.
  if (p === '/index.html') return '/'
  if (p.endsWith('/index.html')) return p.slice(0, -'index.html'.length)

  const last = p.slice(p.lastIndexOf('/') + 1)
  const isAsset = last.includes('.')
  if (!isAsset && !p.endsWith('/')) p += '/'
  return p
}

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

// Normalize host, scheme AND path in ONE 301.
//
// Previously the host redirect lived here and the trailing-slash redirect was
// left to express.static's own `redirect` option, so a request that was wrong
// in both respects took two hops (apex/no-slash -> www/no-slash -> www/slash).
// Redirect chains dilute the signal Google passes through, so both corrections
// are folded into a single Location. express.static's redirect is disabled
// below so it can't add a second hop behind our back.
//
// Skipped for local dev and Railway's own *.railway.app preview domain, which
// must stay reachable on their own hostnames.
app.use((req, res, next) => {
  const host = (req.headers.host || '').toLowerCase().split(':')[0]
  const isInternal =
    host === 'localhost' || host === '127.0.0.1' || host.endsWith('.railway.app')

  const [rawPath, rawQuery] = req.originalUrl.split('?')
  const wantPath = canonicalPath(rawPath)
  const query = rawQuery ? `?${rawQuery}` : ''

  if (isInternal) {
    // Still fix the path on preview hosts, but keep the host they arrived on.
    if (wantPath !== rawPath) {
      return res.redirect(301, `${wantPath}${query}`)
    }
    return next()
  }

  const needsHost = host !== CANONICAL_HOST
  const needsHttps = req.protocol !== 'https'
  const needsPath = wantPath !== rawPath

  if (needsHost || needsHttps || needsPath) {
    // Absolute Location: unambiguous for crawlers and required anyway whenever
    // the host or scheme is changing.
    return res.redirect(301, `${CANONICAL_ORIGIN}${wantPath}${query}`)
  }
  next()
})

const YEAR = 60 * 60 * 24 * 365
const WEEK = 60 * 60 * 24 * 7

// name.<8 hex>.ext — the shape scripts/fingerprint.js produces at build time.
const FINGERPRINTED = /\.[0-9a-f]{8}\.[a-z0-9]+$/i

app.use(
  express.static(join(__dirname, 'dist'), {
    // The middleware above is the single source of truth for path shape.
    redirect: false,
    setHeaders(res, path) {
      if (path.endsWith('.html')) {
        // Prerendered HTML must revalidate, or a deploy won't reach visitors
        // who already have the page cached.
        res.setHeader('Cache-Control', 'no-cache')
      } else if (path.endsWith('sitemap.xml') || path.endsWith('robots.txt')) {
        // Crawler control files. These must not sit in an intermediary cache
        // for a week — sitemap.xml is exactly what Google re-fetches to find
        // newly published pages, so a stale copy delays indexing.
        res.setHeader('Cache-Control', 'public, max-age=3600, must-revalidate')
      } else if (path.includes('/assets/') || FINGERPRINTED.test(path)) {
        // Fingerprinted by Vite (/assets/) or by scripts/fingerprint.js. The
        // filename contains a hash of the contents, so the bytes behind this
        // URL can never change and it is safe to cache forever. Replacing the
        // asset produces a different URL, which misses cache automatically.
        res.setHeader('Cache-Control', `public, max-age=${YEAR}, immutable`)
      } else {
        // Anything still on a stable name. Cache, but allow revalidation —
        // replacing one of these in place otherwise serves stale bytes for the
        // full TTL, at the CDN as well as in the browser.
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
