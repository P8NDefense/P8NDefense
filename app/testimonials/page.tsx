import type { Metadata } from 'next'
import Image from 'next/image'
import SectionLabel from '@/components/SectionLabel'

export const metadata: Metadata = {
  title: 'Testimonials & Credentials | P8N Defense',
  description:
    'Letters of commendation and testimonials received by P8N Defense — including recognition from the Brazilian Soccer Federation.',
}

export default function TestimonialsPage() {
  return (
    <div className="bg-[#06080a] pt-20">
      {/* Header */}
      <section className="bg-[#0d0f12] py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 gold-glow opacity-40 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionLabel text="Recognition" className="mb-6" />
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-light text-[#e8dfc8] leading-tight max-w-3xl"
            style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif' }}
          >
            Letters of{' '}
            <span className="text-[#b8960c] italic">Commendation</span>
          </h1>
          <p
            className="text-[#7a7060] text-base font-light mt-4 max-w-xl"
            style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
          >
            Formal recognition received from clients and organisations for operational excellence and the highest standards of protective service.
          </p>
        </div>
      </section>

      {/* Letter */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">

          {/* Source label */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-[#1e2428]" />
            <span
              className="text-[#b8960c] text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
            >
              Brazilian Soccer Federation
            </span>
            <div className="h-px flex-1 bg-[#1e2428]" />
          </div>

          {/* Letter image */}
          <div className="border border-[#1e2428] hover:border-[#b8960c]/40 transition-colors duration-300 bg-[#0f1114] p-4 sm:p-8">
            <Image
              src="/testimonial.jpg"
              alt="Letter of commendation from the Brazilian Soccer Federation"
              width={900}
              height={1200}
              className="w-full h-auto"
              quality={95}
            />
          </div>

          {/* Caption */}
          <p
            className="text-[#4a4840] text-xs text-center mt-4 tracking-wider"
            style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
          >
            Official letter of commendation — Brazilian Soccer Federation
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0d0f12] py-20 px-4 sm:px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-light text-[#e8dfc8] mb-4"
            style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif' }}
          >
            Ready to experience the standard?
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
