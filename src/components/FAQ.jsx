// Visible FAQ section. Mirrors the FAQPage JSON-LD emitted for the same page.
// Uses native <details> so it works without any client JS / hydration.
export default function FAQ({ faqs, heading = 'Frequently Asked Questions' }) {
  if (!faqs || !faqs.length) return null
  return (
    <section id="faq" className="py-20 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            FAQ
          </div>
          <h2 className="section-heading">{heading}</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-bold text-brand-blue">
                {f.q}
                <svg
                  className="w-5 h-5 flex-shrink-0 text-brand-orange transition-transform group-open:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </summary>
              <p className="mt-3 text-gray-600 leading-relaxed text-sm">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
