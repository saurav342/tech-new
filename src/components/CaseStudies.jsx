import React from 'react'
import { ArrowRight, TrendingUp, Clock, Users } from 'lucide-react'

/**
 * Case Studies Section Component - Light Agency Theme
 * 
 * Features:
 * - Two wide cards with alternating layout
 * - Image left, metrics + writeup right
 * - Success metrics with badges
 * - Responsive design
 * 
 * Props:
 * - onContactClick: Function to handle CTA clicks
 */
const CaseStudies = ({ onContactClick }) => {
  const caseStudies = [
    {
      id: 1,
      title: 'Malamacabs Mobility Platform',
      client: 'Malamacabs',
      description: 'Built an end-to-end ride hailing platform with real-time driver tracking, automated payouts, and a unified customer booking experience.',
      image: {
        webp: '/screenshots/malama.webp',
        fallback: '/screenshots/malama.png'
      },
      imageAlt: 'Malamacabs driver and passenger dashboards',
      metrics: [
        { label: 'Time to Launch', value: '6 weeks', icon: Clock },
        { label: 'Bookings Growth', value: '+180%', icon: TrendingUp },
        { label: 'Driver Satisfaction', value: '4.9/5', icon: Users }
      ],
      results: [
        'Launched passenger and driver apps in just 6 weeks',
        'Increased average weekly bookings by 180% post-launch',
        'Reduced driver payout delays from 5 days to real-time'
      ],
      layout: 'left' // Image on left, content on right
    },
    {
      id: 2,
      title: 'Gotitli B2B Ordering Suite',
      client: 'Gotitli',
      description: 'Scaled a B2B procurement marketplace with real-time inventory sync, digital catalogs, and automated invoicing across vendors.',
      image: {
        webp: '/screenshots/gotitli.webp',
        fallback: '/screenshots/gotitli.png'
      },
      imageAlt: 'Gotitli B2B ordering interface',
      metrics: [
        { label: 'Conversion Lift', value: '+230%', icon: TrendingUp },
        { label: 'Order Processing', value: '3× faster', icon: Clock },
        { label: 'Active Vendors', value: '2.5k+', icon: Users }
      ],
      results: [
        'Migrated 45k SKUs with zero downtime',
        'Cut manual reconciliation time by 70%',
        'Expanded vendor network to 2.5k+ active suppliers'
      ],
      layout: 'right' // Image on right, content on left
    }
  ]

  return (
    <section className="section-shell surface-contrast" role="region" aria-labelledby="case-studies-heading">
      <div className="container-light">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-eyebrow">Proof</span>
          <h2 id="case-studies-heading" className="section-heading mt-4">
            Case studies from fast-moving teams
          </h2>
          <p className="section-subheading mt-6">
            Real outcomes from founders and operators who needed to ship quickly — without compromising craft.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-20">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center animate-on-scroll"
            >
              {/* Image */}
              <div className={`${study.layout === 'right' ? 'lg:col-start-2 lg:row-start-1' : ''}`}>
                <div className="relative group">
                  <div className="aspect-[3/2] bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-soft overflow-hidden border border-ui-border/60">
                    <picture>
                      <source srcSet={study.image.webp} type="image/webp" />
                      <img
                        src={study.image.fallback}
                        alt={study.imageAlt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width="1505"
                        height="857"
                      />
                    </picture>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-soft-blue rounded-xl shadow-card transform rotate-12 animate-float" aria-hidden="true"></div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-light-purple rounded-lg shadow-card transform -rotate-12 animate-float" style={{animationDelay: '1s'}} aria-hidden="true"></div>
                </div>
              </div>

              {/* Content */}
              <div className={`${study.layout === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="space-y-6 bg-white/85 backdrop-blur-sm border border-ui-border/60 rounded-3xl p-8 shadow-card">
                  {/* Header */}
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-2">
                      {study.title}
                    </h3>
                    <p className="text-text-secondary text-lg">
                      {study.client}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary leading-relaxed">
                    {study.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {study.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="bg-bg-primary rounded-xl p-4 shadow-card">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-accent-gradient rounded-lg flex items-center justify-center" aria-hidden="true">
                            <metric.icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-sm text-text-secondary">{metric.label}</span>
                        </div>
                        <div className="text-2xl font-bold text-text-primary">
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="font-semibold text-text-primary mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-text-secondary">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <a
                    href="https://cal.com/techinium/15min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-secondary w-full sm:w-auto"
                    aria-label={`Learn more about ${study.title}`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-on-scroll space-y-4">
          <p className="text-text-secondary">
            Want to see more case studies or discuss your project?
          </p>
          <a
            href="https://cal.com/techinium/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary justify-center inline-flex"
            aria-label="View all case studies"
          >
            View All Case Studies
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-sm text-text-tertiary">
            We’ll unpack your use case and send a tailored timeline within 24 hours.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
