import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
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
  const location = useLocation()

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
    <nav className="bg-bg-primary/95 backdrop-blur-sm border-b border-ui-border sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-5 lg:px-20">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-3 text-2xl font-bold text-text-primary hover:text-accent-primary transition-colors"
              aria-label="Home"
            >
              <TechiniumLogo size={40} />
              <span>Techinium</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-accent-primary border-b-2 border-accent-primary'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onContactClick && onContactClick()}
              className="bg-accent-gradient text-white text-sm px-6 py-3 rounded-xl font-medium hover:shadow-soft transition-all duration-300 hover:-translate-y-0.5"
              aria-label="Book a 15-minute call"
            >
              Got an idea?
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
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-3 text-base font-medium transition-colors rounded-lg ${
                  isActive(item.href)
                    ? 'text-accent-primary bg-accent-primary/10'
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
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

