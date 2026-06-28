export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-blue text-white">
      {/* Top strip — hidden on mobile; the sticky call bar already covers this */}
      <div className="hidden sm:block bg-brand-orange py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <span className="font-bold text-white">Ready for comfortable year round temperatures? Call Tom today.</span>
          <a
            href="tel:+19057322791"
            className="flex-shrink-0 bg-white text-brand-orange font-extrabold px-6 py-2.5 rounded-lg shadow hover:bg-gray-50 transition text-sm"
          >
            905-732-2791
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
        {/* Brand */}
        <div className="col-span-2 lg:col-span-2">
          <div className="mb-4">
            <img
              src="/fixair-logo.avif"
              alt="FixAIR Heating & Air Conditioning"
              className="h-10 w-auto brightness-0 invert"
            />
          </div>
          <p className="text-blue-200 text-sm leading-relaxed max-w-xs">
            Honest, expert residential HVAC service for homeowners across Niagara and surrounding
            areas. A residential only company, licensed, local, and dedicated to first rate
            workmanship on every job.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://www.facebook.com/fixairheatandcool"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FixAIR on Facebook"
              className="w-9 h-9 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
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
              className="w-9 h-9 bg-white/10 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1.5"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-blue-200">
            {[
              { label: 'Services', href: '#services' },
              { label: 'Meet Tom', href: '#about' },
              { label: 'Why FixAIR', href: '#why' },
              { label: 'Testimonials', href: '#testimonials' },
              { label: 'Service Area', href: '#area' },
              { label: 'Request a Quote', href: '#contact' },
            ].map(l => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-white hover:underline transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-blue-200">
            {['Furnaces', 'Air Conditioners', 'Ductless Systems', 'Hot Water Heaters', 'Boilers', 'Air Ducts'].map(s => (
              <li key={s}>
                <a href="#services" className="hover:text-white hover:underline transition-colors">{s}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-300 text-center sm:text-left">
          <span>© {year} FixAIR Heating & Air Conditioning. All rights reserved.</span>
          <span className="text-blue-300 sm:text-right">
            Niagara &amp; surrounding areas, Ontario
            <span className="hidden sm:inline"> · 905-732-2791 · fixairheatandcool@gmail.com</span>
          </span>
        </div>
        <div className="mt-4 pt-4 border-t border-white/10 text-center">
          <a
            href="https://bradmines.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-blue-400/80 hover:text-white transition-colors hover:underline underline-offset-2"
          >
            Website by bradmines
          </a>
        </div>
      </div>
    </footer>
  )
}
