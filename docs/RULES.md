# Project Rules

These rules describe how to work in this repository today and how to evolve it toward Expo + React + TypeScript without losing structure.

## First Rule: Study Before Changing

Before adding or changing code:

- Read the nearby component, section, constants, and styles.
- Reuse the current patterns unless there is a clear reason to improve them.
- Update `README.md`, `docs/ARCHITECTURE.md`, or `docs/FOLDER_STRUCTURE.md` when structure, ownership, dependencies, or platform direction changes.
- Keep changes scoped. Do not refactor unrelated files while adding a feature.

## Current Project Rules

- This is currently a Vite React web app using `.jsx`.
- Keep page-level composition in `src/App.jsx`.
- Keep large visual bands in `src/sections/`.
- Keep reusable UI and animation pieces in `src/components/`.
- Keep portfolio data in `src/constants/index.js`.
- Keep static assets in `public/` and reference them with root-relative paths such as `/assets/projects/example.jpg`.
- Keep global tokens, font declarations, and reusable Tailwind utilities in `src/index.css`.
- Prefer declarative React state for UI state and refs only for animation or imperative DOM/Three.js integration.
- Register GSAP plugins once in the module that needs them.
- Clean up listeners, observers, timelines, and animation side effects when a component unmounts.

## React Rules

- Components should have one clear responsibility.
- Section components own layout and page-specific animation.
- Reusable components should be configurable through props and avoid importing section-specific data.
- Avoid mixing content data, animation timelines, and rendering logic in one large block when the component grows.
- Prefer stable keys from data ids. Use array indexes only for static lists that never reorder.
- Do not access `window` during render when server rendering or native compatibility may be needed. Put platform/browser checks inside effects or event handlers.
- Keep accessibility in mind: interactive elements should be buttons or links, links should have valid `href` values, and images should have meaningful `alt` text.

## SOLID Guidance

Use SOLID as practical guardrails, not ceremony.

- Single Responsibility: a component should either compose a section, render reusable UI, hold data, or run a focused animation.
- Open/Closed: add new sections, projects, services, and social links through data/config where possible instead of editing rendering logic repeatedly.
- Liskov Substitution: reusable components should accept predictable props and not depend on hidden parent behavior.
- Interface Segregation: pass only the props a component needs. Avoid broad config objects unless they are stable and documented.
- Dependency Inversion: keep components dependent on small local data shapes and props instead of hard-coding external services or global state.

## TypeScript Rules For Future Migration

When the project moves from JSX to TypeScript:

- Use `.tsx` for React components and `.ts` for data, helpers, hooks, and types.
- Define shared types near the feature first; move them to `src/types/` only when reused by multiple features.
- Avoid `any`. Use `unknown` at boundaries and narrow it.
- Type component props explicitly with `type Props = { ... }`.
- Type content structures such as `Project`, `Service`, `SocialLink`, and animation config.
- Keep `strict` TypeScript enabled.
- Prefer discriminated unions over loosely shaped optional fields for variant UI.

## Expo React TypeScript Rules For Future App Work

If this portfolio becomes an Expo app or shares code with one:

- Start with Expo + TypeScript and keep `strict` mode on.
- Use Expo Router for app navigation unless the project has a strong reason to use React Navigation directly.
- Keep screens thin. Screens compose feature components and call hooks; they should not hold business logic.
- Put reusable cross-platform UI in `src/components/`.
- Put feature-specific logic under `src/features/<feature-name>/`.
- Put API calls and persistence behind small service modules.
- Use `StyleSheet`, NativeWind, or the chosen styling system consistently. Do not mix styling systems inside the same feature without a reason.
- Use `expo-asset`, `expo-font`, and platform-safe asset loading for fonts, images, and models.
- Avoid browser-only APIs such as `window`, `document`, DOM refs, and CSS-only layout assumptions in shared code.
- Separate web-only Three.js/DOM animation code from native screens.
- Prefer Expo-supported libraries before adding native modules.
- Add platform checks with `Platform.select` only at boundaries, not throughout business logic.

## Dependency Rules

- Add a dependency only when it removes meaningful complexity or is already aligned with the stack.
- Prefer libraries that work with React 19 and Vite today.
- For future Expo work, verify Expo compatibility before installing.
- Do not add global state until prop drilling or shared state becomes a real problem.

## Testing And Verification Rules

- Run `npm run lint` after code changes.
- Run `npm run build` before release or deployment.
- For animation and 3D changes, manually verify desktop and mobile viewport behavior.
- For future TypeScript migration, add `tsc --noEmit` as a required verification script.
