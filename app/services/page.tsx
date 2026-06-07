import type { Metadata } from 'next'
import SectionLabel from '@/components/SectionLabel'
import ServiceCard from '@/components/ServiceCard'
import { services } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Security Services | P8N Defense South Africa',
  description:
    'Close protection, aviation security, asset protection, event security, armoured luxury vehicles, and air mobility — elite security services across South Africa by P8N Defense.',
}

export default function ServicesPage() {
  return (
    <div className="bg-[#06080a] pt-20">
      {/* Header */}
      <section className="bg-[#0d0f12] py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 gold-glow opacity-40 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <SectionLabel text="What We Do" className="justify-center mb-6" />
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-light text-[#e8dfc8] mb-4"
            style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif' }}
          >
            Specialist Security Services
          </h1>
          <p
            className="text-[#7a7060] text-base max-w-xl mx-auto font-light"
            style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
          >
            Six specialist disciplines. One standard: absolute.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0d0f12] py-20 px-4 sm:px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-light text-[#e8dfc8] mb-4"
            style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif' }}
          >
            Ready to discuss your requirements?
          </h2>
          <p
            className="text-[#7a7060] text-sm mb-8 font-light"
            style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
          >
            All enquiries are treated with absolute confidentiality.
          </p>
          <a
            href="/contact"
            className="bg-[#b8960c] hover:bg-[#d4ac0e] text-[#06080a] font-medium tracking-wider uppercase text-sm px-8 py-4 transition-all duration-200 inline-block"
            style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
          >
            Request Confidential Consultation
          </a>
        </div>
      </section>
    </div>
  )
}
