export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-blue" id="home">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
          alt="Modern home HVAC system"
          className="w-full h-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue/95 to-brand-blue-mid/80" />

        {/* Subtle faint maple leaf watermark in hero background - tasteful, understated Canadian detail */}
        <div className="absolute top-[-30px] right-[-80px] w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] text-white opacity-[0.04] -rotate-[15deg] pointer-events-none select-none z-0">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
            <path d="M50 2 Q35 10 38 25 Q20 20 25 38 Q8 32 15 52 Q3 48 8 68 Q18 60 22 78 Q35 68 38 85 Q50 75 50 92 Q50 75 62 85 Q65 68 78 78 Q82 60 92 68 Q97 48 85 52 Q90 32 72 38 Q75 20 65 25 Q68 10 50 2 Z" />
          </svg>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-orange/10 rounded-full -translate-y-1/4 translate-x-1/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue-light/20 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
            Niagara's Trusted Residential HVAC Pro
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Keep Your Niagara Home{' '}
            <span className="text-brand-orange">Comfortable</span>{' '}
            All Year Round
          </h1>

          <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-xl leading-relaxed">
            Honest, expert HVAC service from Tom, a licensed technician with over{' '}
            <strong className="text-white">25 years</strong> of experience. FixAIR is a{' '}
            <strong className="text-white">residential only</strong> company, focused entirely on
            homes across Niagara and surrounding areas.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="tel:+19057322791" className="btn-primary text-base px-8 py-4">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              Call Tom Now
            </a>
            <a href="mailto:fixairheatandcool@gmail.com" className="btn-secondary text-base px-8 py-4 border-white/40 bg-white/10 text-white hover:bg-white/20">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Email Tom
            </a>
          </div>

          {/* Trust badges + social */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-blue-100 text-sm font-medium">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 1l2.09 4.26L17 6.27l-3.5 3.41.83 4.82L10 12.27l-4.33 2.23.83-4.82L3 6.27l4.91-.71L10 1z" clipRule="evenodd"/>
              </svg>
              Licensed & Insured
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
              </svg>
              Financing Available
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
              Fast Response
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              Local & Family-Run
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
              </svg>
              Residential Specialist
            </div>

            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-orange/70" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 2 Q35 10 38 25 Q20 20 25 38 Q8 32 15 52 Q3 48 8 68 Q18 60 22 78 Q35 68 38 85 Q50 75 50 92 Q50 75 62 85 Q65 68 78 78 Q82 60 92 68 Q97 48 85 52 Q90 32 72 38 Q75 20 65 25 Q68 10 50 2 Z" />
              </svg>
              Proudly Canadian, Locally Owned
            </div>

            {/* Divider + social callout */}
            <div className="w-full sm:w-auto flex items-center gap-3 mt-1 sm:mt-0">
              <div className="w-px h-5 bg-white/20 hidden sm:block" />
              <span className="text-white/50 text-xs font-normal">or message us on</span>
              <a
                href="https://www.facebook.com/fixairheatandcool"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FixAIR on Facebook"
                className="flex items-center gap-1.5 text-blue-100 hover:text-white transition-colors group"
              >
                <span className="w-7 h-7 bg-white/10 group-hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                </span>
                Facebook
              </a>
              <a
                href="https://www.instagram.com/fixairheatandcool"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FixAIR on Instagram"
                className="flex items-center gap-1.5 text-blue-100 hover:text-white transition-colors group"
              >
                <span className="w-7 h-7 bg-white/10 group-hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                </span>
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Stats card */}
        <div className="hidden lg:flex flex-col gap-4">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '20+', label: 'Years Experience' },
                { value: '6', label: 'Communities Served' },
                { value: '5.0★', label: 'Google Rating' },
                { value: 'Licensed', label: '& Insured in ON' },
              ].map(s => (
                <div key={s.label} className="text-center p-4 bg-white/10 rounded-xl">
                  <div className="text-3xl font-extrabold text-brand-orange">{s.value}</div>
                  <div className="text-sm text-blue-100 mt-1 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/20 flex items-center gap-3">
              <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                T
              </div>
              <div>
                <div className="font-bold">Tom, Owner & Lead Tech</div>
                <div className="text-blue-200 text-sm">Available Mon to Sat · Niagara &amp; surrounding areas</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 animate-bounce">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  )
}
