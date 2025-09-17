# Code Style & Conventions

## TypeScript Configuration
- Extends `astro/tsconfigs/strictest` - strict type checking enabled
- NO use of `any` type (per global CLAUDE.md instructions)
- JSX configured for React with `react-jsx` transform
- Path alias: `~/*` maps to `src/*`

## File Organization
- Components in `src/_components/ComponentName/` folders
- Each component has `.astro/.tsx` file and `.css` file
- Content in `src/content/experience/` as MDX files
- Pages in `src/pages/` as Astro files
- Features in `src/features/` with domain-specific logic

## Naming Conventions
- PascalCase for components (e.g., SkillsList, ResumeHeader)
- camelCase for functions and variables
- kebab-case for CSS files and MDX content files
- Descriptive names (e.g., skillsNotificationStore, SkillsNotificationToast)

## Component Patterns
- Astro components for static content (.astro)
- React components for interactive features (.tsx)
- Component-scoped CSS files alongside components
- State management with Jotai for React components

## ESLint Rules
- React prop-types disabled (using TypeScript)
- TypeScript unused vars handled by strict TS config
- React JSX runtime configured
- Astro-specific overrides for .astro files
