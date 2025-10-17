import { useEffect } from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Process from '../components/Process'
import Pricing from '../components/Pricing'
import CaseStudies from '../components/CaseStudies'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'

/**
 * Home Page Component - Light Agency Theme
 * 
 * Features:
 * - Complete light-themed agency homepage
 * - All sections as specified in requirements
 * - Intersection Observer for scroll animations
 * - Responsive design for all breakpoints
 * - Accessibility features throughout
 * 
 * Props:
 * - onContactClick: Function to handle contact modal opening
 */
const Home = ({ onContactClick }) => {
  useEffect(() => {
    // Enhanced Intersection Observer for animations - PayPal inspired
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up')
          
          // Add staggered animations for child elements with PayPal-style timing
          const children = entry.target.querySelectorAll('.animate-child')
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-fade-in-up')
            }, index * 150) // Slightly slower stagger for more elegance
          })
        }
      })
    }, observerOptions)

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach(el => observer.observe(el))

    // Add smooth scrolling behavior
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll('.parallax')
      
      parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5
        const yPos = -(scrolled * speed)
        element.style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleWorkClick = () => {
    // Scroll to case studies section
    const caseStudiesSection = document.getElementById('case-studies')
    if (caseStudiesSection) {
      caseStudiesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-bg-primary smooth-scroll">
      {/* Hero Section */}
      <Hero onContactClick={onContactClick} onWorkClick={handleWorkClick} />
      
      {/* Services Section */}
      <section id="services" className="section-transition">
        <Services onContactClick={onContactClick} />
      </section>
      
      {/* Process Section */}
      <section id="process" className="section-transition">
        <Process onContactClick={onContactClick} />
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="section-transition">
        <Pricing onContactClick={onContactClick} />
      </section>
      
      {/* Case Studies Section */}
      <section id="case-studies" className="section-transition">
        <CaseStudies onContactClick={onContactClick} />
      </section>

      {/* Testimonials Section */}
      <section className="section-transition">
        <Testimonials onContactClick={onContactClick} />
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="section-transition">
        <FAQ onContactClick={onContactClick} />
      </section>
    </div>
  )
}

export default Home
