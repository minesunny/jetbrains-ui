---
name: jetbrains-ui-component-builder
description: Implement and maintain JetBrains UI components in this monorepo using Radix UI + shadcn registry patterns. Use when adding a new component, refactoring an existing component, fixing shadcn add installation issues, syncing English/Chinese docs, or keeping demo/registry/docs behavior consistent with JetBrains Figma and design tokens.
---

# JetBrains UI Component Builder

Implement components through the registry-first workflow used by `apps/www`.
Use existing `buttons`, `checkbox`, `radio`, and `combo-box` as baseline patterns.

## Read Before Editing

Load only the references needed for the task:

- `references/component-workflow-checklist.md`: End-to-end file checklist and validation commands.
- `references/button-analysis.md`: Current button implementation, doc status, and known mismatches.

## Styling Policy (Important)

Follow the same pattern as `buttons` and `checkbox`:

- **Do not** extract className strings into named constants (e.g. `const rootClassName = ...`). Inline them directly in `cn()` or JSX, same as Button.
- **Do not** use component-specific semantic CSS variables (e.g. `--checkbox-unchecked-border`, `--checkbox-checked-bg`). These second-level tokens in `tokens.css` are **deprecated**.
- **Use** raw design tokens directly: `gray-*`, `blue-*`, `red-*`, etc. (e.g. `border-gray-8 bg-blue-4`).
- **Use** `dark:` prefix for dark mode overrides when light/dark values differ (e.g. `dark:border-gray-6 dark:bg-gray-3`).
- **Do not** create `index.css` for color/state mappings. All color styles go in TSX class strings.
- Only create `index.css` when the component needs CSS custom properties, keyframe animations, or complex pseudo-element styles that cannot be expressed as utility classes.
- Non-color styles (layout/spacing/size/position/motion) always stay in TSX class strings.

## Trigger Component Pattern

Dialog-like components (AlertDialog, Alert, etc.) should wrap their Trigger primitive as a **named function component** (not a simple alias). Follow this pattern:

```tsx
type AlertDialogTriggerProps = React.ComponentProps<typeof AlertDialogPrimitive.Trigger> & {
  tooltip?: string;
};

function AlertDialogTrigger({ className, tooltip, ...props }: AlertDialogTriggerProps) {
  const trigger = (
    <AlertDialogPrimitive.Trigger
      data-slot="alert-dialog-trigger"
      className={cn(buttonVariants({ variant: 'secondary' }), className)}
      {...props}
    />
  );

  if (!tooltip) {
    return trigger;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{trigger}</TooltipTrigger>
      <TooltipContent>{tooltip}</TooltipContent>
    </Tooltip>
  );
}
```

Key points:
- Add `data-slot="<component>-trigger"` for CSS targeting.
- Use `buttonVariants({ variant: 'secondary' })` as default styling.
- Support optional `tooltip` prop that wraps the trigger in a `<Tooltip>`.
- Export the props type alongside the component (e.g. `type AlertDialogTriggerProps`).

## Workflow A: Add A New Component

1. Define component contract from Figma.

- Capture states, variants, sizes, and accessibility behaviors.
- Map visual values to existing raw tokens in `apps/www/registry/styles/jetbrains/tokens.css` (`gray-*`, `blue-*`, `red-*`, etc.).
- Add new raw tokens only when no existing token fits.

2. Implement component source.

- Create `apps/www/registry/components/<name>/index.tsx`.
- Prefer Radix primitives (`@radix-ui/react-*`) and `class-variance-authority` when variant matrix exists.
- Import utils from `@workspace/ui/lib/utils`.
- Keep TSX semantic: use `data-variant` / `data-size` (or equivalent) to switch style semantics.
- Inline all className strings in `cn()` calls or JSX — no named className constants.

3. Create component registry item.

- Add `apps/www/registry/components/<name>/registry-item.json`.
- Define accurate `dependencies`, `registryDependencies`, `files[].target`, and `meta.demoProps`.
- If the component includes CSS, add a `files[]` entry for `index.css` with `type: "registry:style"` and a matching `target`.

4. Create demo source + registry item.

