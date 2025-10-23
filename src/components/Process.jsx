import React from 'react'
import { ArrowRight, Search, PenTool, Code2, Rocket } from 'lucide-react'

/**
 * Process Section Component - Light Agency Theme
 * 
 * Features:
 * - 4-step horizontal timeline
 * - Clean icons and descriptions
 * - Responsive design
 * - Subtle animations
 * 
 * Props:
 * - onContactClick: Function to handle CTA clicks
 */
const Process = ({ onContactClick }) => {
  const steps = [
    {
      icon: Search,
      title: 'Discovery',
      description: 'We start by understanding your business, users, and goals through research and stakeholder interviews.',
      details: [
        'User research',
        'Competitive analysis',
        'Technical requirements',
        'Project scope definition'
      ]
    },
    {
      icon: PenTool,
      title: 'Design',
      description: 'Creating user-centered designs with wireframes, prototypes, and high-fidelity mockups.',
      details: [
        'Wireframing',
        'User flows',
        'Visual design',
        'Prototyping'
      ]
    },
    {
      icon: Code2,
      title: 'Development',
      description: 'Building scalable, performant solutions using modern technologies and best practices.',
      details: [
        'Frontend development',
        'Backend architecture',
        'API integration',
        'Testing & QA'
      ]
    },
    {
      icon: Rocket,
      title: 'Launch',
      description: 'Deploying your product with ongoing support, monitoring, and optimization.',
      details: [
        'Deployment',
        'Performance monitoring',
        'User feedback',
        'Iterative improvements'
      ]
    }
  ]

  return (
    <section className="section-shell" role="region" aria-labelledby="process-heading">
      <div className="container-light">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-eyebrow">Methodology</span>
          <h2 id="process-heading" className="section-heading mt-4">
            A transparent, AI-assisted build process
          </h2>
          <p className="section-subheading mt-6">
            Every engagement follows a rhythm that keeps stakeholders aligned, feedback flowing, and shipping velocity high.
          </p>
          <p className="section-microcopy">
            Each step includes async updates, live working sessions, and approved checkpoints before we move forward.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-ui-border/60"></div>
          
          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-on-scroll hover-scale bg-white/85 backdrop-blur-sm border border-ui-border/60 rounded-2xl p-6 flex flex-col gap-4"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Number & Icon */}
                <div className="flex flex-col items-center">
                  <div className="relative z-10 w-16 h-16 bg-bg-primary border-4 border-ui-border rounded-full flex items-center justify-center mb-4 transition-colors duration-400 hover:border-accent-primary" aria-hidden="true">
                    <step.icon className="w-8 h-8 text-accent-primary" />
                  </div>
                  
                  {/* Step Number */}
                  <div className="w-8 h-8 bg-accent-gradient rounded-full flex items-center justify-center text-white font-bold text-sm shadow-soft">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-bold text-text-primary">
                    {step.title}
                  </h3>
                  
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-sm text-text-tertiary">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center pt-4">
                    <ArrowRight className="w-6 h-6 text-ui-border" aria-hidden="true" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-on-scroll space-y-4">
          <h3 className="text-2xl font-bold text-text-primary">
            Your all-in-one design + build partner.
          </h3>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Ready for a walkthrough? We can scope your first sprint and align stakeholders in just 30 minutes.
          </p>
          <button
            type="button"
            onClick={() => onContactClick?.('Discovery Call')}
            className="cta-secondary"
          >
            Map your first sprint
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Process
