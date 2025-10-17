# Lightweight Agency Homepage

A premium, airy, conversion-first homepage for a product & design studio inspired by Skale, but with a bright/light aesthetic. Built with React, Vite, and Tailwind CSS.

## 🎨 Design System

### Color Palette (Light Theme)
- **Background**: `#FFFFFF` (primary), `#F8FAFC` (section surface)
- **Text**: `#0F172A` (primary), `#6B7280` (muted)
- **Accent**: `#60A5FA` → `#7C3AED` (blue to lavender gradient)
- **UI Border**: `#E6E9EE`

### Typography Scale
- **H1**: 56px (desktop), 36px (mobile)
- **H2**: 36px (desktop), 28px (mobile)
- **H3**: 24px (desktop), 20px (mobile)
- **Body**: 16px
- **Small**: 14px

### Spacing & Layout
- **Grid**: 12-column, 40px gutters, 80px page margins
- **Border Radius**: 16px (cards), 12px (buttons)
- **Shadows**: Soft, low-contrast (`0 8px 24px rgba(16,24,40,0.06)`)

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd flycode

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.jsx        # Hero section with left content, right visual
│   ├── Navigation.jsx  # Sticky header with navigation
│   ├── Services.jsx    # 3 horizontal service cards
│   ├── Process.jsx     # 4-step timeline
│   ├── CaseStudies.jsx # Alternating layout case studies
│   ├── Testimonials.jsx # Client testimonials grid
│   ├── FAQ.jsx         # Accordion FAQ section
│   └── Footer.jsx      # Footer with links and legal
├── data/               # Sample data files
│   ├── services.ts     # Service definitions
│   ├── caseStudies.ts  # Case study data
│   ├── testimonials.ts # Testimonial data
│   └── faq.ts          # FAQ data
├── tokens/             # Design system tokens
│   └── theme.ts        # Color, typography, spacing tokens
├── pages/              # Page components
│   └── Home.jsx        # Main homepage
└── App.jsx             # Main app component
```

## 🎯 Key Sections

### 1. Header (Navigation)
- Sticky navigation with logo, center nav, right CTA
- "Book a Call" primary CTA button
- Mobile-responsive hamburger menu

### 2. Hero Section
- Left content (6 columns): headline, subhead, CTAs
- Right visual (6 columns): product mockup with abstract shapes
- Primary CTA: "Book a 15-min Call"
- Secondary CTA: "See our Work"

### 3. Services Section
- 3 horizontal cards: Product Design, Engineering, Landing Pages
- Each card includes: icon, title, description, features list, CTA
- Hover animations and soft shadows

### 4. Process Section
- 4-step horizontal timeline: Discovery, Design, Development, Launch
- Each step includes: icon, title, description, details list
- Connected timeline with step numbers

### 5. Case Studies Section
- Two wide cards with alternating layout
- Left/right image placement with content on opposite side
- Success metrics with badges (e.g., "+120% conversion", "2× faster launch")
- Key results and project details

### 6. Testimonials Section
- 3-column grid of client testimonials
- Star ratings, quotes, client info
- Stats section with key metrics

### 7. FAQ Section
- Accordion-style with 4 items
- Smooth expand/collapse animations
- Accessible keyboard navigation

### 8. Footer
- Logo, tagline, and social links
- 4 columns: Company, Services, Resources, Legal
- Bottom bar with copyright

## 🛠 Customization

### Updating Content

#### Services
Edit `src/data/services.ts` to modify service offerings:
```typescript
export const services: Service[] = [
  {
    id: 1,
    icon: 'Palette',
    title: 'Your Service',
    description: 'Service description...',
    features: ['Feature 1', 'Feature 2'],
    cta: 'Your CTA Text'
  }
]
```

#### Case Studies
Update `src/data/caseStudies.ts` with your project data:
```typescript
export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Your Project',
    client: 'Client Name',
    description: 'Project description...',
    metrics: [
      { label: 'Metric', value: '+100%', icon: 'TrendingUp' }
    ],
    results: ['Result 1', 'Result 2'],
    layout: 'left'
  }
]
```

#### Testimonials
Modify `src/data/testimonials.ts` with client feedback:
```typescript
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Client Name',
    title: 'Title',
    company: 'Company',
    rating: 5,
    quote: 'Testimonial text...'
  }
]
```

### Updating Colors

Edit `src/tokens/theme.ts` to customize the color palette:
```typescript
export const theme = {
  colors: {
    background: {
      primary: '#FFFFFF',    // Main background
      secondary: '#F8FAFC',  // Section backgrounds
    },
    text: {
      primary: '#0F172A',    // Main text
      secondary: '#6B7280',  // Muted text
    },
    accent: {
      primary: '#60A5FA',    // Blue
      secondary: '#7C3AED',  // Lavender
    }
  }
}
```

### Updating Tailwind Config

Modify `tailwind.config.js` to add custom utilities:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'bg-primary': '#FFFFFF',
        'text-primary': '#0F172A',
        // Add your custom colors
      }
    }
  }
}
```

## 🖼 Image Assets

### Placeholder Images
The project uses placeholder images for:
- Case study screenshots (`/api/placeholder/600/400`)
- Client avatars (`/api/placeholder/80/80`)

### Replacing Images
1. Add your images to the `public/` directory
2. Update image paths in the data files
3. For case studies, use 600x400px images
4. For avatars, use 80x80px images

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- Color contrast compliance (WCAG AA)

## 📱 Responsive Design

- **Desktop**: 1440px width, 12-column grid
- **Tablet**: 1024px width, adapted layout
- **Mobile**: 375px width, single column

### Breakpoints
- `sm`: 640px
- `md`: 768px  
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🎭 Animations

- Fade-in-up animations on scroll
- Hover effects on cards and buttons
- Smooth transitions (300ms duration)
- Intersection Observer for scroll-triggered animations

## 🔧 Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Code Style
- Use functional components with hooks
- Prefer Tailwind utility classes
- Include TypeScript interfaces for data
- Add comprehensive comments
- Follow accessibility best practices

## 📦 Dependencies

### Core
- React 18.2.0
- React Router DOM 6.8.1
- Vite 4.4.5

### UI & Icons
- Tailwind CSS 3.3.3
- Lucide React 0.263.1

### Development
- ESLint
- PostCSS
- Autoprefixer

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Vite configuration
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist/` folder to Netlify
3. Configure redirects for SPA routing

### Other Platforms
The built files in `dist/` can be deployed to any static hosting service.

## 📞 Support

For questions or issues:
1. Check the component comments for usage examples
2. Review the data files for content structure
3. Consult the Tailwind CSS documentation for styling
4. Test accessibility with screen readers and keyboard navigation

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ for modern startups and SaaS teams**