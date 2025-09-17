# Project Structure

## Root Directory
- Configuration files: `astro.config.mjs`, `tsconfig.json`, `.eslintrc.cjs`, `.prettierrc.mjs`
- Package management: `package.json`, `package-lock.json`
- GitHub Actions: `.github/workflows/deploy.yml` for auto-deployment

## Source Directory (`src/`)
```
src/
├── _components/          # Reusable UI components
│   ├── Experience/     # Job experience display
│   ├── ResumeHeader/   # Resume header section
│   ├── SkillsList/     # Skills list component
│   └── SkillsListItem/ # Individual skill item
├── content/            # Content collections
│   ├── config.ts       # Content schema definitions
│   └── experience/     # MDX files for job experiences
├── features/           # Feature-specific logic
│   └── skillsNotification/ # Skills notification system
├── images/             # Static images
├── layouts/            # Page layouts
│   └── Page.astro      # Main page layout
└── pages/              # Route pages
    └── index.astro     # Home/resume page
```

## Key Files
- `src/pages/index.astro` - Main resume page
- `src/content/config.ts` - Defines experience schema with Zod
- `src/content/experience/*.mdx` - Individual job experience entries
- `src/features/skillsNotification/` - Interactive skills display with Jotai state

## Build Output
- `dist/` - Production build output (gitignored)
- Deployed to GitHub Pages at `/my-resume` path
