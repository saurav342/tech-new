import React from 'react'
import { Check, ArrowRight, Calendar, Users, Clock, Shield } from 'lucide-react'

/**
 * Feature Section Component
 * 
 * Features:
 * - Two-column layout: text content + dashboard mockup
 * - Interview booking focus with bulleted features
 * - Angled digital dashboard/device mockup
 * - Sidebar, top cards, line graph, and header elements
 * - Responsive design
 * 
 * Props:
 * - onContactClick: Function to handle CTA clicks
 */
const FeatureSection = ({ onContactClick }) => {
  const features = [
    {
      icon: Calendar,
      text: 'Automated scheduling with smart conflict detection'
    },
    {
      icon: Users,
      text: 'Multi-participant coordination and management'
    },
    {
      icon: Clock,
      text: 'Timezone-aware scheduling across global teams'
    },
    {
      icon: Shield,
      text: 'Enterprise-grade security and compliance'
    }
  ]

  return (
    <section className="bg-bg-primary section-padding-dark" role="region" aria-labelledby="feature-heading">
      <div className="container-dark">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-on-scroll">
            <h2 id="feature-heading" className="text-h2 font-bold text-text-primary mb-6">
              Book Interviews Without the Back-and-Forth
            </h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Streamline your hiring process with intelligent scheduling that eliminates 
              the endless email chains. Our platform automatically coordinates between 
              candidates, interviewers, and hiring managers to find the perfect time slots.
            </p>
            
            {/* Feature List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-accent-primary rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-text-secondary leading-relaxed">{feature.text}</span>
                </div>
              ))}
            </div>
            
            <button
              onClick={() => onContactClick && onContactClick()}
              className="btn-dark-primary flex items-center gap-2"
              aria-label="Learn more about interview scheduling"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          {/* Dashboard Mockup */}
          <div className="animate-on-scroll">
            <div className="relative max-w-lg mx-auto">
              {/* Main Dashboard Container */}
              <div className="dashboard-card-dark transform rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-text-tertiary">Interview Scheduler</div>
                </div>
                
                {/* Top Cards Row */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-bg-tertiary rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-text-primary">24</div>
                    <div className="text-xs text-text-tertiary">Scheduled</div>
                  </div>
                  <div className="bg-bg-tertiary rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-text-primary">8</div>
                    <div className="text-xs text-text-tertiary">Pending</div>
                  </div>
                  <div className="bg-bg-tertiary rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-text-primary">92%</div>
                    <div className="text-xs text-text-tertiary">Success</div>
                  </div>
                </div>
                
                {/* Line Graph */}
                <div className="mb-6">
                  <div className="text-sm text-text-tertiary mb-3">Weekly Schedule</div>
                  <div className="relative h-20">
                    <svg className="w-full h-full" viewBox="0 0 200 60">
                      <polyline
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        points="0,50 30,35 60,40 90,25 120,30 150,20 180,15 200,10"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#6D28D9" />
                          <stop offset="100%" stopColor="#C084FC" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                
                {/* Sidebar Elements */}
                <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
                  <div className="bg-bg-tertiary rounded-lg p-3 space-y-2">
                    <div className="w-8 h-1 bg-accent-primary rounded"></div>
                    <div className="w-6 h-1 bg-text-tertiary rounded"></div>
                    <div className="w-7 h-1 bg-text-tertiary rounded"></div>
                    <div className="w-5 h-1 bg-text-tertiary rounded"></div>
                  </div>
                </div>
                
                {/* Bottom Status */}
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-text-secondary">All systems operational</span>
                  </div>
                  <div className="text-text-tertiary">Last updated: 2 min ago</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-tertiary rounded-full opacity-60 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent-secondary rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
