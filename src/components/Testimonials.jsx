import React from 'react'
import { Star, Quote } from 'lucide-react'

/**
 * Testimonials Section Component - Light Agency Theme
 * 
 * Features:
 * - Clean grid layout with portrait + quote
 * - Star ratings
 * - Responsive design
 * - Subtle animations
 * 
 * Props:
 * - onContactClick: Function to handle CTA clicks
 */
const Testimonials = ({ onContactClick }) => {
  const testimonials = [
    {
      id: 1,
      name: 'Vanja Popovic',
      title: '',
      company: '',
      avatar: '/api/placeholder/80/80',
      rating: 5,
      quote: 'Mark\'s redesign of our landing page exceeded our expectations. His design not only encapsulated our brand essence but also met our standards for modern, user-friendly design. The visually appealing layout...',
      metric: '+15% in Session Duration'
    },
    {
      id: 2,
      name: 'Ya',
      title: '',
      company: '',
      avatar: '/api/placeholder/80/80',
      rating: 5,
      quote: 'The design is very nice, my associate and I are pleased with the improvements made to our basic design. Once the work began, the delivery of the design was quite prompt!',
      metric: '-40% Bounce Rate'
    },
    {
      id: 3,
      name: 'Aleksandr Lyubkin',
      title: '',
      company: '',
      avatar: '/api/placeholder/80/80',
      rating: 5,
      quote: 'The design exceeded all my expectations - unique, modern, with creative use of space. It attracted visitors\' attention and significantly improved the conversion rate from 0.5% to 3%. The work was...',
      metric: '6x Conversion Increase'
    },
    {
      id: 4,
      name: 'Anton Malyshev',
      title: '',
      company: '',
      avatar: '/api/placeholder/80/80',
      rating: 5,
      quote: 'I had the pleasure of working with Mark and his team on building a website for my business, and I couldn\'t be more thrilled with the results. They were incredibly talented, creative, and easy to work with...',
      metric: '+85% in User Satisfaction'
    },
    {
      id: 5,
      name: 'Alexander Tsvirko',
      title: '',
      company: '',
      avatar: '/api/placeholder/80/80',
      rating: 5,
      quote: 'The guys did the design for my website, I was very pleased!',
      metric: '+27% Conversion Increase'
    },
    {
      id: 6,
      name: 'Jesse Cox',
      title: '',
      company: '',
      avatar: '/api/placeholder/80/80',
      rating: 5,
      quote: 'Mark Vassilevskiy did an outstanding job designing our website! His attention to detail, creativity, and ability to understand our vision were truly impressive. The final product not only looks stunning but also...',
      metric: '+2 Angel Investors'
    }
  ]

  return (
    <section className="bg-bg-primary py-24 lg:py-32" role="region" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-5 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl lg:text-h2 font-bold text-text-primary mb-6">
            What Clients Say About Us
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Real feedback from real clients. See how our work drives results.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-bg-secondary rounded-2xl p-8 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-accent-gradient rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-text-secondary leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-accent-primary font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">
                      {testimonial.name}
                    </div>
                    {testimonial.title && (
                      <div className="text-sm text-text-secondary">
                        {testimonial.title} {testimonial.company && `at ${testimonial.company}`}
                      </div>
                    )}
                  </div>
                </div>
                {testimonial.metric && (
                  <div className="text-sm font-semibold text-accent-primary">
                    {testimonial.metric}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-primary mb-2">50+</div>
            <div className="text-text-secondary">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-primary mb-2">98%</div>
            <div className="text-text-secondary">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-primary mb-2">2x</div>
            <div className="text-text-secondary">Average Growth</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button
            onClick={() => onContactClick && onContactClick()}
            className="bg-accent-gradient text-white px-8 py-4 rounded-xl font-medium hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
            aria-label="Book a 15-minute call"
          >
            Book a 15-min call
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials