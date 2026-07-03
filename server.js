import express from 'express'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const port = process.env.PORT || 3000

app.use((_req, res, next) => {
  res.setHeader('X-Frame-Options', 'SAMEORIGIN')
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
