# TechVision Quick Start Guide

## Installation & Setup

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Initial Setup
```bash
# Clone/Download the project
cd /vercel/share/v0-project

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Your site will be available at `http://localhost:3000`

## Project Structure at a Glance

```
app/
├── page.tsx          ← Main page (add sections here)
├── layout.tsx        ← Global layout & metadata
└── globals.css       ← Theme, animations, utilities

components/
├── header.tsx        ← Navigation bar
├── hero.tsx          ← Hero/Landing section
├── features.tsx      ← Features showcase
├── stats.tsx         ← Statistics section
├── testimonials.tsx  ← Customer testimonials
├── cta.tsx           ← Call-to-action
├── footer.tsx        ← Footer
└── ui/               ← shadcn/ui components

lib/
└── animations.ts     ← Animation configurations
```

## Customization Checklist

### 1. Change Company Name
- [ ] `components/header.tsx` - Update logo text
- [ ] `components/footer.tsx` - Update company info
- [ ] `app/page.tsx` - Update metadata
- [ ] `app/layout.tsx` - Update metadata
- [ ] `public/robots.txt` - Update sitemap URL

### 2. Customize Colors
Edit `app/globals.css` color variables:
```css
:root {
  --primary: #1f2937;
  --accent: #3b82f6;
  /* ... modify other colors ... */
}
```

### 3. Update Content

#### Hero Section (`components/hero.tsx`)
```tsx
// Change heading
"Building the Future of Web Development"

// Change description
"Experience next-generation web solutions..."

// Change stats
{ number: '500+', label: 'Clients' }
```

#### Features (`components/features.tsx`)
```tsx
const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: '...',
  },
  // Add/remove features
];
```

#### Stats (`components/stats.tsx`)
```tsx
const stats = [
  { number: 500, suffix: '+', label: 'Happy Clients' },
  // Update numbers
];
```

#### Testimonials (`components/testimonials.tsx`)
```tsx
const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at StartupCo',
    image: '👨‍💼',
    content: '...',
    rating: 5,
  },
  // Add/edit testimonials
];
```

### 4. Update Metadata for SEO
Edit `app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: 'Your Company - Description',
  description: 'Your company description...',
  keywords: 'keyword1, keyword2, keyword3',
  // Update open graph, twitter cards, etc.
};
```

### 5. Add New Sections
1. Create new component in `components/`
2. Import in `app/page.tsx`
3. Add to page layout
4. Apply animations using patterns from `lib/animations.ts`

Example:
```tsx
// components/pricing.tsx
'use client';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/lib/animations';

export function Pricing() {
  return (
    <section>
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        {/* Your pricing content */}
      </motion.div>
    </section>
  );
}
```

## Animation Quick Reference

### Add Fade-In Animation
```tsx
import { fadeInVariants } from '@/lib/animations';

<motion.div variants={fadeInVariants} initial="hidden" animate="visible">
  Content
</motion.div>
```

### Add Scroll Animation
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

### Add Hover Effect
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click Me
</motion.button>
```

### Add GSAP Counter
```tsx
import gsap from 'gsap';

const obj = { value: 0 };
gsap.to(obj, {
  value: 100,
  duration: 2,
  onUpdate: () => updateValue(Math.floor(obj.value)),
});
```

## Responsive Design

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

### Mobile-First Classes
```tsx
// Default = mobile
<div className="text-base">
  // Tablet and up
  md:text-lg
  // Desktop and up
  lg:text-2xl
</div>
```

## Performance Tips

### Check Lighthouse Score
```bash
# Open DevTools in Chrome
# Go to Lighthouse tab
# Run audit
```

### Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Janky animations | Use `transform` instead of `top/left` |
| Slow page load | Optimize images, reduce animations |
| High CPU usage | Limit simultaneous animations |
| Mobile jank | Reduce animation complexity on mobile |

## Deployment

### Deploy to Vercel (Recommended)
```bash
npm i -g vercel
vercel deploy
```

### Build for Production
```bash
pnpm build
pnpm start
```

## Useful Commands

```bash
# Start dev server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint

# Format code
pnpm format
```

## Troubleshooting

### Site not loading?
1. Check console for errors (F12)
2. Verify Node.js version: `node --version`
3. Reinstall dependencies: `rm -rf node_modules pnpm-lock.yaml && pnpm install`

### Animations not working?
1. Verify component has `'use client'` at top
2. Check browser console for errors
3. Ensure animations.ts exports are correct
4. Check that variant names match initial/animate props

### Build errors?
1. Check TypeScript errors: `pnpm tsc --noEmit`
2. Clear Next.js cache: `rm -rf .next`
3. Rebuild: `pnpm build`

### Styling looks off?
1. Verify Tailwind classes are correct
2. Check globals.css is imported
3. Restart dev server
4. Clear browser cache (Ctrl+Shift+Del)

## Common Customizations

### Change Primary Color Everywhere
1. Edit `app/globals.css` - update `--primary` variable
2. All blue components will automatically update

### Disable Animations (for accessibility)
Add to `app/globals.css`:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Change Font
Edit `app/layout.tsx`:
```tsx
import { YourFont } from 'next/font/google'

const font = YourFont({ subsets: ['latin'] })

// Use in className
<html className={font.variable}>
```

## Resources

- [Next.js 16 Docs](https://nextjs.org/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://greensock.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## Need Help?

1. Check the `README.md` for comprehensive docs
2. Review `ANIMATIONS.md` for animation details
3. Inspect component prop interfaces
4. Check browser DevTools console for errors
5. Visit official documentation for libraries

---

**Happy coding! 🚀**
