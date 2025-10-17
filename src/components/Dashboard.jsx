import React from 'react'
import { ArrowRight, TrendingUp } from 'lucide-react'

/**
 * Dashboard Visualization Section Component
 * 
 * Features:
 * - Two-column layout: dashboard mockup + text content
 * - Interactive dashboard with payout display and chart
 * - Pill-shaped interactive element
 * - Bar chart with highlighted bar and digital dots
 * - Responsive design
 * 
 * Props:
 * - onContactClick: Function to handle CTA clicks
 */
const Dashboard = ({ onContactClick }) => {
  return (
    <section className="bg-bg-secondary section-padding-dark" role="region" aria-labelledby="dashboard-heading">
      <div className="container-dark">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Dashboard Mockup */}
          <div className="order-2 lg:order-1 animate-on-scroll">
            <div className="dashboard-card-dark max-w-lg mx-auto">
              {/* Dashboard Header */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="bg-accent-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  Live
                </div>
              </div>
              
              {/* Payout Section */}
              <div className="mb-6">
                <div className="text-sm text-text-tertiary mb-2">Payout</div>
                <div className="text-3xl font-bold text-text-primary mb-1">$88,256.00</div>
                <div className="flex items-center gap-2 text-sm text-green-400">
                  <TrendingUp className="w-4 h-4" />
                  <span>+12.5% from last month</span>
                </div>
              </div>
              
              {/* Interactive Pill */}
              <div className="mb-6">
                <div className="bg-bg-tertiary rounded-full p-1 flex">
                  <div className="bg-accent-primary text-white px-4 py-2 rounded-full text-sm font-medium flex-1 text-center cursor-pointer hover:bg-accent-secondary transition-colors">
                    Analytics
                  </div>
                  <div className="text-text-secondary px-4 py-2 text-sm font-medium flex-1 text-center cursor-pointer hover:text-text-primary transition-colors">
                    Reports
                  </div>
                </div>
              </div>
              
              {/* Bar Chart */}
              <div className="space-y-4">
                <div className="text-sm text-text-tertiary">Monthly Performance</div>
                <div className="flex items-end gap-2 h-24">
                  {[40, 65, 45, 80, 60, 90, 75].map((height, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div 
                        className={`w-full rounded-t transition-all duration-500 ${
                          index === 5 
                            ? 'bg-gradient-to-t from-accent-primary to-accent-tertiary' 
                            : 'bg-bg-tertiary'
                        }`}
                        style={{ height: `${height}%` }}
                      ></div>
                      {index === 5 && (
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                          <div className="bg-accent-primary text-white text-xs px-2 py-1 rounded">
                            Peak
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Digital Dots */}
                <div className="flex justify-between text-xs text-text-tertiary">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                </div>
              </div>
              
              {/* Scattered Digital Dots */}
              <div className="absolute top-4 right-4 space-y-1">
                <div className="w-1 h-1 bg-accent-tertiary rounded-full opacity-60"></div>
                <div className="w-1 h-1 bg-accent-secondary rounded-full opacity-40"></div>
                <div className="w-1 h-1 bg-accent-primary rounded-full opacity-80"></div>
              </div>
              <div className="absolute bottom-4 left-4 space-y-1">
                <div className="w-1 h-1 bg-accent-tertiary rounded-full opacity-50"></div>
                <div className="w-1 h-1 bg-accent-secondary rounded-full opacity-70"></div>
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="order-1 lg:order-2 animate-on-scroll">
            <h2 id="dashboard-heading" className="text-h2 font-bold text-text-primary mb-6">
              Your Security, Your Status — Live Updates Anytime
            </h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Monitor your financial health in real-time with our advanced dashboard. 
              Get instant insights, track performance, and make informed decisions 
              with comprehensive analytics at your fingertips.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent-tertiary rounded-full"></div>
                <span className="text-text-secondary">Real-time transaction monitoring</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent-tertiary rounded-full"></div>
                <span className="text-text-secondary">Advanced security analytics</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent-tertiary rounded-full"></div>
                <span className="text-text-secondary">Customizable reporting</span>
              </div>
            </div>
            <button
              onClick={() => onContactClick && onContactClick()}
              className="btn-dark-primary flex items-center gap-2"
              aria-label="Learn more about dashboard features"
            >
              Explore Dashboard
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
