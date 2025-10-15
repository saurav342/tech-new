import { useEffect } from 'react'
import { 
  Search, 
  Code, 
  TestTube, 
  Rocket, 
  Users, 
  Target, 
  BarChart3, 
  Clock,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Zap,
  Shield,
  TrendingUp
} from 'lucide-react'

const Process = ({ onContactClick }) => {
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

  const processSteps = [
    {
      step: 1,
      title: 'Discovery & Strategy',
      description: 'Deep market research, user interviews, and technical architecture planning',
      icon: Search,
      color: 'blue',
      duration: '1-2 weeks',
      deliverables: [
        'Market research and competitive analysis',
        'User interviews and persona development',
        'Technical architecture planning',
        'Project roadmap and timeline',
        'Success metrics definition',
        'Resource allocation strategy'
      ],
      tools: ['User Research', 'Market Analysis', 'Technical Planning', 'Strategy Development'],
      timeline: 'Week 1-2'
    },
    {
      step: 2,
      title: 'AI-Accelerated Development',
      description: 'Proprietary AI tools and methodologies for faster, higher-quality development',
      icon: Code,
      color: 'green',
      duration: '6-12 weeks',
      deliverables: [
        'AI-powered code generation and optimization',
        'Automated testing and quality assurance',
        'Performance optimization and scalability',
        'Security implementation and compliance',
        'API development and integration',
        'Database design and optimization'
      ],
      tools: ['AI Development Tools', 'Automated Testing', 'Performance Monitoring', 'Security Protocols'],
      timeline: 'Week 3-14'
    },
    {
      step: 3,
      title: 'Testing & Optimization',
      description: 'Rigorous testing, performance optimization, and user feedback integration',
      icon: TestTube,
      color: 'purple',
      duration: '2-3 weeks',
      deliverables: [
        'Comprehensive testing suite execution',
        'Performance optimization and tuning',
        'User acceptance testing coordination',
        'Bug fixes and issue resolution',
        'Security audit and penetration testing',
        'Load testing and scalability validation'
      ],
      tools: ['Automated Testing', 'Performance Tools', 'Security Audits', 'User Testing'],
      timeline: 'Week 15-17'
    },
    {
      step: 4,
      title: 'Launch & Growth',
      description: 'Go-to-market execution, growth tracking, and ongoing optimization support',
      icon: Rocket,
      color: 'yellow',
      duration: 'Ongoing',
      deliverables: [
        'Production deployment and monitoring',
        'Go-to-market strategy execution',
        'User onboarding and training',
        'Performance monitoring and analytics',
        'Growth optimization and iteration',
        'Ongoing support and maintenance'
      ],
      tools: ['Deployment Tools', 'Analytics Platforms', 'Growth Tools', 'Support Systems'],
      timeline: 'Week 18+'
    }
  ]

  const benefits = [
    {
      icon: Zap,
      title: '3x Faster Development',
      description: 'Our AI-powered tools accelerate development while maintaining quality standards.',
      metric: '3x'
    },
    {
      icon: Shield,
      title: 'Enterprise Quality',
      description: 'Built-in security, testing, and scalability from day one.',
      metric: '99.9%'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: '50+ successful launches with measurable growth outcomes.',
      metric: '50+'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated team with 50+ years combined startup experience.',
      metric: '50+'
    }
  ]

  const getStepColor = (color) => {
    const colors = {
      blue: 'bg-blue-600',
      green: 'bg-green-600',
      purple: 'bg-purple-600',
      yellow: 'bg-yellow-600'
    }
    return colors[color] || colors.blue
  }

  const getStepBorderColor = (color) => {
    const colors = {
      blue: 'border-blue-200',
      green: 'border-green-200',
      purple: 'border-purple-200',
      yellow: 'border-yellow-200'
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding" role="banner">
        <div className="container-custom">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Proven 4-Step Development Process
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              From idea to market success with our systematic, AI-powered approach that delivers consistent results.
            </p>
            <a
              href="https://cal.com/techinium/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Build Your Product
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each step is designed to maximize efficiency and ensure your product meets market demands.
            </p>
          </div>

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={step.step} className={`animate-on-scroll ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} md:flex items-center gap-12`}>
                {/* Step Info */}
                <div className="md:w-1/2">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 ${getStepColor(step.color)} text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4`}>
                      {step.step}
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-medium">{step.timeline}</div>
                      <div className="text-sm text-gray-500">{step.duration}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {step.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step Details */}
                <div className="md:w-1/2">
                  <div className={`bg-gray-50 rounded-xl p-8 border-2 ${getStepBorderColor(step.color)}`}>
                    <div className="flex items-center mb-6">
                      <step.icon className={`w-8 h-8 ${getStepColor(step.color)} text-white rounded-lg p-1.5 mr-3`} />
                      <h4 className="text-xl font-bold text-gray-900">Key Deliverables</h4>
                    </div>
                    
                    <ul className="space-y-3">
                      {step.deliverables.map((deliverable, deliverableIndex) => (
                        <li key={deliverableIndex} className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                          <span className="text-gray-700 text-sm">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Our Process Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our methodology combines AI-powered efficiency with human expertise for unmatched results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg card-hover animate-on-scroll">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-primary-600 mb-2">{benefit.metric}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Typical Project Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Most projects follow this timeline, but we adapt to your specific needs and constraints.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              
              {processSteps.map((step, index) => (
                <div key={step.step} className="relative flex items-start mb-12 animate-on-scroll">
                  {/* Timeline Dot */}
                  <div className={`w-16 h-16 ${getStepColor(step.color)} text-white rounded-full flex items-center justify-center text-xl font-bold z-10 relative`}>
                    {step.step}
                  </div>
                  
                  {/* Content */}
                  <div className="ml-8 flex-1">
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {step.timeline}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <div className="text-sm text-gray-500">
                        Duration: <span className="font-medium">{step.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Development Journey?
            </h2>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Let's discuss your project and see how our proven process can accelerate your startup's growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://cal.com/techinium/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors"
              >
                Book Discovery Call
              </a>
              <button
                onClick={() => onContactClick('Process Questions')}
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

export default Process

