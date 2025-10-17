// Sample data for Case Studies section
export interface CaseStudy {
  id: number
  title: string
  client: string
  description: string
  image: string
  metrics: {
    label: string
    value: string
    icon: string
  }[]
  results: string[]
  layout: 'left' | 'right'
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'SaaS Dashboard Redesign',
    client: 'TechFlow Inc.',
    description: 'Complete redesign of their analytics dashboard resulting in improved user engagement and reduced support tickets.',
    image: '/api/placeholder/600/400',
    metrics: [
      { label: 'Conversion Rate', value: '+120%', icon: 'TrendingUp' },
      { label: 'Time to Value', value: '2× faster', icon: 'Clock' },
      { label: 'User Satisfaction', value: '4.8/5', icon: 'Users' }
    ],
    results: [
      'Reduced onboarding time by 60%',
      'Increased daily active users by 45%',
      'Decreased support tickets by 30%'
    ],
    layout: 'left'
  },
  {
    id: 2,
    title: 'E-commerce Platform Launch',
    client: 'RetailMax',
    description: 'Built a scalable e-commerce platform from scratch with custom features and integrations.',
    image: '/api/placeholder/600/400',
    metrics: [
      { label: 'Page Load Speed', value: '1.2s', icon: 'Clock' },
      { label: 'Mobile Conversion', value: '+85%', icon: 'TrendingUp' },
      { label: 'Revenue Growth', value: '+200%', icon: 'Users' }
    ],
    results: [
      'Launched 3 months ahead of schedule',
      'Achieved 99.9% uptime',
      'Scaled to handle 10x traffic growth'
    ],
    layout: 'right'
  }
]