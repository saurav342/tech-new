// Sample data for Testimonials section
export interface Testimonial {
  id: number
  name: string
  title: string
  company: string
  avatar: string
  rating: number
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Chen',
    title: 'Founder & CEO',
    company: 'DataFlow',
    avatar: '/api/placeholder/80/80',
    rating: 5,
    quote: 'The team delivered exactly what we needed, on time and within budget. Our user engagement increased by 150% after the redesign.'
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    title: 'Product Manager',
    company: 'CloudSync',
    avatar: '/api/placeholder/80/80',
    rating: 5,
    quote: 'Professional, creative, and results-driven. They transformed our complex dashboard into something our users actually love to use.'
  },
  {
    id: 3,
    name: 'Emily Watson',
    title: 'CTO',
    company: 'TechStart',
    avatar: '/api/placeholder/80/80',
    rating: 5,
    quote: 'From concept to launch, they handled everything. The code quality is excellent and the design is beautiful. Highly recommended.'
  }
]