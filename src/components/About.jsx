export default function About() {
  return (
    <section id="about" className="overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[700px] lg:min-h-[780px]">

        {/* ── Full-bleed photo ── */}
        <div className="relative min-h-[420px] lg:min-h-0">
          <img
            src="/tom.avif"
            alt="Tom Guitard — Owner and lead technician, FixAIR Heating & Air Conditioning"
            className="absolute inset-0 w-full h-full object-cover object-top"
            loading="lazy"
          />

          {/* Gradient: bottom fade for name plate */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-brand-blue/90 to-transparent" />

          {/* Right-edge fade so photo blends into text column on desktop */}
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent hidden lg:block" />

          {/* Name plate */}
          <div className="absolute bottom-6 left-6 right-6 lg:right-16 text-white">
            <div className="text-2xl font-extrabold leading-tight">Tom Guitard</div>
            <div className="text-sm text-blue-200 mt-0.5 font-medium">Owner &amp; Lead Technician · 20+ Years</div>
          </div>

          {/* Floating pull quote — desktop only */}
          <div className="absolute top-8 right-0 lg:-right-6 z-20 hidden lg:block w-52 bg-white rounded-l-2xl lg:rounded-2xl shadow-xl border border-gray-100 p-4">
            <div className="text-brand-orange text-3xl font-serif leading-none">"</div>
            <p className="text-xs text-gray-600 leading-relaxed italic mt-1">
              His meticulous workmanship is top notch.
            </p>
            <p className="text-[11px] font-bold text-brand-blue mt-2">— Sandy, Niagara Region</p>
          </div>
        </div>

        {/* ── Text column ── */}
        <div className="bg-slate-50 flex flex-col justify-center px-8 py-14 lg:px-14 lg:py-20">
          <div className="max-w-lg">
            <div className="inline-block bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Meet Tom
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue leading-tight">
              First-Rate Workmanship,{' '}
              <span className="text-brand-orange">Every Single Job</span>
            </h2>

            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed text-[15px]">
              <p>
                Hi, I'm Tom — the owner, technician, and the person who answers the phone
                when you call FixAIR. I've been working on heating and cooling systems across
                the Niagara Region for over two decades, and I built this company on a simple
                belief: every customer deserves the same care I'd give my own home.
              </p>
              <p>
                No overselling. No upsells you don't need. Just honest assessments, quality
                parts, and workmanship I'm proud to stand behind. I show up on time, do the
                job right, and leave your home cleaner than I found it.
              </p>
            </div>

            {/* Feature chips */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                {
                  title: 'Licensed & Insured',
                  desc: 'Fully licensed HVAC technician in Ontario',
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                  ),
                },
                {
                  title: 'Personal Service',
                  desc: 'You talk to Tom, not a call centre',
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  ),
                },
                {
                  title: 'Free Estimates',
                  desc: 'No-obligation quotes on any job',
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                    </svg>
                  ),
                },
                {
                  title: 'Financing Available',
                  desc: 'Flexible payment plans through FinanceIt',
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  ),
                },
              ].map(f => (
                <div key={f.title} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <div className="w-9 h-9 bg-brand-blue/10 text-brand-blue rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    {f.icon}
                  </div>
                  <div>
                    <div className="font-bold text-brand-blue text-sm">{f.title}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="tel:+19057322791" className="btn-primary">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                905-732-2791
              </a>
              <a href="#contact" className="btn-outline">
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