- Add `apps/www/registry/demo/components/<name>/index.tsx` and `registry-item.json`.
- In demo source, import from `@/registry/components/<name>` (not `@/components/...`).

5. Add bilingual docs.

- For single-page docs, create:
  - `apps/www/content/docs/components/<name>.mdx`
  - `apps/www/content/docs-zh/components/<name>.mdx`
- For grouped docs (for example `tabs` or `buttons`), use folder docs with `index.mdx` + `meta.json`.
- Include `ComponentPreview`, `ComponentInstallation`, and `## Usage`.
- Add `<name>` to both docs sidebar menus:
  - `apps/www/content/docs/components/meta.json`
  - `apps/www/content/docs-zh/components/meta.json`
- Add `<name>` card entry to:
  - `apps/www/content/docs/components/index.mdx`
  - `apps/www/content/docs-zh/components/index.mdx`

### Docs Hierarchy Rule (Important)

When a component has sub-doc pages (example: Tabs), use **folder-based** docs, not flat sibling mdx files.

- Parent page:
  - `apps/www/content/docs/components/<name>/index.mdx`
  - `apps/www/content/docs/components/<name>/meta.json`
  - `apps/www/content/docs-zh/components/<name>/index.mdx`
  - `apps/www/content/docs-zh/components/<name>/meta.json`
- Child pages:
  - `apps/www/content/docs/components/<name>/<child>/index.mdx`
  - `apps/www/content/docs-zh/components/<name>/<child>/index.mdx`
- Parent-level sidebar (`components/meta.json`) must only include `"name"` once (same level as `sheet`, `toggle`, etc.).
- Child pages must be declared in `<name>/meta.json` via `"pages": ["index", "<child-a>", "<child-b>"]`.
- Do **not** use invalid JSON/object syntax like `"tabs": ["tabs", "dynamicTabs"]` in root `components/meta.json`.

Tabs-specific convention:

- Use routes like `tabs/base-tabs` and `tabs/dynamic-tabs`.
- Keep `tabs/index.mdx` as a lightweight directory page (cards/links to subpages), not a full API detail page.

## Workflow B: Fix Or Refactor Existing Component

1. Diff implementation vs metadata/docs.

- Compare `registry/components/<name>/index.tsx` with `registry-item.json` `meta.demoProps`.
- Compare docs snippet imports with install target under `components/jetbrains-ui/<name>/...` (folder-style exports are allowed, for example `buttons`).

2. Apply minimal aligned fixes.

- Remove unsupported props from docs and `demoProps`.
- For behavior/API changes requested for an existing component, update
  `apps/www/registry/components/<name>/index.tsx` first; do not implement in
  `apps/www/registry/demo/components/<name>/index.tsx` unless it is demo-only behavior.
- Keep behavior stable unless user requests breaking change.
- Keep locale copy consistent (EN page in English, ZH page in Chinese except identifiers).
- When refactoring styling, replace any component-specific semantic tokens (e.g. `--checkbox-*-disabled`) with raw tokens + `dark:` prefix per the Styling Policy above.

3. Rebuild generated artifacts.

- Run `pnpm --filter jetbrains-ui exec tsx ./scripts/build-registry.mts`.
- Confirm generated imports are rewritten under `apps/www/public/r/*.json` and `apps/www/__registry__/index.tsx`.

4. Update index/navigation labels when needed.

- Keep component labels aligned with actual package names in both:
  - `apps/www/content/docs/components/index.mdx`
  - `apps/www/content/docs-zh/components/index.mdx`
- Ensure `meta.json` includes every published component doc page, otherwise it will not appear in the sidebar menu.

## Validation Gates

Run from repo root unless noted:

- `pnpm format:write`
- `pnpm --filter jetbrains-ui lint`
- `pnpm --filter jetbrains-ui build`
- Optional install smoke test: in a temporary shadcn sandbox, run `pnpm dlx shadcn@latest add @jetbrains-ui/<name>`.

If install fails, inspect:

- the sandbox `components.json` registry URL
- `apps/www/components.json` aliases/registries
- generated file `apps/www/public/r/<name>.json`
