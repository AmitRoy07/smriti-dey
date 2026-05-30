# Architecture

## Overview

The app is a single-page animated portfolio. `src/App.jsx` owns the page order and wraps the experience in Lenis smooth scrolling. Individual sections render the visible page bands, reusable components handle shared animation/UI patterns, and static portfolio data is stored in one constants module.

## Runtime Flow

1. `src/main.jsx` mounts React into `#root`.
2. `src/App.jsx` reads Drei `useProgress()` and shows a loading overlay until the 3D assets finish loading.
3. `ReactLenis` wraps the page for smooth scroll behavior.
4. `SmoothCursor` mounts once in `App.jsx` and applies the Magic UI cursor on fine-pointer desktop devices.
5. The main sections render in order: Navbar, Hero, ServiceSummary, Services, About, Works, ContactSummary, Contact.
6. GSAP drives entrance, scroll, hover, marquee, and menu animations.
7. React Three Fiber renders the hero scene with the GLB model from `public/models/Planet.glb`.

## Main Responsibilities

### `src/App.jsx`

- Top-level composition.
- Loading state based on 3D asset progress.
- Smooth-scroll root.
- Global smooth cursor mount.
- Section order.

### `src/sections/`

Sections are full page or major page bands. They can own section-specific layout, copy placement, and animation triggers.

- `Navbar.jsx`: slide-in menu, burger animation, scroll visibility, social links.
- `Hero.jsx`: first viewport, animated header, Three.js canvas, lights, and floating planet.
- `ServiceSummary.jsx`: animated service summary band.
- `Services.jsx`: service cards/content sourced from constants.
- `About.jsx`: about content and reveal animation.
- `Works.jsx`: project listing, hover overlays, desktop cursor preview, mobile image previews.
- `ContactSummary.jsx`: marquee CTA summary.
- `Contact.jsx`: final contact area and links.

### `src/components/`

Reusable or semi-reusable building blocks.

- `AnimatedHeaderSection.jsx`: animated section heading pattern.
- `AnimatedSvgMark.jsx`: reusable animated SVG accent used with section headings.
- `AnimatedTextLines.jsx`: line-based animated text.
- `Marquee.jsx`: infinite GSAP marquee with scroll-reactive speed.
- `Planet.jsx`: generated GLB component and its local GSAP animation.
- `ui/smooth-cursor.jsx`: Magic UI cursor component.

### `src/constants/index.js`

Central content data:

- Services
- Projects
- Social links

This keeps display components mostly data-driven and makes portfolio customization easier.

### `src/index.css`

Global styling layer:

- Tailwind import
- Font faces
- Theme tokens
- Global body styles
- Custom Tailwind utilities for repeated responsive text styles

## Animation Architecture

- GSAP is the primary animation engine.
- `@gsap/react` is used for React-safe GSAP setup.
- Framer Motion powers the Magic UI smooth cursor.
- CSS keyframes power lightweight SVG accent animations.
- DOM animation uses refs for elements that GSAP controls.
- Three.js model animation is isolated in `Planet.jsx`.
- Scroll and hover interactions are section-owned so reusable components stay focused.

When adding animations, keep the timeline close to the component that owns the visual behavior. Extract animation helpers only after two or more components need the same behavior.

## Asset Architecture

Assets live under `public/` and are referenced from the app with root-relative paths.

- `public/assets/projects/`: project preview images
- `public/assets/backgrounds/`: project mobile background images
- `public/models/`: GLB model files
- `public/fonts/`: font files
- `public/favicon.svg`, `public/apple-touch-icon.svg`, `public/site.webmanifest`, `public/robots.txt`: SEO and browser install metadata

Font paths should stay aligned with the checked-in `public/fonts/amiamie/` directory.

## Current Limitations

- The project is JavaScript/JSX, not TypeScript yet.
- There is no test setup.
- The README previously referenced a `tailwind.config.js`, but this project uses Tailwind CSS 4 theme config in `src/index.css`.
- Some portfolio entries are internal/case-study style items and intentionally do not link to live URLs yet.

## Future Direction

If the project is migrated to Expo + React Native + TypeScript, keep web-specific animation and Three.js code isolated. Shared code should be limited to typed content data, pure helpers, business rules, and components that avoid browser-only APIs.
