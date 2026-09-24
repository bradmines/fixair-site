import { useEffect, useState } from 'react'
import { isScheduledPreview, formatPostDate } from '../data/blog'

// Staging-only marker on posts production is still hiding. Shown after
// hydration rather than in the prerendered HTML, because the same HTML is
// served to production (no badge) and to previews (badge).
export default function ScheduledBadge({ post, className = '' }) {
  const [show, setShow] = useState(false)
  useEffect(() => setShow(isScheduledPreview(post)), [post])
  if (!show) return null
  return (
    <span
      className={`inline-flex items-center bg-amber-100 text-amber-800 border border-amber-300 text-xs font-bold px-2.5 py-1 rounded-full ${className}`}
    >
      Scheduled for {formatPostDate(post.date)}
    </span>
  )
}
