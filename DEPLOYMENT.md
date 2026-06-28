# AL-CAN Roofing - Deployment & Optimization Guide

## Pre-Launch Checklist

### 1. Business Information Update
- [ ] Update phone number in Header.tsx, Footer.tsx, Contact page, and layout.tsx
- [ ] Update email address across all pages
- [ ] Update physical address in Footer and Contact page
- [ ] Update service areas list (currently Windsor, LaSalle, Tecumseh, etc.)
- [ ] Update business hours in Footer and Contact page
- [ ] Update team member names and positions in About page

### 2. Google Configuration
- [ ] Add Google Search Console verification code to `NEXT_PUBLIC_GOOGLE_VERIFICATION`
- [ ] Set up Google Business Profile for Windsor location
- [ ] Configure Google Maps API key (optional but recommended)
- [ ] Submit sitemap to Google Search Console
- [ ] Set preferred domain (www vs non-www)

### 3. SEO Setup
- [ ] Verify all metadata in layout.tsx
- [ ] Update OG image (og-image.jpg) in public folder
- [ ] Create schema markup for all service areas
- [ ] Set up Google Analytics (add script to layout.tsx)
- [ ] Configure robots.txt (already created)
- [ ] Test structured data with Google's Rich Results Test

### 4. Contact Form Setup
- [ ] Choose form submission service (FormSubmit, Brevo, SendGrid, etc.)
- [ ] Update form endpoint in ContactForm.tsx
- [ ] Set up email notifications for new submissions
- [ ] Test form submission from all devices

### 5. Images & Media
- [ ] Replace placeholder images with actual roofing photos
- [ ] Optimize all images (use WebP format)
- [ ] Add alt text to all images
- [ ] Set up image CDN if needed (Cloudinary, imgix, etc.)

### 6. Social Media & Branding
- [ ] Create Facebook page for AL-CAN Roofing
- [ ] Update social media links in Footer.tsx
- [ ] Create professional logo (AC for favicon)
- [ ] Generate favicon and touch icons (public/favicon.ico, public/apple-touch-icon.png)

### 7. Analytics & Monitoring
- [ ] Add Google Analytics 4
- [ ] Set up performance monitoring (Vercel Analytics)
- [ ] Configure error tracking (Sentry recommended)
- [ ] Set up uptime monitoring

## Deployment Steps

### 1. Domain Setup
```bash
# If using Vercel:
1. Add custom domain in Vercel project settings
2. Configure DNS with registrar pointing to Vercel
3. Enable automatic SSL certificate
4. Wait for propagation (typically 24-48 hours)
```

### 2. Environment Variables (Production)
```bash
# Add to Vercel Environment Variables:
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your_key
NEXT_PUBLIC_GOOGLE_VERIFICATION=your_code
NEXT_PUBLIC_FORM_ENDPOINT=your_form_service_endpoint
```

### 3. Deploy to Vercel
```bash
# Option 1: Git Integration (Recommended)
1. Push to GitHub
2. Connect repo to Vercel
3. Vercel automatically deploys on push

# Option 2: Vercel CLI
npm i -g vercel
vercel --prod
```

### 4. Production Build Test
```bash
npm run build
npm start
# Visit http://localhost:3000 and test all pages
```

## Performance Optimization

### Core Web Vitals Checklist
- [ ] LCP < 2.5s (Largest Contentful Paint)
- [ ] FID < 100ms (First Input Delay)
- [ ] CLS < 0.1 (Cumulative Layout Shift)

### Image Optimization
```typescript
// Use Next.js Image component for all images
import Image from 'next/image';

<Image
  src="/roofing-image.jpg"
  alt="Roofing project"
  width={1200}
  height={675}
  priority={false}
/>
```

### Font Optimization
- Already using system fonts for best performance
- If adding custom fonts, use `next/font` with CSS variables

### Code Splitting
- Next.js automatically code-splits at route level
- Dynamic imports for heavy components

## SEO Optimization Checklist

### On-Page SEO
- [ ] Title tags (50-60 characters)
- [ ] Meta descriptions (150-160 characters)
- [ ] H1 tags (one per page)
- [ ] Keyword usage in headings and body
- [ ] Internal linking between pages
- [ ] Image alt text
- [ ] Mobile-friendly design (responsive)

### Technical SEO
- [ ] XML sitemap (auto-generated)
- [ ] Robots.txt configured
- [ ] Canonical URLs (auto-handled by Next.js)
- [ ] Mobile viewport meta tag (included)
- [ ] SSL certificate (HTTPS)
- [ ] Site speed optimization
- [ ] Structured data/Schema markup (included)

