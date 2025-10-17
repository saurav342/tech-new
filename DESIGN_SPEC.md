# Visual Design Specification

## Design Overview
This document outlines the visual design specifications for the dark-themed fintech homepage, including layout, spacing, typography, and component specifications.

## Layout Specifications

### Container & Grid System
- **Container Max Width**: 1440px
- **Page Margins**: 80px (desktop), 40px (tablet), 20px (mobile)
- **Grid System**: 12-column grid
- **Gutters**: 40px between columns
- **Breakpoints**: 375px (mobile), 1024px (tablet), 1440px (desktop)

### Section Spacing
- **Section Padding**: 80px top/bottom (desktop), 60px (tablet), 40px (mobile)
- **Component Spacing**: 64px between major components
- **Element Spacing**: 32px between related elements

## Typography Scale

### Headings
- **H1 (Hero)**: 56px / 3.5rem, font-weight: 800, line-height: 1.1
- **H2 (Section)**: 40px / 2.5rem, font-weight: 700, line-height: 1.2
- **H3 (Subsection)**: 32px / 2rem, font-weight: 600, line-height: 1.3
- **H4**: 24px / 1.5rem, font-weight: 600, line-height: 1.4
- **H5**: 20px / 1.25rem, font-weight: 500, line-height: 1.5
- **H6**: 18px / 1.125rem, font-weight: 500, line-height: 1.5

### Body Text
- **Large Body**: 20px / 1.25rem, line-height: 1.6
- **Body**: 16px / 1rem, line-height: 1.5
- **Small**: 14px / 0.875rem, line-height: 1.4
- **Caption**: 12px / 0.75rem, line-height: 1.3

## Color Specifications

### Background Colors
- **Primary**: #0A0A0A (Deep black)
- **Secondary**: #121212 (Dark charcoal)
- **Tertiary**: #1A1A1A (Lighter charcoal)
- **Card**: #1E1E1E (Card background)
- **Banner**: #2A2A2A (Banner background)

### Text Colors
- **Primary**: #FFFFFF (Pure white)
- **Secondary**: #BBBBBB (Muted white)
- **Tertiary**: #888888 (Dimmed text)
- **Accent**: #C084FC (Light purple)

### Accent Colors
- **Primary**: #6D28D9 (Deep purple)
- **Secondary**: #9333EA (Medium purple)
- **Tertiary**: #C084FC (Light purple)
- **Silver**: #C0C0C0

