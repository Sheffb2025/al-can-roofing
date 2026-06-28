# AL-CAN Roofing Website - Quick Start Guide

## 🚀 Get Running in 2 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Visit `http://localhost:3000`

---

## 📋 What You Get

A complete, production-ready roofing contractor website with:

✅ **5 Fully Optimized Pages**
- Home (hero, services, stats, testimonials)
- Services (detailed service info, FAQs, before/after)
- About (company story, team, certifications, areas)
- Gallery (before/after project showcase)
- Contact (form, map, hours, info)

✅ **Modern Features**
- Animated counters and sliders
- Smooth page transitions
- Mobile-first responsive design
- Dark mode ready
- Accessible components

✅ **SEO Ready**
- Structured data (JSON-LD)
- XML sitemap (auto-generated)
- Meta tags and Open Graph
- Local business schema
- Optimized headings

✅ **Performance**
- Next.js 15 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion animations
- Image optimization

---

## 🎨 Customize in 5 Minutes

### 1. Update Business Info
**File:** `app/layout.tsx`
```typescript
const businessName = 'AL-CAN Roofing';
const businessPhone = '(519) 555-0123';
const businessEmail = 'info@alcanroofing.com';
const businessAddress = {
  street: '123 Main Street',
  city: 'Windsor',
  // Update these
};
```

### 2. Add Your Logo
Replace the text logo in `components/Header.tsx`:
```typescript
<div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg">
  {/* Add your logo here */}
</div>
```

### 3. Update Colors (Optional)
**File:** `tailwind.config.ts`
```typescript
colors: {
  brand: {
    primary: '#DC2626',    // Change this (primary red)
    secondary: '#1F2937',  // Change this (charcoal)
  },
}
```

### 4. Replace Images
Update image URLs in:
- `app/page.tsx` (home hero)
- `app/services/page.tsx` (service sections)
- `app/gallery/page.tsx` (before/after projects)

### 5. Update Service Areas
**Files:** 
- `app/layout.tsx` (localAreas array)
- `components/Footer.tsx` (localAreas array)
- `app/about/page.tsx` (service areas grid)

---

## 📱 Key Pages

### Home Page
- Hero section with CTA
- Trust indicators
- Services preview
- Stats counter
- Testimonials
- Final CTA

### Services Page
- All services listed
- Detailed service sections (6 services)
- Before/after slider
- Process steps
- FAQ accordion

### About Page
- Company story
- Core values
- Team members
- Certifications
- Service coverage map

### Gallery Page
- Project before/after sliders
- Project stats
- Client testimonials
- Project showcase

### Contact Page
- Contact form with validation
- Business hours
- Map
- Service areas
- Why choose us

---

## 🔧 File Structure

```
app/
├── page.tsx              ← Home page
├── layout.tsx            ← Master layout (metadata, header, footer)
├── globals.css           ← Global styles
├── services/page.tsx     ← Services
├── about/page.tsx        ← About
├── gallery/page.tsx      ← Gallery
├── contact/page.tsx      ← Contact
├── privacy/page.tsx      ← Privacy Policy
├── terms/page.tsx        ← Terms of Service
└── sitemap.ts            ← Auto-generated sitemap

components/
├── Header.tsx            ← Navigation
├── Footer.tsx            ← Footer
├── AnimatedCounter.tsx   ← Animated stats
├── BeforeAfterSlider.tsx ← Image comparison
├── FAQAccordion.tsx      ← FAQ component
├── ContactForm.tsx       ← Contact form
└── ServiceCard.tsx       ← Service card
```

---

## 🎯 Next Steps

### Before Launch
1. [ ] Update all business information (phone, email, address)
2. [ ] Add real roofing photos
3. [ ] Update team member names
4. [ ] Set up contact form submission
5. [ ] Get Google verification code
6. [ ] Set up Google Business Profile

### Configuration Files
- `.env.local` - Add API keys
- `next.config.ts` - Already configured
- `tailwind.config.ts` - Colors and theme
- `tsconfig.json` - TypeScript settings

### Testing
```bash
# Check for issues
npm run lint

# Build for production
npm run build

# Test production build
npm start
```

---

## 📊 SEO Keywords Included

**Primary:**
- Roofing Windsor
- Roof Repair Windsor
- Roof Replacement Windsor

**Local Coverage:**
- Windsor, LaSalle, Tecumseh
- Amherstburg, Lakeshore, Essex
- Kingsville, Leamington, Belle River

---

## 🚀 Deploy to Vercel (5 minutes)

1. Push to GitHub
2. Go to vercel.com
3. Import project
4. Add your domain
5. Done! Auto-deploys on push

---

## 💡 Pro Tips

1. **Mobile Testing:** Always test on actual mobile devices
2. **Form Submission:** Use FormSubmit.co for quick setup
3. **Images:** Optimize with WebP format
4. **Analytics:** Add Google Analytics in layout.tsx
5. **Updates:** Edit content directly in the page files

---

## 🎨 Customization Examples

### Add Team Member
**File:** `app/about/page.tsx`
```typescript
{
  name: 'Your Name',
  title: 'Position',
  bio: 'Your bio here',
}
```

### Add Service Area
**Files:** `app/layout.tsx` and `components/Footer.tsx`
```typescript
const localAreas = [
  'Windsor',
  'Your New Area',
  // ...
];
```

### Update Service
**File:** `app/services/page.tsx`
```typescript
{
  id: 'your-service',
  icon: <YourIcon />,
  title: 'Your Service',
  description: 'Your description',
  fullDescription: 'Full description here',
  benefits: ['Benefit 1', 'Benefit 2'],
}
```

---

## 📞 Support

For questions about this template:
- Check the README.md for detailed docs
- See DEPLOYMENT.md for production guide
- Review comments in component files

---

## 🎉 You're All Set!

Your professional roofing website is ready to:
- ✅ Generate leads
- ✅ Rank on Google
- ✅ Build trust with customers
- ✅ Showcase your work
- ✅ Convert visitors to clients

**Happy building! 🏠**
