# Frontend Developer Assignment Submission  
## Pixel-Perfect Hero Section – Feeble

**Candidate**: Lokaesshwar S  
**Role Applied For**: Frontend Developer  

🔗 **Live Deployment**: https://feeble-lokaesshwars-projects.vercel.app/  
🔗 **GitHub Repository**: https://github.com/lokaesshwar/feeble  

---

## Assignment Objective

The objective of this assignment was to implement the provided Figma hero section with **pixel-perfect accuracy**, accurately reproduce all **animations and interactions**, and maintain a **clean, well-structured, and maintainable frontend codebase** following modern best practices.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **React**: 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (PostCSS)
- **Animations**: Motion (Framer Motion)
- **Font**: General Sans (self-hosted locally via `next/font/local`)
- **Linting**: ESLint (Next.js configuration)

---

## Implementation Summary

### Pixel-Perfect UI
- Layout, spacing, typography, colors, and alignment closely match the provided Figma design
- Responsive behavior implemented to maintain visual consistency across screen sizes

### Animations & Interactions
- All hero section animations implemented using Motion (Framer Motion)
- Smooth transitions and easing functions aligned with the prototype
- Decorative elements (clouds, birds, scroll indicator) animated with controlled timing and depth

### Code Structure & Quality
- Uses **Next.js App Router** with server components by default
- Client components explicitly marked with `"use client"` only where interactivity is required
- Modular and readable component structure
- TypeScript used throughout for type safety and maintainability

---

## Assumptions & Notes

- Fonts are self-hosted locally to avoid external dependencies
- CSS variables are used for consistent theming
- Assets and animations are optimized for performance

---

## Running the Project Locally

```bash
npm install
npm run dev