### Card Gradients
- **Purple-Blue**: linear-gradient(135deg, #6D28D9 0%, #3B82F6 100%)
- **Neon Teal**: linear-gradient(135deg, #14B8A6 0%, #06B6D4 100%)
- **Orange-Red**: linear-gradient(135deg, #F97316 0%, #EF4444 100%)
- **Holographic**: linear-gradient(135deg, #1E1E1E 0%, #374151 50%, #1E1E1E 100%)

## Component Specifications

### 1. Hero Section
- **Height**: 100vh (minimum)
- **Background**: Dark gradient with radial glow
- **Content**: Centered, max-width: 1200px
- **Cards**: 4 futuristic cards, 256px × 160px each
- **Card Spacing**: 32px between cards
- **Card Rotation**: 3°, -2°, 1°, -1° (respectively)

### 2. Stats Section
- **Background**: #0A0A0A
- **Layout**: 4-column grid (desktop), 2-column (tablet), 1-column (mobile)
- **Card Size**: 280px × 200px
- **Number Size**: 48px (desktop), 40px (mobile)
- **Label Size**: 14px, uppercase, letter-spacing: 0.05em

### 3. Dashboard Section
- **Layout**: 2-column (desktop), 1-column (mobile)
- **Dashboard Size**: 480px × 360px
- **Chart Height**: 96px
- **Payout Value**: 32px, font-weight: 700
- **Pill Size**: 120px × 40px

### 4. Feature Section
- **Layout**: 2-column (desktop), 1-column (mobile)
- **Dashboard Size**: 480px × 400px
- **Feature List**: 24px spacing between items
- **Icon Size**: 24px × 24px
- **Check Icon**: 16px × 16px

### 5. Security Section
- **Central Graphic**: 384px × 384px
- **Platform Icons**: 64px × 64px
- **Ring Animation**: 20s rotation (outer), 15s reverse (inner)
- **Floating Elements**: Various sizes (8px - 16px)

### 6. Testimonials Section
- **Card Size**: 400px × 320px
- **Stacking**: 3 cards visible, 2 behind
- **Behind Cards**: 50% opacity, 2° rotation, 95% scale
- **Quote Icon**: 32px × 32px
- **Avatar**: 48px × 48px

### 7. FAQ Section
- **Max Width**: 800px
- **Item Height**: 80px (collapsed), auto (expanded)
- **Icon Size**: 20px × 20px
- **Padding**: 24px horizontal, 24px vertical

### 8. Banner Section
- **Height**: 200px
- **Border Radius**: 16px
- **Padding**: 48px
- **Button Size**: 160px × 48px

## Animation Specifications

### Transitions
- **Default Duration**: 300ms
- **Hover Duration**: 200ms
- **Page Load**: 600ms
- **Easing**: ease-out

### Keyframe Animations
- **Float**: 6s infinite, ease-in-out
- **Glow**: 2s infinite alternate
- **Pulse**: 3s infinite
- **Fade In Up**: 600ms ease-out

### Scroll Animations
- **Trigger**: Intersection Observer
- **Threshold**: 0.1
- **Root Margin**: 0px 0px -50px 0px
- **Animation**: fadeInUp

## Responsive Breakpoints

### Mobile (375px)
- **Container Padding**: 20px
- **Section Padding**: 40px
- **Typography Scale**: 0.875x
- **Grid**: 1 column
- **Card Stacking**: Vertical

### Tablet (1024px)
- **Container Padding**: 40px
- **Section Padding**: 60px
- **Typography Scale**: 0.95x
- **Grid**: 2 columns
- **Card Layout**: 2×2 grid

### Desktop (1440px)
- **Container Padding**: 80px
- **Section Padding**: 80px
- **Typography Scale**: 1x
- **Grid**: 4 columns
- **Card Layout**: Full grid

## Accessibility Specifications

### Color Contrast
- **Text on Background**: 4.5:1 minimum
- **Large Text**: 3:1 minimum
- **Interactive Elements**: 3:1 minimum

### Focus States
- **Focus Ring**: 2px solid #C084FC
- **Focus Offset**: 2px
- **Focus Duration**: 150ms

### Interactive Elements
- **Minimum Touch Target**: 44px × 44px
- **Hover States**: 10% opacity increase
- **Active States**: 5% scale reduction

## Performance Specifications

### Image Optimization
- **Format**: WebP with JPEG fallback
- **Compression**: 85% quality
- **Lazy Loading**: Intersection Observer
- **Responsive Images**: srcset with multiple sizes

### Animation Performance
- **GPU Acceleration**: transform and opacity only
- **Will-change**: Applied to animated elements
- **Reduced Motion**: Respects prefers-reduced-motion

### Loading Performance
- **Critical CSS**: Inlined
- **Font Loading**: font-display: swap
- **JavaScript**: Code splitting and lazy loading

## Browser Support

### Modern Browsers
- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

### Fallbacks
- **CSS Grid**: Flexbox fallback
- **CSS Custom Properties**: Static values
- **Intersection Observer**: Scroll event fallback

## Export Specifications

### Assets
- **Icons**: SVG format, 24px base size
- **Images**: WebP format, multiple sizes
- **Logos**: SVG format, scalable
- **Favicon**: SVG format, 32px

### Code
- **Components**: TypeScript/JSX
- **Styles**: Tailwind CSS classes
- **Tokens**: TypeScript exports
- **Documentation**: Markdown format

---

This specification ensures consistent implementation across all components and maintains the high-quality, professional appearance of the fintech homepage.
