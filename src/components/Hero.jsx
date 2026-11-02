import { useRef } from 'react'
import { PHONE, PHONE_HREF, EMAIL_HREF } from '../constants'
import useLazyVideo from '../hooks/useLazyVideo'

export default function Hero() {
  const desktopRef = useRef(null)
  const mobileRef = useRef(null)

  // Only the video for the current breakpoint loads; the hidden one never
  // intersects, so phones never pull the desktop file.
  useLazyVideo([desktopRef, mobileRef])

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-brand-blue" id="home">
      {/* Full-bleed video. Poster is a CSS background (not a child) so it sits
          behind the video and only the matching breakpoint image is fetched. */}
      <div className="hero-poster absolute inset-0">
        <video
          ref={desktopRef}
          muted
          loop
          playsInline
          preload="none"
          className="hero-video hidden sm:block w-full h-full object-cover"
        >
          <source src="/zoomoutvid1.mp4" type="video/mp4" />
        </video>
        <video
          ref={mobileRef}
          muted
          loop
          playsInline
          preload="none"
          className="hero-video sm:hidden w-full h-full object-cover"
        >
          <source src="/zoomoutvidmobile.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/55 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/75 via-brand-blue/25 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/50 to-transparent" />
      </div>

      {/* Content card: one layout for both breakpoints, stacked CTAs on mobile */}
      <div className="relative z-10 flex min-h-[100svh] items-end sm:items-center px-5 sm:px-10 lg:px-16 pb-28 sm:pb-20 pt-28">
        <div className="w-full max-w-xl lg:max-w-2xl">
          <div className="hero-panel rounded-3xl border border-white/15 bg-brand-blue/55 backdrop-blur-md shadow-2xl shadow-black/30 px-5 py-6 sm:px-8 sm:py-8">
            <div className="hero-enter inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/45 text-brand-orange text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
              24/7 residential HVAC across Niagara
            </div>

            <h1 className="hero-enter hero-enter-delay-1 mt-4 sm:mt-5 text-[1.85rem] leading-[1.15] sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Your Niagara home,{' '}
              <span className="text-brand-orange">comfortable</span> all year
            </h1>

            <p className="hero-enter hero-enter-delay-2 mt-4 text-sm sm:text-lg text-blue-100/90 leading-relaxed max-w-xl">
              Call Tom. Licensed technician, 25+ years on local homes. Honest
              assessments, clean installs, and no pressure.
            </p>

            <div className="hero-enter hero-enter-delay-2 mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-white font-bold text-sm sm:text-base">5.0</span>
                <span className="text-blue-200/80 text-xs sm:text-sm">Google reviews</span>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-xs sm:text-sm">
                <img src="/redleaf.png" alt="" aria-hidden="true" className="w-4 h-4 object-contain opacity-80" />
                Proudly Canadian · Locally owned
              </div>
            </div>

            <ul className="hero-enter hero-enter-delay-3 mt-5 flex flex-wrap gap-2 text-[11px] sm:text-xs font-semibold text-white/90">
              {['Licensed & insured', 'Residential only', 'Welland based', 'Free estimates'].map(label => (
                <li
                  key={label}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5"
                >
                  {label}
                </li>
              ))}
            </ul>

            <div className="hero-enter hero-enter-delay-3 mt-6 flex flex-col sm:flex-row gap-3">
              <a href={PHONE_HREF} className="btn-primary text-base px-7 py-4 shadow-brand-orange/30">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                Call Tom · {PHONE}
              </a>
              <a
                href="#contact"
                className="btn-secondary text-base px-7 py-4 border-white/40 bg-white/10 text-white hover:bg-white/20"
              >
                Get a free quote
              </a>
            </div>

            <p className="hero-enter hero-enter-delay-3 mt-4 text-xs text-blue-200/70">
              Prefer email?{' '}
              <a href={EMAIL_HREF} className="underline underline-offset-2 hover:text-white">
                Message Tom directly
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 hidden sm:flex flex-col items-center gap-1 text-white/45 animate-bounce" aria-hidden="true">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  )
}
