import Header from '../components/Header'
import Footer from '../components/Footer'
import MobileCallBar from '../components/MobileCallBar'
import { services } from '../data/services'
import { locations } from '../data/locations'
import { PHONE, PHONE_HREF } from '../constants'

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="relative bg-brand-blue pt-28 md:pt-36 pb-16 md:pb-20 overflow-hidden">
          <div className="absolute top-10 right-0 w-96 h-96 bg-brand-orange/10 rounded-full translate-x-1/3 blur-3xl pointer-events-none" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-6xl md:text-7xl font-extrabold text-brand-orange">404</div>
            <h1 className="mt-4 text-3xl md:text-4xl font-extrabold text-white">
              We couldn't find that page
            </h1>
            <p className="mt-4 text-lg text-blue-100 leading-relaxed">
              The page may have moved or no longer exists. Let's get you back on track, or call Tom
              directly and he'll help right away.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a href="/" className="btn-primary text-base px-8 py-4">
                Back to Home
              </a>
              <a
                href={PHONE_HREF}
                className="btn-secondary text-base px-8 py-4 border-white/40 bg-white/10 text-white hover:bg-white/20"
              >
                Call Tom: {PHONE}
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="font-bold text-brand-blue uppercase text-xs tracking-widest mb-4">
                Our Services
              </h2>
              <ul className="space-y-2">
                {services.map(s => (
                  <li key={s.slug}>
                    <a
                      href={`/services/${s.slug}/`}
                      className="text-gray-600 hover:text-brand-blue hover:underline transition-colors"
                    >
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-brand-blue uppercase text-xs tracking-widest mb-4">
                Service Areas
              </h2>
              <ul className="space-y-2">
                {locations.map(l => (
                  <li key={l.slug}>
                    <a
                      href={`/service-areas/${l.slug}/`}
                      className="text-gray-600 hover:text-brand-blue hover:underline transition-colors"
                    >
                      {l.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCallBar />
    </>
  )
}
