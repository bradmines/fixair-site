import express from 'express'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const port = process.env.PORT || 3000

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

app.use(express.static(join(__dirname, 'dist')))

// Anything not matched by a prerendered static file is a real 404.
app.get('/{*path}', (_req, res) => {
  res.status(404).sendFile(join(__dirname, 'dist', '404.html'))
})

app.listen(port, () => {
  console.log(`FixAIR preview running on port ${port}`)
})
