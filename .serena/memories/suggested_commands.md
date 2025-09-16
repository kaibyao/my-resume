# Suggested Commands

## Development Commands
- `npm install` - Install dependencies
- `npm run dev` - Start local dev server at localhost:4321
- `npm run build` - Build production site (runs astro check + astro build)
- `npm run preview` - Preview build locally before deploying
- `npm run start` - Alias for npm run dev

## Build & Check Commands  
- `npm run astro check` - Type-check Astro/TypeScript files
- `npm run build` - Runs type checking and builds to ./dist/

## Astro CLI Commands
- `npm run astro -- --help` - Get Astro CLI help
- `npm run astro add` - Add Astro integrations

## Deployment
- Automatic deployment to GitHub Pages on push to main branch
- Site URL: https://kaibyao.github.io/my-resume

## Note on Linting/Formatting
No explicit lint/format scripts in package.json, but project has:
- ESLint configuration (.eslintrc.cjs)
- Prettier configuration (.prettierrc.mjs)
- TypeScript strict mode (tsconfig.json)

Can run manually:
- `npx eslint .` for linting
- `npx prettier --write .` for formatting