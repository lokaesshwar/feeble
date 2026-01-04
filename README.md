## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) 16.1.1 (App Router)
- **React**: 19.2.3
- **Language**: [TypeScript](https://www.typescriptlang.org) 5
- **Styling**: [Tailwind CSS](https://tailwindcss.com) 4 (with PostCSS)
- **Animations**: [Motion](https://motion.dev) (Framer Motion) 12.23.26
- **Font**: General Sans (local variable font via `next/font`)
- **Linting**: ESLint with Next.js config

## Getting Started

First, run the development server:

```bash
npm install

npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Assumptions & Implementation Notes

### Architecture

- Uses Next.js **App Router** architecture with the `app/` directory structure
- Client components are marked with `"use client"` directive for interactivity and animations
- Server components are used by default for better performance

### Styling & Theming

- **Tailwind CSS v4** is configured with PostCSS using `@tailwindcss/postcss`
- Custom CSS variables are defined in `app/globals.css` for theming (colors, gradients, etc.)
- Theme variables are mapped to Tailwind utilities via `@theme inline` directive
- Responsive design implemented with Tailwind's breakpoint utilities

### Fonts

- **General Sans** variable font is loaded locally via `next/font/local`
- Supports weights 200-700 in both normal and italic styles
- Font is optimized and self-hosted for better performance

### Animations

- **Motion (Framer Motion)** is used for page animations and transitions
- Animated elements include:
  - Navbar fade-in on page load
  - Hero section content animations
  - Cloud layers with staggered entrance animations
  - Bird SVGs with position and opacity animations
  - Scroll indicator with continuous bounce animation
- Animations use easing functions (`easeOut`, `easeInOut`) for smooth transitions

### Components

- **Landing page components** are organized in `component/landing/`:
  - `navbar.tsx` - Responsive navigation with mobile menu
  - `hero.tsx` - Hero section with CTA buttons
  - `cloud-birds.tsx` - Animated decorative elements (clouds and birds)
  - `scroll-bottom.tsx` - Scroll indicator animation
- Components use TypeScript for type safety

### SVG Graphics

- Custom SVG graphics are used for:
  - Logo (`public/logo.svg`)
  - Bird illustrations (inline in components) 
  - Cloud wave patterns (layered for depth effect)


### Performance Considerations

- Images use Next.js `Image` component for optimization
- Font loading uses `display: swap` to prevent layout shift
- Client components are scoped to only where interactivity is needed

--Deployed on vercel
https://feeble-eta.vercel.app/
