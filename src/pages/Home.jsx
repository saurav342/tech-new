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

  const handleWorkClick = () => {
    // Scroll to case studies section
    const caseStudiesSection = document.getElementById('case-studies')
    if (caseStudiesSection) {
      caseStudiesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <Hero onContactClick={onContactClick} onWorkClick={handleWorkClick} />
      
      {/* Services Section */}
      <section id="services">
        <Services onContactClick={onContactClick} />
      </section>
      
      {/* Process Section */}
      <section id="process">
        <Process onContactClick={onContactClick} />
      </section>
      
      {/* Pricing Section */}
      <section id="pricing">
        <Pricing onContactClick={onContactClick} />
      </section>
      
      {/* Case Studies Section */}
      <section id="case-studies">
        <CaseStudies onContactClick={onContactClick} />
      </section>

      {/* Testimonials Section */}
      <Testimonials onContactClick={onContactClick} />
      
      {/* FAQ Section */}
      <section id="faq">
        <FAQ onContactClick={onContactClick} />
      </section>
    </div>
  )
}

export default Home
