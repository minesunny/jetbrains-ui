---
name: jetbrains-ui-component-builder
description: Implement and maintain JetBrains UI components in this monorepo using Radix UI + shadcn registry patterns. Use when adding a new component, refactoring an existing component, fixing shadcn add installation issues, syncing English/Chinese docs, or keeping demo/registry/docs behavior consistent with JetBrains Figma and design tokens.
---

# JetBrains UI Component Builder

Implement components through the registry-first workflow used by `apps/www`.
Use existing `buttons`, `checkbox`, `radio`, and `combo-box` as baseline patterns.

## Design Specs Location

Read specs from `openspec/specs/` as needed for the task:

- **Foundation specs**: `openspec/specs/foundation/` — colors, spacing, typography, figma-to-tailwind
- **Component specs**: `openspec/specs/components/<name>/` — per-component design rules and analysis
- For new components without a spec, extract from Figma and create a spec first

## Styling Policy (Important)

Follow the same pattern as `buttons` and `checkbox`:

- **Do not** extract className strings into named constants. Inline them directly in `cn()` or JSX.
- **Do not** use component-specific semantic CSS variables (e.g. `--checkbox-unchecked-border`). These are **deprecated**.
- **Use** raw design tokens directly: `gray-*`, `blue-*`, `red-*`, etc. (e.g. `border-gray-8 bg-blue-4`).
- **Use** `dark:` prefix for dark mode overrides when light/dark values differ.
- **Do not** create `index.css` for color/state mappings. All color styles go in TSX class strings.
- Only create `index.css` for CSS custom properties, keyframe animations, or complex pseudo-elements.
- Non-color styles (layout/spacing/size/position/motion) always stay in TSX class strings.

## Source File Checklist

For a new component `<name>`, create these files:

- `apps/www/registry/components/<name>/index.tsx` — component source
- `apps/www/registry/components/<name>/index.css` — only when CSS custom properties/keyframes needed
- `apps/www/registry/components/<name>/registry-item.json`
- `apps/www/registry/demo/components/<name>/index.tsx`
- `apps/www/registry/demo/components/<name>/registry-item.json`
- `apps/www/content/docs/components/<name>.mdx` (EN)
- `apps/www/content/docs-zh/components/<name>.mdx` (ZH)
- Update `content/docs*/components/meta.json` — add sidebar entry
- Update `content/docs*/components/index.mdx` — add component card

### Required Patterns

- Use `'use client'` for interactive components
- Prefer Radix primitive + composition API
- Use CSS variables `--jb-*` instead of hardcoded colors
- Import component CSS via `import './index.css'` when CSS exists
- In registry/demo source: import from `@/registry/...` (not `@/components/...`)
- Include `ComponentPreview` and `ComponentInstallation` in docs

## Workflow A: Add A New Component

1. Define component contract from Figma. Map visual values to existing raw tokens. Add new tokens only when no existing token fits.
2. Implement component source at `registry/components/<name>/index.tsx`. Prefer Radix primitives + `class-variance-authority`.
3. Create `registry-item.json` with accurate `dependencies`, `registryDependencies`, `files[].target`.
4. Create demo at `registry/demo/components/<name>/`. Import from `@/registry/...`.
5. Add bilingual docs. For grouped docs use folder structure (`index.mdx` + `meta.json`).

### Docs Hierarchy Rule

When a component has sub-doc pages, use **folder-based** docs:
- Parent: `docs/components/<name>/index.mdx` + `meta.json`
- Children: `docs/components/<name>/<child>/index.mdx`
- Parent sidebar (`meta.json`) includes `<name>` once
- Children declared in `<name>/meta.json` via `"pages": [...]`

## Workflow B: Fix Or Refactor Existing Component

1. Diff implementation vs metadata/docs. Compare `registry-item.json` `meta.demoProps` with actual props.
2. Apply minimal fixes. Update component source first, not demo, unless demo-only.
3. Rebuild generated artifacts: `pnpm --filter jetbrains-ui exec tsx ./scripts/build-registry.mts`
4. Update navigation labels when needed.

## Validation Gates

```bash
pnpm format:write
pnpm --filter jetbrains-ui lint
pnpm --filter jetbrains-ui build
```

Optional: `pnpm dlx shadcn@latest add @jetbrains-ui/<name>` in a clean sandbox.

## Common Failure Points

- `registry-item.json` wrong `files[].target` path
- `registry-item.json` misses `index.css` in `files[]`
- `index.tsx` forgets to import `./index.css`
- Demo imports from `@/components/...` instead of `@/registry/...`
- `meta.demoProps` advertises props not implemented
- Behavior implemented in demo instead of component source
- New docs page missing from `meta.json` sidebar
