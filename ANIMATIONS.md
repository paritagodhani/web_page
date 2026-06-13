# Animation Implementation Guide

This document details all animations used throughout the TechVision website.

## Animation Libraries

### Framer Motion
- **Purpose**: Page transitions, stagger effects, interactive animations
- **Version**: 12.40.0
- **Benefits**: React-native, declarative, performance-optimized

### GSAP (GreenSock Animation Platform)
- **Purpose**: Complex timelines, scroll-triggered animations, counters
- **Version**: 3.15.0
- **Benefits**: Timeline control, ScrollTrigger plugin, advanced easing

## Component-by-Component Animations

### 1. Header (`components/header.tsx`)

#### Slide Down on Mount
```tsx
<motion.header
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
>
```
- Initial state: Header 100px above viewport
- Animated to: Normal position
- Duration: 800ms
- Easing: Custom cubic-bezier (decelerate)

#### Sticky Background Transition
- Detects scroll position (> 10px)
- Smoothly transitions backdrop blur and shadow
- Transition duration: 300ms

#### Navigation Item Stagger
```tsx
initial={{ opacity: 0, y: -10 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: index * 0.1, duration: 0.5 }}
```
- Each nav item staggers by 100ms
- Quick fade and slide up animation
- Gives appearance of sequential appearance

#### Mobile Menu Animation
```tsx
{isOpen && (
  <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: 'auto' }}
    exit={{ opacity: 0, height: 0 }}
    transition={{ duration: 0.3 }}
  >
```
- Smooth height expansion/collapse
- Fast 300ms transition
- Clean entrance/exit animation

### 2. Hero Section (`components/hero.tsx`)

#### Container Stagger Animation
```tsx
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
```
- Container: `opacity: 0` → `opacity: 1`
- Delay for children: 300ms
- Stagger spacing: 200ms between items

#### Text Content Animations
- Badge: Fade in with slight scale
- Heading: Slide up + fade (y: 20px → 0)
- Description: Same as heading
- Buttons: Slide up with scale animation

#### Button Hover Effects
```tsx
whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)' }}
whileTap={{ scale: 0.95 }}
```
- Hover: 5% scale increase + blue glow shadow
- Tap: 5% scale decrease for tactile feedback
- Smooth spring-like animation

#### Floating Image Animation (GSAP)
```tsx
gsap.to(imageRef.current, {
  y: -20,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut',
});
```
- Continuous vertical float: ±20px
- Duration: 3 seconds per cycle
- Infinitely repeating with yoyo effect
- Smooth sine easing

#### Scroll Indicator Bounce
```tsx
animate={{ y: [0, 10, 0] }}
transition={{ duration: 2, repeat: Infinity }}
```
- Continuous bounce animation
- 2-second cycle, infinite loop
- Draws attention to scroll action

### 3. Features Section (`components/features.tsx`)

#### Scroll-Triggered Animations
```tsx
gsap.from(card, {
  scrollTrigger: {
    trigger: card,
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  delay: index * 0.1,
});
```
- Triggers when card enters viewport (80% down)
- Slides up 50px while fading in
- Staggered by 100ms per card
- Fires once (play on first entrance)

#### Icon Hover Effect
```tsx
whileHover={{ scale: 1.1, rotate: 5 }}
```
- 10% scale increase on hover
- 5-degree rotation for playfulness
- Icon color changes on parent hover

#### Card Hover Animation
```tsx
whileHover={{ y: -5 }}
```
- Subtle lift effect: -5px vertical translation
- Full card animates with duration/easing in containerVariants

### 4. Stats Section (`components/stats.tsx`)

#### Counter Animation (GSAP)
```tsx
gsap.to(obj, {
  value: stat.number,
  duration: 2.5,
  ease: 'power2.out',
  onUpdate: () => {
    setCounters((prev) => {
      const newCounters = [...prev];
      newCounters[index] = Math.floor(obj.value);
      return newCounters;
    });
  },
});
```
- Animates from 0 to target number
- Duration: 2.5 seconds (long enough to read)
- Power2.out easing: Accelerates then decelerates
- Updates React state on each animation frame
- Triggered by Intersection Observer (performance)

#### Stats Container Animation
```tsx
initial={{ opacity: 0, scale: 0.8 }}
whileInView={{ opacity: 1, scale: 1 }}
transition={{ delay: index * 0.1, duration: 0.6 }}
```
- Each stat card: Scale up + fade in
- Staggered entrance
- Fires once when in viewport

### 5. Testimonials (`components/testimonials.tsx`)

#### Carousel Slide Transition
```tsx
<AnimatePresence mode="wait">
  <motion.div
    key={currentIndex}
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.5 }}
  >
```
- Smooth slide transition: Next item slides from right
- Previous item exits to left
- Fade in/out with movement
- 500ms duration for smooth feel
- `mode="wait"` ensures clean transition

#### Star Rating Animation
```tsx
{Array.from({ length: rating }).map((_, i) => (
  <motion.div
    key={i}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: i * 0.1 }}
  >
```
- Stars pop in with scale animation
- Staggered entrance: 100ms per star
- Adds visual interest to ratings

