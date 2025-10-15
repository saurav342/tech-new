import { useEffect } from 'react'
import { 
  Users, 
  Target, 
  Lightbulb, 
  Award, 
  Globe, 
  Heart,
  CheckCircle,
  ArrowRight,
  Code,
  Zap,
  Shield,
  TrendingUp
} from 'lucide-react'

const About = ({ onContactClick }) => {
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

  const team = [
    {
      name: 'Alex Chen',
      role: 'Founder & CEO',
      bio: 'Serial entrepreneur with 15+ years building and scaling startups. Previously founded two successful SaaS companies.',
      expertise: ['Product Strategy', 'Growth', 'Leadership'],
      image: '/team/alex.jpg'
    },
    {
      name: 'Sarah Rodriguez',
      role: 'CTO & Co-founder',
      bio: 'AI/ML expert with 12+ years in enterprise software development. Former Google engineer specializing in scalable systems.',
      expertise: ['AI/ML', 'Architecture', 'Scalability'],
      image: '/team/sarah.jpg'
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of Growth',
      bio: 'Growth marketing specialist with 10+ years helping startups scale from MVP to market leaders.',
      expertise: ['Growth Marketing', 'Analytics', 'Conversion'],
      image: '/team/marcus.jpg'
    },
    {
      name: 'Lisa Wang',
      role: 'Lead Developer',
      bio: 'Full-stack developer with 8+ years experience in modern web technologies and AI-powered development tools.',
      expertise: ['Full-Stack', 'AI Tools', 'Performance'],
      image: '/team/lisa.jpg'
    }
  ]

  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on measurable outcomes and deliver real business value, not just code.',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Founder-First',
      description: 'Built by founders, for founders. We understand the challenges of early-stage startups.',
      color: 'green'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We leverage cutting-edge AI tools and methodologies to stay ahead of the curve.',
      color: 'purple'
    },
    {
      icon: Shield,
      title: 'Quality',
      description: 'Enterprise-grade quality from day one, with security and scalability built-in.',
      color: 'yellow'
    }
  ]

  const milestones = [
    { year: '2020', event: 'Techinium Founded', description: 'Started with a vision to democratize access to world-class product development' },
    { year: '2021', event: 'First 10 Startups', description: 'Successfully launched our first 10 startup projects' },
    { year: '2022', event: 'AI Integration', description: 'Developed proprietary AI-powered development methodologies' },
    { year: '2023', event: '50+ Launches', description: 'Reached milestone of 50+ successful startup launches' },
    { year: '2024', event: 'Global Expansion', description: 'Expanding to serve startups worldwide with remote-first approach' }
  ]

  const getIconColor = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      yellow: 'bg-yellow-100 text-yellow-600'
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
              Built by Founders, for Founders
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              We're a team of serial entrepreneurs and technical experts who understand the challenges of building and scaling startups.
            </p>
            <a
              href="https://cal.com/team/creme-digital/mvp-discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors"
            >
              Meet the Team
            </a>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Techinium was born from our own struggles as startup founders.
              </p>
            </div>

            <div className="prose prose-lg max-w-none animate-on-scroll">
              <p className="text-gray-600 leading-relaxed mb-6">
                After building and scaling multiple startups, we realized that traditional development approaches were too slow, too expensive, and often didn't deliver the quality needed for startup success. We were frustrated with the same problems over and over again:
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Development taking months longer than promised</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Quality issues that only surfaced after launch</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Scalability problems that limited growth</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Lack of strategic guidance beyond just coding</span>
                </li>
              </ul>

              <p className="text-gray-600 leading-relaxed mb-6">
                So we decided to build the solution we wished we had. Techinium combines our deep startup experience with cutting-edge AI tools and methodologies to deliver:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">3x faster development with AI acceleration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Enterprise-grade quality from day one</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Built-in scalability and performance optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Strategic guidance from fellow founders</span>
                </li>
              </ul>

              <p className="text-gray-600 leading-relaxed">
                Today, we've helped 50+ startups launch faster, scale smarter, and grow sustainably. Our mission is to democratize access to world-class product development so that every ambitious founder can turn their vision into reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced founders and technical experts who understand your challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center card-hover animate-on-scroll">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-primary-600 font-semibold mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 animate-on-scroll">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${getIconColor(value.color)}`}>
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our mission to transform startup development.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start mb-12 animate-on-scroll">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold z-10 relative">
                    {milestone.year}
                  </div>
                  
                  <div className="ml-8 flex-1">
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="w-10 h-10 text-primary-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              To democratize access to world-class product development through AI-powered tools and methodologies, 
              enabling every ambitious founder to transform their vision into market-ready products that scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onContactClick()}
                className="btn-primary"
              >
                Join Our Mission
              </button>
              <button
                onClick={() => onContactClick('Partnership')}
                className="btn-outline"
              >
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work With Fellow Founders?
            </h2>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Let's discuss your startup's needs and see how our experience can accelerate your growth.
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
                onClick={() => onContactClick('Team Questions')}
                className="btn-secondary"
              >
                Ask Questions
              </button>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              Free consultation • Meet the team • No commitment required
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

