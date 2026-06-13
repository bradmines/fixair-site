const services = [
  {
    title: 'Furnaces',
    image: '/furnace.jpg',
  },
  {
    title: 'Air Conditioners',
    image: '/bba10316-206d-4aa1-8472-e8d1e2aecfc0.jpg',
  },
  {
    title: 'Ductless Systems',
    image: '/grok-image-e842f194-4cb0-4e62-8fd9-3b808d7a71b5.jpg',
  },
  {
    title: 'Hot Water Heaters',
    image: '/service-water-heaters.jpg',
  },
  {
    title: 'Boilers',
    image: '/boilerwall.jpg',
  },
  {
    title: 'Air Ducts',
    image: '/resductwork.jpg',
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
          <h2 className="section-heading">Residential HVAC Services — That's Our Specialty</h2>
          <p className="section-sub">
            From furnaces to ductless mini-splits, Tom brings the focused expertise of a dedicated
            residential specialist to every job — installed right the first time.
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
                  alt={`FixAIR ${s.title} — Niagara Region HVAC`}
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
