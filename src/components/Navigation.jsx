import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navigation = ({ onContactClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navigationItems = [
    { name: 'Services', href: '/services' },
    { name: 'Process', href: '/process' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'About', href: '/about' },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-2xl font-bold text-gray-900 hover:text-primary-600 transition-colors"
              aria-label="Techinium Home"
            >
              <img 
                src="/favicon.svg" 
                alt="Techinium Logo" 
                className="w-8 h-8"
              />
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
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <a
              href="https://cal.com/techinium/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              aria-label="Book Discovery Call"
            >
              Book Discovery Call
            </a>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 p-2"
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
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://cal.com/techinium/15min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-left px-3 py-2 text-base font-medium text-primary-600 hover:bg-primary-50 transition-colors"
            >
              Book Discovery Call
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation

