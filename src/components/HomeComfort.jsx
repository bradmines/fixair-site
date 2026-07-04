const points = [
  {
    title: 'Residential Only, On Purpose',
    desc: 'FixAIR works on homes and nothing else. That focus means deeper expertise and better results for your family.',
  },
  {
    title: 'Comfort You Can Feel',
    desc: 'Even heating, reliable cooling, and cleaner air so every room in your home stays comfortable all year.',
  },
  {
    title: 'Treated Like Family',
    desc: 'Tom treats your home the way he treats his own, with honest advice and tidy, careful workmanship.',
  },
]

export default function HomeComfort() {
  return (
    <section id="home-comfort" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/happyfam2.jpg"
                alt="A family enjoying the comfort of their home"
                className="w-full h-72 md:h-[28rem] object-cover block"
                loading="lazy"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 left-5 right-5 sm:left-8 sm:right-auto bg-white rounded-2xl shadow-xl border border-gray-100 px-5 py-4 flex items-center gap-3">
              <div className="w-11 h-11 bg-brand-orange/10 text-brand-orange rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                </svg>
              </div>
              <div>
                <div className="font-extrabold text-brand-blue text-sm leading-tight">Residential HVAC Only</div>
                <div className="text-gray-500 text-xs mt-0.5">Homes are all we do</div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="mt-8 lg:mt-0">
            <div className="inline-block bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Built for Homes
            </div>
            <h2 className="section-heading text-left">
              A Company Focused Entirely on{' '}
              <span className="text-brand-orange">Your Home Comfort</span>
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              FixAIR is a residential only HVAC company. By specializing in homes rather than spreading
              across every kind of building, Tom can give your family his full attention and serve you
              better, from a quick repair to a full system upgrade across Niagara and surrounding areas.
            </p>

            <div className="mt-8 space-y-4">
              {points.map(p => (
                <div key={p.title} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 bg-brand-orange rounded-full flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-brand-blue text-[15px]">{p.title}</div>
                    <div className="text-gray-500 text-sm mt-0.5 leading-relaxed">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a href="#contact" className="btn-primary">
                Get a Free Quote
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
