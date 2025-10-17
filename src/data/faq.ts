// Sample data for FAQ section
export interface FAQ {
  id: number
  question: string
  answer: string
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: 'What is your typical project timeline?',
    answer: 'Most projects take 4-12 weeks depending on scope and complexity. We provide detailed timelines during our initial consultation and keep you updated throughout the process.'
  },
  {
    id: 2,
    question: 'Do you work with startups or only established companies?',
    answer: 'We work with both! We specialize in helping startups and early-stage SaaS teams, but we also work with established companies looking to modernize their products.'
  },
  {
    id: 3,
    question: 'What technologies do you use?',
    answer: 'We use modern, proven technologies including React, Next.js, TypeScript, Node.js, and cloud platforms like Vercel and AWS. We choose the best tools for each project.'
  },
  {
    id: 4,
    question: 'Do you provide ongoing support after launch?',
    answer: 'Yes! We offer maintenance packages and ongoing support to ensure your product continues to perform well. We also provide training for your team.'
  }
]
