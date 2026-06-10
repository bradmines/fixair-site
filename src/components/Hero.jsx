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
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-orange/10 rounded-full -translate-y-1/4 translate-x-1/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue-light/20 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
            Niagara Region's Trusted HVAC Pro
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Keep Your Niagara Home{' '}
            <span className="text-brand-orange">Comfortable</span>{' '}
            All Year Round
          </h1>

          <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-xl leading-relaxed">
            Honest, expert HVAC service from Tom — a licensed technician with over{' '}
            <strong className="text-white">20 years</strong> of experience serving Welland,
            St. Catharines, Niagara Falls and beyond.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="tel:+19057322791" className="btn-primary text-base px-8 py-4">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              Call Tom Now
            </a>
            <a href="#contact" className="btn-secondary text-base px-8 py-4 border-white/40 bg-white/10 text-white hover:bg-white/20">
              Request a Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap gap-6 text-blue-100 text-sm font-medium">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 1l2.09 4.26L17 6.27l-3.5 3.41.83 4.82L10 12.27l-4.33 2.23.83-4.82L3 6.27l4.91-.71L10 1z" clipRule="evenodd"/>
              </svg>
              Licensed & Insured
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
              Fast Response
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
              </svg>
              Financing Available
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              Local & Family-Run
            </div>
          </div>
        </div>

        {/* Stats card */}
        <div className="hidden lg:flex flex-col gap-4">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '20+', label: 'Years Experience' },
                { value: '1000+', label: 'Happy Customers' },
                { value: '6', label: 'Niagara Communities' },
                { value: '100%', label: 'Satisfaction Goal' },
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
                <div className="font-bold">Tom — Owner & Lead Tech</div>
                <div className="text-blue-200 text-sm">Available Mon–Sat · Niagara Region</div>
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