### Local SEO
- [ ] Google Business Profile optimized
- [ ] Local schema markup (LocalBusiness)
- [ ] Service area pages/content
- [ ] NAP consistency (Name, Address, Phone)
- [ ] Local citations and directory listings
- [ ] Customer reviews collection

### Keyword Strategy
Primary Keywords:
- Roofing Windsor
- Roof Repair Windsor
- Roof Replacement Windsor
- Flat Roofing Windsor
- Roofing Essex County

Secondary Keywords:
- Emergency roof repair
- Asphalt shingles
- EPDM roofing
- TPO roofing
- Commercial roofing
- Residential roofing

Local Keywords (by area):
- Roofing LaSalle
- Roof Repair Tecumseh
- Roofing Amherstburg
- Roof Repair Lakeshore
- Roofing Essex
- Roof Services Kingsville
- Roofing Leamington
- Roof Repair Belle River

## Local Business Marketing

### Google Business Profile
1. Claim/Create your business profile
2. Complete all business information
3. Add high-quality photos
4. Encourage customer reviews
5. Post regular updates
6. Respond to reviews promptly

### Local Directories
Register on:
- Yelp
- Better Business Bureau (BBB)
- HomeStars
- Thumbtack
- Local.com
- Home Advisor

### Local Citations
- Ensure NAP (Name, Address, Phone) consistency
- Add business to local directories
- Get featured in local news/press releases

## Form Submission Integration

### Option 1: FormSubmit.co (Free, Simple)
```javascript
// No setup needed, form just works
// Emails go to your address
```

### Option 2: Brevo/SendBlue (Free + Premium)
```bash
npm install axios
# Update ContactForm.tsx to use their API
```

### Option 3: SendGrid (Paid)
```bash
npm install @sendgrid/mail
# Configure SENDGRID_API_KEY
```

### Option 4: Firebase/Backend
```bash
npm install firebase
# Set up Firestore for submissions
```

## Monitoring & Maintenance

### Weekly Tasks
- [ ] Check website for broken links
- [ ] Monitor Google Search Console for errors
- [ ] Check Core Web Vitals metrics
- [ ] Review form submissions

### Monthly Tasks
- [ ] Update portfolio/gallery with new projects
- [ ] Check competitor rankings
- [ ] Review analytics data
- [ ] Update testimonials
- [ ] Check all CTAs are working

### Quarterly Tasks
- [ ] SEO audit
- [ ] Backlink analysis
- [ ] Competitor analysis
- [ ] Update service descriptions
- [ ] Review and update pricing

## Google Analytics Setup

Add to `app/layout.tsx`:
```typescript
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script dangerouslySetInnerHTML={{__html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
`}} />
```

## Performance Monitoring

### Vercel Analytics
- Automatically enabled on Vercel
- Monitor Web Vitals in real-time
- View performance by page

### PageSpeed Insights
Test regularly: https://pagespeed.web.dev

Expected scores:
- Desktop: 90+
- Mobile: 85+

## Backup & Security

### Security Checklist
- [ ] HTTPS enabled (automatic on Vercel)
- [ ] Security headers configured (in next.config.ts)
- [ ] Form validation (included)
- [ ] Rate limiting for forms
- [ ] Regular security updates
- [ ] Backup strategy in place

### Regular Updates
```bash
# Keep dependencies updated
npm update
npm audit
```

## Troubleshooting

### Common Issues

1. **Form submissions not working**
   - Check form endpoint in environment variables
   - Verify CORS settings
   - Test in browser console

2. **Images not loading**
   - Verify image URLs are correct
   - Check image permissions
   - Use Next.js Image component

3. **Slow page load**
   - Check Core Web Vitals in PageSpeed
   - Optimize large images
   - Review network tab in DevTools

4. **SEO not improving**
   - Verify sitemap submitted
   - Check Google Search Console
   - Ensure schema markup is valid
   - Get more backlinks

## Next Steps for Growth

1. **Content Marketing**
   - Start a roofing blog
   - Create helpful guides
   - Make tutorial videos

2. **Paid Advertising**
   - Google Ads for local keywords
   - Facebook/Instagram ads
   - Local service ads

3. **Reviews & Reputation**
   - Actively collect reviews
   - Respond to all reviews
   - Feature reviews on website

4. **Partnership & Referrals**
   - Partner with other contractors
   - Referral programs
   - Affiliate relationships

## Support & Resources

- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Google Search Central: https://developers.google.com/search

---

Last Updated: 2024
AL-CAN Roofing Website
