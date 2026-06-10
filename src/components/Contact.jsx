import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name.'
    if (!form.phone.trim()) e.phone = 'Please enter a phone number.'
    if (!form.message.trim()) e.message = 'Please describe what you need.'
    return e
  }

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    setErrors(er => ({ ...er, [e.target.name]: undefined }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setSubmitted(true)
  }

  const inputClass = (field) =>
    `w-full rounded-xl border ${errors[field] ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'} px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition`

  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: info */}
          <div>
            <div className="inline-block bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Get in Touch
            </div>
            <h2 className="section-heading text-left">
              Ready to Get Started?<br />
              <span className="text-brand-orange">Tom's Here to Help.</span>
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Call, or fill out the form and Tom will get back to you promptly. No pressure, no obligation —
              just an honest conversation about what your home needs.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="tel:+19057322791"
                className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl px-6 py-5 shadow-sm hover:shadow-md hover:border-brand-orange/30 transition-all group"
              >
                <div className="w-12 h-12 bg-brand-orange rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">Call Tom directly</div>
                  <div className="text-lg font-extrabold text-brand-blue mt-0.5">905-732-2791</div>
                </div>
              </a>

              <a
                href="mailto:fixairheatandcool@gmail.com"
                className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl px-6 py-5 shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all group"
              >
                <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">Email</div>
                  <div className="text-base font-bold text-brand-blue mt-0.5">fixairheatandcool@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl px-6 py-5 shadow-sm">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">Hours</div>
                  <div className="text-sm font-semibold text-brand-blue mt-0.5">Mon – Sat: 8am – 6pm</div>
                  <div className="text-xs text-gray-400">Sunday by appointment</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h3 className="text-xl font-extrabold text-brand-blue">Message Received!</h3>
                <p className="text-gray-500 mt-2 text-sm">
                  Thanks, {form.name.split(' ')[0]}! Tom will be in touch shortly. For faster service, call{' '}
                  <a href="tel:+19057322791" className="font-bold text-brand-orange">905-732-2791</a>.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', message: '' }) }}
                  className="mt-6 text-sm text-brand-blue hover:underline font-semibold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-extrabold text-brand-blue mb-1">Request a Free Quote</h3>
                <p className="text-gray-400 text-sm mb-6">Tom will follow up within one business day.</p>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass('name')}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="905-555-0100"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass('phone')}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="message">
                      What Do You Need?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="e.g. My furnace stopped working, looking for a quote on a new AC system, need duct cleaning..."
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass('message')} resize-none`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button type="submit" className="btn-primary w-full py-3.5 text-base">
                    Send Message to Tom
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </button>

                  <p className="text-xs text-center text-gray-400 mt-2">
                    Prefer to call? <a href="tel:+19057322791" className="text-brand-orange font-semibold">905-732-2791</a>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
