import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  Zap, 
  TrendingUp, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Quote
} from 'lucide-react'

const Home = ({ onContactClick }) => {
  const heroRef = useRef(null)

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

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const valueProps = [
    {
      icon: Zap,
      title: 'Launch 3x Faster',
      description: 'AI-accelerated development reduces time-to-market while maintaining enterprise quality standards.',
      color: 'blue'
    },
    {
      icon: TrendingUp,
      title: 'Scale with Confidence',
      description: 'Built-in scalability patterns ensure seamless growth from MVP to market leader.',
      color: 'green'
    },
    {
      icon: BarChart3,
      title: 'Grow Sustainably',
      description: 'Data-driven strategies optimize conversion and retention for profitable expansion.',
      color: 'purple'
    }
  ]

  const socialProof = [
    { number: '50+', label: 'Startups launched successfully', color: 'blue' },
    { number: '3x', label: 'Faster time-to-market', color: 'green' },
    { number: '95%', label: 'Client satisfaction rate', color: 'purple' }
  ]

  const testimonials = [
    {
      quote: "Techinium transformed our idea into a market-ready product in just 8 weeks. Their AI-driven approach saved us months of development time.",
      author: "Sarah Chen",
      role: "CEO, FinTech Startup",
      outcome: "Launched MVP 3x faster than projected timeline"
    },
    {
      quote: "The growth optimization strategies increased our conversion rates by 300%. We couldn't have achieved this without their expertise.",
      author: "Marcus Rodriguez",
      role: "Founder, B2B SaaS Platform",
      outcome: "Achieved 300% improvement in trial-to-paid conversion"
    },
    {
      quote: "From MVP to $2M ARR in 18 months. Their strategic guidance and technical execution were instrumental in our success.",
      author: "Alex Thompson",
      role: "Co-founder, E-commerce Platform",
      outcome: "Reached $2M ARR milestone ahead of schedule"
    }
  ]

  const getIconColor = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600'
    }
    return colors[color] || colors.blue
  }

  const getNumberColor = (color) => {
    const colors = {
      blue: 'text-blue-600',
      green: 'text-green-600',
      purple: 'text-purple-600'
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="gradient-bg text-white section-padding" role="banner">
        <div className="container-custom">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Turn your idea into a ready to launch MVP in 2-weeks
            </h1>
            
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Trusted by a 100+ startups to build & launch software products.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => onContactClick()}
                className="btn-primary text-lg px-8 py-4"
                aria-label="Schedule A Call"
              >
                Schedule A Call
              </button>
              <Link
                to="/pricing"
                className="btn-secondary text-lg px-8 py-4"
              >
                Our Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Trusted by world-class startups
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '200+', label: 'Products Built' },
              { number: '$25M+', label: 'Client Funding' },
              { number: '5+', label: 'Acquisitions' }
            ].map((item, index) => (
              <div key={index} className="text-center animate-on-scroll">
                <div className="stats-number mb-2">
                  {item.number}
                </div>
                <div className="stats-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section id="services" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title mb-6">
              We build experiences,<br />
              not just products.
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              We don't just work fast. We make products that people love using.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <div key={index} className="feature-card card-hover animate-on-scroll">
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${getIconColor(prop.color)}`}>
                  <prop.icon className="w-8 h-8" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{prop.title}</h3>
                <p className="text-gray-600 leading-relaxed">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title mb-6">
              Our process
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="process-step animate-on-scroll">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-lg font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Define your product vision</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Building a product people want is hard. We help you strategize, and work to make it better.
                    </p>
                    <div className="text-sm text-gray-500">Step 1</div>
                  </div>
                </div>
              </div>
              
              <div className="process-step animate-on-scroll">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-lg font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Build your MVP (in 2 weeks)</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Having the core product built out helps us use data to iterate on the product ahead. In weeks we'll have a functioning base product in your hands.
                    </p>
                    <div className="text-sm text-gray-500">Step 2</div>
                  </div>
                </div>
              </div>
              
              <div className="process-step animate-on-scroll">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-lg font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Build, iterate and launch.</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      After launching we'll work with you to continue to iterate on your product.
                    </p>
                    <div className="text-sm text-gray-500">Step 3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Summary */}
      <section id="pricing" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title mb-6">
              Pricing
            </h2>
          </div>
          
          <div className="max-w-2xl mx-auto text-center">
            <div className="pricing-card animate-on-scroll">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                An MVP in 2 weeks for
              </h3>
              <div className="text-6xl font-bold text-gray-900 mb-6">
                $9,500
              </div>
              <p className="text-xl text-gray-600 mb-8">
                By the end you'll have a full working product ready to launch to the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => onContactClick()}
                  className="btn-primary text-lg px-8 py-4"
                >
                  Get Started Today
                </button>
                <button
                  onClick={() => onContactClick()}
                  className="btn-secondary text-lg px-8 py-4"
                >
                  Book a call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="case-studies" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title mb-6">
              Trusted by world-class<br />
              companies.
            </h2>
            <p className="section-subtitle">
              Some words from our lovely customers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card animate-on-scroll">
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="border-t border-gray-100 pt-6">
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto animate-on-scroll">
            <h2 className="section-title mb-6">
              Book a 15-minute free call with our team
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onContactClick()}
                className="btn-primary text-lg px-8 py-4"
              >
                Book a call
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
