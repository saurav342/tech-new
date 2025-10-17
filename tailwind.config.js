/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light Theme Colors
        'bg-primary': '#FFFFFF',
        'bg-secondary': '#F8FAFC',
        'bg-tertiary': '#F1F5F9',
        'bg-card': '#FFFFFF',
        'bg-banner': '#F8FAFC',
        
        'text-primary': '#0F172A',
        'text-secondary': '#6B7280',
        'text-tertiary': '#9CA3AF',
        'text-accent': '#F76B1C',
        
        'accent-primary': '#F76B1C',
        'accent-secondary': '#FF8C42',
        'accent-tertiary': '#FFB366',
        'ui-border': '#E6E9EE',
        
        // Vibrant color palette
        vibrant: {
          blue: '#4ECDC4',
          yellow: '#FFEAA7',
          orange: '#FF6B6B',
          pink: '#FF6B6B',
          green: '#96CEB4',
          purple: '#DDA0DD',
        },
        // Legacy colors for backward compatibility
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['3.5rem', { lineHeight: '1.1' }],
        'h2': ['2.25rem', { lineHeight: '1.2' }],
        'h3': ['1.5rem', { lineHeight: '1.3' }],
        'h4': ['1.25rem', { lineHeight: '1.4' }],
        'h5': ['1.125rem', { lineHeight: '1.5' }],
        'h6': ['1rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        'container': '1440px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        glow: {
          '0%': {
            boxShadow: '0 0 20px rgba(247, 107, 28, 0.3)',
          },
          '100%': {
            boxShadow: '0 0 30px rgba(247, 107, 28, 0.6)',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'accent-gradient': 'linear-gradient(135deg, #F76B1C 0%, #FFF8BE 100%)',
        'orange-yellow': 'linear-gradient(135deg, #F76B1C 0%, #FFF8BE 100%)',
        'soft-orange': 'linear-gradient(135deg, #FF8C42 0%, #FFB366 100%)',
        'light-orange': 'linear-gradient(135deg, #FFB366 0%, #FFD93D 100%)',
        'warm-yellow': 'linear-gradient(135deg, #FFD93D 0%, #FFF8BE 100%)',
        'subtle': 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
      },
      boxShadow: {
        'soft': '0 8px 24px rgba(16, 24, 40, 0.06)',
        'card': '0 4px 12px rgba(16, 24, 40, 0.04)',
        'subtle': '0 1px 2px 0 rgba(16, 24, 40, 0.04)',
      },
    },
  },
  plugins: [],
}

