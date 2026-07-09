import { services } from '../data/services'

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28 bg-brand-blue overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-block bg-white/10 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            What We Do
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">Residential HVAC Is Our Specialty</h2>
          <p className="mt-4 text-blue-100/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            FixAIR is a residential only company. Furnaces, air conditioners, ductless systems and
            more, installed and serviced by a dedicated residential specialist who gets it right the
            first time so your home stays comfortable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <a
              key={s.slug}
              href={`/services/${s.slug}/`}
              className="bg-white/[0.07] rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 hover:border-brand-orange/40 transition-all group"
            >
              <div className="overflow-hidden h-52">
                <img
                  src={s.image}
                  alt={`FixAIR ${s.name} for homes in Niagara and surrounding areas`}
                  className="w-full h-full object-cover block group-hover:scale-105 transition-transform"
                  loading="lazy"
                />
              </div>
              <div className="px-5 py-4 flex items-center justify-between">
                <span className="font-bold text-white">{s.name}</span>
                <span className="inline-flex items-center gap-1 text-brand-orange text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
