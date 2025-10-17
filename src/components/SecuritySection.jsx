import React from 'react'
import { Shield, Lock, Eye, Smartphone, Monitor, Globe, Server } from 'lucide-react'

/**
 * Security Section Component
 * 
 * Features:
 * - Centered title and description
 * - Central layered cubes/planes graphic
 * - Encircling ring with connecting lines
 * - Four platform icons placed cardinally
 * - Animated floating elements
 * 
 * Props:
 * - None (static content)
 */
const SecuritySection = () => {
  const platforms = [
    {
      icon: Smartphone,
      name: 'Mobile',
      position: 'top-0 left-1/2 transform -translate-x-1/2 -translate-y-8'
    },
    {
      icon: Monitor,
      name: 'Desktop',
      position: 'right-0 top-1/2 transform -translate-y-1/2 translate-x-8'
    },
    {
      icon: Globe,
      name: 'Web',
      position: 'bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8'
    },
    {
      icon: Server,
      name: 'API',
      position: 'left-0 top-1/2 transform -translate-y-1/2 -translate-x-8'
    }
  ]

  return (
    <section className="bg-bg-secondary section-padding-dark" role="region" aria-labelledby="security-heading">
      <div className="container-dark">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 id="security-heading" className="text-h2 font-bold text-text-primary mb-6">
            Effortless Security Across All Platforms
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Your data is protected with enterprise-grade security measures that work 
            seamlessly across all your devices and platforms.
          </p>
        </div>
        
        {/* Central Security Visualization */}
        <div className="relative max-w-2xl mx-auto">
          <div className="relative w-96 h-96 mx-auto">
            {/* Encircling Ring */}
            <div className="absolute inset-0 border-2 border-accent-tertiary/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute inset-4 border border-accent-secondary/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            
            {/* Central Cubes/Planes */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Main Security Cube */}
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-accent-primary to-accent-tertiary rounded-xl shadow-glow transform rotate-12 animate-float">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Floating Security Elements */}
                <div className="absolute -top-8 -left-8 w-12 h-12 bg-bg-card border border-accent-secondary rounded-lg transform -rotate-12 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Lock className="w-6 h-6 text-accent-secondary" />
                  </div>
                </div>
                
                <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-bg-card border border-accent-primary rounded-lg transform rotate-12 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-accent-primary" />
                  </div>
                </div>
                
                <div className="absolute top-1/2 -left-12 w-10 h-10 bg-bg-tertiary border border-accent-tertiary rounded-lg transform -rotate-45 animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 bg-accent-tertiary rounded-full"></div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -right-12 w-10 h-10 bg-bg-tertiary border border-accent-secondary rounded-lg transform rotate-45 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 bg-accent-secondary rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Platform Icons */}
            {platforms.map((platform, index) => (
              <div key={index} className={`absolute ${platform.position}`}>
                <div className="w-16 h-16 bg-bg-card border border-bg-tertiary rounded-xl flex items-center justify-center hover:border-accent-tertiary transition-all duration-300 group">
                  <platform.icon className="w-8 h-8 text-text-secondary group-hover:text-accent-tertiary transition-colors" />
                </div>
                <div className="text-center mt-2">
                  <div className="text-sm text-text-tertiary">{platform.name}</div>
                </div>
                
                {/* Connecting Lines */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-px h-24 bg-gradient-to-b from-transparent via-accent-tertiary/30 to-transparent transform origin-center"></div>
                </div>
              </div>
            ))}
            
            {/* Floating Particles */}
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-accent-tertiary rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-accent-secondary rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-accent-primary rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-accent-tertiary rounded-full opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
        
        {/* Security Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center animate-on-scroll">
            <div className="w-16 h-16 bg-accent-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-accent-primary" />
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">End-to-End Encryption</h3>
            <p className="text-text-secondary">Your data is encrypted at rest and in transit with military-grade security.</p>
          </div>
          
          <div className="text-center animate-on-scroll">
            <div className="w-16 h-16 bg-accent-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-accent-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">Multi-Factor Authentication</h3>
            <p className="text-text-secondary">Additional security layers protect your account from unauthorized access.</p>
          </div>
          
          <div className="text-center animate-on-scroll">
            <div className="w-16 h-16 bg-accent-tertiary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Eye className="w-8 h-8 text-accent-tertiary" />
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">Real-Time Monitoring</h3>
            <p className="text-text-secondary">Continuous monitoring and threat detection keep your data safe 24/7.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecuritySection
