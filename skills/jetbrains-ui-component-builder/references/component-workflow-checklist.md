# JetBrains UI Component Workflow Checklist

## 1. Source files

For a new component `<name>`:

- `apps/www/registry/components/<name>/index.tsx`
- `apps/www/registry/components/<name>/index.css` (when styled)
- `apps/www/registry/components/<name>/registry-item.json`
- `apps/www/registry/demo/components/<name>/index.tsx`
- `apps/www/registry/demo/components/<name>/registry-item.json`
- `apps/www/content/docs/components/<name>.mdx`
- `apps/www/content/docs-zh/components/<name>.mdx`
- `apps/www/content/docs/components/meta.json` (add sidebar menu entry)
- `apps/www/content/docs-zh/components/meta.json` (add sidebar menu entry)
- `apps/www/content/docs/components/index.mdx` (add component card)
- `apps/www/content/docs-zh/components/index.mdx` (add component card)

## 2. Required patterns

- Use `'use client'` for interactive components.
- Prefer Radix primitive + composition API.
- Use CSS variables `--jb-*` instead of hardcoded colors.
- Keep theme token declarations in `:root` and `.dark`.
- Import component CSS from `index.tsx` (`import './index.css';`) when CSS exists.
- Keep docs examples aligned with actual exported props.
- Include `ComponentPreview` and `ComponentInstallation` in docs.
- Add `<name>` to sidebar menu `pages` in both component `meta.json` files.
- Add `<name>` to both component index card lists (`content/docs/components/index.mdx` and `content/docs-zh/components/index.mdx`).

## 3. Import path rule (important)

In registry source and demo source files:

- Use `@/registry/...` imports.

After running `apps/www/scripts/build-registry.mts`, generated consumer code in `public/r/*.json` is rewritten to:

- `@/components/jetbrains-ui/...`
- `@/lib/...` / `@/hooks/...` (when applicable)

Do not directly change generated JSON files.

## 4. Command sequence

1. `pnpm --filter jetbrains-ui exec tsx ./scripts/build-registry.mts`
2. `pnpm format:write`
3. `pnpm --filter jetbrains-ui lint`
4. `pnpm --filter jetbrains-ui build`

## 5. Manual verification

- Open docs: `/docs/components/<name>`.
- Toggle locale and verify all copy is localized.
- Verify preview tab and code tab both render.
- In a temporary shadcn sandbox, run:
  - `pnpm dlx shadcn@latest add @jetbrains-ui/<name>`
- Confirm component files generate under the sandbox `components/jetbrains-ui/` directory.

## 6. Common failure points

- `registry-item.json` has wrong `files[].target` path.
- `registry-item.json` misses `index.css` in `files[]` (`type: "registry:style"`).
- `index.tsx` forgets to import `./index.css`.
- Demo imports from `@/components/...` in source instead of `@/registry/...`.
- `meta.demoProps` advertises props not implemented in component.
- Requested component behavior was implemented in `registry/demo/...` instead of
  the source component `registry/components/...`.
- Docs import path differs from actual installed path.
- English and Chinese docs content drift.
- New docs page exists but is missing in `content/docs*/components/meta.json`, so it is absent from sidebar menu.
