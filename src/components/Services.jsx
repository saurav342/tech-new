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
    <section className="bg-bg-secondary py-24 lg:py-32" role="region" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-5 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 id="services-heading" className="text-3xl md:text-4xl lg:text-h2 font-bold text-text-primary mb-6">
            Designs That Drive Results
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            What we can help you to achieve?
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-bg-primary rounded-2xl p-8 shadow-card hover:shadow-soft transition-all duration-400 hover:-translate-y-1 group animate-on-scroll hover-lift`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-accent-gradient rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-400">
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
              <button
                onClick={() => onContactClick && onContactClick()}
                className="w-full bg-accent-gradient text-white py-3 px-6 rounded-xl font-medium hover:shadow-soft transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
                aria-label={`${service.cta} for ${service.title}`}
              >
                {service.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-bg-primary rounded-2xl p-8 shadow-card text-center animate-on-scroll hover-scale">
            <div className="text-4xl font-bold text-accent-primary mb-2">+80%</div>
            <div className="text-text-secondary">User Retention</div>
          </div>
          <div className="bg-bg-primary rounded-2xl p-8 shadow-card text-center animate-on-scroll hover-scale" style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl font-bold text-accent-primary mb-2">+150%</div>
            <div className="text-text-secondary">Leads</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
