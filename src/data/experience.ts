export interface ExperienceItem {
  role: string
  organization: string
  period: string
  /** Filename (no extension) of an image in src/assets/experience/ — .png, .jpg, .jpeg, .webp, or .svg all work. */
  image: string
  description: string
  bullets: string[]
}

export const aiesecExperience: ExperienceItem[] = [
  {
    role: 'Graphic Designer – National B2C Team',
    organization: 'AIESEC in Sri Lanka',
    period: 'Feb 2026 — Present',
    image: 'graphic-designer',
    description:
      'Leading B2B initiatives and designing client-facing marketing material for the national B2C team.',
    bullets: [
      'Led business-to-business (B2B) initiatives, analyzing market trends and client data to optimize outreach strategies and partnership engagement',
      'Designed proposals and marketing campaigns using Canva and Figma, creating visually appealing and effective client presentations',
    ],
  },
  {
    role: "Marketing Organizing Committee Vice President (OCVP) – SHEvolve '26",
    organization: 'AIESEC in Colombo Central',
    period: 'Jan 2026 — May 2026',
    image: 'ocvp',
    description: "Led the marketing function for SHEvolve '26, a flagship AIESEC conference.",
    bullets: [
      "Led the marketing function for SHEvolve '26, overseeing promotional strategies, campaign planning, and content creation for event outreach",
      'Coordinated with sub-teams to ensure consistent branding across digital platforms and drove engagement through targeted marketing initiatives',
    ],
  },
  {
    role: 'Business to Customer Specialist – Outgoing Global Volunteer',
    organization: 'AIESEC in Colombo Central',
    period: 'Jan 2026 — Present',
    image: 'b2c-specialist',
    description: 'Driving digital campaigns and team coordination for the Outgoing Global Volunteer program.',
    bullets: [
      'Promoted global volunteer programs through targeted digital campaigns, achieving 100+ sign-ups per month',
      'Managed and supported team leaders and members to ensure performance targets and campaign success through structured coordination and engagement strategies',
    ],
  },
  {
    role: 'Business to Business and Analytics Lead – Outgoing Global Talent Business to Customer',
    organization: 'AIESEC in Colombo Central',
    period: 'Feb 2024 — Dec 2024',
    image: 'b2b-analytics-lead',
    description: 'Led B2B outreach and analytics for the Outgoing Global Talent Business to Customer function.',
    bullets: [
      'Led business-to-business (B2B) initiatives, analyzing market trends and client data to optimize outreach strategies and partnership engagement',
      'Designed proposals and marketing campaigns using Canva and Figma, creating visually appealing and effective client presentations',
    ],
  },
  {
    role: 'Video Editor – Showcasing Team',
    organization: 'AIESEC in Colombo Central',
    period: 'Feb 2024 — Dec 2024',
    image: 'video-editor',
    description: 'Produced promotional and event-highlight video content for exchange and volunteer programs.',
    bullets: [
      'Produced and edited promotional videos using tools like CapCut and Canva to showcase exchange programs and volunteer activities',
      'Collaborated with the showcasing team to capture event highlights and craft engaging visual content for social media and internal campaigns',
    ],
  },
]
