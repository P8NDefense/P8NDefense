import type { Metadata } from 'next'
import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import ContactForm from '@/components/ContactForm'
import { siteConfig } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Contact P8N Defense | Confidential Security Enquiries',
  description:
    'Submit a confidential enquiry to P8N Defense. Close protection, aviation security, asset protection, event security, armoured vehicles, and air mobility — Durban, South Africa.',
}

export default function ContactPage() {
  return (
    <div className="bg-[#06080a] pt-20">
      {/* Header */}
      <section className="bg-[#0d0f12] py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 gold-glow opacity-40 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionLabel text="Get In Touch" className="mb-6" />
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-light text-[#e8dfc8] max-w-2xl"
            style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif' }}
          >
            Confidential Enquiries
          </h1>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — contact details */}
          <div>
            <SectionLabel text="Contact Details" className="mb-8" />

            <div className="flex flex-col gap-6 mb-10">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-1 h-full min-h-8 bg-[#b8960c]/40 flex-shrink-0 mt-1" />
                <div>
                  <p
                    className="text-[#4a4840] text-xs tracking-wider uppercase mb-1"
                    style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
                  >
                    Address
                  </p>
                  <p
                    className="text-[#e8dfc8] text-sm leading-relaxed font-light"
                    style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
                  >
                    {siteConfig.address}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-1 h-8 bg-[#b8960c]/40 flex-shrink-0 mt-1" />
                <div>
                  <p
                    className="text-[#4a4840] text-xs tracking-wider uppercase mb-1"
                    style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
                  >
                    Email
                  </p>
                  <Link
                    href={`mailto:${siteConfig.email}`}
                    className="text-[#b8960c] hover:text-[#d4ac0e] text-sm transition-colors"
                    style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
                  >
                    {siteConfig.email}
                  </Link>
                </div>
              </div>

              {/* Cell */}
              <div className="flex items-start gap-4">
                <div className="w-1 h-8 bg-[#b8960c]/40 flex-shrink-0 mt-1" />
                <div>
                  <p
                    className="text-[#4a4840] text-xs tracking-wider uppercase mb-1"
                    style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
                  >
                    Cell
                  </p>
                  <Link
                    href={`tel:${siteConfig.cell.replace(/\s/g, '')}`}
                    className="text-[#e8dfc8] hover:text-[#b8960c] text-sm transition-colors"
                    style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
                  >
                    {siteConfig.cell}
                  </Link>
                </div>
              </div>

              {/* Office */}
              <div className="flex items-start gap-4">
                <div className="w-1 h-8 bg-[#b8960c]/40 flex-shrink-0 mt-1" />
                <div>
                  <p
                    className="text-[#4a4840] text-xs tracking-wider uppercase mb-1"
                    style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
                  >
                    Office
                  </p>
                  <Link
                    href={`tel:${siteConfig.office.replace(/\s/g, '')}`}
                    className="text-[#e8dfc8] hover:text-[#b8960c] text-sm transition-colors"
                    style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
                  >
                    {siteConfig.office}
                  </Link>
                </div>
              </div>
            </div>

            {/* Referral note */}
            <div className="bg-[#0f1114] border border-[#1e2428] p-6">
              <p
                className="text-[#b8960c] text-xs tracking-wider uppercase mb-2"
                style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
              >
                Referral Partners
              </p>
              <p
                className="text-[#7a7060] text-sm leading-relaxed font-light"
                style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
              >
                P8N Defense works with a select network of referral partners including financial
                advisors, wealth managers, private aviation operators, and corporate legal firms. If
                you represent a potential referral partner, please indicate this in your enquiry.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <SectionLabel text="Send an Enquiry" className="mb-8" />
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
