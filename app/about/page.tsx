import type { Metadata } from 'next'
import SectionLabel from '@/components/SectionLabel'
import CredentialsList from '@/components/CredentialsList'
import { credentials, stats } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About P8N Defense | Government-Trained Close Protection South Africa',
  description:
    'Founded by Cyril Paton — Ronin SA CP Academy graduate, UN UNDSS certified, BSAFE certified, NIU operator. P8N Defense operators are drawn from South Africa\'s most elite government units.',
}

export default function AboutPage() {
  return (
    <div className="bg-[#06080a] pt-20">
      {/* Header */}
      <section className="bg-[#0d0f12] py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 gold-glow opacity-40 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionLabel text="About P8N Defense" className="mb-6" />
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-light text-[#e8dfc8] leading-tight max-w-3xl"
            style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif' }}
          >
            Built on the Continent.{' '}
            <span className="text-[#b8960c] italic">Trained by Government.</span>
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left column */}
          <div>
            <p
              className="text-[#e8dfc8] text-lg leading-relaxed font-light mb-6"
              style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
            >
              P8N Defense was founded by Cyril Paton — a Ronin SA Close Protection Academy graduate,
              United Nations UNDSS certified, BSAFE certified, and former National Intervention Unit
              (NIU) operator with extensive close protection assignments across South Africa and
              internationally.
            </p>
            <p
              className="text-[#7a7060] text-base leading-relaxed font-light mb-10"
              style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
            >
              Where corporate security firms offer volume, P8N Defense offers calibre. Every operator
              is drawn from South Africa&apos;s most elite government units — Special Task Force, South
              African Special Forces, Military Intelligence. Every operator is a trained operational
              medic, first responder, and advanced driver. No compromises. No exceptions.
            </p>

            {/* Quote */}
            <blockquote className="border-l-2 border-[#b8960c] pl-6 mb-10">
              <p
                className="text-2xl sm:text-3xl font-light italic text-[#e8dfc8] leading-relaxed"
                style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif' }}
              >
                &ldquo;We do not offer security. We offer certainty.&rdquo;
              </p>
            </blockquote>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              {stats.map((stat) => (
                <div key={stat.value} className="bg-[#0f1114] border border-[#1e2428] p-5">
                  <div
                    className="text-[#b8960c] text-2xl font-light mb-1"
                    style={{
                      fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-[#7a7060] text-xs tracking-wider uppercase"
                    style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Credential highlight cards */}
            <div className="flex flex-col gap-4">
              <div className="bg-[#0f1114] border border-[#b8960c]/40 p-5">
                <div
                  className="text-[#b8960c] text-sm font-medium mb-1"
                  style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
                >
                  Ronin SA · UN UNDSS · BSAFE
                </div>
                <div
                  className="text-[#7a7060] text-xs"
                  style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
                >
                  Founder credentials
                </div>
              </div>
              <div className="bg-[#0f1114] border border-[#7a9060]/40 p-5">
                <div
                  className="text-[#7a9060] text-sm font-medium mb-1"
                  style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
                >
                  Medic+
                </div>
                <div
                  className="text-[#7a7060] text-xs"
                  style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
                >
                  Every Operator is a Trained Operational Medic &amp; First Responder
                </div>
              </div>
            </div>
          </div>

          {/* Right column — credentials list */}
          <div>
            <SectionLabel text="Founder & Operator Credentials" className="mb-8" />
            <CredentialsList credentials={credentials} />
          </div>
        </div>
      </section>
    </div>
  )
}
