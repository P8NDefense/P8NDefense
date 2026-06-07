'use client'

import { motion } from 'framer-motion'
import type { Service } from '@/lib/data'

interface ServiceCardProps {
  service: Service
  index?: number
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="bg-[#0f1114] border border-[#1e2428] hover:border-[#b8960c]/40 p-7 flex flex-col gap-4 transition-all duration-300 group"
    >
      {/* Icon */}
      <div className="text-3xl">{service.icon}</div>

      {/* Header */}
      <div>
        <h3
          className="text-[#e8dfc8] text-xl font-light mb-1 group-hover:text-[#b8960c] transition-colors duration-300"
          style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif' }}
        >
          {service.name}
        </h3>
        <p
          className="text-[#b8960c] text-xs tracking-widest uppercase"
          style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
        >
          {service.tagline}
        </p>
      </div>

      {/* Description */}
      <p
        className="text-[#7a7060] text-sm leading-relaxed font-light"
        style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
      >
        {service.description}
      </p>

      {/* Divider */}
      <div className="h-px bg-[#1e2428] group-hover:bg-[#b8960c]/20 transition-colors duration-300" />

      {/* Points */}
      <ul className="flex flex-col gap-2">
        {service.points.map((point, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-[#7a7060] text-xs leading-relaxed"
            style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
          >
            <span className="text-[#b8960c] mt-0.5 flex-shrink-0">·</span>
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
