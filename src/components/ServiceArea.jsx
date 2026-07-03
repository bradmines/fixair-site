const towns = [
  { name: 'Welland', desc: 'Home base' },
  { name: 'St. Catharines', desc: 'Regional hub' },
  { name: 'Niagara Falls', desc: 'Tourist city & suburbs' },
  { name: 'Thorold', desc: 'Just south of the Falls' },
  { name: 'Fonthill', desc: 'Pelham community' },
  { name: 'Port Colborne', desc: 'South Niagara' },
]

import { PHONE, PHONE_HREF } from '../constants'

export default function ServiceArea() {
  return (
    <section id="area" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Google Maps embed for the FixAIR business location */}
          <div className="rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
            <iframe
              title="FixAir Heating and Air Conditioning location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d373050.07033610117!2d-79.52796817502455!3d43.07395659687544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882a8bdffd1e1775%3A0x4f058f4f82b2bedc!2sFixAir%20Heating%20and%20Air%20Conditioning!5e0!3m2!1sen!2sth!4v1782200098249!5m2!1sen!2sth"
              className="w-full h-72 md:h-96 block"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <div className="inline-block bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Service Area
            </div>
            <h2 className="section-heading text-left">
              Proudly Serving{' '}
              <span className="text-brand-orange">Niagara and Surrounding Areas</span>
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              FixAIR serves homeowners throughout Niagara and surrounding areas. If you are nearby and
              don't see your town listed,{' '}
              <a href={PHONE_HREF} className="text-brand-blue font-semibold hover:underline">give Tom a call</a>{' '}
              and he can let you know.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {towns.map(t => (
                <div
                  key={t.name}
                  className="flex items-center gap-2.5 bg-gray-50 hover:bg-brand-blue/5 rounded-xl px-4 py-3 border border-gray-100 transition-colors"
                >
                  <svg className="w-4 h-4 text-brand-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    <div className="text-sm font-bold text-brand-blue">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-brand-blue/5 border border-brand-blue/10 rounded-xl px-5 py-4 flex items-center gap-4">
              <svg className="w-8 h-8 text-brand-blue flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div>
                <div className="font-semibold text-brand-blue text-sm">Not sure if we cover your area?</div>
                <div className="text-gray-500 text-xs mt-0.5">
                  Call <a href={PHONE_HREF} className="font-bold text-brand-orange">{PHONE}</a> and Tom will let you know right away.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
