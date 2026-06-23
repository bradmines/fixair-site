// Placeholder for the real Financeit application URL.
// Replace the value below with the live link when it is ready.
const FINANCEIT_LINK = 'FINANCEIT_LINK'

export default function Financing() {
  return (
    <section id="financing" className="bg-brand-blue py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left: heading + copy + Financeit logo */}
          <div className="text-center lg:text-left max-w-xl">
            <div className="inline-block bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Financing Available
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Pay for Your Comfort Over Time
            </h2>
            <p className="mt-4 text-blue-200 text-[15px] leading-relaxed">
              Flexible financing is available through Financeit, so you can pay for your furnace,
              air conditioner, or home comfort needs over time instead of all at once. Just ask Tom
              about financing options and he will help you find a plan that fits your budget.
            </p>

            {/* Financeit logo */}
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-blue-200/80 text-xs font-semibold uppercase tracking-widest">
                Financing through
              </span>
              <div className="bg-white rounded-xl px-4 py-2.5 shadow-md">
                <img
                  src="/financeitlogo.png"
                  alt="Financeit"
                  className="h-7 w-auto block"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right: feature chips + CTAs */}
          <div className="flex flex-col items-center lg:items-end gap-6 flex-shrink-0">
            <div className="grid grid-cols-2 gap-3">
              {[
                'Low monthly payments',
                'Fast approvals',
                'Flexible terms',
                'No hidden fees',
              ].map(text => (
                <div
                  key={text}
                  className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white font-medium"
                >
                  <span className="w-5 h-5 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    ✓
                  </span>
                  {text}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href={FINANCEIT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-8 py-3.5 w-full sm:w-auto text-center"
              >
                Apply for Financing
              </a>
              <a
                href="#contact"
                className="btn-secondary text-sm px-8 py-3.5 w-full sm:w-auto text-center bg-white/10 text-white border-white/40 hover:bg-white/20"
              >
                Ask About Financing
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
