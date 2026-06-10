import { useState, useEffect } from 'react'

const PHONE = '905-732-2791'
const PHONE_HREF = 'tel:+19057322791'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Why FixAIR', href: '#why' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center shadow">
              <svg viewBox="0 0 40 40" className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 32 Q8 20 20 8 Q32 20 32 32" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 32 Q14 22 20 16 Q26 22 26 32" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="20" y1="24" x2="20" y2="32" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="leading-tight">
              <span className="text-xl font-extrabold text-brand-blue tracking-tight">Fix</span>
              <span className="text-xl font-extrabold text-brand-orange tracking-tight">AIR</span>
              <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider -mt-0.5">
                Heating & Air Conditioning
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-gray-600 hover:text-brand-blue transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA phone */}
          <div className="flex items-center gap-3">
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
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-brand-blue hover:bg-gray-100 transition"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
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
