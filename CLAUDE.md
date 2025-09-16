# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Essential Commands

**Development:**
- `npm run dev` - Start local dev server at localhost:4321
- `npm run build` - Type-check and build production site (runs `astro check && astro build`)
- `npm run preview` - Preview build locally

**Verification (run after any changes):**
- `npm run astro check` - Type-check all Astro/TypeScript files
- `npx eslint .` - Lint code (no script defined)
- `npx prettier --write .` - Format code (no script defined)

## Architecture

This is an Astro static site with React components for a personal resume website. Key architectural points:

- **Content Management**: Job experiences stored as MDX files in `src/content/experience/` with Zod schema validation
- **Component Strategy**: Astro components (`.astro`) for static content, React components (`.tsx`) for interactive features
- **State Management**: Jotai for React component state (see `src/features/skillsNotification/`)
- **Deployment**: Auto-deploys to GitHub Pages on push to `main` branch via GitHub Actions
- **Path Alias**: `~/` maps to `src/` directory

## Code Conventions

- **TypeScript**: Strict mode enabled via `astro/tsconfigs/strictest` - never use `any` type
- **Component Organization**: Each component in `src/components/ComponentName/` with co-located CSS file
- **Content Schema**: New experience entries must match Zod schema in `src/content/config.ts`
- **Naming**: PascalCase for components, camelCase for functions/variables, kebab-case for files

## Important Notes

- Site deploys to `/my-resume` path on GitHub Pages at <https://kaibyao.github.io/my-resume>
- All MDX experience files require frontmatter with title, organization, organizationUrl, startDate, and optional endDate
- Interactive features use Jotai atoms (see skills notification system example)

## Context7 Library IDs

For faster documentation retrieval:
- Astro: `/withastro/docs`
- React: `/websites/react_dev`
- Jotai: `/websites/jotai`
