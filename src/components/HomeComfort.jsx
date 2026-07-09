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
    <section id="home-comfort" className="relative bg-brand-blue overflow-hidden min-h-[620px] lg:min-h-[700px]">

      {/* Desktop: video panel pinned to the true right half of the section */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[50%]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/newfamilyvid.mp4" type="video/mp4" />
        </video>
        {/* Vignette top/bottom for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/30 pointer-events-none" />
        {/* Fade left edge seamlessly into brand-blue */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to left, transparent 45%, #1a3a5c 100%)' }}
        />
        {/* Floating badge */}
        <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 px-5 py-4 flex items-center gap-3">
          <div className="w-11 h-11 bg-brand-orange/20 text-brand-orange rounded-xl flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
          </div>
          <div>
            <div className="font-extrabold text-white text-sm leading-tight">Residential HVAC Only</div>
            <div className="text-blue-100/70 text-xs mt-0.5">Homes are all we do</div>
          </div>
        </div>
      </div>

      {/* Mobile: full-width video above text, fades down into section */}
      <div className="lg:hidden relative h-64 sm:h-72 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/newfamilyvid.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent 40%, #1a3a5c 100%)' }}
        />
      </div>

      {/* Text content — right half on desktop, full-width on mobile */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28">
        <div className="lg:grid lg:grid-cols-2">
          <div className="lg:pr-10">
            <div className="inline-block bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Built for Homes
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight text-left">
              A Company Focused Entirely on{' '}
              <span className="text-brand-orange">Your Home Comfort</span>
            </h2>
            <p className="mt-4 text-blue-100/80 leading-relaxed">
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
                    <div className="font-bold text-white text-[15px]">{p.title}</div>
                    <div className="text-blue-100/70 text-sm mt-0.5 leading-relaxed">{p.desc}</div>
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
          <div className="hidden lg:block" />
        </div>
      </div>

    </section>
  )
}
