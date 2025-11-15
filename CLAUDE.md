# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**poolUp Website** is the marketing website for the poolUp rideshare mobile application. Built with Next.js 15, it features a modern dark theme and showcases the app's features for both drivers and riders.

## Tech Stack

- **Framework**: Next.js 15.1.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom configuration
- **UI Components**: Custom components with Framer Motion animations
- **Icons**: Tabler Icons React
- **Deployment**: Vercel (recommended)

## Development Commands

```bash
npm install              # Install dependencies
npm run dev             # Start development server (http://localhost:3000)
npm run build           # Build for production
npm run start           # Start production server
npm run lint            # Run ESLint
```

## Project Structure

```
loop-website/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage
│   ├── driver/page.tsx    # Driver landing page
│   ├── rider/page.tsx     # Rider landing page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── button.tsx         # Custom button component
│   ├── toast.tsx          # Toast notification system
│   ├── navbar.tsx         # Navigation bar
│   ├── footer.tsx         # Footer component
│   ├── testimonial-carousel.tsx
│   ├── campus-launch-cta.tsx
│   └── ride-info.tsx
├── public/                # Static assets
│   └── website photos/    # Image assets
└── tailwind.config.ts     # Tailwind configuration
```

## Design System

### Color Palette

The website uses a warm, dark brownish color scheme:

- **Primary Backgrounds:**
  - `#1d1b15` - Main dark background (hero sections)
  - `#252319` - Secondary background (content sections)
  - `#181611` - Tertiary background (cards, overlays)
  - `#0f0e0b` - Darkest shade (footer, special sections)

- **Accent Colors:**
  - Primary gradient: `from-blue-600 to-orange-600`
  - Orange accent: `#F97316` (CTAs, highlights)
  - Blue accent: For interactive elements

- **Text Colors:**
  - White: `#FFFFFF` (headings)
  - Gray-400: `#9CA3AF` (body text)
  - Gray-300: `#D1D5DB` (secondary text)

### Typography

- **Font Family**: System fonts (San Francisco, Segoe UI, etc.)
- **Font Sizes:**
  - Hero: `text-4xl md:text-7xl`
  - Section headers: `text-4xl md:text-5xl`
  - Body: `text-base md:text-xl`

## Key Pages

### Homepage (`/`)
- Hero section with gradient background
- Feature showcase
- Testimonials
- FAQ section
- Download CTA

### Driver Page (`/driver`)
- Driver benefits
- Earning potential calculator
- Photo showcases
- "Post A Ride" CTA
- Campus launch CTA

### Rider Page (`/rider`)
- Rider benefits
- Photo showcases
- Getting started guide
- "Post A Request" CTA

## Components

### Navigation (`components/navbar.tsx`)
- Dark theme navbar
- Responsive mobile menu
- Links to Driver and Rider pages
- No authentication (Sign In button removed)

### Buttons (`components/button.tsx`)
Variants:
- `default` - White background, black text
- `gradient` - Blue-orange gradient
- `outline` - Bordered with transparent background

### Toast (`components/toast.tsx`)
- Custom toast notification system
- Used for "Coming Soon" messages
- Dark theme compatible

### Testimonials (`components/testimonial-carousel.tsx`)
- Scrolling carousel
- Student testimonials
- Auto-scrolling with manual controls
- Dark background (`#0f0e0b`)

### Campus Launch CTA (`components/campus-launch-cta.tsx`)
- Email link to `ac44@williams.edu`
- Subject line: "Launch poolUp on My Campus"
- Appears on driver page only

## Common Patterns

### Page Layout
```typescript
export default function Page() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1d1b15' }}>
      <section>
        {/* Content */}
      </section>
    </div>
  );
}
```

### Section with Custom Background
```typescript
<section className="py-20 px-6" style={{ backgroundColor: '#252319' }}>
  <div className="max-w-6xl mx-auto">
    {/* Content */}
  </div>
</section>
```

### Animated Elements
```typescript
import { motion } from "motion/react";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* Content */}
</motion.div>
```

### Toast Usage
```typescript
import { useToast } from "@/components/toast";

const { showToast } = useToast();

<button onClick={() => showToast("Coming Soon")}>
  Download App
</button>
```

## Styling Guidelines

### Inline Styles vs Tailwind
- Use Tailwind for standard utilities: `className="text-white font-bold"`
- Use inline styles for custom colors: `style={{ backgroundColor: '#1d1b15' }}`
- Never mix color values - be consistent across the site

### Responsive Design
- Mobile-first approach
- Use Tailwind breakpoints: `md:`, `lg:`, `xl:`
- Test on mobile (375px), tablet (768px), desktop (1024px+)

### Dark Theme
- All pages use dark theme by default
- Text should be readable with sufficient contrast
- Use white/light gray for text on dark backgrounds
- Maintain visual hierarchy with opacity and font weights

## Image Assets

Images are stored in `public/website photos/`:
- `happyDriverMain.jpeg` - Driver hero image
- `driver2.jpg` - Driver secondary image
- `students.jpeg` - Rider hero image
- `happy_passenger3.jpeg` - Passenger image
- `carpool_with_others.jpg` - Carpool image

### Image Usage
```typescript
import Image from "next/image";

<Image
  src="/website photos/happyDriverMain.jpeg"
  alt="Description"
  width={600}
  height={400}
  className="w-full h-auto"
/>
```

## Development Notes

- All download buttons show "Coming Soon" toast (app not yet released)
- Email CTAs link to `ac44@williams.edu`
- No authentication system on website
- Website is marketing-focused, not a web app
- Maintain consistent color scheme across all pages
- Use Framer Motion for smooth animations
- Optimize images before adding to `/public/website photos/`

## Deployment

The website is optimized for Vercel deployment:

```bash
npm run build           # Build the application
```

Vercel will automatically:
- Detect Next.js 15
- Configure environment
- Deploy with optimal settings

## SEO & Meta

Update meta tags in `app/layout.tsx`:
```typescript
export const metadata = {
  title: "poolUp - Student Rideshare Platform",
  description: "Safe, affordable ridesharing for college students"
}
```
