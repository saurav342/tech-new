import React, { useEffect, useState } from 'react'
import { ArrowRight, Play, ChevronDown } from 'lucide-react'

/**
 * Hero Section Component - Light Agency Theme
 * 
 * Features:
 * - Clean, minimal layout with generous whitespace
 * - Left content, right visual split (6/6 columns)
 * - Abstract geometric shapes with soft gradients
 * - Primary and secondary CTAs
 * - Responsive design for desktop, tablet, and mobile
 * 
 * Props:
 * - onContactClick: Function to handle contact modal opening
 * - onWorkClick: Function to handle "See our Work" action
 */
const Hero = ({ onContactClick, onWorkClick }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [elementsVisible, setElementsVisible] = useState({
    heading: false,
    tagline: false,
    subheading: false,
    cta: false
  })

  useEffect(() => {
    // Staggered animation sequence inspired by PayPal
    const timer1 = setTimeout(() => setIsVisible(true), 100)
    const timer2 = setTimeout(() => setElementsVisible(prev => ({ ...prev, heading: true })), 200)
    const timer3 = setTimeout(() => setElementsVisible(prev => ({ ...prev, tagline: true })), 600)
    const timer4 = setTimeout(() => setElementsVisible(prev => ({ ...prev, subheading: true })), 900)
    const timer5 = setTimeout(() => setElementsVisible(prev => ({ ...prev, cta: true })), 1200)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
    }
  }, [])

  const scrollToNext = () => {
    const nextSection = document.getElementById('services')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Social Proof Banner */}
      {/* <section className="bg-bg-secondary border-b border-ui-border py-4">
        <div className="max-w-7xl mx-auto px-5 lg:px-20">
          <div className="text-center">
            <p className="text-sm text-text-secondary">
              <span className="font-semibold text-text-primary">60+ startups & founders</span> chose Techinium
            </p>
          </div>
        </div>
      </section> */}

      <section className="bg-bg-primary text-text-primary py-20 lg:py-32 relative overflow-hidden min-h-screen flex items-center" role="banner">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-gradient opacity-5 rounded-full blur-3xl animate-float parallax" data-speed="0.3"></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-accent-secondary opacity-10 rounded-full blur-2xl animate-float parallax" data-speed="0.5" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-accent-quaternary opacity-8 rounded-full blur-2xl animate-float parallax" data-speed="0.7" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-accent-primary opacity-6 rounded-full blur-xl animate-float parallax" data-speed="0.4" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-5 lg:px-20 relative z-10">
          <div className="text-center space-y-8">
            {/* Main Heading - Bold and Beautiful */}
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-display font-bold leading-[1.05] text-text-primary tracking-tight transition-all duration-1000 ease-out flex flex-nowrap items-center justify-center gap-4 ${elementsVisible.heading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="whitespace-nowrap">Idea to MVP in</span>
              <span className="text-gradient-shimmer whitespace-nowrap hero-motion">4 weeks</span>
            </h1>
            
            {/* Tagline - Clean and Simple */}
            <p className={`text-xl md:text-2xl text-text-secondary leading-relaxed max-w-4xl mx-auto font-normal transition-all duration-1000 ease-out ${elementsVisible.tagline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Every business needs a powerful digital presence — and it’s never been easier to build your website, app, or SaaS product.
            </p>
            
            {/* CTA - Prominent and Beautiful */}
            <div className={`flex flex-col items-center gap-4 pt-6 transition-all duration-1000 ease-out sm:flex-row sm:justify-center ${elementsVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <a
                href="https://cal.com/techinium/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary text-base sm:text-lg justify-center group"
                aria-label="Book a 15-minute call"
              >
                <span className="relative z-10 transition-all duration-300">Book a 15-min call</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-500 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" aria-hidden="true"></div>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" aria-hidden="true"></div>
              </a>
              <button
                type="button"
                onClick={onWorkClick}
                className="cta-secondary text-base sm:text-lg"
              >
                View case studies
                <Play className="w-4 h-4" />
              </button>
            </div>
            <p className={`section-microcopy text-text-secondary transition-all duration-1000 ease-out ${elementsVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              No sales pitch — just product advice tailored to your roadmap.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
          <button
            onClick={scrollToNext}
            className="text-text-tertiary hover:text-accent-primary transition-all duration-500 ease-out hover:scale-110 hover:-translate-y-1 group"
            aria-label="Scroll to next section"
          >
            <ChevronDown className="w-6 h-6 transition-transform duration-500 group-hover:translate-y-1" />
          </button>
        </div>
      </section>
    </>
  )
}

export default Hero
