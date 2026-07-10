import Header from '../components/Header'
import Footer from '../components/Footer'
import MobileCallBar from '../components/MobileCallBar'
import Breadcrumbs from '../components/Breadcrumbs'
import VentStrip from '../components/VentStrip'
import Contact from '../components/Contact'
import { blogPosts } from '../data/blog'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-brand-blue overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue to-brand-blue-mid/80" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-6 md:pb-8">
            <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Blog' }]} />
            <div className="mt-3 flex items-center gap-3">
              <h1 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                The FixAir Blog
              </h1>
              <span className="hidden sm:inline-flex items-center gap-1.5 bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                HVAC Tips &amp; Advice
              </span>
            </div>
            <p className="mt-2 text-blue-100/70 text-sm leading-relaxed max-w-2xl">
              Plain-language advice on heating, cooling, and home comfort from Tom — 25+ years in Niagara.
            </p>
          </div>
        </section>

        {/* Articles */}
        <section className="bg-gray-50 py-8 md:py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Featured post */}
            <a
              href={`/blog/${featured.slug}/`}
              className="group block mb-14 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-brand-orange/20 transition-all"
            >
              <div className="grid md:grid-cols-2">
                <div className="overflow-hidden bg-gray-50 flex items-center justify-center">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    width={1280}
                    height={720}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                      Featured
                    </span>
                    <span className="text-xs text-gray-400 font-medium">{featured.readTime}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-brand-blue leading-snug group-hover:text-brand-orange transition-colors">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-gray-500 leading-relaxed">{featured.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm text-gray-400">{formatDate(featured.date)}</span>
                    <span className="inline-flex items-center gap-1.5 text-brand-orange font-bold text-sm group-hover:gap-2.5 transition-all">
                      Read article
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </a>

            {/* Grid of remaining posts */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map(post => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md hover:border-brand-orange/20 transition-all"
                >
                  <div className="overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      width={1280}
                      height={720}
                      className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold text-brand-orange uppercase tracking-widest">{post.serviceName}</span>
                      <span className="text-gray-200">·</span>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>
                    <h2 className="font-extrabold text-brand-blue leading-snug group-hover:text-brand-orange transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2">{post.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-gray-400">{formatDate(post.date)}</span>
                      <svg className="w-4 h-4 text-brand-orange group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
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
