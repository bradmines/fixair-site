import { useState, useEffect } from 'react'
import { PHONE, PHONE_HREF } from '../constants'
import { services } from '../data/services'
import { locations } from '../data/locations'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navLinks = [
    { label: 'About', href: '/#about' },
    { label: 'Services', href: '/#services' },
    { label: 'Why FixAIR', href: '/#why' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'Blog', href: '/blog/' },
    { label: 'FAQ', href: '/faq/' },
    { label: 'Contact', href: '/#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="px-4 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo — white version over hero video, original on white header */}
          <a href="/" className="flex-shrink-0">
            {!scrolled ? (
              <img
                src="/fixairlogowhite.png"
                alt="FixAir Heating and Air Conditioning"
                className="h-10 md:h-12 w-auto"
              />
            ) : (
              <img
                src="/fixair-logo.avif"
                alt="FixAir Heating and Air Conditioning"
                className="h-10 md:h-12 w-auto"
              />
            )}
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(l => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-semibold transition-colors ${
                  scrolled ? 'text-gray-600 hover:text-brand-blue' : 'text-white/90 hover:text-white'
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA phone + socials */}
          <div className="flex items-center gap-2">
            {/* Social icons — desktop only */}
            <a
              href="https://www.facebook.com/fixairheatandcool"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FixAIR on Facebook"
              className={`hidden lg:flex w-9 h-9 items-center justify-center rounded-lg transition-colors ${
                scrolled ? 'text-gray-400 hover:text-blue-600 hover:bg-blue-50' : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/fixairheatandcool"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FixAIR on Instagram"
              className={`hidden lg:flex w-9 h-9 items-center justify-center rounded-lg transition-colors ${
                scrolled ? 'text-gray-400 hover:text-pink-600 hover:bg-pink-50' : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <div className={`hidden lg:block w-px h-6 mx-1 ${scrolled ? 'bg-gray-200' : 'bg-white/20'}`} />
            <a
              href={PHONE_HREF}
              className="hidden sm:inline-flex items-center gap-2 bg-brand-orange text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow hover:bg-brand-orange-dark transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              {PHONE}
            </a>

            {/* Hamburger */}
            <button
              className={`lg:hidden p-2 rounded-md transition ${
                scrolled ? 'text-gray-600 hover:text-brand-blue hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-semibold text-gray-700 hover:text-brand-blue hover:bg-blue-50 rounded-lg transition"
              >
                {l.label}
              </a>
            ))}

            {/* Service pages */}
            <div className="mt-2 pt-3 border-t border-gray-100">
              <div className="px-3 mb-1 text-xs font-bold uppercase tracking-widest text-gray-400">Services</div>
              {services.map(s => (
                <a
                  key={s.slug}
                  href={`/services/${s.slug}/`}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-semibold text-gray-600 hover:text-brand-blue hover:bg-blue-50 rounded-lg transition"
                >
                  {s.name}
                </a>
              ))}
            </div>

            {/* City pages */}
            <div className="mt-2 pt-3 border-t border-gray-100">
              <div className="px-3 mb-1 text-xs font-bold uppercase tracking-widest text-gray-400">Service Areas</div>
              {locations.map(l => (
                <a
                  key={l.slug}
                  href={`/service-areas/${l.slug}/`}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-semibold text-gray-600 hover:text-brand-blue hover:bg-blue-50 rounded-lg transition"
                >
                  {l.name}
                </a>
              ))}
            </div>

            <a
              href={PHONE_HREF}
              className="mt-3 flex items-center justify-center gap-2 bg-brand-orange text-white font-bold px-5 py-3 rounded-lg"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              Call {PHONE}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
