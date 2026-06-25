const services = [
  {
    title: 'Furnaces',
    image: '/logoforcedairfurnace.jpg',
  },
  {
    title: 'Air Conditioners',
    image: '/logoAC.jpg',
  },
  {
    title: 'Ductless Systems',
    image: '/logoductlesssystems.jpg',
  },
  {
    title: 'Hot Water Heaters',
    image: '/logopowerventhotwaterheater.jpg',
  },
  {
    title: 'Boilers',
    image: '/logoboilers.jpg',
  },
  {
    title: 'Air Ducts',
    image: '/logoresductwork.jpg',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-block bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            What We Do
          </div>
          <h2 className="section-heading">Residential HVAC Is Our Specialty</h2>
          <p className="section-sub">
            FixAIR is a residential only company. Furnaces, air conditioners, ductless systems and
            more, installed and serviced by a dedicated residential specialist who gets it right the
            first time so your home stays comfortable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <div
              key={s.title}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="overflow-hidden h-52">
                <img
                  src={s.image}
                  alt={`FixAIR ${s.title} for homes in Niagara and surrounding areas`}
                  className="w-full h-full object-cover block"
                  loading="lazy"
                />
              </div>
              <div className="px-5 py-4 flex items-center justify-between">
                <span className="font-bold text-brand-blue">{s.title}</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-brand-orange text-sm font-semibold hover:gap-2 transition-all"
                >
                  Get a quote
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
