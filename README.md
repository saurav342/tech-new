# Techinium - AI-Powered Product Studio for Startups

A modern, conversion-focused marketing website built with React and Vite, showcasing Techinium's AI-powered product development services for startups.

## 🚀 Features

- **Modern React Architecture**: Built with React 18, Vite, and modern JavaScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Conversion Optimized**: Strategic CTAs, social proof, and lead capture forms
- **Accessibility**: WCAG 2.1 AA compliant with semantic HTML and ARIA labels
- **Performance**: Optimized for Core Web Vitals and fast loading
- **SEO Ready**: Meta tags, structured data, and semantic markup
- **Analytics**: Google Tag Manager integration for tracking

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.jsx   # Main navigation with mobile menu
│   ├── Footer.jsx       # Site footer with links
│   └── ContactModal.jsx # Lead capture modal
├── pages/               # Page components
│   ├── Home.jsx         # Landing page with hero and sections
│   ├── Services.jsx     # Detailed service packages
│   ├── Process.jsx      # 4-step development process
│   ├── Pricing.jsx      # Pricing tiers and comparison
│   ├── CaseStudies.jsx  # Success stories and testimonials
│   ├── About.jsx        # Team and company information
│   └── Contact.jsx      # Contact form and information
├── App.jsx              # Main app component with routing
├── main.jsx             # App entry point
└── index.css            # Global styles and Tailwind imports
```

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Fonts**: Inter (Google Fonts)
- **Analytics**: Google Tag Manager

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd techinium-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📱 Pages Overview

### Home Page
- Hero section with compelling value proposition
- Social proof metrics
- Value proposition cards
- 4-step process overview
- Pricing summary
- Testimonials
- Strong CTAs throughout

### Services Page
- Detailed package breakdowns (Launch, Scale, Growth)
- Feature comparisons
- Process overview
- Package-specific CTAs

### Process Page
- Detailed 4-step methodology
- Timeline visualization
- Benefits and outcomes
- Interactive elements

### Pricing Page
- Transparent pricing tiers
- Feature comparison table
- FAQ section
- Billing toggle (monthly/annual)

### Case Studies Page
- Detailed success stories
- Client testimonials
- Metrics and outcomes
- Industry examples

### About Page
- Company story and mission
- Team member profiles
- Company values
- Timeline and milestones

### Contact Page
- Multiple contact methods
- Detailed project form
- FAQ section
- Quick response promise

## 🎨 Design System

### Colors
- Primary: Blue (#3B82F6)
- Secondary: Gray (#64748B)
- Accent: Yellow (#FCD34D)
- Success: Green (#10B981)
- Warning: Purple (#8B5CF6)

### Typography
- Font Family: Inter
- Scale: 4px baseline grid
- Responsive sizing

### Components
- Consistent spacing (24px gutters)
- Card hover effects
- Smooth transitions
- Focus states for accessibility

## 📊 Analytics & Tracking

### Google Tag Manager Events
- `contact_submitted` - Form submissions
- `book_call` - Call booking clicks
- `pricing_click` - Pricing page visits
- `video_play` - Video interactions

### Conversion Tracking
- Lead capture forms
- CTA button clicks
- Package selection
- Contact method usage

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Color contrast compliance (WCAG 2.1 AA)
- Screen reader compatibility
- Alt text for images

## 🔧 Customization

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/components/Navigation.jsx`

### Modifying Styles
- Global styles: `src/index.css`
- Component styles: Use Tailwind classes
- Custom CSS: Add to `@layer components` in `index.css`

### Updating Content
- Package details: Update arrays in page components
- Pricing: Modify pricing objects in components
- Team info: Update team array in About page

## 📈 Performance Optimization

- Lazy loading for images
- Code splitting with React Router
- Optimized bundle size with Vite
- CSS purging with Tailwind
- Minimal JavaScript footprint

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy

### Netlify
1. Connect repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Traditional Hosting
1. Run `npm run build`
2. Upload `dist` folder contents to your server
3. Configure server for SPA routing

## 📞 Support

For questions or support, contact:
- Email: hello@techinium.com
- Website: https://techinium.com

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ by the Techinium team
# tech-new
