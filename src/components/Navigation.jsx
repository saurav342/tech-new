import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import TechiniumLogo from './TechiniumLogo'

/**
 * Header/Navigation Component - Light Agency Theme
 * 
 * Features:
 * - Sticky header with light theme
 * - Left logo, center navigation, right CTA
 * - "Book a Call" primary CTA
 * - Agency navigation links
 * - Mobile responsive menu
 * - Clean, minimal design
 * 
 * Props:
 * - onContactClick: Function to handle contact modal opening
 */
const Navigation = ({ onContactClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { name: 'Our Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Case Studies', href: '#case-studies' },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className={`bg-bg-primary/95 backdrop-blur-md border-b border-ui-border sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-lg shadow-black/5' : ''
    }`} role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-5 lg:px-20">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="/" 
              className="flex items-center space-x-3 text-2xl font-bold text-text-primary hover:text-accent-primary transition-colors"
              aria-label="Home"
            >
              <TechiniumLogo size={40} />
              <span>Techinium</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.querySelector(item.href)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className={`px-4 py-3 text-base font-medium transition-all duration-300 relative group cursor-pointer ${
                    isActive(item.href)
                      ? 'text-accent-primary'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent-gradient transition-all duration-300 ${
                    isActive(item.href) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}></span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onContactClick && onContactClick()}
              className="bg-accent-gradient text-white text-sm sm:text-base px-4 sm:px-6 py-3 rounded-2xl font-medium hover:shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 backdrop-blur-sm relative overflow-hidden group"
              aria-label="Book a 15-minute call"
            >
              <span className="relative z-10">Got an idea?</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-text-secondary hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary p-2"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-bg-secondary border-t border-ui-border shadow-lg">
          <div className="px-6 pt-4 pb-6 space-y-3">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector(item.href)
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                  setIsMobileMenuOpen(false)
                }}
                className={`block px-3 py-3 text-base font-medium transition-colors rounded-lg cursor-pointer ${
                  isActive(item.href)
                    ? 'text-accent-primary bg-accent-primary/10'
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary'
                }`}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => {
                onContactClick && onContactClick()
                setIsMobileMenuOpen(false)
              }}
              className="w-full text-left px-3 py-3 text-base font-medium text-accent-primary hover:bg-bg-tertiary transition-colors rounded-lg"
            >
              Got an idea?
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation

