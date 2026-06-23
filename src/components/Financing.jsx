const benefits = [
  'Low monthly payments',
  'Fast approvals',
  'Flexible terms',
  'No hidden fees',
]

export default function Financing() {
  return (
    <section id="financing" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header, matches the rest of the site */}
        <div className="text-center mb-14">
          <div className="inline-block bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Financing Available
          </div>
          <h2 className="section-heading">Pay for Your Comfort Over Time</h2>
          <p className="section-sub">
            Flexible financing is available through Financeit, so you can pay for your furnace, air
            conditioner, or home comfort needs over time instead of all at once. Just ask Tom and he
            will help you find a plan that fits your budget.
          </p>
        </div>

        {/* Feature card */}
        <div className="max-w-5xl mx-auto rounded-2xl border border-gray-100 shadow-sm overflow-hidden bg-brand-blue">
          <div className="grid lg:grid-cols-2">

            {/* Left: Financeit logo + benefits */}
            <div className="p-8 md:p-10">
              <div className="inline-flex bg-white rounded-xl px-5 py-3 shadow-md">
                <img
                  src="/financeitlogo.png"
                  alt="Financeit"
                  className="h-8 w-auto block"
                  loading="lazy"
                />
              </div>
              <p className="mt-6 text-blue-200 text-[15px] leading-relaxed">
                FixAIR works with Financeit to make comfortable, efficient heating and cooling
                easier on your budget.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {benefits.map(text => (
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
            </div>

            {/* Right: contact CTA */}
            <div className="bg-white/5 border-t lg:border-t-0 lg:border-l border-white/10 p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-extrabold text-white leading-tight">
                Have questions about financing?
              </h3>
              <p className="mt-3 text-blue-200 text-sm leading-relaxed">
                Tom will walk you through the options and find what works best for your home. No
                pressure, no obligation, just a quick conversation.
              </p>
              <a
                href="#contact"
                className="btn-primary mt-6 w-full sm:w-auto sm:self-start text-sm px-8 py-3.5"
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
