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
      price: '$1000',
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
      price: '$4000',
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
      price: '$5000',
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
    <section className="section-shell" role="region" aria-labelledby="pricing-heading">
      <div className="container-light">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-eyebrow">Engagements</span>
          <h2 id="pricing-heading" className="section-heading mt-4">
            Pricing built for momentum
          </h2>
          <p className="section-subheading mt-6">
            Flat-rate pricing, no surprise retainers, and every package includes strategy, design, build, and launch support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`card-light animate-on-scroll h-full flex flex-col justify-between`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Package Header */}
              <div className="text-center mb-8 space-y-3">
                <h3 className="text-2xl font-bold text-text-primary">
                  {pkg.name}
                </h3>
                <div className="text-3xl font-bold text-accent-primary">
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
                      <Check className="w-3 h-3 text-white" aria-hidden="true" />
                    </div>
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="space-y-3">
                <a
                  href="https://cal.com/techinium/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-primary w-full justify-center"
                  aria-label={`${pkg.cta} for ${pkg.name}`}
                >
                  {pkg.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-sm text-text-tertiary text-center">
                  No commitment up front — we outline the deliverables together first.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-on-scroll space-y-4">
          <p className="text-text-secondary">
            Need a custom engagement or ongoing product squad? Let’s tailor a plan for your roadmap.
          </p>
          <button
            type="button"
            onClick={() => onContactClick?.('Custom Pricing')}
            className="cta-secondary"
          >
            Build a custom plan
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Pricing
