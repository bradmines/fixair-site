import { readFileSync, writeFileSync, rmSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, 'dist')
const serverDir = join(__dirname, 'dist-server')
const indexPath = join(distDir, 'index.html')

const { render } = await import(join(serverDir, 'entry-server.js'))
const appHtml = render()

const template = readFileSync(indexPath, 'utf-8')
const placeholder = '<div id="root"></div>'
if (!template.includes(placeholder)) {
  throw new Error('prerender: could not find <div id="root"></div> in dist/index.html')
}
const output = template.replace(placeholder, `<div id="root">${appHtml}</div>`)
writeFileSync(indexPath, output)

// Remove the temporary SSR build output
rmSync(serverDir, { recursive: true, force: true })

console.log('✓ prerendered dist/index.html')
