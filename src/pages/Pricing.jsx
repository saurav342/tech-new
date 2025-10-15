import { useEffect, useState } from 'react'
import { 
  CheckCircle, 
  X, 
  Star, 
  Clock, 
  Users, 
  Zap, 
  Shield, 
  BarChart3,
  HelpCircle,
  ArrowRight
} from 'lucide-react'

const Pricing = ({ onContactClick }) => {
  const [isAnnual, setIsAnnual] = useState(false)
  const [showFAQ, setShowFAQ] = useState({})

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
      name: 'Launch',
      description: 'Perfect for pre-seed startups ready to validate their idea',
      monthlyPrice: 15000,
      annualPrice: 13500, // 10% discount
      popular: false,
      features: [
        'AI-accelerated MVP development (4 weeks)',
        'User research and market validation',
        'Technical architecture and scalability planning',
        '3-month post-launch support and optimization',
        'Go-to-market strategy and launch support',
        'Performance monitoring and analytics setup',
        'Basic security implementation',
        'Mobile-responsive design',
        'API development and integration',
        'Database design and optimization'
      ],
      notIncluded: [
        'Advanced analytics and reporting',
        'Marketing automation tools',
        'Advanced security features',
        'Custom integrations',
        'Dedicated account manager'
      ],
      timeline: '8-12 weeks',
      support: '3 months',
      team: '2-3 developers'
    },
    {
      name: 'Scale',
      description: 'Ideal for growing startups experiencing rapid user growth',
      monthlyPrice: 35000,
      annualPrice: 31500, // 10% discount
      popular: true,
      features: [
        'Everything in Launch Package',
        'Advanced feature development and integration',
        'Performance optimization and scalability improvements',
        'Team training and knowledge transfer',
        '6-month strategic partnership and support',
        'Advanced analytics and growth tracking',
        'Competitive analysis and market positioning',
        'Custom integrations and third-party APIs',
        'Advanced security and compliance',
        'Dedicated project manager',
        'Priority support and communication',
        'Monthly strategy reviews'
      ],
      notIncluded: [
        'Executive coaching and advisory',
        'Advanced marketing automation',
        'Custom growth tools development',
        'Long-term strategic planning',
        'Equity partnership options'
      ],
      timeline: '12-16 weeks',
      support: '6 months',
      team: '4-5 developers'
    },
    {
      name: 'Growth',
      description: 'For Series A startups focused on sustainable expansion',
      monthlyPrice: 75000,
      annualPrice: 67500, // 10% discount
      popular: false,
      features: [
        'Everything in Scale Package',
        'Conversion optimization and growth engineering',
        'Advanced analytics and data science implementation',
        'Marketing automation and growth tools integration',
        '12-month strategic partnership and quarterly reviews',
        'Executive coaching and strategic advisory',
        'Access to proprietary growth methodologies and tools',
        'Custom growth tools and automation',
        'Advanced security and enterprise compliance',
        'Dedicated growth team',
        'Weekly strategy calls',
        'Equity partnership options available',
        'Access to investor network',
        'Custom reporting and dashboards'
      ],
      notIncluded: [
        'Full-time dedicated team',
        'Unlimited revisions',
        '24/7 phone support',
        'On-site consultation',
        'Custom legal and compliance work'
      ],
      timeline: '16-24 weeks',
      support: '12 months',
      team: '6-8 developers'
    }
  ]

  const faqs = [
    {
      question: 'What\'s included in the pricing?',
      answer: 'All packages include development, testing, deployment, and support. The main differences are in timeline, team size, and ongoing support duration.'
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes! We typically require 50% upfront for Launch, 40% upfront for Scale, and 30% upfront for Growth packages, with the remainder due on delivery.'
    },
    {
      question: 'Can I upgrade my package later?',
      answer: 'Absolutely! We can upgrade your package at any time. You\'ll only pay the difference in pricing, and we\'ll adjust the timeline accordingly.'
    },
    {
      question: 'What if I need custom features?',
      answer: 'Custom features are available in all packages. We\'ll provide a detailed quote for any additional work beyond the standard package scope.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a satisfaction guarantee. If you\'re not happy with our work within the first 30 days, we\'ll refund your payment or make it right.'
    },
    {
      question: 'How do you handle intellectual property?',
      answer: 'You retain full ownership of all code, designs, and intellectual property created for your project. We sign comprehensive IP agreements.'
    }
  ]

  const toggleFAQ = (index) => {
    setShowFAQ(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const getCurrentPrice = (pkg) => {
    return isAnnual ? pkg.annualPrice : pkg.monthlyPrice
  }

  const getSavings = (pkg) => {
    return pkg.monthlyPrice - pkg.annualPrice
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding" role="banner">
        <div className="container-custom">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transparent Pricing for Every Stage
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Choose the package that matches your startup's current needs and growth stage. No hidden fees, no surprises.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <span className={`mr-3 ${!isAnnual ? 'text-white font-semibold' : 'text-blue-200'}`}>Monthly</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`ml-3 ${isAnnual ? 'text-white font-semibold' : 'text-blue-200'}`}>
                Annual <span className="text-yellow-300">(Save 10%)</span>
              </span>
            </div>
            
            <button
              onClick={() => onContactClick()}
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={pkg.name} className={`bg-white rounded-xl shadow-lg p-8 card-hover border-2 animate-on-scroll ${
                pkg.popular ? 'border-primary-500 relative' : 'border-gray-200'
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-primary-600">
                      ${getCurrentPrice(pkg).toLocaleString()}
                    </div>
                    <div className="text-gray-500">≈ ₹{pkg.priceInr.toLocaleString()}</div>
                    {isAnnual && (
                      <div className="text-sm text-green-600 font-medium mt-1">
                        Save ${getSavings(pkg).toLocaleString()}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {pkg.timeline}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {pkg.team}
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Not Included:</h4>
                  <ul className="space-y-2">
                    {pkg.notIncluded.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <X className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-500 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onContactClick(`${pkg.name} Package`)}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                    pkg.popular
                      ? 'bg-primary-600 text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
                      : 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
                  }`}
                >
                  Choose {pkg.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Package Comparison
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Compare features across all packages to find the perfect fit for your startup.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-on-scroll">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Features</th>
                    {packages.map((pkg) => (
                      <th key={pkg.name} className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                        {pkg.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: 'Development Timeline', launch: '8-12 weeks', scale: '12-16 weeks', growth: '16-24 weeks' },
                    { feature: 'Team Size', launch: '2-3 developers', scale: '4-5 developers', growth: '6-8 developers' },
                    { feature: 'Support Duration', launch: '3 months', scale: '6 months', growth: '12 months' },
                    { feature: 'AI-Accelerated Development', launch: '✓', scale: '✓', growth: '✓' },
                    { feature: 'User Research', launch: '✓', scale: '✓', growth: '✓' },
                    { feature: 'Advanced Features', launch: '✗', scale: '✓', growth: '✓' },
                    { feature: 'Performance Optimization', launch: 'Basic', scale: 'Advanced', growth: 'Enterprise' },
                    { feature: 'Strategic Partnership', launch: '✗', scale: '6 months', growth: '12 months' },
                    { feature: 'Executive Coaching', launch: '✗', scale: '✗', growth: '✓' },
                    { feature: 'Custom Growth Tools', launch: '✗', scale: '✗', growth: '✓' }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-sm text-center text-gray-600">{row.launch}</td>
                      <td className="px-6 py-4 text-sm text-center text-gray-600">{row.scale}</td>
                      <td className="px-6 py-4 text-sm text-center text-gray-600">{row.growth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our pricing and packages.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 animate-on-scroll">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    <HelpCircle className={`w-5 h-5 text-gray-500 transition-transform ${showFAQ[index] ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                {showFAQ[index] && (
                  <div className="p-6 bg-white border border-gray-200 rounded-lg mt-2">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
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
              Ready to Choose Your Package?
            </h2>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Still not sure which package is right for you? Let's discuss your specific needs and find the perfect solution.
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

export default Pricing

