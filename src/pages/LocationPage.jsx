import Header from '../components/Header'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import MobileCallBar from '../components/MobileCallBar'
import FAQ from '../components/FAQ'
import Breadcrumbs from '../components/Breadcrumbs'
import { services } from '../data/services'
import { PHONE, PHONE_HREF } from '../constants'

const TRUST = ['Licensed & Insured', '25+ Years Experience', '5.0★ on Google', 'Residential Only']

export default function LocationPage({ location }) {
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

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-28 md:pb-40 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: copy */}
            <div>
              <Breadcrumbs
                items={[
                  { name: 'Home', href: '/' },
                  { name: 'Service Areas', href: '/#area' },
                  { name: location.name },
                ]}
              />
              <div className="mt-6 inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Local HVAC in {location.name}
              </div>
              <h1 className="mt-5 text-4xl md:text-5xl font-extrabold text-white leading-tight">
                {location.h1}
              </h1>
              <p className="mt-5 text-lg text-blue-100 max-w-xl leading-relaxed">{location.intro}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href={PHONE_HREF} className="btn-primary text-base px-8 py-4">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                  </svg>
                  Call Tom — {PHONE}
                </a>
                <a
                  href="#contact"
                  className="btn-secondary text-base px-8 py-4 border-white/40 bg-white/10 text-white hover:bg-white/20"
                >
                  Get a Free Quote
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
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

            {/* Right: quick facts card */}
            <div className="relative lg:pl-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-7 md:p-8 shadow-2xl">
                <div className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-5">
                  Serving {location.name}
                </div>
                <dl className="space-y-4 text-white">
                  {[
                    { label: 'Call Tom directly', value: PHONE, href: PHONE_HREF },
                    { label: 'Hours', value: 'Mon–Fri 8–5 · 24/7 emergency' },
                    { label: 'Service area', value: 'Niagara & surrounding areas' },
                    { label: 'Google rating', value: '5.0 ★ · 27 reviews' },
                  ].map(row => (
                    <div key={row.label} className="flex items-center justify-between gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                      <dt className="text-sm text-blue-200">{row.label}</dt>
                      <dd className="text-sm font-bold text-white text-right">
                        {row.href ? (
                          <a href={row.href} className="text-brand-orange hover:underline">{row.value}</a>
                        ) : (
                          row.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
                <a href="#contact" className="btn-primary w-full mt-6 py-3">
                  Request a free quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Local detail: white sheet curving up over the hero ───── */}
        <section className="relative z-10 -mt-12 md:-mt-16 bg-white rounded-t-[2rem] md:rounded-t-[2.5rem] shadow-[0_-20px_60px_-30px_rgba(0,0,0,0.25)]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-16 md:pb-20">
            <div className="inline-block bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Local HVAC in {location.name}
            </div>
            <div className="space-y-5">
              {location.localDetail.map((p, i) => (
                <p key={i} className="text-gray-600 leading-relaxed text-lg">
                  {p}
                </p>
              ))}
            </div>

            {location.neighbourhoods && location.neighbourhoods.length > 0 && (
              <div className="mt-8">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                  Areas we serve in {location.name}
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {location.neighbourhoods.map(n => (
                    <span
                      key={n}
                      className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-100 rounded-lg px-3 py-1.5 text-sm font-semibold text-brand-blue"
                    >
                      <svg className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── Services offered in this city (internal links) ───────── */}
        <section className="py-16 md:py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="section-heading">Our HVAC Services in {location.name}</h2>
              <p className="section-sub">
                Residential furnace, cooling and comfort services for {location.name} homeowners.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(s => (
                <a
                  key={s.slug}
                  href={`/services/${s.slug}/`}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:border-brand-orange/30 transition-all group"
                >
                  <div className="overflow-hidden h-44">
                    <img
                      src={s.image}
                      alt={`${s.name} in ${location.name} — FixAir`}
                      className="w-full h-full object-cover block group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-5 py-4 flex items-center justify-between">
                    <span className="font-bold text-brand-blue">{s.name}</span>
                    <svg className="w-4 h-4 text-brand-orange group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />

        <FAQ faqs={location.faqs} heading={`HVAC in ${location.name} — Common Questions`} />

        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  )
}
