import { useState } from 'react'
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF } from '../constants'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mgojkqza'

const SERVICE_OPTIONS = [
  'Furnace repair or replacement',
  'Air conditioner repair or replacement',
  'Ductless mini split system',
  'Hot water heater',
  'Boiler',
  'Duct cleaning',
  'Annual maintenance or tune up',
  'Not sure, need advice',
  'Other',
]

export default function Contact() {
  const [contactMethod, setContactMethod] = useState('phone')
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [errors, setErrors] = useState({})

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name.'
    if (contactMethod === 'phone') {
      if (!form.phone.trim()) e.phone = 'Please enter a phone number.'
      else if (form.phone.replace(/\D/g, '').length < 10) e.phone = 'Please enter a valid phone number.'
    }
    if (contactMethod === 'email') {
      if (!form.email.trim()) e.email = 'Please enter your email address.'
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = 'Please enter a valid email address.'
    }
    return e
  }

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    setErrors(er => ({ ...er, [e.target.name]: undefined }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }

    setSubmitting(true)
    setSubmitError('')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          preferredContact: contactMethod === 'phone' ? 'Phone call' : 'Email',
          phone: form.phone,
          email: form.email,
          service: form.service,
          message: form.message,
          _subject: `New website lead from ${form.name}`,
        }),
      })
      if (!res.ok) throw new Error('Submission failed')
      setSubmitted(true)
    } catch (err) {
      setSubmitError(
        `Sorry, something went wrong sending your message. Please call Tom at ${PHONE} and we'll help right away.`
      )
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass = (field) =>
    `w-full rounded-xl border ${errors[field] ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'} px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition`

  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: info */}
          <div className="min-w-0">
            <div className="inline-block bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Get in Touch
            </div>
            <h2 className="section-heading text-left">
              Ready to Get Started?<br />
              <span className="text-brand-orange">Tom's Here to Help.</span>
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Call, or fill out the form and Tom will get back to you promptly. No pressure, no obligation,
              just an honest conversation about what your home needs.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl px-6 py-5 shadow-sm hover:shadow-md hover:border-brand-orange/30 transition-all group"
              >
                <div className="w-12 h-12 bg-brand-orange rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">Call Tom directly</div>
                  <div className="text-lg font-extrabold text-brand-blue mt-0.5">{PHONE}</div>
                </div>
              </a>

              <a
                href={EMAIL_HREF}
                className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl px-6 py-5 shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all group"
              >
                <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">Email</div>
                  <div className="text-base font-bold text-brand-blue mt-0.5 break-all">{EMAIL}</div>
                </div>
              </a>

              <div className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl px-6 py-5 shadow-sm">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">Business Hours</div>
                  <div className="text-sm font-semibold text-brand-blue mt-0.5">Monday through Friday: 8:00 AM to 5:00 PM</div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wide mt-3">Emergency HVAC Service</div>
                  <a href={PHONE_HREF} className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-orange mt-1 hover:underline">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.53 15.53 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.24 1.02l-2.2 2.21z"/>
                    </svg>
                    Call now: {PHONE}
                  </a>
                  <div className="text-xs text-gray-400 mt-1">Open 7 Days a Week</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="min-w-0 bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h3 className="text-xl font-extrabold text-brand-blue">You're all set!</h3>
                <p className="text-gray-500 mt-2 text-sm">
                  Thanks, {form.name.split(' ')[0]}! Tom will be in touch shortly. For faster service, call{' '}
                  <a href={PHONE_HREF} className="font-bold text-brand-orange">{PHONE}</a>.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setSubmitError(''); setForm({ name: '', phone: '', email: '', service: '', message: '' }); setErrors({}) }}
                  className="mt-6 text-sm text-brand-blue hover:underline font-semibold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-extrabold text-brand-blue mb-1">
                  {contactMethod === 'phone' ? 'Request a Call from Tom' : 'Send Tom a Message'}
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  {contactMethod === 'phone'
                    ? 'Leave your number and Tom will call you back, usually same day.'
                    : 'Leave your email and Tom will get back to you promptly.'}
                </p>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name */}
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

                  {/* Contact method toggle */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      How should Tom reach you?
                    </label>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <button
                        type="button"
                        onClick={() => setContactMethod('phone')}
                        className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all ${
                          contactMethod === 'phone'
                            ? 'border-brand-orange bg-brand-orange/10 text-brand-orange'
                            : 'border-gray-200 text-gray-500 hover:border-gray-300'
                        }`}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                        </svg>
                        Phone call
                      </button>
                      <button
                        type="button"
                        onClick={() => setContactMethod('email')}
                        className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all ${
                          contactMethod === 'email'
                            ? 'border-brand-blue bg-brand-blue/10 text-brand-blue'
                            : 'border-gray-200 text-gray-500 hover:border-gray-300'
                        }`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        Email
                      </button>
                    </div>

                    {contactMethod === 'phone' ? (
                      <>
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
                      </>
                    ) : (
                      <>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="jane@example.com"
                          value={form.email}
                          onChange={handleChange}
                          className={inputClass('email')}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </>
                    )}
                  </div>

                  {/* Service dropdown */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="service">
                      What can Tom help you with?
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition appearance-none"
                    >
                      <option value="">Select a service (optional)</option>
                      {SERVICE_OPTIONS.map(o => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  {/* Optional message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="message">
                      Anything else? <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="e.g. My furnace stopped working last night, looking for a quick fix…"
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass('message')} resize-none`}
                    />
                  </div>

                  {submitError && (
                    <p className="text-red-500 text-sm text-center bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                      {submitError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                      </svg>
                    ) : contactMethod === 'phone' ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    )}
                    {submitting
                      ? 'Sending…'
                      : contactMethod === 'phone'
                        ? 'Request a Call from Tom'
                        : 'Send Message to Tom'}
                  </button>

                  <p className="text-xs text-center text-gray-400 mt-2">
                    Rather call now? <a href={PHONE_HREF} className="text-brand-orange font-semibold">{PHONE}</a>
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
