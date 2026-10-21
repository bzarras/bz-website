# AGENTS.md

This file provides guidance to AI coding agents working with code in this repository.

## Overview

Ben Zarras's personal website: a single-page Create React App (react-scripts 5, React 18, TypeScript) styled with Tailwind CSS. It is deployed on AWS Amplify, which handles CI/CD from the repo.

## Commands

- `npm start`: dev server at http://localhost:3000
- `npm run build`: production build to `build/`
- `npm test`: Jest in watch mode. For a single non-interactive run: `CI=true npm test`. To run one file: `CI=true npm test -- src/App.test.tsx`.
- Linting is CRA's built-in ESLint (`react-app` config). It runs as part of `start`/`build`, and there is no separate lint script.

`react-markdown` is ESM-only and CRA's Jest config doesn't transform `node_modules`, so tests that render it must mock it (see `src/App.test.tsx`).

## Architecture

The site is data-driven. Page content lives in TypeScript modules, not in JSX:

- `src/content/*.ts`: each file exports a `Content` object (`{ title, body }`, defined in `src/content/Content.ts`). `body` is a **Markdown** template string.
- `src/contentData.ts`: an ordered array of those content objects. The order of this array is the order of sections on the page.
- `src/Layout.tsx` maps over the array and renders one `ContentRow` per section.
- `src/ContentRow.tsx` renders the title in a left column and the body through `react-markdown`. The two columns stack on mobile and sit side by side at `md:` and up.

To edit site copy, change the Markdown in `src/content/`. To add a section, create a new content module and add it to `contentData.ts`.

Styling: Tailwind utility classes go in components. Global element styles for the Markdown output (`h2`, `ul`, `a`) are set with `@apply` in the `@layer base` block of `src/index.css`, because `react-markdown` emits plain elements without classes.

`public/index.html` contains the page `<title>` and the Google Analytics (gtag) snippet.
