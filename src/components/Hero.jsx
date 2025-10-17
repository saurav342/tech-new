import React from 'react'
import { ArrowRight, Play } from 'lucide-react'

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
  return (
    <>
      {/* Banner Section */}
      <section className="bg-bg-secondary border-b border-ui-border py-4">
        <div className="max-w-7xl mx-auto px-5 lg:px-20">
          <div className="text-center">
            <p className="text-sm text-text-secondary">
              <span className="font-semibold text-text-primary">60+ startups & founders</span> chose Techinium
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bg-primary text-text-primary py-32 lg:py-40 relative overflow-hidden" role="banner">
      <div className="max-w-7xl mx-auto px-5 lg:px-20">
        <div className="text-center space-y-8 animate-fade-in-up">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-text-primary">
            Idea to MVP in{' '}
            <span className="text-gradient-orange-yellow">
              4 weeks
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
            Every business needs a website, and it's never been easier to get one.
          </p>
          
          {/* CTA */}
          <div className="flex justify-center">
            <button
              onClick={() => onContactClick && onContactClick()}
              className="bg-accent-gradient text-white px-12 py-5 rounded-xl font-medium hover:shadow-soft transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 text-lg"
              aria-label="Book a 15-minute call"
            >
              Book a 15-min call
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Subtle background elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent-primary rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent-secondary rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-accent-primary rounded-full opacity-25 animate-pulse" style={{animationDelay: '2s'}}></div>
    </section>
    </>
  )
}

export default Hero
