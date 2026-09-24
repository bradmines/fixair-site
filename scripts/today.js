// Shared by vite.config.js (build date) and server.js (per-request date), so
// "today" means the same thing at build time and at serve time.

// Calendar date in Niagara as YYYY-MM-DD. Blog posts are scheduled by local
// day, so a post dated 2026-10-01 goes live at midnight Eastern, not UTC.
export function torontoToday(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Toronto',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(now)
  const get = type => parts.find(p => p.type === type).value
  return `${get('year')}-${get('month')}-${get('day')}`
}

// Staging and previews show scheduled posts; production never does.
export function showFuturePosts(env = process.env) {
  if (env.BLOG_SHOW_FUTURE === '1') return true
  const railwayEnv = env.RAILWAY_ENVIRONMENT_NAME
  return Boolean(railwayEnv) && railwayEnv !== 'production'
}
