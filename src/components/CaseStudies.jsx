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
      title: 'SaaS Dashboard Redesign',
      client: 'TechFlow Inc.',
      description: 'Complete redesign of their analytics dashboard resulting in improved user engagement and reduced support tickets.',
      image: '/api/placeholder/600/400',
      metrics: [
        { label: 'Conversion Rate', value: '+120%', icon: TrendingUp },
        { label: 'Time to Value', value: '2× faster', icon: Clock },
        { label: 'User Satisfaction', value: '4.8/5', icon: Users }
      ],
      results: [
        'Reduced onboarding time by 60%',
        'Increased daily active users by 45%',
        'Decreased support tickets by 30%'
      ],
      layout: 'left' // Image on left, content on right
    },
    {
      id: 2,
      title: 'E-commerce Platform Launch',
      client: 'RetailMax',
      description: 'Built a scalable e-commerce platform from scratch with custom features and integrations.',
      image: '/api/placeholder/600/400',
      metrics: [
        { label: 'Page Load Speed', value: '1.2s', icon: Clock },
        { label: 'Mobile Conversion', value: '+85%', icon: TrendingUp },
        { label: 'Revenue Growth', value: '+200%', icon: Users }
      ],
      results: [
        'Launched 3 months ahead of schedule',
        'Achieved 99.9% uptime',
        'Scaled to handle 10x traffic growth'
      ],
      layout: 'right' // Image on right, content on left
    }
  ]

  return (
    <section className="bg-bg-secondary py-24 lg:py-32" role="region" aria-labelledby="case-studies-heading">
      <div className="max-w-7xl mx-auto px-5 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 id="case-studies-heading" className="text-3xl md:text-4xl lg:text-h2 font-bold text-text-primary mb-6">
            Case Studies
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Real results from real projects. See how we've helped startups 
            and SaaS teams achieve their goals.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                study.layout === 'right' ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`${study.layout === 'right' ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <div className="aspect-[3/2] bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-soft overflow-hidden">
                    {/* Placeholder for actual image */}
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-accent-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <TrendingUp className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-text-secondary">Project Screenshot</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-soft-blue rounded-xl shadow-card transform rotate-12 animate-float"></div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-light-purple rounded-lg shadow-card transform -rotate-12 animate-float" style={{animationDelay: '1s'}}></div>
                </div>
              </div>

              {/* Content */}
              <div className={`${study.layout === 'right' ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-6">
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
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {study.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="bg-bg-primary rounded-xl p-4 shadow-card">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-accent-gradient rounded-lg flex items-center justify-center">
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
                  <button
                    onClick={() => onContactClick && onContactClick()}
                    className="inline-flex items-center gap-2 text-accent-primary font-medium hover:text-accent-secondary transition-colors duration-300"
                    aria-label={`Learn more about ${study.title}`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-text-secondary mb-6">
            Want to see more case studies or discuss your project?
          </p>
          <button
            onClick={() => onContactClick && onContactClick()}
            className="bg-accent-gradient text-white px-8 py-4 rounded-xl font-medium hover:shadow-soft transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 mx-auto"
            aria-label="View all case studies"
          >
            View All Case Studies
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
