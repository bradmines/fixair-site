import { useState, useEffect, useRef, useMemo } from 'react'
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

const slugify = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
const totalQuestions = faqGroups.reduce((n, g) => n + g.faqs.length, 0)

// Sticky category rail with scroll-spy — highlights the group you're reading.
function CategoryNav({ groups, activeId }) {
  return (
    <nav aria-label="FAQ categories" className="space-y-1">
      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 px-3">
        Browse by topic
      </p>
      {groups.map(g => {
        const id = slugify(g.title)
        const active = id === activeId
        return (
          <a
            key={id}
            href={`#${id}`}
            className={`flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${
              active
                ? 'bg-brand-orange/10 text-brand-orange'
                : 'text-gray-600 hover:bg-gray-50 hover:text-brand-blue'
            }`}
          >
            <span className="flex items-center gap-2.5">
              <span
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  active ? 'bg-brand-orange' : 'bg-gray-300'
                }`}
              />
              {g.title}
            </span>
            <span
              className={`text-xs font-bold tabular-nums ${
                active ? 'text-brand-orange' : 'text-gray-400'
              }`}
            >
              {g.faqs.length}
            </span>
          </a>
        )
      })}
    </nav>
  )
}

export default function FaqPage() {
  const [query, setQuery] = useState('')
  const [activeId, setActiveId] = useState(faqGroups[0] ? slugify(faqGroups[0].title) : '')

  const q = query.trim().toLowerCase()
  const groups = useMemo(() => {
    if (!q) return faqGroups
    return faqGroups
      .map(g => ({ ...g, faqs: g.faqs.filter(f => (f.q + ' ' + f.a).toLowerCase().includes(q)) }))
      .filter(g => g.faqs.length)
  }, [q])

  const matchCount = groups.reduce((n, g) => n + g.faqs.length, 0)

  // Scroll-spy: highlight the category currently in view (only when browsing).
  const groupKey = groups.map(g => g.title).join('|')
  const sectionRefs = useRef({})
  useEffect(() => {
    if (q) return
    const els = Object.values(sectionRefs.current).filter(Boolean)
    if (!els.length) return
    const obs = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting)
        if (visible.length) {
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-120px 0px -55% 0px', threshold: 0 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [q, groupKey])

  return (
    <>
      <Header />
      <main>
        {/* ── Hero: slim, focused on finding an answer ─────────────── */}
        <section className="relative bg-brand-blue overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue to-brand-blue-mid/80" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-brand-orange/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-14 md:pb-16">
            <Breadcrumbs
              items={[
                { name: 'Home', href: '/' },
                { name: 'FAQ' },
              ]}
            />
            <h1 className="mt-4 text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Residential HVAC Questions, Answered
            </h1>
            <p className="mt-3 text-blue-100/90 leading-relaxed max-w-2xl">
              Furnaces, air conditioners, ductless systems, boilers and duct cleaning across Niagara.
            </p>

            {/* Live search */}
            <div className="mt-6 relative max-w-xl">
              <svg
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder={`Search ${totalQuestions} questions…`}
                aria-label="Search FAQs"
                className="w-full rounded-xl bg-white pl-11 pr-11 py-3.5 text-brand-blue placeholder-gray-400 shadow-lg outline-none ring-2 ring-transparent focus:ring-brand-orange transition"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-blue rounded-full p-1"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </section>

        {/* ── FAQ groups: sticky topic rail + accordion cards ─────── */}
        <section id="faq" className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
            <div className="lg:grid lg:grid-cols-[15rem_1fr] lg:gap-12">

              {/* Sticky category rail (desktop) */}
              <aside className="hidden lg:block">
                <div className="sticky top-28">
                  <CategoryNav groups={groups} activeId={activeId} />
                  <div className="mt-6 rounded-2xl bg-brand-blue p-5 text-white">
                    <p className="font-bold leading-snug">Still stuck?</p>
                    <p className="mt-1 text-sm text-blue-100/90">Call Tom and just ask — no pressure.</p>
                    <a href={PHONE_HREF} className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-4 py-2.5 text-sm font-bold hover:bg-brand-orange-dark transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                      </svg>
                      {PHONE}
                    </a>
                  </div>
                </div>
              </aside>

              {/* Questions */}
              <div className="min-w-0">
                {q && (
                  <p className="mb-6 text-sm text-gray-500">
                    {matchCount === 0
                      ? <>No matches for <span className="font-semibold text-brand-blue">“{query}”</span>.</>
                      : <><span className="font-semibold text-brand-blue">{matchCount}</span> {matchCount === 1 ? 'result' : 'results'} for <span className="font-semibold text-brand-blue">“{query}”</span></>}
                  </p>
                )}

                {groups.map(group => {
                  const id = slugify(group.title)
                  return (
                    <div
                      key={group.title}
                      id={id}
                      ref={el => { sectionRefs.current[id] = el }}
                      className="mb-12 last:mb-0 scroll-mt-28"
                    >
                      <h2 className="flex items-center gap-3 text-xl md:text-2xl font-extrabold text-brand-blue mb-5">
                        {group.title}
                        <span className="text-xs font-bold text-brand-orange bg-brand-orange/10 rounded-full px-2.5 py-1 tabular-nums">
                          {group.faqs.length}
                        </span>
                      </h2>
                      <div className="space-y-3">
                        {group.faqs.map((f, i) => (
                          <details
                            key={i}
                            open={!!q}
                            className="group rounded-2xl border border-gray-100 bg-white shadow-sm ring-1 ring-gray-100 transition-shadow hover:shadow-md open:ring-brand-orange/30 [&_summary::-webkit-details-marker]:hidden"
                          >
                            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-4 font-bold text-brand-blue">
                              {f.q}
                              <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange transition-colors group-open:bg-brand-orange group-open:text-white">
                                <svg
                                  className="w-4 h-4 transition-transform duration-200 group-open:rotate-45"
                                  fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                              </span>
                            </summary>
                            <p className="px-5 pb-5 -mt-1 text-gray-600 leading-relaxed text-sm sm:text-base">{f.a}</p>
                          </details>
                        ))}
                      </div>
                    </div>
                  )
                })}

                {matchCount === 0 && (
                  <div className="rounded-2xl border border-dashed border-gray-200 py-12 text-center">
                    <p className="text-gray-500">Try a different word, or just ask Tom directly.</p>
                    <a href={PHONE_HREF} className="btn-primary mt-4">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                      </svg>
                      Call Tom: {PHONE}
                    </a>
                  </div>
                )}
              </div>
            </div>
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
