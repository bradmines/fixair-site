export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo side */}
          <div className="relative">
            {/* Main photo placeholder */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
                alt="Tom — FixAIR HVAC technician"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur rounded-xl px-5 py-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-brand-orange rounded-full flex items-center justify-center text-white font-extrabold text-lg flex-shrink-0">
                      T
                    </div>
                    <div>
                      <div className="font-bold text-brand-blue text-base">Tom</div>
                      <div className="text-gray-500 text-xs font-medium">Owner · Lead Technician · 20+ Years</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 lg:top-8 lg:-right-8 bg-brand-orange text-white rounded-2xl shadow-xl px-5 py-4 text-center hidden sm:block">
              <div className="text-3xl font-extrabold leading-none">20+</div>
              <div className="text-xs font-semibold mt-1 uppercase tracking-wide">Years in<br/>Niagara</div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <div className="inline-block bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Meet Tom
            </div>
            <h2 className="section-heading">
              First-Rate Workmanship,<br />
              <span className="text-brand-orange">Every Single Job</span>
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Hi, I'm Tom — the owner, technician, and the person who answers the phone when you call FixAIR.
                I've been working on heating and cooling systems across the Niagara Region for over two decades,
                and I built this company on a simple belief: every customer deserves the same care I'd give my own home.
              </p>
              <p>
                No overselling. No upsells you don't need. Just honest assessments, quality parts, and workmanship
                I'm proud to stand behind. Whether it's a quick repair or a full system install, I show up on time,
                do the job right, and leave your home cleaner than I found it.
              </p>
              <p>
                I'm fully licensed and insured, and I stay current on the latest HVAC technology — from high-efficiency
                furnaces to modern ductless systems — so you get the best solution for your home and budget.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: '🏆', title: 'Licensed Technician', desc: 'Fully licensed and insured in Ontario' },
                { icon: '🔧', title: 'All Major Brands', desc: 'Lennox, Carrier, Trane, Daikin & more' },
                { icon: '📞', title: 'Personal Service', desc: 'You talk to Tom, not a call centre' },
                { icon: '✅', title: 'Proud of Every Job', desc: 'Tom stands behind his work on every install and repair' },
              ].map(f => (
                <div key={f.title} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                  <span className="text-2xl">{f.icon}</span>
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
                Request a Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
