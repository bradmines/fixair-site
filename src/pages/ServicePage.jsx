import Header from '../components/Header'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import MobileCallBar from '../components/MobileCallBar'
import FAQ from '../components/FAQ'
import Breadcrumbs from '../components/Breadcrumbs'
import { services } from '../data/services'
import { locations } from '../data/locations'
import { PHONE, PHONE_HREF } from '../constants'

const TRUST = ['Licensed & Insured', '25+ Years Experience', '5.0★ on Google', 'Residential Only']

export default function ServicePage({ service }) {
  const others = services.filter(s => s.slug !== service.slug)

  return (
    <>
      <Header />
      <main>
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative bg-brand-blue overflow-hidden">
          {/* Background image + gradient wash */}
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
                  { name: 'Services', href: '/#services' },
                  { name: service.name },
                ]}
              />
              <div className="mt-6 inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full">
                <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
                Residential HVAC Specialist
              </div>
              <h1 className="mt-5 text-4xl md:text-5xl font-extrabold text-white leading-tight">
                {service.h1}
              </h1>
              <p className="mt-5 text-lg text-blue-100 max-w-xl leading-relaxed">{service.intro}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
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

            {/* Right: framed image + floating badge */}
            <div className="relative lg:pl-6">
              <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/15">
                <img
                  src={service.image}
                  alt={`${service.name} service for Niagara homes from FixAir`}
                  className="w-full h-64 sm:h-80 lg:h-[440px] object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 left-4 sm:left-8 bg-white rounded-2xl shadow-xl px-5 py-3.5 flex items-center gap-3">
                <div className="w-11 h-11 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  T
                </div>
                <div>
                  <div className="text-sm font-bold text-brand-blue">Tom</div>
                  <div className="text-xs text-gray-500">Owner &amp; lead tech · 25+ yrs</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Detail: white sheet curving up over the hero ─────────── */}
        <section className="relative z-10 -mt-12 md:-mt-16 bg-white rounded-t-[2rem] md:rounded-t-[2.5rem] shadow-[0_-20px_60px_-30px_rgba(0,0,0,0.25)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-16 md:pb-20">
            <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
              {/* Body */}
              <div className="lg:col-span-2">
                <div className="inline-block bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                  {service.name}
                </div>
                <h2 className="section-heading text-left">Done right, the first time</h2>
                <div className="mt-5 space-y-4">
                  {service.body.map((p, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed text-lg">
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              {/* "What's included" card */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-2xl border border-gray-100 shadow-sm p-6 lg:sticky lg:top-24">
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-4">
                    What&apos;s included
                  </div>
                  <ul className="space-y-3">
                    {service.highlights.map(h => (
                      <li key={h} className="flex items-start gap-2.5 text-sm font-semibold text-gray-700">
                        <svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 10.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="btn-primary w-full mt-6 py-3">
                    Get a free quote
                  </a>
                  <a href={PHONE_HREF} className="block text-center mt-3 text-sm font-semibold text-brand-blue hover:underline">
                    or call {PHONE}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Serving all Niagara cities (internal links) ──────────── */}
        <section className="py-16 md:py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="section-heading">{service.name} Service Across Niagara</h2>
            <p className="section-sub">
              FixAir serves homeowners throughout the Niagara region. Find your community:
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
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

        <FAQ faqs={service.faqs} heading={`${service.name}: Common Questions`} />

        {/* ── Other services (internal links) ──────────────────────── */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center">Other Residential HVAC Services</h2>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {others.map(o => (
                <a
                  key={o.slug}
                  href={`/services/${o.slug}/`}
                  className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:border-brand-orange/30 hover:shadow-md transition-all group"
                >
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={o.image} alt="" aria-hidden="true" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <span className="font-bold text-brand-blue flex-1">{o.name}</span>
                  <svg className="w-4 h-4 text-brand-orange group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  )
}
