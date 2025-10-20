import { Link } from 'react-router-dom'
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react'
import TechiniumLogo from './TechiniumLogo'

/**
 * Footer Component - Light Agency Theme
 * 
 * Features:
 * - Clean white background with subtle borders
 * - Left: logo & tagline
 * - Four columns: Company, Services, Resources, Legal
 * - Bottom bar: social icons and copyright
 * - Responsive design
 * 
 * Props:
 * - onContactClick: Function to handle contact modal opening
 */
const Footer = ({ onContactClick }) => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Product Design', href: '/services#design' },
        { name: 'Engineering', href: '/services#engineering' },
        { name: 'Landing Pages', href: '/services#landing' },
        { name: 'Consulting', href: '/services#consulting' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Blog', href: '/blog' },
        { name: 'Design System', href: '/design-system' },
        { name: 'Open Source', href: '/open-source' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'GDPR', href: '/gdpr' },
      ]
    }
  ]

  return (
    <>
      {/* Final CTA Section */}
      <section className="bg-bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Scale your business with ease. Over 60+ startups trusted us and increased their revenue!
          </h2>
          <a
            href="https://cal.com/techinium/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent-gradient text-white px-8 py-4 rounded-xl font-medium hover:shadow-soft transition-all duration-300 hover:-translate-y-1 mt-8 inline-block"
            aria-label="Book a 30-minute call"
          >
            Book a 30-min call
          </a>
          
        </div>
      </section>

      <footer className="bg-bg-primary border-t border-ui-border py-16" role="contentinfo">
      <div className="max-w-7xl mx-auto px-5 lg:px-20">
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 text-2xl font-bold mb-4">
              <TechiniumLogo size={40} />
              <span className="text-text-primary">Techinium</span>
            </div>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Scale your business with ease. Over 60+ startups trusted us and increased their revenue!
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-text-tertiary hover:text-accent-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-text-tertiary hover:text-accent-primary transition-colors" aria-label="X (Twitter)">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-text-tertiary hover:text-accent-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-text-tertiary hover:text-accent-primary transition-colors" aria-label="GitHub">
                <Github className="w-6 h-6" />
              </a>
            </div> */}
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-text-primary mb-4">{section.title}</h3>
              <ul className="space-y-3 text-text-secondary">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('http') ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="hover:text-text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-ui-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-text-tertiary hover:text-accent-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-tertiary hover:text-accent-primary transition-colors" aria-label="X (Twitter)">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-tertiary hover:text-accent-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-tertiary hover:text-accent-primary transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </div>
            <p className="text-text-tertiary text-sm">
              &copy; {currentYear} Techinium. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer

