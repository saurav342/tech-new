// Design System Tokens for Light Agency Theme
export const theme = {
  colors: {
    // Primary Background Colors
    background: {
      primary: '#FFFFFF',      // Pure white
      secondary: '#F8FAFC',    // Light gray surface
      tertiary: '#F1F5F9',     // Subtle background
      card: '#FFFFFF',         // Card background
      banner: '#F8FAFC',       // Banner background
    },
    
    // Text Colors
    text: {
      primary: '#0F172A',      // Dark slate
      secondary: '#6B7280',    // Muted gray
      tertiary: '#9CA3AF',     // Light gray
      accent: '#F76B1C',       // Rich reddish-orange accent
    },
    
    // Accent Gradient Colors - Modern Orange to Peach/Pink
    accent: {
      primary: '#FF6B35',      // Modern orange
      secondary: '#FF8E53',    // Soft orange
      tertiary: '#FFB366',     // Light orange
      quaternary: '#FF9A8B',   // Peach
      gradient: 'linear-gradient(135deg, #FF6B35 0%, #FF9A8B 50%, #FFB3BA 100%)',
      gradientSoft: 'linear-gradient(135deg, #FF8E53 0%, #FFB3BA 100%)',
    },
    
    // UI Colors
    ui: {
      border: '#E6E9EE',        // Light border
      success: '#10B981',       // Green
      warning: '#F59E0B',       // Amber
      error: '#EF4444',         // Red
      info: '#F76B1C',          // Rich reddish-orange
    },
    
    // Card Gradients (light theme)
    cardGradients: {
      orangeYellow: 'linear-gradient(135deg, #F76B1C 0%, #FFF8BE 100%)',
      softOrange: 'linear-gradient(135deg, #FF8C42 0%, #FFB366 100%)',
      lightOrange: 'linear-gradient(135deg, #FFB366 0%, #FFD93D 100%)',
      warmYellow: 'linear-gradient(135deg, #FFD93D 0%, #FFF8BE 100%)',
      subtle: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
    }
  },
  
  typography: {
    fontFamily: {
      primary: ['Inter', 'system-ui', 'sans-serif'],
      display: ['Clash Display', 'Inter', 'system-ui', 'sans-serif'],
      fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
    },
    
    fontSize: {
      h1: '4rem',        // 64px - More confident
      h2: '2.5rem',      // 40px
      h3: '1.75rem',     // 28px
      h4: '1.375rem',    // 22px
      h5: '1.125rem',    // 18px
      h6: '1rem',        // 16px
      body: '1rem',      // 16px
      small: '0.875rem', // 14px
      button: '1rem',    // 16px
      display: '5rem',   // 80px - For hero headlines
    },
    
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
    
    lineHeight: {
      tight: '1.1',
      normal: '1.5',
      relaxed: '1.75',
    },
    
    letterSpacing: {
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
    }
  },
  
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
    '4xl': '6rem',   // 96px
    '5xl': '8rem',   // 128px
  },
  
  borderRadius: {
    none: '0',
    sm: '0.25rem',   // 4px
    md: '0.5rem',    // 8px
    lg: '0.75rem',   // 12px
    xl: '1rem',      // 16px
    '2xl': '1.5rem', // 24px
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(16, 24, 40, 0.04)',
    md: '0 4px 6px -1px rgba(16, 24, 40, 0.06), 0 2px 4px -1px rgba(16, 24, 40, 0.04)',
    lg: '0 8px 24px rgba(16, 24, 40, 0.06)',
    xl: '0 20px 25px -5px rgba(16, 24, 40, 0.08), 0 10px 10px -5px rgba(16, 24, 40, 0.04)',
    soft: '0 8px 24px rgba(16, 24, 40, 0.06)',
    card: '0 4px 12px rgba(16, 24, 40, 0.04)',
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  container: {
    maxWidth: '1440px',
    padding: '0 80px',
    gutter: '40px',
  },
  
  grid: {
    columns: 12,
    gap: '40px',
  }
}

// CSS Custom Properties for runtime usage
export const cssVariables = {
  '--color-bg-primary': theme.colors.background.primary,
  '--color-bg-secondary': theme.colors.background.secondary,
  '--color-bg-tertiary': theme.colors.background.tertiary,
  '--color-bg-card': theme.colors.background.card,
  '--color-bg-banner': theme.colors.background.banner,
  
  '--color-text-primary': theme.colors.text.primary,
  '--color-text-secondary': theme.colors.text.secondary,
  '--color-text-tertiary': theme.colors.text.tertiary,
  '--color-text-accent': theme.colors.text.accent,
  
  '--color-accent-primary': theme.colors.accent.primary,
  '--color-accent-secondary': theme.colors.accent.secondary,
  '--color-accent-tertiary': theme.colors.accent.tertiary,
  '--color-accent-gradient': theme.colors.accent.gradient,
  
  '--color-ui-border': theme.colors.ui.border,
  '--color-ui-success': theme.colors.ui.success,
  '--color-ui-warning': theme.colors.ui.warning,
  '--color-ui-error': theme.colors.ui.error,
  '--color-ui-info': theme.colors.ui.info,
  
  '--font-size-h1': theme.typography.fontSize.h1,
  '--font-size-h2': theme.typography.fontSize.h2,
  '--font-size-h3': theme.typography.fontSize.h3,
  '--font-size-h4': theme.typography.fontSize.h4,
  '--font-size-h5': theme.typography.fontSize.h5,
  '--font-size-h6': theme.typography.fontSize.h6,
  '--font-size-body': theme.typography.fontSize.body,
  '--font-size-small': theme.typography.fontSize.small,
  '--font-size-button': theme.typography.fontSize.button,
  
  '--spacing-xs': theme.spacing.xs,
  '--spacing-sm': theme.spacing.sm,
  '--spacing-md': theme.spacing.md,
  '--spacing-lg': theme.spacing.lg,
  '--spacing-xl': theme.spacing.xl,
  '--spacing-2xl': theme.spacing['2xl'],
  '--spacing-3xl': theme.spacing['3xl'],
  '--spacing-4xl': theme.spacing['4xl'],
  '--spacing-5xl': theme.spacing['5xl'],
  
  '--border-radius-sm': theme.borderRadius.sm,
  '--border-radius-md': theme.borderRadius.md,
  '--border-radius-lg': theme.borderRadius.lg,
  '--border-radius-xl': theme.borderRadius.xl,
  '--border-radius-2xl': theme.borderRadius['2xl'],
  '--border-radius-full': theme.borderRadius.full,
  
  '--shadow-sm': theme.shadows.sm,
  '--shadow-md': theme.shadows.md,
  '--shadow-lg': theme.shadows.lg,
  '--shadow-xl': theme.shadows.xl,
  '--shadow-soft': theme.shadows.soft,
  '--shadow-card': theme.shadows.card,
}

export default theme
