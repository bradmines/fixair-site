const benefits = [
  {
    text: 'Low monthly payments',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 10v2m0-10c1.11 0 2.08.402 2.599 1M12 16c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ),
  },
  {
    text: 'Fast approvals',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    text: 'Flexible terms',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    text: 'No hidden fees',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

export default function Financing() {
  return (
    <section
      id="financing"
      className="relative overflow-hidden bg-gradient-to-b from-brand-blue to-[#13293f] py-24 md:py-32"
    >
      {/* Decorative glows, same visual language as the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-[30rem] h-[30rem] bg-brand-orange/10 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-28 w-[28rem] h-[28rem] bg-brand-blue-light/20 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: heading, explanation, logo, benefits */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              Financing Available
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
              Pay for Your Comfort{' '}
              <span className="text-brand-orange">Over Time</span>
            </h2>

            <p className="mt-5 text-blue-100/80 text-base md:text-lg leading-relaxed max-w-xl">
              Pay for your furnace, air conditioner, or home comfort needs at Fix Air in monthly
              installments through Financeit. Apply for financing up to $100,000 and find out if you
              pre-qualify in seconds — no obligation, no commitment.
            </p>

            {/* Financeit logo */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://www.financeit.ca/s/gXF_UQ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl px-5 py-3 shadow-lg shadow-black/10 transition-all duration-200 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5"
                aria-label="Apply for financing through Financeit"
              >
                <img
                  src="/financeitlogo.png"
                  alt="Financeit"
                  className="h-7 md:h-8 w-auto block"
                  loading="lazy"
                />
              </a>
              <span className="text-blue-200/70 text-sm font-medium">Our financing partner</span>
            </div>

            {/* Benefits */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 max-w-lg">
              {benefits.map(b => (
                <div key={b.text} className="group flex items-center gap-3.5">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/[0.06] border border-white/10 text-brand-orange transition-all duration-300 group-hover:bg-brand-orange group-hover:text-white group-hover:border-brand-orange">
                    {b.icon}
                  </span>
                  <span className="text-white font-medium text-[15px]">{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: contact CTA, glass panel */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-white/[0.07] backdrop-blur-sm border border-white/10 p-8 md:p-10 shadow-2xl shadow-black/20">
              <h3 className="text-2xl font-extrabold text-white leading-snug">
                Apply Now for Financing
              </h3>
              <p className="mt-3 text-blue-100/75 text-[15px] leading-relaxed">
                Start your application online through our secure Financeit portal — it only takes a
                few minutes.
              </p>
              <a
                href="https://www.financeit.ca/s/gXF_UQ"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group mt-7 w-full text-base px-8 py-4 shadow-lg shadow-brand-orange/25 hover:shadow-brand-orange/40"
              >
                Apply Now for Financing
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <p className="mt-4 text-center text-xs text-blue-200/60">
                Secure application through Financeit
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
