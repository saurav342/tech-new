import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()
  const currentHash = typeof window !== 'undefined' ? window.location.hash : ''

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

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
    if (path.startsWith('#')) {
      return location.pathname === '/' && currentHash === path
    }
    return location.pathname === path
  }

  const handleSectionNavigation = (event, href) => {
    event.preventDefault()
    const targetId = href.replace('#', '')

    if (location.pathname !== '/') {
      navigate('/', { state: { targetId } })
      setIsMobileMenuOpen(false)
      return
    }

    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`bg-bg-primary/95 backdrop-blur-md border-b border-ui-border sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-lg shadow-black/5' : ''
    }`} role="navigation" aria-label="Main navigation">
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
            <div className="ml-8 flex items-baseline space-x-6">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(event) => handleSectionNavigation(event, item.href)}
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
          <div className="flex items-center space-x-3">
            <a
              href="https://cal.com/techinium/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary hidden md:inline-flex text-sm sm:text-base relative overflow-hidden group"
              aria-label="Book a 15-minute call"
            >
              <span className="relative z-10">Book a 15-min call</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" aria-hidden="true"></div>
            </a>
            
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
        <div className="fixed inset-0 z-50 md:hidden mobile-nav-overlay animate-overlay-fade-in" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 w-full h-full"
            onClick={toggleMobileMenu}
            aria-label="Close mobile menu overlay"
          />
          <div className="absolute inset-y-0 right-0 w-full max-w-xs mobile-nav-panel animate-panel-slide-in">
            <div className="flex items-center justify-between px-6 pt-6">
              <div className="flex items-center space-x-3">
                <TechiniumLogo size={32} />
                <span className="text-lg font-semibold text-text-primary">Techinium</span>
              </div>
              <button
                onClick={toggleMobileMenu}
                className="text-text-secondary hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary rounded-full p-2"
                aria-label="Close mobile menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="px-6 pt-6 pb-10 space-y-2">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(event) => handleSectionNavigation(event, item.href)}
                  className={`block px-4 py-3 text-base font-medium transition-colors rounded-xl ${
                    isActive(item.href)
                      ? 'text-accent-primary bg-accent-primary/10'
                      : 'text-text-secondary hover:text-text-primary hover:bg-white'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-6">
                <a
                  href="https://cal.com/techinium/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="cta-primary w-full justify-center"
                >
                  Book a 15-min call
                </a>
                <p className="mt-3 text-sm text-text-secondary text-center">
                  No sales pitch — just product advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {!isMobileMenuOpen && (
        <div className="md:hidden fixed bottom-5 inset-x-5 z-40">
          <div className="rounded-3xl border border-ui-border bg-white/95 backdrop-blur-md shadow-lg p-4">
            <a
              href="https://cal.com/techinium/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary w-full justify-center"
              aria-label="Book a 15-minute call on mobile"
            >
              Book a 15-min call
            </a>
            <p className="mt-2 text-xs text-text-secondary text-center">
              No sales pitch — just product advice.
            </p>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
