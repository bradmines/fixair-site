import { PHONE, PHONE_HREF, EMAIL } from '../constants'
import { services } from '../data/services'
import { locations } from '../data/locations'
import { cityServices } from '../data/cityServices'

export default function Footer() {
  const year = new Date().getFullYear()

  // City + service pages grouped by city. These are the deepest pages on the
  // site and were previously reachable only from their parent city page and
  // their parent service page — three inbound links each, none of them
  // sitewide. Linking them from the footer is what takes them off the
  // "Discovered - currently not indexed" pile: a page Google only finds two
  // clicks in, from two places, reads as low priority no matter how good it is.
  const cityGroups = locations
    .map(l => ({ city: l, pages: cityServices.filter(cs => cs.citySlug === l.slug) }))
    .filter(g => g.pages.length > 0)

  return (
    <footer className="bg-brand-blue text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 grid grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-10">
        {/* Brand */}
        <div className="col-span-2 lg:col-span-2">
          <div className="mb-4">
            <img
              src="/fixair-logo.avif"
              alt="FixAir Heating and Air Conditioning"
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
              aria-label="FixAir on Facebook"
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
              aria-label="FixAir on Instagram"
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
              { label: 'Services', href: '/#services' },
              { label: 'Meet Tom', href: '/#about' },
              { label: 'Why FixAir', href: '/#why' },
              { label: 'Testimonials', href: '/#testimonials' },
              { label: 'Service Area', href: '/#area' },
              { label: 'FAQ', href: '/faq/' },
              { label: 'Request a Quote', href: '/#contact' },
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
            {services.map(s => (
              <li key={s.slug}>
                <a href={`/services/${s.slug}/`} className="hover:text-white hover:underline transition-colors">{s.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-4">Service Areas</h4>
          <ul className="space-y-2 text-sm text-blue-200">
            {locations.map(l => (
              <li key={l.slug}>
                <a href={`/service-areas/${l.slug}/`} className="hover:text-white hover:underline transition-colors">{l.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Local service pages — every city+service page, linked sitewide */}
      {cityGroups.length > 0 && (
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-5">
              Furnace &amp; AC Repair by City
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-5">
              {cityGroups.map(g => (
                <div key={g.city.slug}>
                  <a
                    href={`/service-areas/${g.city.slug}/`}
                    className="block text-sm font-bold text-white hover:underline"
                  >
                    {g.city.name}
                  </a>
                  <ul className="mt-2 space-y-1.5">
                    {g.pages.map(cs => (
                      <li key={cs.slug}>
                        <a
                          href={`/service-areas/${cs.citySlug}/${cs.slug}/`}
                          className="text-[13px] text-blue-200 hover:text-white hover:underline transition-colors"
                        >
                          {cs.service}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-300 text-center sm:text-left">
          <span>© {year} FixAir Heating and Air Conditioning. All rights reserved.</span>
          <span className="text-blue-300 sm:text-right">
            Niagara &amp; surrounding areas, Ontario
            <span className="hidden sm:inline"> · {PHONE} · {EMAIL}</span>
          </span>
        </div>
        <div className="mt-4 pt-4 border-t border-white/10 text-center">
          <a
            href="https://bradmines.com"
            target="_blank"
            rel="noopener"
            className="text-[11px] text-blue-400/80 hover:text-white transition-colors hover:underline underline-offset-2"
          >
            Website by bradmines
          </a>
        </div>
      </div>
    </footer>
  )
}
