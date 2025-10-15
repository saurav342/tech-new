import { useEffect } from 'react'
import { 
  Quote, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Target,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Zap
} from 'lucide-react'

const CaseStudies = ({ onContactClick }) => {
  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up')
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const caseStudies = [
    {
      id: 1,
      title: 'FinTech Startup: 10x User Growth',
      company: 'PayFlow',
      industry: 'Financial Technology',
      challenge: 'Pre-seed fintech startup needed to launch their payment processing MVP quickly while ensuring security and scalability.',
      solution: 'We implemented our Launch package with AI-accelerated development, focusing on core payment features and regulatory compliance.',
      results: [
        'Launched MVP in 8 weeks (3x faster than traditional development)',
        'Achieved 10x user growth within 6 months',
        'Processed $2M+ in transactions in first quarter',
        'Zero security incidents or downtime'
      ],
      metrics: {
        timeline: '8 weeks',
        users: '10x growth',
        revenue: '$2M+ processed',
        satisfaction: '98%'
      },
      testimonial: {
        quote: "Techinium transformed our idea into a market-ready product in just 8 weeks. Their AI-driven approach saved us months of development time.",
        author: "Sarah Chen",
        role: "CEO, PayFlow",
        outcome: "Launched MVP 3x faster than projected timeline"
      },
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe API', 'AWS'],
      package: 'Launch'
    },
    {
      id: 2,
      title: 'SaaS Platform: 300% Conversion Improvement',
      company: 'TeamSync',
      industry: 'B2B SaaS',
      challenge: 'Growing SaaS platform needed to optimize their conversion funnel and scale their infrastructure to handle rapid user growth.',
      solution: 'We deployed our Scale package with advanced feature development, performance optimization, and conversion rate optimization.',
      results: [
        '300% improvement in trial-to-paid conversion rates',
        '2x revenue growth within 8 months',
        '50% reduction in customer acquisition cost',
        '99.9% uptime during peak usage'
      ],
      metrics: {
        timeline: '12 weeks',
        conversion: '300% improvement',
        revenue: '2x growth',
        uptime: '99.9%'
      },
      testimonial: {
        quote: "The growth optimization strategies increased our conversion rates by 300%. We couldn't have achieved this without their expertise.",
        author: "Marcus Rodriguez",
        role: "Founder, TeamSync",
        outcome: "Achieved 300% improvement in trial-to-paid conversion"
      },
      technologies: ['Vue.js', 'Python', 'MongoDB', 'Redis', 'Docker'],
      package: 'Scale'
    },
    {
      id: 3,
      title: 'Marketplace: $2M ARR Achievement',
      company: 'LocalConnect',
      industry: 'E-commerce Marketplace',
      challenge: 'Series A marketplace needed to scale from MVP to enterprise-level platform with advanced analytics and growth tools.',
      solution: 'We implemented our Growth package with conversion optimization, advanced analytics, and strategic partnership for long-term success.',
      results: [
        'Reached $2M ARR in 18 months (ahead of schedule)',
        '40% month-over-month growth for 12 consecutive months',
        '95% customer retention rate',
        'Expanded to 3 new markets successfully'
      ],
      metrics: {
        timeline: '16 weeks',
        arr: '$2M ARR',
        growth: '40% MoM',
        retention: '95%'
      },
      testimonial: {
        quote: "From MVP to $2M ARR in 18 months. Their strategic guidance and technical execution were instrumental in our success.",
        author: "Alex Thompson",
        role: "Co-founder, LocalConnect",
        outcome: "Reached $2M ARR milestone ahead of schedule"
      },
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Kubernetes', 'Analytics'],
      package: 'Growth'
    }
  ]

  const testimonials = [
    {
      quote: "The AI development tools and methodologies are game-changing. Our team learned so much working alongside their experts.",
      author: "Jennifer Park",
      role: "Product Lead, HealthTech Startup",
      outcome: "Team productivity increased by 250% post-engagement"
    },
    {
      quote: "The ongoing support and optimization helped us maintain growth momentum. They're true partners in our journey.",
      author: "David Kim",
      role: "Founder, EdTech Startup",
      outcome: "Maintained 40% month-over-month growth for 12 months"
    },
    {
      quote: "Their technical architecture scaled seamlessly with our user growth. Zero downtime during our 10x user expansion phase.",
      author: "Lisa Wang",
      role: "CTO, Marketplace Startup",
      outcome: "Scaled to 10x users without performance issues"
    }
  ]

  const getPackageColor = (packageName) => {
    const colors = {
      Launch: 'bg-blue-100 text-blue-800',
      Scale: 'bg-green-100 text-green-800',
      Growth: 'bg-purple-100 text-purple-800'
    }
    return colors[packageName] || colors.Launch
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding" role="banner">
        <div className="container-custom">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Success Stories from Ambitious Startups
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Real results from startups who chose Techinium to accelerate their growth and achieve their goals.
            </p>
            <button
              onClick={() => onContactClick()}
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors"
            >
              Start Your Success Story
            </button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Detailed success stories showcasing our impact across different industries and growth stages.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className={`animate-on-scroll ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} md:flex items-center gap-12`}>
                {/* Case Study Content */}
                <div className="md:w-2/3">
                  <div className="flex items-center mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPackageColor(study.package)}`}>
                      {study.package} Package
                    </span>
                    <span className="ml-3 text-sm text-gray-500">{study.industry}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{study.title}</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    <strong>Company:</strong> {study.company}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    {study.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics and Testimonial */}
                <div className="md:w-1/3">
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Key Metrics:</h4>
                    <div className="space-y-3">
                      {Object.entries(study.metrics).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 capitalize">{key}:</span>
                          <span className="font-semibold text-gray-900">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <Quote className="w-8 h-8 text-primary-600 mb-4" />
                    <p className="text-gray-600 mb-4 leading-relaxed">"{study.testimonial.quote}"</p>
                    <div className="font-semibold text-gray-900">{study.testimonial.author}</div>
                    <div className="text-sm text-gray-500">{study.testimonial.role}</div>
                    <div className="text-sm text-green-600 font-medium mt-2">{study.testimonial.outcome}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              More success stories from our growing community of startup founders.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg animate-on-scroll">
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary-600 mb-4" />
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">"{testimonial.quote}"</p>
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
                <div className="text-sm text-green-600 font-medium mt-2">{testimonial.outcome}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The numbers speak for themselves - our clients consistently achieve exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: '50+', label: 'Startups Launched', color: 'blue' },
              { icon: TrendingUp, number: '3x', label: 'Average Speed Improvement', color: 'green' },
              { icon: DollarSign, number: '$50M+', label: 'Revenue Generated', color: 'purple' },
              { icon: Target, number: '95%', label: 'Client Satisfaction', color: 'yellow' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl animate-on-scroll">
                <div className={`w-16 h-16 bg-${stat.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-8 h-8 text-${stat.color}-600`} />
                </div>
                <div className={`text-3xl font-bold text-${stat.color}-600 mb-2`}>{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Join 50+ successful startups who've accelerated their growth with our AI-powered development approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onContactClick()}
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors"
              >
                Start Your Project
              </button>
              <button
                onClick={() => onContactClick('Case Study Questions')}
                className="btn-secondary"
              >
                Ask Questions
              </button>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              Free consultation • Detailed project assessment • Custom timeline
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies

