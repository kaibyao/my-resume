# Task Completion Checklist

When completing any coding task in this repository, ensure:

## Type Safety
- Run `npm run astro check` to verify TypeScript types
- Never use `any` type - find proper type definitions

## Build Verification  
- Run `npm run build` to ensure production build succeeds
- This runs both type checking and build process

## Code Quality (Manual - no scripts defined)
- Run `npx eslint .` to check for linting issues
- Run `npx prettier --write .` to format code
- Ensure new components follow existing patterns:
  - Astro components for static content
  - React components for interactive features
  - Component-scoped CSS files

## Testing Changes
- Run `npm run dev` and test locally at localhost:4321
- Verify responsive design works
- Test any interactive features (e.g., skills notifications)

## Before Committing
- Ensure no sensitive information in code
- Verify imports use path alias `~/` where appropriate
- Check that MDX content files have proper frontmatter schema

## Deployment Note
- Changes pushed to `main` branch auto-deploy via GitHub Actions
- Site will be available at https://kaibyao.github.io/my-resume