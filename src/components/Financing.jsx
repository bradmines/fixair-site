export default function Financing() {
  return (
    <section id="financing" className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-brand-blue to-brand-blue-mid rounded-3xl overflow-hidden shadow-xl">
          <div className="grid lg:grid-cols-2 gap-0">

            {/* Left: copy */}
            <div className="px-8 py-10 lg:px-12 lg:py-14">
              <div className="inline-block bg-white/15 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                Financing Available
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Don't Let Budget Stop You<br />
                <span className="text-brand-orange">from Staying Comfortable</span>
              </h2>
              <p className="mt-4 text-blue-100 leading-relaxed max-w-md">
                A new furnace or AC system is a big investment. Through our partnership with{' '}
                <strong className="text-white">FinanceIt</strong>, you can get the system your home
                needs today and pay over time with flexible, low-monthly-payment plans.
              </p>

              <ul className="mt-6 space-y-2.5">
                {[
                  'Spread the cost of a new system over time',
                  'Flexible terms to fit your monthly budget',
                  'Available on furnaces, AC, ductless & more',
                  'Ask Tom for details on current options',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-blue-100 text-sm">
                    <svg className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="btn-primary shadow-lg shadow-brand-orange/30">
                  Ask About Financing
                </a>
                <a href="tel:+19057322791" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all">
                  Call Tom: 905-732-2791
                </a>
              </div>
            </div>

            {/* Right: visual */}
            <div className="relative hidden lg:flex items-center justify-center px-12 py-14">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-orange/10 rounded-full -translate-x-1/4 translate-y-1/4" />

              <div className="relative bg-white/10 border border-white/20 backdrop-blur rounded-2xl p-8 w-full max-w-xs text-white text-center">
                <div className="w-14 h-14 bg-brand-orange rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div className="text-2xl font-extrabold">Flexible Plans</div>
                <div className="text-blue-200 text-sm mt-1 mb-6">Payment options through FinanceIt</div>
                <div className="space-y-3">
                  {[
                    'New Furnace',
                    'Central Air Conditioner',
                    'Ductless Mini-Split',
                  ].map(label => (
                    <div key={label} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-2.5 text-sm">
                      <svg className="w-4 h-4 text-brand-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="font-medium">{label}</span>
                    </div>
                  ))}
                </div>
                <p className="text-blue-300 text-[11px] mt-5 leading-relaxed">
                  Contact Tom for details on available terms and rates.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