#### Navigation Button Animations
- Hover: 10% scale increase
- Tap: 10% scale decrease
- Dots expand width (8px when active)

### 6. CTA Section (`components/cta.tsx`)

#### Gradient Background Blur Effect
```tsx
<div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
```
- Base: 75% opacity blur backdrop
- Hover: 100% opacity (intensifies glow)
- Smooth transition: 300ms

#### Text Cascade Animation
```tsx
initial={{ y: 20, opacity: 0 }}
whileInView={{ y: 0, opacity: 1 }}
transition={{ delay: 0.2, duration: 0.8 }}
```
- Multiple text elements with increasing delays
- Delay: 0.2s, 0.3s, 0.4s, 0.5s
- Creates cascading entrance effect

#### Button Animations
```tsx
whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
whileTap={{ scale: 0.95 }}
```
- Hover: Scale up + strong shadow
- Tap: Scale down for tactile feedback

### 7. Footer (`components/footer.tsx`)

#### Entry Animation
```tsx
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
transition={{ duration: 0.8 }}
```
- Fades in when entering viewport
- Smooth 800ms animation

#### Divider Animation
```tsx
initial={{ scaleX: 0 }}
whileInView={{ scaleX: 1 }}
transition={{ duration: 0.8 }}
```
- Horizontal line grows from center outward
- Creates elegant separator effect

#### Social Icon Animations
```tsx
whileHover={{ scale: 1.2, rotate: 10 }}
whileTap={{ scale: 0.9 }}
```
- Hover: Scale up 20% + rotate 10 degrees
- Tap: Scale down for feedback
- Background color changes on group hover

## Animation Performance Tips

### 1. Use Will-Change
```css
.will-animate {
  will-change: transform, opacity;
}
```
- Only change `transform` and `opacity`
- Triggers GPU acceleration
- Avoids reflows/repaints

### 2. Prefer Transform Over Layout
- Good: `transform: translateY()`, `scale()`, `rotate()`
- Bad: `top`, `left`, `width`, `height` (trigger layout recalculation)

### 3. Use Intersection Observer
```tsx
const observer = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting && !hasAnimated.current) {
    hasAnimated.current = true;
    animateCounters();
  }
});
```
- Prevents animations from firing off-screen
- Reduces CPU/GPU load
- Improves battery life on mobile

### 4. Respect Prefers-Reduced-Motion
```tsx
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!prefersReducedMotion.matches) {
  // run animation
}
```

## CSS Animation Utilities

In `app/globals.css`:

### Custom Animations
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0); }
  50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.4); }
}
```

### Utility Classes
```css
.animate-float { animation: float 3s ease-in-out infinite; }
.animate-glow { animation: glow 2s ease-in-out infinite; }
.glass { backdrop-filter: blur(10px); }
```

## Timing and Easing

### Standard Transitions
- Fast: 150ms (micro-interactions)
- Base: 300ms (default transitions)
- Slow: 500ms (page-level animations)

### Easing Functions
```
cubic-bezier(0.4, 0, 0.2, 1) - Material Design standard
ease-out - Initial velocity, slowing end
ease-in - Slow start, accelerating end
ease-in-out - Smooth throughout
```

## Browser DevTools Tips

### Chrome DevTools
1. Open DevTools > Elements
2. Right-click animation → Inspect
3. Slow down animations: Chrome DevTools > Rendering > animations
4. Set to 20% or 10% speed for debugging

### Performance Analysis
1. Performance > Record
2. Run animations
3. Check for "jank" (dropped frames)
4. Verify 60fps target

## Common Animation Patterns

### Fade In
```tsx
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.6 }}
```

### Slide Up
```tsx
initial={{ y: 20, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ duration: 0.6 }}
```

### Scale In
```tsx
initial={{ scale: 0.8, opacity: 0 }}
animate={{ scale: 1, opacity: 1 }}
transition={{ duration: 0.6 }}
```

### Rotate In
```tsx
initial={{ rotate: -10, opacity: 0 }}
animate={{ rotate: 0, opacity: 1 }}
transition={{ duration: 0.6 }}
```

## Troubleshooting

### Animation Not Playing
- Check initial/animate values are different
- Verify component is not outside viewport
- Check browser DevTools for errors

### Jank (Frame Drops)
- Use `transform` instead of layout properties
- Enable GPU acceleration with `will-change`
- Reduce number of simultaneous animations
- Profile with Chrome DevTools

### Animation Feels Slow
- Reduce duration (try 0.3s instead of 0.8s)
- Use snappier easing (cubic-bezier(0.34, 1.56, 0.64, 1))
- Add spring stiffness for physics-based feel

### Mobile Performance Issues
- Reduce animation complexity
- Use `prefers-reduced-motion` hook
- Disable animations on low-end devices
- Profile on actual mobile device

---

For more details, see:
- [Framer Motion Docs](https://www.framer.com/motion/)
- [GSAP Docs](https://greensock.com/docs/)
- [Web Animations Performance](https://web.dev/animations-guide/)
