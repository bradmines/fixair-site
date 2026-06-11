import express from 'express'
import basicAuth from 'express-basic-auth'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const port = process.env.PORT || 3000

const user = process.env.SITE_USER || 'fixair'
const pass = process.env.SITE_PASSWORD || 'preview2025'

app.use(basicAuth({
  users: { [user]: pass },
  challenge: true,
  realm: 'FixAIR Preview',
}))

app.use(express.static(join(__dirname, 'dist')))

// SPA fallback
app.get('/{*path}', (_req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'))
})

app.listen(port, () => {
  console.log(`FixAIR preview running on port ${port}`)
})
