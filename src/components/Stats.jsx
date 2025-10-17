import React from 'react'

/**
 * Stats Section Component
 * 
 * Features:
 * - Dark background (#0A0A0A)
 * - Four-column layout with performance metrics
 * - Left-aligned content within each column
 * - Responsive stacking on mobile
 * - Animated counters on scroll
 * 
 * Props:
 * - None (uses static data, but can be made configurable)
 */
const Stats = () => {
  const stats = [
    {
      label: 'Uptime',
      value: '99.9%',
      description: 'Reliable service availability'
    },
    {
      label: 'Users',
      value: '5M+',
      description: 'Active users worldwide'
    },
    {
      label: 'Response Time',
      value: '0.5s',
      description: 'Average response time'
    },
    {
      label: 'Performance',
      value: '10x',
      description: 'Faster than competitors'
    }
  ]

  return (
    <section className="bg-bg-primary section-padding-dark" role="region" aria-labelledby="stats-heading">
      <div className="container-dark">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 id="stats-heading" className="text-h2 font-bold text-text-primary mb-4">
            Accelerated Search at Your Fingertips
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Say goodbye to delays, hello to instant answers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="stats-card-dark animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-sm text-text-tertiary font-medium mb-2 uppercase tracking-wide">
                {stat.label}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-text-primary mb-3">
                {stat.value}
              </div>
              <div className="text-sm text-text-secondary leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
