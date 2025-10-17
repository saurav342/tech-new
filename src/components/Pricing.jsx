import React from 'react'
import { ArrowRight, Check } from 'lucide-react'

/**
 * Pricing Section Component - Light Agency Theme
 * 
 * Features:
 * - 3 pricing tiers matching skale.solutions
 * - Clean, minimal design
 * - Responsive layout
 * - CTA buttons
 * 
 * Props:
 * - onContactClick: Function to handle CTA clicks
 */
const Pricing = ({ onContactClick }) => {
  const packages = [
    {
      name: 'Landing Creation',
      price: '$20000+',
      description: 'Every business needs a landing, and it\'s never been easier to get one...',
      features: [
        '2 spots available',
        '2 design concepts',
        'Full copywriting',
        'Unlimited 3D models',
        'Framer development',
        '2 rounds of revisions',
        '1 month of free support'
      ],
      cta: 'Book a 15-min call'
    },
    {
      name: 'Product Design',
      price: '$20000+',
      description: 'Need an MVP, a high-end dashboard or a SaaS? We\'ll help you to build all of that',
      features: [
        '1 spot available',
        'Unlimited design concepts',
        '10+ desktop/mobile screens',
        'Unlimited 3D models',
        'Custom Dev',
        '1 month of free support'
      ],
      cta: 'Book a 15-min call'
    },
    {
      name: 'Launch Videos',
      price: '$15000+',
      description: 'Launching a product or a new feature? Then you definitely need a promo sec animation',
      features: [
        '3 spots available',
        '10-30 sec length',
        '2 rounds of revisions',
        'ETA up to 1 week',
        'Everything in AE'
      ],
      cta: 'Book a 15-min call'
    }
  ]

  return (
    <section className="bg-bg-primary py-24 lg:py-32" role="region" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-5 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 id="pricing-heading" className="text-3xl md:text-4xl lg:text-h2 font-bold text-text-primary mb-6">
            Pricing
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Simple, Transparent Pricing for Startups
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-bg-primary border border-ui-border rounded-2xl p-8 shadow-card hover:shadow-soft transition-all duration-400 hover:-translate-y-1 animate-on-scroll hover-lift hover-glow`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Package Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  {pkg.name}
                </h3>
                <div className="text-3xl font-bold text-accent-primary mb-4">
                  {pkg.price}
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-accent-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => onContactClick && onContactClick()}
                className="w-full bg-accent-gradient text-white py-4 px-6 rounded-xl font-medium hover:shadow-soft transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
                aria-label={`${pkg.cta} for ${pkg.name}`}
              >
                {pkg.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-on-scroll">
          <p className="text-text-secondary mb-4">
            or reach me out on WhatsApp / Telegram :3
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
