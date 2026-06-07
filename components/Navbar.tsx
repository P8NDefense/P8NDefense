'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Approach', href: '/#pillars' },
  { label: 'Testimonials', href: '/testimonials' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#') && pathname === '/') {
      const id = href.slice(2)
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
        return
      }
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#06080a]/95 backdrop-blur-md border-b border-[#1e2428]'
          : 'bg-[#06080a]/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/p8n-logo.png"
              alt="P8N Defense Logo"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <div
                className="text-[#e8dfc8] text-sm font-bold tracking-[0.2em] uppercase leading-tight"
                style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
              >
                P8N DEFENSE
              </div>
              <div
                className="text-[#b8960c] text-xs italic tracking-widest"
                style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif' }}
              >
                sablutho
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[#7a7060] hover:text-[#e8dfc8] text-sm tracking-wider uppercase transition-colors duration-200"
                style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-[#b8960c] border border-[#b8960c] hover:bg-[#b8960c] hover:text-[#06080a] text-sm tracking-wider uppercase px-5 py-2 transition-all duration-200 font-medium"
              style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[#e8dfc8] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#e8dfc8] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#e8dfc8] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-80 pb-6' : 'max-h-0'
          }`}
        >
          <div className="border-t border-[#1e2428] pt-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[#7a7060] hover:text-[#e8dfc8] text-sm tracking-wider uppercase transition-colors"
                style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-[#b8960c] border border-[#b8960c] text-sm tracking-wider uppercase px-5 py-2 text-center transition-colors hover:bg-[#b8960c] hover:text-[#06080a] font-medium w-fit"
              style={{ fontFamily: 'var(--font-barlow), Barlow, system-ui' }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
