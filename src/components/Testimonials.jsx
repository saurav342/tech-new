import React from 'react'

/**
 * Testimonials & Case Studies Section
 * Adapted from provided design to showcase marquee testimonials
 * alongside supporting metrics and calls-to-action.
 */
const Testimonials = () => {
  const testimonials = [
    {
      company: 'Malama EV Cabs',
      industry: 'Electric Vehicle Services',
      quote:
        "Techinium's AI-powered fleet management system optimized our routes and reduced operational costs by 45%. Outstanding results!",
      author: 'Saurav K S',
      role: 'Founder & CEO',
      metric: '45% cost reduction',
      logo: '🚗'
    },
    {
      company: 'Krushi Vista',
      industry: 'Agricultural Technology',
      quote:
        'The AI-driven crop monitoring solution increased our yield predictions accuracy by 80%. Game-changing technology for agriculture.',
      author: 'Akash D',
      role: 'CTO',
      metric: '80% better accuracy',
      logo: '🌾'
    },
    {
      company: 'Launch & Lift',
      industry: 'Startup Incubator',
      quote:
        'Their AI-accelerated development approach helped our portfolio companies go to market 60% faster. Incredible efficiency gains.',
      author: 'Pushpamala',
      role: 'Managing Partner',
      metric: '60% faster launch',
      logo: '🚀'
    },
    {
      company: 'Saga15',
      industry: 'Digital Marketing',
      quote:
        'The intelligent chatbot and automation tools boosted our client engagement by 150%. ROI exceeded all expectations.',
      author: 'Shalini G',
      role: 'Head of Operations',
      metric: '150% more engagement',
      logo: '📈'
    },
    {
      company: 'Adchef',
      industry: 'Advertising Technology',
      quote:
        "Techinium's AI-powered ad optimization platform increased our campaign performance by 90%. Exceptional technical expertise.",
      author: 'Rohit K A',
      role: 'Chief Technology Officer',
      metric: '90% better performance',
      logo: '🎯'
    },
    {
      company: 'A to Z AI',
      industry: 'Artificial Intelligence',
      quote:
        'Their AI agent deployment framework accelerated our product development by 8 months. Truly innovative solutions.',
      author: 'Dr. Emily Watson',
      role: 'Founder & CEO',
      metric: '8 months faster',
      logo: '🤖'
    },
    {
      company: 'Modern Concept',
      industry: 'Design & Technology',
      quote:
        'The AI-enhanced UI/UX tools and automated testing reduced our design iteration time by 70%. Outstanding collaboration.',
      author: 'Alex Johnson',
      role: 'Creative Director',
      metric: '70% faster iterations',
      logo: '🎨'
    }
  ]

  const additionalLoopEntries = testimonials.slice(0, 3)
  const marqueeTestimonials = [...testimonials, ...additionalLoopEntries]

  return (
    <section className="section-shell-dense bg-bg-primary border-t border-ui-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <Badge className="mb-4 border border-ui-border bg-bg-secondary text-text-secondary">
            5.0 ★★★★★ Client Rating
          </Badge>
          <h2 className="section-heading">
            Trusted by industry leaders
          </h2>
          <p className="section-subheading mt-6">
            See how AI-enhanced delivery, motion design, and rapid engineering helped teams hit ambitious launch goals.
          </p>
        </div>

        <div className="relative mb-12 overflow-hidden sm:mb-16 rounded-3xl border border-ui-border/60 bg-white/85 backdrop-blur-sm py-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white via-white/80 to-transparent" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white via-white/80 to-transparent" aria-hidden="true" />
          <div className="flex gap-6 sm:gap-8 animate-carousel will-change-transform px-4 sm:px-6">
            {marqueeTestimonials.map((testimonial, index) => (
              <Card
                key={`${testimonial.company}-${index}`}
                className="min-w-[320px] border border-ui-border bg-white shadow-lg transition-all duration-300 hover:shadow-xl sm:min-w-[380px]"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="mb-3 flex items-center gap-3 sm:mb-4">
                    <div className="text-xl sm:text-2xl" role="img" aria-label={`${testimonial.company} logo`}>
                      {testimonial.logo}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-text-primary sm:text-base">{testimonial.company}</div>
                      <div className="text-xs text-text-secondary sm:text-sm">{testimonial.industry}</div>
                    </div>
                  </div>
                  <blockquote className="mb-3 text-sm italic leading-relaxed text-text-secondary sm:mb-4 sm:text-base">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-text-primary">{testimonial.author}</div>
                      <div className="text-xs text-text-secondary">{testimonial.role}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-text-primary sm:text-lg">{testimonial.metric}</div>
                      <div className="text-xs text-text-tertiary">improvement</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center space-y-4">
          <p className="text-text-secondary">
            Want references? We’ll connect you with founders who built with us.
          </p>
        </div>
      </div>
    </section>
  )
}

const Badge = ({ className = '', children }) => (
  <span
    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${className}`}
  >
    {children}
  </span>
)

const Card = ({ className = '', children }) => (
  <div className={`rounded-2xl ${className}`}>
    {children}
  </div>
)

const CardContent = ({ className = '', children }) => (
  <div className={className}>
    {children}
  </div>
)

export default Testimonials
