import { useEffect } from 'react'
import { 
  Rocket, 
  TrendingUp, 
  Target, 
  CheckCircle, 
  Clock, 
  Users, 
  BarChart3,
  Zap,
  Shield,
  Globe,
  Code,
  Lightbulb
} from 'lucide-react'

const Services = ({ onContactClick }) => {
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

  const packages = [
    {
      id: 'launch',
      name: 'Launch Package',
      price: '$15,000',
      description: 'Perfect for pre-seed startups. Complete MVP development with AI acceleration, user research, and 3-month support.',
      icon: Rocket,
      color: 'blue',
      timeline: '4 weeks',
      deliverables: [
        'AI-accelerated MVP development (4 weeks)',
        'User research and market validation',
        'Technical architecture and scalability planning',
        '3-month post-launch support and optimization',
        'Go-to-market strategy and launch support',
        'Performance monitoring and analytics setup'
      ],
      features: [
        { icon: Zap, title: 'AI-Accelerated Development', description: '3x faster development with proprietary AI tools' },
        { icon: Users, title: 'User Research', description: 'Comprehensive market validation and user interviews' },
        { icon: Shield, title: 'Quality Assurance', description: 'Enterprise-grade testing and security protocols' },
        { icon: Globe, title: 'Go-to-Market', description: 'Complete launch strategy and marketing support' }
      ],
      cta: 'Start Your Launch',
      popular: false
    },
    {
      id: 'scale',
      name: 'Scale Package',
      price: '$35,000',
      description: 'Ideal for growing startups. Advanced features, performance optimization, team training, and 6-month support included.',
      icon: TrendingUp,
      color: 'green',
      timeline: '12-16 weeks',
      deliverables: [
        'Advanced feature development and integration',
        'Performance optimization and scalability improvements',
        'Team training and knowledge transfer',
        '6-month strategic partnership and support',
        'Advanced analytics and growth tracking',
        'Competitive analysis and market positioning'
      ],
      features: [
        { icon: Code, title: 'Advanced Features', description: 'Complex integrations and advanced functionality' },
        { icon: BarChart3, title: 'Performance Optimization', description: 'Speed, scalability, and efficiency improvements' },
        { icon: Users, title: 'Team Training', description: 'Knowledge transfer and skill development' },
        { icon: Target, title: 'Strategic Partnership', description: '6-month ongoing support and guidance' }
      ],
      cta: 'Scale Your Product',
      popular: true
    },
    {
      id: 'growth',
      name: 'Growth Package',
      price: '$75,000',
      description: 'For Series A startups. Conversion optimization, growth engineering, advanced analytics, and 12-month strategic partnership.',
      icon: Target,
      color: 'purple',
      timeline: '16-24 weeks',
      deliverables: [
        'Conversion optimization and growth engineering',
        'Advanced analytics and data science implementation',
        'Marketing automation and growth tools integration',
        '12-month strategic partnership and quarterly reviews',
        'Executive coaching and strategic advisory',
        'Access to proprietary growth methodologies and tools'
      ],
      features: [
        { icon: BarChart3, title: 'Growth Engineering', description: 'Data-driven optimization and conversion improvements' },
        { icon: Lightbulb, title: 'Strategic Advisory', description: 'Executive coaching and strategic guidance' },
        { icon: Globe, title: 'Marketing Automation', description: 'Advanced growth tools and automation systems' },
        { icon: Users, title: 'Long-term Partnership', description: '12-month strategic partnership with quarterly reviews' }
      ],
      cta: 'Accelerate Growth',
      popular: false
    }
  ]

  const getIconColor = (color) => {
    const colors = {
      blue: 'bg-accent-blue text-white',
      green: 'bg-accent-pink text-white',
      purple: 'bg-accent-slate text-white'
    }
    return colors[color] || colors.blue
  }

  const getBorderColor = (color) => {
    const colors = {
      blue: 'border-accent-blue',
      green: 'border-accent-pink',
      purple: 'border-accent-slate'
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
              Comprehensive Product Development Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              From MVP to market leader - we provide end-to-end development solutions tailored to your startup's growth stage.
            </p>
            <button
              onClick={() => onContactClick()}
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Development Package
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each package is designed for specific startup stages and growth objectives.
            </p>
          </div>

          <div className="space-y-16">
            {packages.map((pkg, index) => (
              <div key={pkg.id} id={pkg.id} className={`animate-on-scroll ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} md:flex items-center gap-12`}>
                {/* Package Info */}
                <div className="md:w-1/2">
                  <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 ${getIconColor(pkg.color)}`}>
                    <pkg.icon className="w-5 h-5 mr-2" />
                    {pkg.timeline}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{pkg.name}</h3>
                  
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-primary-600">{pkg.price}</span>
                    <span className="text-gray-500 ml-2">{pkg.priceInr}</span>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{pkg.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${getIconColor(pkg.color)}`}>
                          <feature.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                          <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => onContactClick(`${pkg.name}`)}
                    className={`btn-primary ${pkg.popular ? 'bg-primary-600 hover:bg-primary-700' : 'btn-outline'}`}
                  >
                    {pkg.cta}
                  </button>
                </div>

                {/* Package Details */}
                <div className="md:w-1/2">
                  <div className={`bg-white rounded-xl shadow-lg p-8 border-2 ${getBorderColor(pkg.color)} ${pkg.popular ? 'relative' : ''}`}>
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-6">What's Included:</h4>
                    
                    <ul className="space-y-4">
                      {pkg.deliverables.map((deliverable, deliverableIndex) => (
                        <li key={deliverableIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{deliverable}</span>
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

      {/* Process Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every project follows our proven 4-step methodology for consistent results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Discovery', description: 'Market research, user interviews, and technical planning', icon: Lightbulb },
              { step: 2, title: 'Development', description: 'AI-accelerated coding with quality assurance', icon: Code },
              { step: 3, title: 'Testing', description: 'Performance optimization and user feedback integration', icon: Shield },
              { step: 4, title: 'Launch', description: 'Go-to-market execution and ongoing support', icon: Rocket }
            ].map((step, index) => (
              <div key={index} className="text-center animate-on-scroll">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Let's discuss your startup's needs and find the perfect development package for your growth stage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://cal.com/team/creme-digital/mvp-discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors"
              >
                Book Discovery Call
              </a>
              <button
                onClick={() => onContactClick('Custom Quote')}
                className="btn-secondary"
              >
                Get Custom Quote
              </button>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              Free consultation • No commitment required • Response within 24 hours
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

