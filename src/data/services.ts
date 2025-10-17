// Sample data for Services section
export interface Service {
  id: number
  icon: string
  title: string
  description: string
  features: string[]
  cta: string
}

export const services: Service[] = [
  {
    id: 1,
    icon: 'Palette',
    title: 'Product Design',
    description: 'User-centered design that converts. We create intuitive interfaces and experiences that your users will love.',
    features: [
      'User research & testing',
      'UI/UX design',
      'Design systems',
      'Prototyping'
    ],
    cta: 'Start Design Project'
  },
  {
    id: 2,
    icon: 'Code',
    title: 'Engineering',
    description: 'Scalable, performant code that grows with your business. Built with modern technologies and best practices.',
    features: [
      'Frontend development',
      'Backend architecture',
      'API design',
      'Performance optimization'
    ],
    cta: 'Discuss Development'
  },
  {
    id: 3,
    icon: 'Rocket',
    title: 'Landing Pages',
    description: 'High-converting landing pages that turn visitors into customers. Optimized for speed and conversion.',
    features: [
      'Conversion optimization',
      'A/B testing',
      'Analytics setup',
      'SEO optimization'
    ],
    cta: 'Launch Landing Page'
  }
]
