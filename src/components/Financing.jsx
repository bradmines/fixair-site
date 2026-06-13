export default function Financing() {
  return (
    <section className="bg-brand-blue py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left: heading + copy */}
          <div className="text-center lg:text-left max-w-xl">
            <div className="inline-block bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Financing Available
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Don't Let Cost Hold You Back
            </h2>
            <p className="mt-4 text-blue-200 text-[15px] leading-relaxed">
              Comfortable, efficient heating and cooling shouldn't have to wait.
              FixAIR offers flexible financing options so you can get the system
              your home needs — and pay on a schedule that works for you.
            </p>
          </div>

          {/* Right: feature chips + CTA */}
          <div className="flex flex-col items-center lg:items-end gap-6 flex-shrink-0">
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: '✓', text: 'Low monthly payments' },
                { icon: '✓', text: 'Fast approvals' },
                { icon: '✓', text: 'Flexible terms' },
                { icon: '✓', text: 'No hidden fees' },
              ].map(item => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white font-medium"
                >
                  <span className="w-5 h-5 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {item.icon}
                  </span>
                  {item.text}
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="btn-primary text-sm px-8 py-3.5 w-full sm:w-auto text-center"
            >
              Ask Tom About Financing
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
