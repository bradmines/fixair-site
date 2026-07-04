import Header from '../components/Header'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import MobileCallBar from '../components/MobileCallBar'
import Breadcrumbs from '../components/Breadcrumbs'
import { faqGroups } from '../data/faqs'
import { services } from '../data/services'
import { locations } from '../data/locations'
import { PHONE, PHONE_HREF } from '../constants'

const TRUST = ['Licensed & Insured', '25+ Years Experience', '5.0★ on Google', 'Residential Only']

export default function FaqPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative bg-brand-blue overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/hero-bg.jpg"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover opacity-20"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue/95 to-brand-blue-mid/80" />
          </div>
          <div className="absolute top-16 right-0 w-96 h-96 bg-brand-orange/10 rounded-full translate-x-1/3 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 left-0 w-80 h-80 bg-brand-blue-light/20 rounded-full -translate-x-1/4 blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-24 md:pb-32 text-center">
            <div className="flex justify-center">
              <Breadcrumbs
                items={[
                  { name: 'Home', href: '/' },
                  { name: 'FAQ' },
                ]}
              />
            </div>
            <div className="mt-6 inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full">
              Answers for Niagara homeowners
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Residential HVAC Questions, Answered
            </h1>
            <p className="mt-5 text-lg text-blue-100 leading-relaxed">
              Straight answers on furnaces, air conditioners, ductless systems, boilers, water
              heaters and duct cleaning across Niagara. Still not sure? Call Tom and ask.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a href={PHONE_HREF} className="btn-primary text-base px-8 py-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                Call Tom: {PHONE}
              </a>
              <a
                href="#contact"
                className="btn-secondary text-base px-8 py-4 border-white/40 bg-white/10 text-white hover:bg-white/20"
              >
                Get a Free Quote
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2">
              {TRUST.map(t => (
                <span key={t} className="inline-flex items-center gap-2 text-blue-100 text-sm font-medium">
                  <svg className="w-4 h-4 text-brand-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 10.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ groups: white sheet curving up over the hero ─────── */}
        <section
          id="faq"
          className="relative z-10 -mt-12 md:-mt-16 bg-white rounded-t-[2rem] md:rounded-t-[2.5rem] shadow-[0_-20px_60px_-30px_rgba(0,0,0,0.25)]"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-16 md:pb-20">
            {faqGroups.map(group => (
              <div key={group.title} className="mb-12 last:mb-0">
                <h2 className="text-2xl md:text-3xl font-extrabold text-brand-blue mb-5">
                  {group.title}
                </h2>
                <div className="space-y-3">
                  {group.faqs.map((f, i) => (
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
                      <p className="mt-3 text-gray-600 leading-relaxed text-sm sm:text-base">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Explore services (internal links) ─────────────────────── */}
        <section className="py-16 md:py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center">Explore Our Residential HVAC Services</h2>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map(s => (
                <a
                  key={s.slug}
                  href={`/services/${s.slug}/`}
                  className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:border-brand-orange/30 hover:shadow-md transition-all group"
                >
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={s.image} alt="" aria-hidden="true" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <span className="font-bold text-brand-blue flex-1">{s.name}</span>
                  <svg className="w-4 h-4 text-brand-orange group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              ))}
            </div>

            <p className="section-sub text-center mt-12">Serving homeowners across Niagara:</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {locations.map(l => (
                <a
                  key={l.slug}
                  href={`/service-areas/${l.slug}/`}
                  className="inline-flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-4 py-2.5 text-sm font-bold text-brand-blue shadow-sm hover:border-brand-blue/40 hover:bg-brand-blue/5 transition-colors"
                >
                  <svg className="w-4 h-4 text-brand-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {l.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />

        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  )
}
