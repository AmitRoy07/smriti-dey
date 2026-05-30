# Folder Structure

This document reflects the current repository. Update it whenever folders are added, removed, renamed, or given new ownership.

```text
.
|-- docs/
|   |-- ARCHITECTURE.md
|   |-- FOLDER_STRUCTURE.md
|   `-- RULES.md
|-- public/
|   |-- assets/
|   |   |-- backgrounds/
|   |   `-- projects/
|   |-- fonts/
|   |   `-- amiamie/
|   |       |-- otf/
|   |       `-- ttf/
|   |-- apple-touch-icon.svg
|   |-- favicon.svg
|   |-- robots.txt
|   |-- site.webmanifest
|   `-- models/
|-- src/
|   |-- components/
|   |   `-- ui/
|   |-- constants/
|   |-- sections/
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- components.json
|-- eslint.config.js
|-- index.html
|-- jsconfig.json
|-- package-lock.json
|-- package.json
|-- README.md
`-- vite.config.js
```

## Root Files

- `package.json`: scripts, dependencies, and project metadata.
- `package-lock.json`: locked npm dependency tree.
- `vite.config.js`: Vite config with React and Tailwind CSS plugins.
- `components.json`: shadcn registry configuration, including Magic UI.
- `eslint.config.js`: ESLint flat config for JavaScript and JSX.
- `index.html`: Vite HTML entry point and SEO metadata.
- `jsconfig.json`: JavaScript path alias configuration for `@/*`.
- `README.md`: setup, stack, customization, and documentation index.

## `src/`

Application source.

- `main.jsx`: React entry point.
- `App.jsx`: top-level page composition and loading overlay.
- `index.css`: Tailwind import, font faces, theme tokens, reusable utilities, global styles.

## `src/sections/`

Major page sections. Add new first-page or full-width portfolio sections here.

Current files:

- `Navbar.jsx`
- `Hero.jsx`
- `ServiceSummary.jsx`
- `Services.jsx`
- `About.jsx`
- `Works.jsx`
- `ContactSummary.jsx`
- `Contact.jsx`

## `src/components/`

Reusable UI, animation, or 3D pieces that can be used by more than one section.

Current files:

- `AnimatedHeaderSection.jsx`
- `AnimatedSvgMark.jsx`
- `AnimatedTextLines.jsx`
- `Marquee.jsx`
- `Planet.jsx`

## `src/components/ui/`

Generated or registry-backed UI components.

- `smooth-cursor.jsx`: Magic UI smooth cursor used globally from `App.jsx`.

## `src/constants/`

Data/config for display components.

- `index.js`: services, projects, and social links.

If this grows, split by domain:

```text
src/constants/
|-- projects.js
|-- services.js
`-- socials.js
```

## `public/`

Static files copied directly by Vite.

- `assets/projects/`: project preview images.
- `assets/backgrounds/`: background images used in project previews.
- `fonts/amiamie/`: local font files.
- `models/`: GLB model assets for Three.js.
- `favicon.svg`, `apple-touch-icon.svg`, `site.webmanifest`, `robots.txt`: browser and SEO metadata.

## Future TypeScript Shape

When migrating to TypeScript, prefer this target shape:

```text
src/
|-- app/
|   `-- App.tsx
|-- components/
|-- constants/
|-- features/
|   |-- hero/
|   |-- navigation/
|   |-- services/
|   |-- works/
|   `-- contact/
|-- hooks/
|-- lib/
|-- sections/
|-- types/
|-- index.css
`-- main.tsx
```

For Expo, replace the Vite entry with Expo Router's `app/` directory and move shared source under `src/`.
