const services = [
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="8" y="12" width="32" height="28" rx="3" />
        <path d="M16 12V8a2 2 0 012-2h12a2 2 0 012 2v4" />
        <path d="M24 20v12M18 26h12" strokeLinecap="round"/>
        <circle cx="24" cy="26" r="4"/>
      </svg>
    ),
    title: 'Furnaces',
    description: 'Installation, repair, and maintenance of gas and electric furnaces. Keep warm all winter with a system tuned for Niagara\'s climate.',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=75',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="6" y="16" width="36" height="22" rx="4"/>
        <path d="M14 16V11a2 2 0 012-2h16a2 2 0 012 2v5" />
        <path d="M16 27h16M16 32h10" strokeLinecap="round"/>
        <circle cx="34" cy="29.5" r="2.5" fill="currentColor" fillOpacity="0.3"/>
      </svg>
    ),
    title: 'Air Conditioners',
    description: 'Central AC installation and repair. Stay cool through Niagara summers with an efficient, whisper-quiet system sized for your home.',
    image: 'https://images.unsplash.com/photo-1566917064245-1c6bff30dbf1?w=600&q=75',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="6" y="8" width="16" height="32" rx="3"/>
        <rect x="26" y="18" width="16" height="22" rx="3"/>
        <path d="M22 16l4-4M22 24l4-4" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Ductless Systems',
    description: 'Mini-split installation for additions, basements, and homes without existing ductwork. Flexible, efficient zoned comfort.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=75',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="12" y="6" width="24" height="36" rx="4"/>
        <path d="M20 14h8M20 20h8M20 26h8" strokeLinecap="round"/>
        <path d="M24 36v4M20 40h8" strokeLinecap="round"/>
        <circle cx="24" cy="18" r="3" fill="currentColor" fillOpacity="0.2"/>
      </svg>
    ),
    title: 'Hot Water Heaters',
    description: 'Tank and tankless water heater installation and replacement. Hot water on demand, with energy-saving options available.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=75',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="8" y="10" width="32" height="28" rx="4"/>
        <path d="M16 24h16M24 16v16" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="6" strokeDasharray="3 2"/>
      </svg>
    ),
    title: 'Boilers',
    description: 'Hydronic heating system service, repair and replacement. Reliable, even heat throughout your home — including radiant floors.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 24h6l4-12 6 24 4-16 4 10 4-6h6" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="6" y="8" width="36" height="32" rx="3" strokeDasharray="4 2"/>
      </svg>
    ),
    title: 'Air Ducts',
    description: 'Duct cleaning, sealing, and new ductwork installation. Improve air quality and system efficiency for your whole home.',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&q=75',
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
            <div
              key={s.title}
              className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-brand-blue/5">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 to-transparent" />
                <div className="absolute bottom-3 left-4 text-white">
                  <div className="w-10 h-10 bg-brand-orange rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white scale-75">{s.icon}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-brand-blue mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1 text-brand-orange font-semibold text-sm hover:gap-2 transition-all"
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
