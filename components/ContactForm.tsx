'use client'

import { useState } from 'react'
import { siteConfig } from '@/lib/data'

const services = [
  'Close Protection',
  'Aviation Security',
  'Asset Protection',
  'Event Security',
  'Armoured Luxury Vehicles',
  'Air Mobility — Helicopter & Fixed Wing',
  'Referral Partner Enquiry',
  'General Enquiry',
]

const inputClass =
  'w-full bg-[#06080a] border border-[#1e2428] text-[#e8dfc8] placeholder-[#4a4840] px-4 py-3 text-sm focus:outline-none focus:border-[#b8960c] transition-colors duration-200'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({
    name: '',
    organisation: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    const body = {
      name: form.name,
      organisation: form.organisation,
      email: form.email,
      phone: form.phone,
      service: form.service,
      message: form.message,
    }

    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', organisation: '', email: '', phone: '', service: '', message: '' })
      } else {
        throw new Error('Form submission failed')
      }
    } catch {
      // Fallback to mailto
      const subject = encodeURIComponent(`P8N Defense Enquiry — ${form.service || 'General'}`)
      const bodyText = encodeURIComponent(
        `Name: ${form.name}\nOrganisation: ${form.organisation}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\n${form.message}`
      )
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${bodyText}`
      setStatus('idle')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-[#0f1114] border border-[#b8960c]/30 p-10 flex flex-col items-center text-center gap-4">
        <div className="text-4xl">✓</div>
        <h3
          className="text-[#e8dfc8] text-2xl font-light"
          style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif' }}
        >
          Enquiry Received
        </h3>
        <p
          className="text-[#7a7060] text-sm max-w-sm"
          style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
        >
          We will respond to your confidential enquiry within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="name"
        placeholder="Full Name *"
        required
        value={form.name}
        onChange={handleChange}
        className={inputClass}
        style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
      />
      <input
        type="text"
        name="organisation"
        placeholder="Organisation"
        value={form.organisation}
        onChange={handleChange}
        className={inputClass}
        style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address *"
        required
        value={form.email}
        onChange={handleChange}
        className={inputClass}
        style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Contact Number *"
        required
        value={form.phone}
        onChange={handleChange}
        className={inputClass}
        style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
      />
      <select
        name="service"
        value={form.service}
        onChange={handleChange}
        className={`${inputClass} ${!form.service ? 'text-[#4a4840]' : 'text-[#e8dfc8]'}`}
        style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
      >
        <option value="" disabled>
          Service Required
        </option>
        {services.map((s) => (
          <option key={s} value={s} className="bg-[#0f1114] text-[#e8dfc8]">
            {s}
          </option>
        ))}
      </select>
      <textarea
        name="message"
        placeholder="Message *"
        required
        rows={5}
        value={form.message}
        onChange={handleChange}
        className={`${inputClass} resize-none`}
        style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
      />

      <p
        className="text-[#4a4840] text-xs leading-relaxed"
        style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
      >
        All communications are treated with absolute confidentiality. P8N Defense does not disclose
        client information, enquiries, or operational details under any circumstances.
      </p>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="bg-[#b8960c] hover:bg-[#d4ac0e] disabled:opacity-50 text-[#06080a] font-medium tracking-wider uppercase text-sm px-8 py-4 transition-all duration-200 w-full"
        style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
      >
        {status === 'sending' ? 'Sending...' : 'Submit Confidential Enquiry'}
      </button>
    </form>
  )
}
