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
      blue: 'bg-accent-blue text-white',
      green: 'bg-accent-pink text-white',
      purple: 'bg-accent-slate text-white'
    }
    return colors[color] || colors.blue
  }

  const getNumberColor = (color) => {
    const colors = {
      blue: 'accent-blue',
      green: 'accent-pink',
      purple: 'accent-slate'
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="gradient-bg text-white section-padding" role="banner">
        <div className="container-custom">
          <div className="text-center animate-fade-in-up">
            <div className="mb-6">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                Built for non-technical founders by ex-Amazon & YC teams
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Turn Your Idea Into a<br />
              <span className="text-yellow-300">Revenue-Ready MVP</span><br />
              in 4 Weeks
            </h1>
            
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Trusted by 100+ startups to build & launch software products that generate revenue and attract investors.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="https://cal.com/team/creme-digital/mvp-discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4 flex items-center gap-2 hover:scale-105 transition-transform"
                aria-label="Launch my MVP"
              >
                Launch my MVP
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                to="/pricing"
                className="btn-secondary text-lg px-8 py-4 hover:scale-105 transition-transform"
              >
                View Pricing
              </Link>
            </div>

            {/* Trusted by section */}
            <div className="text-center">
              <p className="text-white/70 text-sm mb-6">Trusted by</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="text-white/50 font-semibold">Bounce</div>
                <div className="text-white/50 font-semibold">Ignyt</div>
                <div className="text-white/50 font-semibold">Mizu AI</div>
                <div className="text-white/50 font-semibold">LifeSight</div>
                <div className="text-white/50 font-semibold">Mosaic</div>
                <div className="text-white/50 font-semibold">DizzyLemon</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Trusted by 100+ Startups Worldwide
            </h2>
            <p className="text-gray-600">We've successfully launched MVPs across 6 continents</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { number: '100+', label: 'Startups launched successfully', color: 'blue' },
              { number: '4x', label: 'Faster time-to-market', color: 'green' },
              { number: '95%', label: 'Client satisfaction rate', color: 'purple' }
            ].map((item, index) => (
              <div key={index} className="text-center animate-on-scroll">
                <div className={`stats-number mb-2 text-${getNumberColor(item.color)}`}>
                  {item.number}
                </div>
                <div className="stats-label">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Company logos section */}
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-8">Some of the companies we've helped launch</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-gray-400 font-semibold text-lg">Bounce</div>
              <div className="text-gray-400 font-semibold text-lg">Ignyt</div>
              <div className="text-gray-400 font-semibold text-lg">Mizu AI</div>
              <div className="text-gray-400 font-semibold text-lg">LifeSight</div>
              <div className="text-gray-400 font-semibold text-lg">Mosaic</div>
              <div className="text-gray-400 font-semibold text-lg">DizzyLemon</div>
              <div className="text-gray-400 font-semibold text-lg">Cognitti</div>
              <div className="text-gray-400 font-semibold text-lg">Digicides</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section id="services" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title mb-6">
              Built by Ex-Amazon, YC & Silicon Valley Teams
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Transform your idea into a revenue-ready MVP in just 4 weeks. Our expert team brings Silicon Valley experience to help non-technical founders launch successful products.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: '4-Week Delivery Guarantee',
                description: 'From idea to live product in just 4 weeks with our proven development process.',
                color: 'blue'
              },
              {
                icon: TrendingUp,
                title: 'Expert Team',
                description: 'Built by ex-Amazon, YC-backed professionals with Silicon Valley experience.',
                color: 'green'
              },
              {
                icon: BarChart3,
                title: 'End-to-End Service',
                description: 'Complete solution from design to deployment with post-launch support and scaling assistance.',
                color: 'purple'
              }
            ].map((prop, index) => (
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
              From Idea to Revenue in 4 weeks
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Our proven 4-step process transforms your vision into a market-ready MVP that generates revenue and attracts investors.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="process-step animate-on-scroll text-center">
                <div className="w-16 h-16 bg-accent-slate text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">MVP Roadmap</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Client consultation, idea validation, and strategic planning to define the fastest path to version 1
                </p>
                <div className="text-sm text-gray-500 font-medium">Week 1 - Strategy</div>
              </div>
              
              <div className="process-step animate-on-scroll text-center">
                <div className="w-16 h-16 bg-accent-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Design Prototype</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  High-converting wireframes & investor-friendly design that converts users and attracts funding
                </p>
                <div className="text-sm text-gray-500 font-medium">Week 2 - Design</div>
              </div>
              
              <div className="process-step animate-on-scroll text-center">
                <div className="w-16 h-16 bg-accent-pink text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Build & Test</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Fully functional MVP with secure backend & APIs, ready for real users and revenue generation
                </p>
                <div className="text-sm text-gray-500 font-medium">Week 3-4 - Development</div>
              </div>
              
              <div className="process-step animate-on-scroll text-center">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Go Live</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Deployment, launch support & post-launch maintenance to ensure your success
                </p>
                <div className="text-sm text-gray-500 font-medium">Week 4 - Launch</div>
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
              Transparent Pricing, No Hidden Costs
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Choose the perfect plan for your startup journey. All plans include unlimited revisions and dedicated support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Landing Page Revamp */}
            <div className="pricing-card animate-on-scroll">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Landing Revamp</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$1,000+</div>
                <p className="text-gray-600">Get Started</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Figma Design with up to 10 design requests</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">7 days delivery guarantee</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Unlimited revisions included</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Private Slack channel communication</span>
                </li>
              </ul>
              <a
                href="https://cal.com/team/creme-digital/mvp-discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full text-center block"
              >
                Get Started
              </a>
            </div>

            {/* MVP Launchpad - Most Popular */}
            <div className="pricing-card featured animate-on-scroll relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent-slate text-white px-4 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">MVP Launchpad</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$15,000+</div>
                <p className="text-gray-600">Start Your MVP</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Complete MVP development in 4 weeks</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Full Stack Development</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Deployment and launch support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">PRD-based revisions included</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Scaling assistance available</span>
                </li>
              </ul>
              <a
                href="https://cal.com/team/creme-digital/mvp-discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center block"
              >
                Start Your MVP
              </a>
            </div>

            {/* Custom Solutions */}
            <div className="pricing-card animate-on-scroll">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Solutions</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$10,000+</div>
                <p className="text-gray-600">Contact Us</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Figma Design + Framer Development</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Branding services included</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Full Product development</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Unlimited requests per month</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Monthly engagement model</span>
                </li>
              </ul>
              <a
                href="https://cal.com/team/creme-digital/mvp-discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full text-center block"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="case-studies" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title mb-6">
              Founders Who Trusted Techinium
            </h2>
            <p className="section-subtitle">
              See how we've helped non-technical founders across the globe transform their ideas into successful, revenue-generating products.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Techinium transformed our idea into a market-ready product in just 4 weeks. Their AI-driven approach saved us months of development time.",
                author: "Sarah Chen",
                role: "CEO, FinTech Startup",
                outcome: "Launched MVP 3x faster than projected timeline",
                company: "Bounce Daily Series 4 $200M+"
              },
              {
                quote: "The growth optimization strategies increased our conversion rates by 300%. We couldn't have achieved this without their expertise.",
                author: "Marcus Rodriguez",
                role: "Founder, B2B SaaS Platform",
                outcome: "Achieved 300% improvement in trial-to-paid conversion",
                company: "IgnytLabs (exited: $5M)"
              },
              {
                quote: "From MVP to $2M ARR in 18 months. Their strategic guidance and technical execution were instrumental in our success.",
                author: "Alex Thompson",
                role: "Co-founder, E-commerce Platform",
                outcome: "Reached $2M ARR milestone ahead of schedule",
                company: "Neutralbase"
              }
            ].map((testimonial, index) => (
              <div key={index} className="testimonial-card animate-on-scroll">
                <div className="mb-4">
                  <div className="text-sm text-gray-500 font-medium mb-2">{testimonial.company}</div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="border-t border-gray-100 pt-6">
                  <div className="font-bold text-gray-900 mb-1">{testimonial.author}</div>
                  <div className="text-gray-500 mb-2">{testimonial.role}</div>
                  <div className="text-sm text-green-600 font-medium">{testimonial.outcome}</div>
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
              Ready to Launch Your MVP?
            </h2>
            <p className="section-subtitle mb-8">
              Join 100+ founders who've successfully launched their MVPs with Techinium. Book a free consultation to discuss your idea and get started in 4 weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://cal.com/team/creme-digital/mvp-discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4 flex items-center gap-2 hover:scale-105 transition-transform"
              >
                Launch my MVP
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://cal.com/team/creme-digital/mvp-discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-8 py-4 hover:scale-105 transition-transform"
              >
                Book a call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
