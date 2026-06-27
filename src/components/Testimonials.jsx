import { useState, useEffect, useRef } from 'react'

const testimonials = [
  {
    name: 'Angie Masterson',
    stars: 5,
    age: '7 months ago',
    quote: 'Tom was amazing. He was prompt in getting back to our inquiry. Gave us a very fair quote and got started on our furnace immediately. He was kind, courteous and so pleasant to have in our home over the two day project. He walked us through every step of the project and made sure we were happy with everything. He went above and beyond to make sure our units (both furnace and AC) were installed in the most efficient way possible. I have no hesitation in recommending Fixair to anyone who asks. I know Tom will do a great job!',
  },
  {
    name: 'Lydia Hiller',
    stars: 5,
    age: '2 years ago',
    badge: 'Local Guide',
    quote: 'Fantastic experience. Tom is professional, knowledgeable, punctual and courteous, clean and meticulous. He researched the best and most affordable ductless heat pump system to accommodate my heating and cooling needs. He found an entire system that could operate on one outside unit so the outside is tidy and pristine. During the early cold days of January, he worked tenaciously for several days and even had to complete a lot of the outdoor work during a severe windstorm complete with driving rain and a power outage. It was a very large job but he completed the work quickly and efficiently. Thanks to Tom I now have uniform heat and AC throughout my home. I proudly recommend FixAir to anyone who wants exceptional customer service.',
  },
  {
    name: 'Sandy',
    stars: 5,
    age: '10 months ago',
    quote: 'I am extremely satisfied with the service and new furnace installation by Tom Guitard; FixAir Heating & Air Conditioning. Tom assessed my furnace needs and efficiently completed the installation. Tom was friendly & very knowledgeable in recommending the right furnace replacement suitable for my house. His meticulous workmanship is top notch. Tom covered my flooring & stairs and there was no mess or cleanup required afterwards. I was also very pleased with the pricing & warranty package. My furnace runs quietly and efficiently. Thank you Tom for a great job! I highly recommend the services offered by Tom Guitard, FixAir.',
  },
  {
    name: 'Jamie L.',
    stars: 5,
    age: '10 months ago',
    quote: 'Tom was able to help when we needed it the most! He installed our brand new air conditioner and we couldn\'t be happier (especially in this heat!) Tom from FIXAIR is experienced, honest, and an all around great person. Our 3 year old daughter loved serving him tea! Thanks again, Tom!!!',
  },
  {
    name: 'Brian Kremer',
    stars: 5,
    age: '9 months ago',
    quote: 'Tom was great to work with. He was able to fit my job into his schedule quickly. His attention to detail is commendable. I would recommend Tom @ FixAir.',
  },
  {
    name: 'Angela J.',
    stars: 5,
    age: '10 months ago',
    quote: 'Friendly, honest, and good service. Would highly recommend this company to help fix your Air/heating issues. Tom is great — would overall highly recommend for anyone with future issues with their AC/furnace!',
  },
]

const featured = testimonials.slice(0, 3)
const carousel  = testimonials.slice(3)
const TOTAL_REVIEWS = 27

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

function GoogleG() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" aria-label="Google review">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  )
}

function Avatar({ name }) {
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('')
  const colours = ['bg-blue-600', 'bg-emerald-600', 'bg-violet-600', 'bg-rose-600', 'bg-amber-600', 'bg-teal-600']
  const colour = colours[name.charCodeAt(0) % colours.length]
  return (
    <div className={`w-9 h-9 rounded-full ${colour} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
      {initials}
    </div>
  )
}

function ReviewCard({ t, large = false }) {
  return (
    <div className={`bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4 ${large ? 'p-7' : 'p-6'}`}>
      <div className="flex items-center gap-3">
        <Avatar name={t.name} />
        <div className="min-w-0">
          <div className="font-bold text-sm text-gray-900 truncate">{t.name}</div>
          <div className="flex items-center gap-1.5 mt-0.5">
            {t.badge && (
              <span className="text-[10px] font-semibold text-brand-blue bg-brand-blue/10 px-1.5 py-0.5 rounded">
                {t.badge}
              </span>
            )}
            <span className="text-xs text-gray-400">{t.age}</span>
          </div>
        </div>
        <div className="ml-auto"><GoogleG /></div>
      </div>
      <StarRating count={t.stars} />
      <p className={`text-gray-600 leading-relaxed flex-1 ${large ? 'text-sm' : 'text-sm'}`}>
        {t.quote}
      </p>
    </div>
  )
}

function Carousel({ items }) {
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef(null)

  const advance = (dir) => setIdx(i => (i + dir + items.length) % items.length)

  useEffect(() => {
    if (paused) return
    timer.current = setInterval(() => advance(1), 5000)
    return () => clearInterval(timer.current)
  }, [paused, items.length])

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Cards — use CSS transitions for a smooth fade */}
      <div className="relative min-h-[13rem]">
        {items.map((t, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-500 ${i === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
          >
            <ReviewCard t={t} />
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={() => advance(-1)}
          className="w-8 h-8 rounded-full border border-gray-200 hover:border-brand-blue hover:text-brand-blue flex items-center justify-center text-gray-400 transition-colors"
          aria-label="Previous review"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`rounded-full transition-all duration-300 ${i === idx ? 'w-5 h-2 bg-brand-orange' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => advance(1)}
          className="w-8 h-8 rounded-full border border-gray-200 hover:border-brand-blue hover:text-brand-blue flex items-center justify-center text-gray-400 transition-colors"
          aria-label="Next review"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-block bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Google Reviews
          </div>
          <h2 className="section-heading">Real Words from Real Niagara Neighbours</h2>
          <p className="section-sub">
            Don't take our word for it. Here's what customers say about working with Tom.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 bg-white border border-gray-100 shadow-sm rounded-full px-5 py-2">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <span className="text-sm font-bold text-gray-800">5.0</span>
            <span className="text-sm text-gray-400">· {TOTAL_REVIEWS} Google reviews</span>
          </div>
        </div>

        {/* Featured 3 */}
        <div className="grid md:grid-cols-3 gap-5">
          {featured.map((t, i) => (
            <ReviewCard key={i} t={t} large />
          ))}
        </div>

        {/* Carousel for remaining 3 */}
        <div className="mt-8 max-w-xl mx-auto">
          <div className="text-center mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
            More Reviews
          </div>
          <Carousel items={carousel} />
        </div>

        <div className="mt-10 text-center space-y-3">
          <a
            href="https://www.google.com/maps/place/FixAir+Heating+and+Air+Conditioning/@43.0713027,-79.5314574,9.98z/data=!4m8!3m7!1s0x882a8bdffd1e1775:0x4f058f4f82b2bedc!8m2!3d43.073928!4d-79.1983315!9m1!1b1!16s%2Fg%2F11tfnjymwg?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-blue-light transition-colors group"
          >
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Read all our reviews on Google
            <svg className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
          <p className="text-gray-400 text-xs">
            Happy with FixAIR? A Google review helps your neighbours find a trusted local contractor.
          </p>
        </div>
      </div>
    </section>
  )
}
