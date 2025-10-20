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
    <section className="bg-bg-primary py-12 sm:py-16 md:py-20 lg:py-24" role="region" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-5 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <h2 id="process-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            How We Work
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our Process, Step by Step
          </p>
          <p className="text-lg text-text-tertiary mt-4">
            From the first step to the final product at your hand!
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-ui-border"></div>
          
          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={index} className={`relative animate-on-scroll hover-scale`} style={{ animationDelay: `${index * 0.3}s` }}>
                {/* Step Number & Icon */}
                <div className="flex flex-col items-center mb-6">
                  <div className="relative z-10 w-16 h-16 bg-bg-primary border-4 border-ui-border rounded-full flex items-center justify-center mb-4 group-hover:border-accent-primary transition-colors duration-400 hover-scale">
                    <step.icon className="w-8 h-8 text-accent-primary" />
                  </div>
                  
                  {/* Step Number */}
                  <div className="w-8 h-8 bg-accent-gradient rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-text-secondary mb-4 leading-relaxed">
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
                  <div className="lg:hidden flex justify-center mt-8">
                    <ArrowRight className="w-6 h-6 text-ui-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-on-scroll">
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            Your all in one design partner.
          </h3>
        </div>
      </div>
    </section>
  )
}

export default Process
