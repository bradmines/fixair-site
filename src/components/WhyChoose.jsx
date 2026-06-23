const reasons = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: 'Licensed & Insured',
    description: 'Fully licensed HVAC technician in Ontario. Carry full liability and WSIB coverage, so your home and investment are protected.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: 'Locally Owned & Operated',
    description: 'Born and raised in Niagara. Tom lives here, works here, and takes personal pride in keeping local homes comfortable all year round.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: 'Fast Response Times',
    description: 'No long waits. Tom responds quickly and gets your system back up and running, especially when you need it most.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: 'Friendly & Professional',
    description: 'Tom is easy to work with, takes time to explain the work, and treats your home with respect on every single visit.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
      </svg>
    ),
    title: '20+ Years Experience',
    description: 'Two decades of hands-on experience means Tom has seen it all. Efficient diagnostics, lasting repairs, and installs done right.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
      </svg>
    ),
    title: 'Honest Upfront Pricing',
    description: 'No hidden fees or surprise invoices. Tom explains the work needed, the cost, and the options before anything is done.',
  },
]

export default function WhyChoose() {
  return (
    <section id="why" className="py-20 md:py-28 bg-brand-blue relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-block bg-white/10 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Why FixAIR
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
            The Niagara HVAC Contractor<br />
            <span className="text-brand-orange">Homeowners Trust</span>
          </h2>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
            Not all contractors are equal. As a residential only company, here's what sets FixAIR apart.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(r => (
            <div
              key={r.title}
              className="group bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/20 backdrop-blur rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-brand-orange rounded-xl flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {r.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{r.title}</h3>
              <p className="text-blue-200 text-sm leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-14 text-center">
          <a href="tel:+19057322791" className="btn-primary text-base px-10 py-4 shadow-xl shadow-brand-orange/30">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            Call Tom: 905-732-2791
          </a>
        </div>
      </div>
    </section>
  )
}
