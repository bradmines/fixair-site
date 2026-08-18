import { useEffect } from 'react'

// Autoplaying background videos are the heaviest thing on the site. Left as
// preload="auto" the browser eagerly pulls the whole file — including the
// desktop video on phones and below-the-fold videos that may never be seen —
// which competes with the render-critical assets and wrecks mobile LCP.
//
// This gates loading on visibility: sources stay at preload="none" until the
// element actually enters the viewport, then we call play(), which starts the
// fetch. A display:none video (the wrong-breakpoint one) never intersects, so
// it never downloads at all. Respects prefers-reduced-motion.
export default function useLazyVideo(refs, { rootMargin = '200px' } = {}) {
  useEffect(() => {
    const els = refs.map(r => r.current).filter(Boolean)
    if (els.length === 0) return

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')

    const start = el => {
      if (mq.matches) {
        el.pause()
        return
      }
      const p = el.play()
      // Autoplay can still be refused (low power mode, data saver) — the
      // poster stays up, which is a fine fallback.
      if (p && typeof p.catch === 'function') p.catch(() => {})
    }

    // No IntersectionObserver (very old browsers): just play, same as before.
    if (typeof IntersectionObserver === 'undefined') {
      els.forEach(start)
      return
    }

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            start(entry.target)
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin }
    )
    els.forEach(el => io.observe(el))

    const sync = () => els.forEach(el => (mq.matches ? el.pause() : start(el)))
    mq.addEventListener('change', sync)

    return () => {
      io.disconnect()
      mq.removeEventListener('change', sync)
    }
  }, [])
}
