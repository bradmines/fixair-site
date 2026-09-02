import { blogPosts } from '../data/blog'

// Contextual blog links for service and location pages. Without these the
// articles are only reachable from /blog/, which leaves them with almost no
// internal links pointing at them.
// Deterministic offset from a string, so the "filler" articles differ per page
// instead of every page padding with the same first few posts. Same input
// always gives the same output, which keeps the prerendered HTML stable.
function offsetFor(key, len) {
  let h = 0
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0
  return len ? h % len : 0
}

// Rotate a list so it starts at a per-key offset. Every post still appears on
// some page; which page just stops being biased toward array order.
function rotate(list, key) {
  if (list.length < 2) return list
  const o = offsetFor(key, list.length)
  return [...list.slice(o), ...list.slice(0, o)]
}

export function articlesForService(serviceSlug, count = 3) {
  const onTopic = blogPosts.filter(p => p.serviceSlug === serviceSlug)
  const rest = rotate(blogPosts.filter(p => p.serviceSlug !== serviceSlug), serviceSlug)
  return [...onTopic, ...rest].slice(0, count)
}

export function articlesForLocation(locationName, count = 3) {
  const needle = locationName.toLowerCase()
  const local = blogPosts.filter(
    p => p.title.toLowerCase().includes(needle) || p.slug.includes(needle.replace(/[^a-z]+/g, '-'))
  )
  const rest = rotate(blogPosts.filter(p => !local.includes(p)), needle)
  return [...local, ...rest].slice(0, count)
}

export default function RelatedArticles({ posts, heading, sub }) {
  if (!posts || posts.length === 0) return null

  return (
    <section className="py-16 md:py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="section-heading">{heading}</h2>
          {sub && <p className="section-sub">{sub}</p>}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(p => (
            <a
              key={p.slug}
              href={`/blog/${p.slug}/`}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:border-brand-orange/30 transition-all group flex flex-col"
            >
              <div className="overflow-hidden h-44">
                <img
                  src={p.image}
                  alt={p.title}
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover block group-hover:scale-105 transition-transform"
                  loading="lazy"
                />
              </div>
              <div className="px-5 py-5 flex flex-col flex-1">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                  {p.serviceName}
                </span>
                <h3 className="mt-2 font-bold text-brand-blue leading-snug group-hover:text-brand-orange transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-3 flex-1">
                  {p.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-orange">
                  Read the guide
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
