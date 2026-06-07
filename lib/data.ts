export const siteConfig = {
  name: 'P8N Defense',
  tagline: 'Government-Grade Protection. Private-Sector Precision.',
  slogan: 'sablutho',
  founder: 'Cyril Paton',
  address: '11 Mignon Place, Morningside, Durban, South Africa',
  email: 'info@p8ndefense.com',
  cell: '+27 82 517 5039',
  office: '+27 31 316 5158',
  website: 'p8ndefense.com',
  url: 'https://www.p8ndefense.com',
}

export interface Service {
  id: string
  icon: string
  name: string
  tagline: string
  description: string
  points: string[]
  accentColor?: string
}

export const services: Service[] = [
  {
    id: 'close-protection',
    icon: '🛡',
    name: 'Close Protection',
    tagline: 'Your Safety. Our Mission.',
    description:
      'Intelligence-led close protection for HNWIs, executives and families. Drone-assisted advance reconnaissance delivers real-time aerial threat mapping before your principal moves.',
    points: [
      'Principal and family protection programmes',
      'Single and multi-operator details',
      'Intelligence-led advance work and threat assessment',
      'Residential and mobile security operations',
      'Travel security across Africa and internationally',
      'Emergency extraction planning and execution',
      'Drone-assisted advance reconnaissance and aerial threat mapping',
      'Advanced offensive and defensive driving trained operators',
      'All operators are trained operational medics and first responders',
    ],
  },
  {
    id: 'aviation-security',
    icon: '✈',
    name: 'Aviation Security',
    tagline: 'Gate to Destination.',
    description:
      'End-to-end security for private jet operators and aircraft owners. UAV surveillance of landing zones and FBO perimeters adds a critical aerial layer of threat assessment.',
    points: [
      'Ground and airside security',
      'Pre-flight threat and environment assessment',
      'In-flight security personnel (where required)',
      'FBO and hangar security protocols',
      'Aviation security consulting',
      'UAV aerial perimeter surveillance at FBOs and landing zones',
    ],
  },
  {
    id: 'asset-protection',
    icon: '◆',
    name: 'Asset Protection',
    tagline: 'What You Have Built, We Protect.',
    description:
      'Comprehensive threat and vulnerability assessments including drone-based aerial surveys, layered security protocols, and personnel with the discipline and discretion significant assets demand.',
    points: [
      'Estate and residential security design and management',
      'Threat and vulnerability assessments for high-value properties',
      'Art, collection, and valuables protection protocols',
      'Corporate campus security',
      'Security consulting for acquisitions in elevated-risk environments',
      'Drone-based aerial surveys and estate perimeter threat assessment',
    ],
  },
  {
    id: 'event-security',
    icon: '🎯',
    name: 'Event Security',
    tagline: 'Every Event. Zero Incidents.',
    description:
      'Full-spectrum security management for major corporate and private events — advance planning, VIP protection, access control, aerial perimeter surveillance, and on-site operational medics.',
    points: [
      'VIP and HNWI close protection within events',
      'Advance threat assessment and venue planning',
      'Access control and crowd management',
      'Drone-assisted aerial perimeter surveillance',
      'Rapid response and emergency extraction',
      'On-site operational medics for immediate first response',
      'Discreet professional operator deployment',
    ],
  },
  {
    id: 'armoured-vehicles',
    icon: '🚗',
    name: 'Armoured Luxury Vehicles',
    tagline: 'Secure Movement. No Compromise.',
    description:
      'Armoured luxury vehicle deployment for principals in elevated-risk environments. Discreet, route-planned, and fully integrated with close protection details.',
    points: [
      'Armoured luxury vehicle deployment',
      'Secure chauffeur and motorcade services',
      'Advance route planning and reconnaissance',
      'Integration with close protection details',
      'High-risk environment travel logistics',
      'All drivers trained in advanced offensive and defensive driving',
    ],
  },
  {
    id: 'air-mobility',
    icon: '🚁',
    name: 'Air Mobility — Helicopter & Fixed Wing',
    tagline: 'Rapid. Flexible. Aerial.',
    description:
      'Through a formal MoU with a helicopter and fixed-wing operator at Virginia Airport, Durban, P8N Defense provides air mobility for extraction, secure transfer, and aerial reconnaissance.',
    points: [
      'MoU partner: Virginia Airport Durban',
      'Helicopter and fixed-wing capability',
      'Rapid principal extraction and evacuation',
      'Secure air transfers across Southern Africa',
      'Aerial reconnaissance support',
      'Coordinated air-ground operations',
    ],
  },
]

