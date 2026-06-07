'use client'

import { motion } from 'framer-motion'
import type { Pillar } from '@/lib/data'

interface PillarCardProps {
  pillar: Pillar
  index?: number
}

export default function PillarCard({ pillar, index = 0 }: PillarCardProps) {
  const borderColor = pillar.accentGreen ? '#7a9060' : '#1e2428'
  const borderHover = pillar.accentGreen ? '#7a9060' : '#b8960c'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative bg-[#0f1114] p-7 overflow-hidden group transition-all duration-300"
      style={{ border: `1px solid ${borderColor}` }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = borderHover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = borderColor
      }}
    >
      {/* Large faded number */}
      <div
        className="absolute top-2 right-4 text-8xl font-bold leading-none select-none pointer-events-none"
        style={{
          fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif',
          color: pillar.accentGreen ? 'rgba(122, 144, 96, 0.08)' : 'rgba(184, 150, 12, 0.08)',
        }}
      >
        {pillar.number}
      </div>

      <div className="relative z-10">
        <span
          className="text-xs tracking-[0.3em] uppercase mb-3 block"
          style={{
            fontFamily: 'var(--font-barlow), Barlow, system-ui',
            color: pillar.accentGreen ? '#7a9060' : '#b8960c',
          }}
        >
          {pillar.number}
        </span>
        <h3
          className="text-[#e8dfc8] text-xl font-light mb-3 leading-snug"
          style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif' }}
        >
          {pillar.title}
        </h3>
        <p
          className="text-[#7a7060] text-sm leading-relaxed font-light"
          style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
        >
          {pillar.description}
        </p>
      </div>
    </motion.div>
  )
}
