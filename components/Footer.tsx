import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-[#0d0f12] border-t border-[#b8960c]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <Image
              src="/p8n-logo.png"
              alt="P8N Defense Logo"
              width={52}
              height={52}
              className="rounded-full"
            />
            <div>
              <div
                className="text-[#e8dfc8] text-sm font-bold tracking-[0.2em] uppercase"
                style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
              >
                P8N DEFENSE
              </div>
              <div
                className="text-[#b8960c] text-sm italic tracking-widest"
                style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif' }}
              >
                sablutho
              </div>
              <div
                className="text-[#4a4840] text-xs mt-1 max-w-xs"
                style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
              >
                {siteConfig.tagline}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2 text-right">
            <Link
              href={`mailto:${siteConfig.email}`}
              className="text-[#7a7060] hover:text-[#b8960c] text-sm transition-colors"
              style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
            >
              {siteConfig.email}
            </Link>
            <Link
              href={`tel:${siteConfig.cell.replace(/\s/g, '')}`}
              className="text-[#7a7060] hover:text-[#b8960c] text-sm transition-colors"
              style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
            >
              {siteConfig.cell}
            </Link>
            <Link
              href={`tel:${siteConfig.office.replace(/\s/g, '')}`}
              className="text-[#7a7060] hover:text-[#b8960c] text-sm transition-colors"
              style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
            >
              {siteConfig.office}
            </Link>
            <p
              className="text-[#4a4840] text-xs mt-2"
              style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
            >
              © {new Date().getFullYear()} P8N Defense. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
