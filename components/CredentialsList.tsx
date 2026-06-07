'use client'

import { motion } from 'framer-motion'
import type { Credential } from '@/lib/data'

export default function CredentialsList({ credentials }: { credentials: Credential[] }) {
  return (
    <div className="flex flex-col gap-4">
      {credentials.map((cred, i) => {
        const borderColor =
          cred.type === 'gold' ? '#b8960c' : cred.type === 'green' ? '#7a9060' : '#1e2428'
        const dotColor =
          cred.type === 'gold' ? '#b8960c' : cred.type === 'green' ? '#7a9060' : '#4a4840'

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="flex items-start gap-4 bg-[#0f1114] p-5"
            style={{ borderLeft: `2px solid ${borderColor}` }}
          >
            <div
              className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
              style={{ backgroundColor: dotColor }}
            />
            <div>
              <h3
                className="text-[#e8dfc8] text-base font-light mb-0.5"
                style={{
                  fontFamily:
                    'var(--font-cormorant), Cormorant Garamond, Georgia, serif',
                }}
              >
                {cred.title}
              </h3>
              <p
                className="text-[#7a7060] text-xs"
                style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
              >
                {cred.description}
              </p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
