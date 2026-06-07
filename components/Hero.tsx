'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#06080a]">
      {/* Gold radial glow */}
      <div className="absolute inset-0 gold-glow pointer-events-none" />
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-60 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-4xl mx-auto pt-24 pb-20">
        {/* Logo */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-8"
        >
          <Image
            src="/p8n-logo.svg"
            alt="P8N Defense"
            width={100}
            height={100}
            className="rounded-full mx-auto"
            loading="eager"
            priority
          />
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-[#7a7060] text-xs sm:text-sm tracking-[0.3em] uppercase mb-6"
          style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
        >
          Headquarters: Durban, South Africa · Elite Protective Services
        </motion.p>

        {/* Headline */}
        <motion.h1
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-3"
          style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif' }}
        >
          Government-Grade Protection.
        </motion.h1>
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-[#b8960c] italic mb-8"
          style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif' }}
        >
          Private-Sector Precision.
        </motion.div>

        {/* Sub */}
        <motion.p
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-[#7a7060] text-base sm:text-lg font-light max-w-2xl leading-relaxed mb-10"
          style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
        >
          P8N Defense operators are drawn from South Africa's most elite government units — Ronin SA CP Academy graduates, UN UNDSS certified, National Intervention Unit operatives, Special Task Force veterans, and South African Special Forces. Every operator is a trained operational medic, first responder, and advanced driver.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/contact"
            className="bg-[#b8960c] hover:bg-[#d4ac0e] text-[#06080a] font-medium tracking-wider uppercase text-sm px-8 py-4 transition-all duration-200"
            style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
          >
            Request Confidential Consultation
          </Link>
          <Link
            href="/services"
            className="border border-[#1e2428] hover:border-[#b8960c] text-[#e8dfc8] hover:text-[#b8960c] font-light tracking-wider uppercase text-sm px-8 py-4 transition-all duration-200"
            style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
          >
            Our Services
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span
          className="text-[#4a4840] text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
        >
          Scroll
        </span>
        <div className="w-px h-10 bg-[#b8960c] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full animate-scroll-line bg-[#b8960c]" />
        </div>
      </div>
    </section>
  )
}
