# Smriti Dey Portfolio

An animated professional portfolio for Smriti Dey, UI/UX Developer and Frontend Engineer. It is built with React, Vite, GSAP, Tailwind CSS, Three.js, React Three Fiber, Drei, Lenis, Iconify, and a Magic UI smooth cursor.

This repository is currently a web project, not an Expo project. Expo + React Native + TypeScript rules are documented in [docs/RULES.md](docs/RULES.md) so future mobile or cross-platform work can follow the same engineering standards.

## Current Stack

- React 19 with Vite
- Tailwind CSS 4 through `@tailwindcss/vite`
- GSAP and `@gsap/react` for motion
- Magic UI Smooth Cursor
- Iconify icons and reusable animated SVG accents
- Three.js, React Three Fiber, and Drei for the 3D hero planet scene
- Lenis for smooth scrolling
- React Scroll for menu navigation
- Iconify for icons

## Project Docs

- [Rules](docs/RULES.md): coding rules, SOLID guidance, React/TypeScript expectations, and Expo migration rules.
- [Architecture](docs/ARCHITECTURE.md): how the app is composed and where responsibilities live.
- [Folder Structure](docs/FOLDER_STRUCTURE.md): current folders, files, assets, and naming conventions.

## SEO

- Main metadata and structured data: `index.html`
- Favicon, app icon, manifest, and robots file: `public/`
- Current social preview image: `/assets/backgrounds/smriti.jpg`

## Setup

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Customization

- Portfolio copy, service data, projects, social links: `src/constants/index.js`
- Section order and page composition: `src/App.jsx`
- 3D model component: `src/components/Planet.jsx`
- Animated SVG accent: `src/components/AnimatedSvgMark.jsx`
- Global cursor component: `src/components/ui/smooth-cursor.jsx`
- SEO metadata and favicon links: `index.html`
- Global theme tokens, fonts, and reusable Tailwind utilities: `src/index.css`
- Static images, fonts, and models: `public/`

## Maintenance Rule

Before changing architecture, folder structure, dependencies, animation strategy, or platform direction, study the current implementation first and update the relevant docs in `docs/` in the same change.
"# smriti-dey" 
