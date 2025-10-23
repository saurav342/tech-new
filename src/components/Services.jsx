import React from 'react'
import { ArrowRight, TrendingUp, Target, BarChart3 } from 'lucide-react'

/**
 * Services Section Component - Light Agency Theme
 * 
 * Features:
 * - 3 horizontal service cards
 * - Clean, minimal design with soft shadows
 * - Icons, titles, descriptions, and CTAs
 * - Responsive grid layout
 * - Hover animations
 * 
 * Props:
 * - onContactClick: Function to handle CTA clicks
 */
const Services = ({ onContactClick }) => {
  const handleServiceCta = (serviceTitle) => {
    if (onContactClick) {
      onContactClick(serviceTitle)
    } else if (typeof window !== 'undefined') {
      window.open('https://cal.com/techinium/15min', '_blank', 'noopener,noreferrer')
    }
  }

  const services = [
    {
      icon: TrendingUp,
      title: 'Turn on Growth',
      subtitle: 'Get a Huge Funding',
      description: 'We have helped tens of startups all over the world to get $70m+ in funding in total. We make websites that impress users',
      cta: 'Start Design Project'
    },
    {
      icon: Target,
      title: 'Conversions',
      subtitle: 'Increase Conversions',
      description: 'Websites so stunning that it will increases your conversion rate by 120%, decrease the bounce-rate and improve engagement.',
      cta: 'Discuss Development'
    },
    {
      icon: BarChart3,
      title: 'Stats will speak for itself',
      subtitle: 'Stay Ahead of the Market',
      description: 'Every page on the web is 1:1 similar to each other. But it\'s your chance to get something more unique and unusual',
      cta: 'Launch Landing Page'
    }
  ]

  return (
    <section className="section-shell surface-alt" role="region" aria-labelledby="services-heading">
      <div className="container-light">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-eyebrow">Capabilities</span>
          <h2 id="services-heading" className="section-heading mt-4">
            Designs that drive meaningful growth
          </h2>
          <p className="section-subheading mt-6">
            From zero-to-one MVPs to conversion-focused launchpads, our cross-functional team builds experiences that move the metrics that matter.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`card-light h-full flex flex-col animate-on-scroll`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-accent-gradient rounded-2xl flex items-center justify-center mb-6 transition-transform duration-400 hover:scale-105" aria-hidden="true">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                {service.title}
              </h3>
              
              <h4 className="text-lg font-semibold text-accent-primary mb-4">
                {service.subtitle}
              </h4>
              
              <p className="text-text-secondary mb-8 leading-relaxed">
                {service.description}
              </p>

              {/* CTA */}
              <div className="mt-auto space-y-3">
                <button
                  type="button"
                  onClick={() => handleServiceCta(service.title)}
                  className="cta-secondary w-full justify-center"
                  aria-label={`${service.cta} for ${service.title}`}
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-sm text-text-tertiary text-center">
                  Includes roadmap review + actionable next steps.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          <div className="stats-card-light text-center animate-on-scroll">
            <div className="text-4xl font-bold text-accent-primary mb-2">+80%</div>
            <div className="text-text-secondary">User retention</div>
          </div>
          <div className="stats-card-light text-center animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl font-bold text-accent-primary mb-2">+150%</div>
            <div className="text-text-secondary">Qualified leads</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
