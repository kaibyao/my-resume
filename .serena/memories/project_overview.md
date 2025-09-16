# Project Overview

This is a personal resume website built with Astro + React. The project converts a traditional resume format into a modern web application.

## Tech Stack
- **Frontend Framework**: Astro (5.13.7) with React integration
- **Language**: TypeScript with strict configuration 
- **State Management**: Jotai for React state
- **Styling**: CSS with component-scoped styles
- **Content Management**: Astro Content Collections with MDX for experience entries
- **Deployment**: GitHub Pages via GitHub Actions

## Project Purpose
A personal resume website that replaces traditional Word/Adobe formats with a maintainable web application. The owner wanted to move away from design software and leverage web development skills for resume maintenance.

## Architecture
- Static site generation with Astro
- React components for interactive elements (skills notifications)
- MDX files for experience content in `src/content/experience/`
- Content schema validation with Zod
- Component-based architecture with scoped CSS