export interface Pillar {
  number: string
  title: string
  description: string
  accentGreen?: boolean
}

export const pillars: Pillar[] = [
  {
    number: '01',
    title: 'Tier-One Capability',
    description:
      "Every operator from SA's most elite government units. Special operations discipline applied to private principal protection.",
  },
  {
    number: '02',
    title: 'Intelligence-Led Protection',
    description:
      'Advance threat assessments, route analysis, environment profiling before any principal moves. Protection begins before physical presence.',
  },
  {
    number: '03',
    title: 'Advanced Driving — Offensive & Defensive',
    description:
      'All operators trained in advanced offensive and defensive driving. Vehicle-based threats anticipated, countered and controlled.',
  },
  {
    number: '04',
    title: 'Drone-Enabled Aerial Intelligence',
    description:
      'UAV technology for aerial threat assessment, perimeter surveillance and real-time environment profiling. Decisive tactical advantage.',
  },
  {
    number: '05',
    title: 'Absolute Discretion',
    description:
      'We never disclose clients, operations or methods. Lives and privacy protected with equal rigour. Always.',
  },
  {
    number: '06',
    title: 'African Expertise',
    description:
      'Built on the continent. Deep understanding of political, criminal and operational landscape of Africa.',
  },
  {
    number: '07',
    title: 'Operational Medics & First Responders',
    description:
      'Every operator is a trained operational medic and first responder. Security and medical capability unified in every deployment.',
    accentGreen: true,
  },
]

export interface Credential {
  title: string
  description: string
  type: 'gold' | 'standard' | 'green'
}

export const credentials: Credential[] = [
  {
    title: 'Ronin SA Close Protection Academy',
    description: 'World-renowned, internationally accredited CP training',
    type: 'gold',
  },
  {
    title: 'United Nations UNDSS Certified',
    description: 'Globally recognised standard in safety and security',
    type: 'gold',
  },
  {
    title: 'BSAFE Certified',
    description: 'UN-standard safety and security certification',
    type: 'gold',
  },
  {
    title: 'National Intervention Unit (NIU)',
    description: 'SAPS medium-to-high-risk operations',
    type: 'gold',
  },
  {
    title: 'Close Protection Assignments',
    description: 'Extensive local and international experience',
    type: 'gold',
  },
  {
    title: 'Special Task Force (STF)',
    description: 'SAPS elite counter-terrorism and hostage rescue',
    type: 'standard',
  },
  {
    title: 'South African Special Forces',
    description: 'Military special operations',
    type: 'standard',
  },
  {
    title: 'Military Intelligence',
    description: 'Threat analysis and intelligence operations',
    type: 'standard',
  },
  {
    title: 'Operational Medics & First Responders',
    description: 'Security and medical capability in every deployment',
    type: 'green',
  },
  {
    title: 'Advanced Driving — Offensive & Defensive',
    description: 'Vehicle threats anticipated and countered',
    type: 'green',
  },
]

export const stats = [
  { value: 'Tier 1', label: 'Operator Standard' },
  { value: '100%', label: 'Client Discretion' },
  { value: '4', label: 'Elite Unit Backgrounds' },
  { value: 'Africa', label: 'Deep Operational Knowledge' },
]
