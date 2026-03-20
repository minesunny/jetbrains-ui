# Docs Icons Guidelines

## Scope

These rules apply to `apps/www/components/docs/icons/**`.

## Purpose

- This directory is the docs presentation layer for icon browsing.
- It should only handle display/search/preview behavior.
- Do not place icon source-of-truth logic here; source files live in `public/icons/**`, generated components live in `apps/www/registry/icons/**`.

## Component Structure

- Category gallery files should stay under:
  - `components/docs/icons/<category>/<category>-icons-gallery.tsx`
- For category-level aggregation pages (for example `general`, `plugins`), use:
  - `components/docs/icons/aggregate-icons-gallery.tsx`
  - `components/docs/icons/<category>/<category>-all-icons-gallery.tsx`
- Keep gallery components `use client`.

## Behavior Contract

- Keep interaction behavior consistent across galleries:
  - search input
  - size switch (`xs|sm|md|lg|xl`)
  - mode switch (`light|dark`)
  - click icon card to view detailed preview and import snippet
- Keep import snippets aligned with real registry paths in `apps/www/registry/icons/**`.

## Sync Rules With Docs Content

- When adding/removing icon categories or subcategories, update all related files together:
  - `apps/www/content/docs/icons/**`
  - `apps/www/content/docs-zh/icons/**`
  - `apps/www/components/docs/icons/**`
- For 一级聚合页 (such as `general/index.mdx`, `plugins/index.mdx`):
  - ensure corresponding `*-all-icons-gallery.tsx` pack list is updated
  - ensure sidebar `meta.json` pages order matches docs intent

## Coding Conventions

- Reuse shared UI patterns from existing gallery components.
- Avoid introducing a new one-off gallery style if current shared component can cover it.
- Keep file names kebab-case and exported component names PascalCase.
- Keep text concise and consistent (especially `Search...`, `No icons found`, `Loading...`).

## Validation

- Run before commit:
  - `pnpm --filter jetbrains-ui lint`
  - `pnpm --filter jetbrains-ui build`
- If docs navigation changed, manually verify:
  - `/docs/icons` sidebar hierarchy
  - `general` and `plugins` aggregate page search/preview behavior
