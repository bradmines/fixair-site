import { useEffect, useRef } from 'react'
import { PHONE_HREF, EMAIL_HREF } from '../constants'

export default function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => {
      if (!videoRef.current) return
      mq.matches ? videoRef.current.pause() : videoRef.current.play()
    }
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-brand-blue" id="home">
        {/* Full-bleed video */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster="/hero-bg.jpg"
            className="w-full h-full object-cover"
          >
            <source src="/driving2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/40 via-transparent to-transparent" />
        </div>

        {/* ── Desktop film card — bottom-left ── */}
        <div className="hidden sm:block absolute bottom-0 left-0 px-10 lg:px-16 pb-16 lg:pb-24 w-full max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
            Niagara's Trusted Residential HVAC Pro
          </div>

          <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Keep Your Niagara Home{' '}
            <span className="text-brand-orange">Comfortable</span>{' '}
            All Year Round
          </h1>

          {/* Google 5-star */}
          <div className="mt-6 flex items-center gap-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <span className="text-white font-bold text-lg">5.0</span>
            <span className="text-blue-200 text-sm">· Verified Google Reviews</span>
          </div>

          {/* Canadian badge */}
          <div className="mt-3 flex items-center gap-2">
            <img src="/redleaf.png" alt="" aria-hidden="true" className="w-5 h-5 object-contain opacity-80" />
            <span className="text-white/60 text-sm tracking-wide">Proudly Canadian · Locally Owned</span>
          </div>

          <div className="mt-7 flex gap-4">
            <a href={PHONE_HREF} className="btn-primary text-base px-8 py-4">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              Call Tom Now
            </a>
            <a href={EMAIL_HREF} className="btn-secondary text-base px-8 py-4 border-white/40 bg-white/10 text-white hover:bg-white/20">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Email Tom
            </a>
          </div>
        </div>

        {/* ── Mobile overlay — badge + CTA only ── */}
        <div className="sm:hidden absolute bottom-0 left-0 right-0 px-6 pb-24">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
            Niagara's Trusted Residential HVAC Pro
          </div>
          <a href="#contact" className="btn-primary text-base py-4 w-full">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            Get a Free Quote
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 hidden sm:flex flex-col items-center gap-1 text-white/50 animate-bounce">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
          </svg>
        </div>
      </section>

      {/* ── Mobile text section ── */}
      <div className="sm:hidden bg-brand-blue px-6 pt-8 pb-10">
        <h1 className="text-3xl font-extrabold text-white leading-tight">
          Keep Your Niagara Home{' '}
          <span className="text-brand-orange">Comfortable</span>{' '}
          All Year Round
        </h1>
        <p className="mt-4 text-base text-blue-100 leading-relaxed">
          Honest, expert HVAC service from Tom, a licensed technician. FixAIR is a{' '}
          <strong className="text-white">residential only</strong> company, focused entirely on
          homes across Niagara and surrounding areas.
        </p>
        <div className="mt-4 flex items-center gap-2">
          <img src="/redleaf.png" alt="" aria-hidden="true" className="w-4 h-4 object-contain opacity-70" />
          <span className="text-white/50 text-xs tracking-wide">Proudly Canadian · Locally Owned</span>
        </div>
        <a href={EMAIL_HREF} className="mt-6 btn-secondary text-base px-6 py-3.5 border-white/40 bg-white/10 text-white hover:bg-white/20 w-full">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          Email Tom
        </a>
      </div>

      {/* ── Trust blocks ── */}
      <div className="bg-white border-b border-gray-100">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 divide-x divide-y lg:divide-y-0 divide-gray-100">

          {/* Stat blocks */}
          {[
            { value: '25+',      label: 'Years\nExperience'    },
            { value: '6',        label: 'Communities\nServed'  },
            { value: 'Licensed', label: '& Insured\nin ON'     },
          ].map(s => (
            <div key={s.label} className="flex flex-col items-center justify-center text-center px-4 py-7 gap-1.5">
              <span className="text-2xl font-extrabold text-brand-orange">{s.value}</span>
              <span className="text-xs text-gray-500 font-medium leading-snug whitespace-pre-line">{s.label}</span>
            </div>
          ))}

          {/* Trust badge blocks */}
          {[
            { label: 'Licensed &\nInsured',      icon: <path fillRule="evenodd" d="M10 1l2.09 4.26L17 6.27l-3.5 3.41.83 4.82L10 12.27l-4.33 2.23.83-4.82L3 6.27l4.91-.71L10 1z" clipRule="evenodd"/> },
            { label: 'Financing\nAvailable',     icon: <><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/><path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/></> },
            { label: 'Fast\nResponse',           icon: <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/> },
            { label: 'Local &\nFamily-Run',      icon: <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/> },
            { label: 'Residential\nSpecialist',  icon: <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/> },
          ].map(t => (
            <div key={t.label} className="flex flex-col items-center justify-center text-center px-4 py-7 gap-2">
              <svg className="w-6 h-6 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">{t.icon}</svg>
              <span className="text-xs text-gray-600 font-medium leading-snug whitespace-pre-line">{t.label}</span>
            </div>
          ))}

        </div>
      </div>
    </>
  )
}
