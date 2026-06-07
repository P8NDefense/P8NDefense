import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import SectionLabel from '@/components/SectionLabel'
import ServiceCard from '@/components/ServiceCard'
import PillarCard from '@/components/PillarCard'
import { services, pillars } from '@/lib/data'

export const metadata: Metadata = {
  title: 'P8N Defense | Elite Close Protection & Security Services South Africa',
  description:
    'Government-Grade Protection. Private-Sector Precision. Elite close protection, aviation security, asset protection, and air mobility across South Africa.',
}

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* About preview */}
      <section className="bg-[#0d0f12] py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel text="Who We Are" className="justify-center mb-8" />
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-[#e8dfc8] mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif' }}
          >
            Built on the Continent.{' '}
            <span className="text-[#b8960c] italic">Trained by Government.</span>
          </h2>
          <p
            className="text-[#7a7060] text-base leading-relaxed font-light max-w-2xl mx-auto mb-8"
            style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
          >
            Founded by Cyril Paton — Ronin SA Close Protection Academy graduate, United Nations UNDSS
            certified, BSAFE certified, National Intervention Unit operator — P8N Defense exists where
            government-trained capability meets private-sector accountability.
          </p>
          <Link
            href="/about"
            className="text-[#b8960c] border-b border-[#b8960c]/40 hover:border-[#b8960c] text-sm tracking-wider uppercase transition-colors pb-0.5"
            style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
          >
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-[#06080a] py-24 px-4 sm:px-6" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel text="What We Do" className="justify-center mb-6" />
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-light text-[#e8dfc8]"
              style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif' }}
            >
              Specialist Security Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.slice(0, 3).map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="border border-[#1e2428] hover:border-[#b8960c] text-[#7a7060] hover:text-[#b8960c] text-sm tracking-wider uppercase px-8 py-3 transition-all duration-200 inline-block"
              style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars preview */}
      <section className="bg-[#0d0f12] py-24 px-4 sm:px-6" id="pillars">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel text="Our Approach" className="justify-center mb-6" />
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-light text-[#e8dfc8]"
              style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif' }}
            >
              Seven Pillars of Protection
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {pillars.map((pillar, i) => (
              <PillarCard key={pillar.number} pillar={pillar} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Discretion / quote section */}
      <section className="bg-[#06080a] py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 gold-glow opacity-50 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div
            className="text-[#b8960c] text-8xl leading-none mb-6 select-none"
            style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif' }}
          >
            "
          </div>
          <blockquote
            className="text-2xl sm:text-3xl md:text-4xl font-light italic text-[#e8dfc8] mb-8 leading-relaxed"
            style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif' }}
          >
            We do not offer security. We offer certainty.
          </blockquote>
          <p
            className="text-[#7a7060] text-sm leading-relaxed max-w-xl mx-auto mb-8 font-light"
            style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
          >
            Discretion is not a policy — it is a discipline. P8N Defense never discloses clients,
            operations, or methods. Your safety and privacy are protected with equal rigour. Always.
          </p>
          <Link
            href="/contact"
            className="bg-[#b8960c] hover:bg-[#d4ac0e] text-[#06080a] font-medium tracking-wider uppercase text-sm px-8 py-4 transition-all duration-200 inline-block"
            style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
          >
            Request Confidential Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
