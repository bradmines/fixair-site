const services = [
  {
    title: 'Furnaces',
    image: '/service-furnaces.jpg',
    href: '#contact',
  },
  {
    title: 'Air Conditioners',
    image: '/service-ac.jpg',
    href: '#contact',
  },
  {
    title: 'Ductless Systems',
    image: '/service-ductless.jpg',
    href: '#contact',
  },
  {
    title: 'Hot Water Heaters',
    image: '/service-water-heaters.jpg',
    href: '#contact',
  },
  {
    title: 'Boilers',
    image: '/service-boilers.jpg',
    href: '#contact',
  },
  {
    title: 'Air Ducts',
    image: '/service-air-ducts.jpg',
    href: '#contact',
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
          <h2 className="section-heading">Complete HVAC Services for Niagara Homes</h2>
          <p className="section-sub">
            From furnaces to ductless mini-splits, Tom handles it all — installed right the first time.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <a
              key={s.title}
              href={s.href}
              className="group block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={s.image}
                  alt={`FixAIR ${s.title} — Niagara Region HVAC`}
                  className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="px-5 py-4 flex items-center justify-between">
                <span className="font-bold text-brand-blue">{s.title}</span>
                <span className="inline-flex items-center gap-1 text-brand-orange text-sm font-semibold group-hover:gap-2 transition-all">
                  Get a quote
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
