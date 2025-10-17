import React from 'react'
import { ArrowRight } from 'lucide-react'

/**
 * Banner Section Component
 * 
 * Features:
 * - Full-width rounded container with lighter dark gray background
 * - Centered title and subtitle
 * - White CTA button
 * - Responsive design
 * 
 * Props:
 * - onContactClick: Function to handle CTA clicks
 */
const Banner = ({ onContactClick }) => {
  return (
    <section className="section-padding-dark" role="region" aria-labelledby="banner-heading">
      <div className="container-dark">
        <div className="banner-dark animate-on-scroll">
          <h2 id="banner-heading" className="text-h2 font-bold text-text-primary mb-4">
            Sell Smarter with the CRM Built for Growth
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your sales process with intelligent automation, real-time insights, 
            and seamless integrations that help you close more deals and grow faster.
          </p>
          <button
            onClick={() => onContactClick && onContactClick()}
            className="bg-white text-bg-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-bg-banner transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
            aria-label="Get Care Now"
          >
            Get Care Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Banner
