import Header from '../components/Header'
import Footer from '../components/Footer'
import MobileCallBar from '../components/MobileCallBar'
import Breadcrumbs from '../components/Breadcrumbs'
import VentStrip from '../components/VentStrip'
import Contact from '../components/Contact'
import { blogPosts } from '../data/blog'
import { PHONE, PHONE_HREF } from '../constants'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function renderBody(body) {
  return body.map((block, i) => {
    if (block.type === 'h2') {
      return (
        <h2 key={i} className="text-xl md:text-2xl font-extrabold text-brand-blue mt-10 mb-4 leading-snug">
          {block.text}
        </h2>
      )
    }
    if (block.type === 'list') {
      return (
        <ul key={i} className="mt-4 space-y-3 mb-4">
          {block.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-gray-600 leading-relaxed">
              <svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 10.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    }
    return (
      <p key={i} className="text-gray-600 leading-relaxed text-lg mt-4">
        {block.text}
      </p>
    )
  })
}

export default function BlogPostPage({ post }) {
  const others = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-brand-blue overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue to-brand-blue-mid/80" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-brand-orange/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-12">
            <Breadcrumbs
              items={[
                { name: 'Home', href: '/' },
                { name: 'Blog', href: '/blog/' },
                { name: post.serviceName },
              ]}
            />
            <div className="mt-4 flex items-center gap-3 flex-wrap">
              <span className="inline-flex items-center gap-1.5 bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                {post.serviceName}
              </span>
              <span className="text-blue-100/50 text-sm">{post.readTime}</span>
              <span className="text-blue-100/50 text-sm">{formatDate(post.date)}</span>
            </div>
            <h1 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-blue-100/80 text-lg leading-relaxed max-w-2xl">{post.excerpt}</p>
          </div>
        </section>

        {/* Article body */}
        <section className="bg-white pt-10 pb-14 md:pt-14 md:pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header image — contained, no bleed */}
            <div className="overflow-hidden rounded-2xl shadow-sm mb-10 md:mb-14">
              <img
                src={post.image}
                alt={post.title}
                width={1280}
                height={720}
                className="w-full"
                loading="eager"
              />
            </div>

            <div className="grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-16 items-start">

              {/* Main content */}
              <article className="prose-custom">
                {renderBody(post.body)}

                {/* CTA at end of article */}
                <div className="mt-12 rounded-2xl bg-brand-blue p-8 text-white">
                  <h3 className="text-xl font-extrabold leading-snug">
                    Ready to Talk to Tom?
                  </h3>
                  <p className="mt-2 text-blue-100/80 text-sm leading-relaxed">
                    Tom is a residential HVAC specialist serving Niagara with 25+ years of experience. Honest advice, no pressure.
                  </p>
                  <div className="mt-5 flex flex-col sm:flex-row gap-3">
                    <a
                      href={PHONE_HREF}
                      className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white font-bold px-6 py-3 rounded-lg hover:bg-brand-orange-dark transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                      </svg>
                      Call Tom: {PHONE}
                    </a>
                    <a
                      href={`/services/${post.serviceSlug}/`}
                      className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-bold px-6 py-3 rounded-lg hover:bg-white/15 transition-colors"
                    >
                      {post.serviceName} service page
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="lg:sticky lg:top-28 space-y-6">
                {/* Author card */}
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img src="/upscaletom.jpg" alt="Tom Guitard" className="w-12 h-12 rounded-full object-cover object-top" />
                    <div>
                      <div className="font-bold text-brand-blue text-sm">Tom Guitard</div>
                      <div className="text-xs text-gray-500">Owner &amp; Lead Tech · 25+ yrs</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Tom is the owner and technician behind FixAir — a residential-only HVAC company serving Niagara homeowners.
                  </p>
                  <a href={PHONE_HREF} className="mt-4 flex items-center justify-center gap-2 bg-brand-orange text-white font-bold text-sm px-4 py-2.5 rounded-lg hover:bg-brand-orange-dark transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                    </svg>
                    {PHONE}
                  </a>
                </div>

                {/* More articles */}
                {others.length > 0 && (
                  <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                    <h3 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-4">More Articles</h3>
                    <div className="space-y-4">
                      {others.map(p => (
                        <a
                          key={p.slug}
                          href={`/blog/${p.slug}/`}
                          className="group flex gap-3 items-start"
                        >
                          <img
                            src={p.image}
                            alt={p.title}
                            width={1280}
                            height={720}
                            className="w-16 h-12 rounded-lg object-cover flex-shrink-0"
                            loading="lazy"
                          />
                          <div className="min-w-0">
                            <p className="text-sm font-bold text-brand-blue leading-snug group-hover:text-brand-orange transition-colors line-clamp-2">
                              {p.title}
                            </p>
                            <p className="text-xs text-gray-400 mt-0.5">{p.readTime}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                    <a
                      href="/blog/"
                      className="mt-5 flex items-center gap-1.5 text-sm font-bold text-brand-orange hover:underline"
                    >
                      All articles
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </section>

        {/* <VentStrip slim /> */}
        <Contact />
      </main>
      <VentStrip slim />
      <Footer />
      <MobileCallBar />
    </>
  )
}
