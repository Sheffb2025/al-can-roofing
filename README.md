# AL-CAN Roofing - Professional Website

A modern, high-performance website for AL-CAN Roofing, a premium roofing contractor serving Windsor & Essex County, Ontario.

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## Features

### Pages
- **Home:** Hero section with trust indicators, services overview, testimonials, and CTAs
- **Services:** Detailed service pages with before/after sliders and FAQ accordion
- **About:** Company history, team information, certifications, and service areas
- **Gallery:** Before/after project showcase with interactive sliders
- **Contact:** Contact form, business information, hours, and embedded map

### Components
- Responsive header with mobile menu and sticky mobile CTA
- Animated counter for statistics
- Before/after image slider
- FAQ accordion with smooth animations
- Contact form with validation
- Service cards with hover effects
- Footer with local area links

### SEO Optimizations
- Semantic HTML structure
- Metadata and Open Graph tags
- Structured data (JSON-LD) for LocalBusiness and RoofingContractor
- Dynamic sitemap generation
- Robots.txt
- Canonical URLs
- Image optimization
- Core Web Vitals optimization
- Local business schema for Windsor & Essex County areas

### Design
- Clean, minimal aesthetic
- Brand colors: Red (#DC2626), Charcoal (#1F2937), White
- Smooth animations and transitions
- Fully responsive design
- Mobile-first approach
- Accessibility standards compliance

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd al-can-roofing
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file (copy from `.env.example`):
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
al-can-roofing/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   ├── providers.tsx           # Client providers
│   ├── sitemap.ts              # Dynamic sitemap
│   ├── services/
│   │   └── page.tsx            # Services page
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── gallery/
│   │   └── page.tsx            # Gallery page
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   ├── privacy/
│   │   └── page.tsx            # Privacy policy
│   └── terms/
│       └── page.tsx            # Terms of service
├── components/
│   ├── Header.tsx              # Header/Navigation
│   ├── Footer.tsx              # Footer
│   ├── AnimatedCounter.tsx     # Animated statistics
│   ├── BeforeAfterSlider.tsx   # Before/after slider
│   ├── FAQAccordion.tsx        # FAQ component
│   ├── ContactForm.tsx         # Contact form
│   └── ServiceCard.tsx         # Service card component
├── public/
│   └── robots.txt              # SEO robots configuration
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.ts              # Next.js configuration
└── package.json                # Dependencies
```

## Customization Guide

### Update Business Information
Edit `/app/layout.tsx` to update:
- Business name, phone, email
- Address and coordinates
- Local service areas
- Metadata and SEO keywords

### Update Brand Colors
Edit `/tailwind.config.ts` to modify:
- Primary color (brand-primary): `#DC2626`
- Secondary color (brand-secondary): `#1F2937`
- Accent colors

### Add Team Members
Edit `/app/about/page.tsx` to add team information

### Update Services
- Modify service list in `/app/services/page.tsx`
- Update home page services in `/app/page.tsx`

### Add Projects to Gallery
Edit `/app/gallery/page.tsx` and update the `projects` array with:
- Project title and location
- Before/after image URLs
- Project type

### Update Contact Information
- Header: `/components/Header.tsx`
- Footer: `/components/Footer.tsx`
- Contact page: `/app/contact/page.tsx`

## SEO Configuration

### Local Business Schema
The site includes structured data for:
- LocalBusiness type with service area coverage
- RoofingContractor specialization
- Multi-area service coverage (Windsor, LaSalle, Tecumseh, etc.)

### Keywords Targeted
- Primary: "Roofing Windsor", "Roof Repair Windsor", "Roof Replacement Windsor"
- Secondary: "Flat Roofing Windsor", "Roofing Essex County"
- Local: All service area cities and towns

### Meta Tags
Update Google Search Console verification in `/app/layout.tsx`

## Performance Optimization

- Image optimization with Next.js Image component
- Lazy loading for off-screen components
- Code splitting and dynamic imports
- CSS-in-JS with Tailwind for minimal bundle size
- Next.js automatic code splitting

### Core Web Vitals
- LCP (Largest Contentful Paint): Optimized with lazy loading
- FID (First Input Delay): Minimal JavaScript execution
- CLS (Cumulative Layout Shift): Proper image sizing and spacing

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Vercel auto-deploys on push to main
4. Configure domain in Vercel settings

### Environment Variables
Create `.env.local`:
```
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your_key_here
NEXT_PUBLIC_GOOGLE_VERIFICATION=your_verification_code
```

## Testing

Run linting:
```bash
npm run lint
```

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Accessibility

- WCAG 2.1 AA compliance
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance

## License

Copyright © 2024 AL-CAN Roofing. All rights reserved.

## Contact

For questions about this website:
- Email: info@alcanroofing.com
- Phone: (519) 555-0123
