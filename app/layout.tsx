import type { Metadata } from 'next'
import { Cormorant_Garamond, Barlow } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'P8N Defense | Elite Close Protection & Security Services South Africa',
  description:
    'P8N Defense — founded by Cyril Paton, Ronin SA CP Academy graduate, UN UNDSS certified, BSAFE certified — provides elite close protection, aviation security, event security, armoured vehicles and air mobility across South Africa. All operators are trained operational medics, first responders and advanced drivers.',
  keywords: [
    'close protection South Africa',
    'executive protection Durban',
    'HNWI security',
    'aviation security South Africa',
    'event security',
    'armoured vehicles',
    'UNDSS certified',
    'Ronin SA',
    'NIU operators',
    'P8N Defense',
    'private security South Africa',
  ],
  authors: [{ name: 'P8N Defense' }],
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.p8ndefense.com' },
  openGraph: {
    siteName: 'P8N Defense',
    locale: 'en_ZA',
    type: 'website',
    url: 'https://www.p8ndefense.com',
    title: 'P8N Defense | Elite Close Protection & Security Services South Africa',
    description:
      'Government-Grade Protection. Private-Sector Precision. Elite close protection, aviation security, asset protection and air mobility across South Africa.',
  },
  other: {
    'geo.region': 'ZA-KZN',
    'geo.placename': 'Durban, KwaZulu-Natal, South Africa',
    'geo.position': '-29.8587;31.0218',
    ICBM: '-29.8587, 31.0218',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': 'https://www.p8ndefense.com',
      name: 'P8N Defense',
      description:
        'Elite close protection, aviation security, asset protection, event security, armoured vehicles, and air mobility services.',
      url: 'https://www.p8ndefense.com',
      telephone: '+27825175039',
      email: 'info@p8ndefense.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '11 Mignon Place',
        addressLocality: 'Morningside',
        addressRegion: 'KwaZulu-Natal',
        postalCode: '4001',
        addressCountry: 'ZA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -29.8587,
        longitude: 31.0218,
      },
      areaServed: { '@type': 'Country', name: 'South Africa' },
      founder: { '@type': 'Person', name: 'Cyril Paton' },
      slogan: 'Government-Grade Protection. Private-Sector Precision.',
      priceRange: '$$$$',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA" className={`${cormorant.variable} ${barlow.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
