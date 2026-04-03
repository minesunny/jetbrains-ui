# Buttons Component Analysis (Current Repo)

## Canonical implementation files

- Component entry: `apps/www/registry/components/buttons/index.tsx`
- Base Button source: `apps/www/registry/components/buttons/button.tsx`
- Component styles: `apps/www/registry/components/buttons/index.css`
- Component registry: `apps/www/registry/components/buttons/registry-item.json`
- Demo source: `apps/www/registry/demo/components/button/index.tsx`
- Demo registry: `apps/www/registry/demo/components/button/registry-item.json`
- English docs:
  - `apps/www/content/docs/components/buttons/index.mdx`
  - `apps/www/content/docs/components/buttons/base-button/index.mdx`
  - `apps/www/content/docs/components/buttons/meta.json`
- Chinese docs:
  - `apps/www/content/docs-zh/components/buttons/index.mdx`
  - `apps/www/content/docs-zh/components/buttons/base-button/index.mdx`
  - `apps/www/content/docs-zh/components/buttons/meta.json`

## Implemented behavior snapshot

- Built with Radix Slot (`@radix-ui/react-slot`) and utility-class variants.
- Supported variants:
  - `variant`: `primary | secondary`
  - `slim`: `boolean`
  - `split`: `boolean`
  - `asChild`: `boolean`
- Figma-aligned sizing:
  - default: `72x40`
  - slim: `72x36`
  - split segment: `28x28`
- Split segment details from Figma MCP:
  - chevron drawing area: `7x3.5` centered in `16x16` icon box
  - primary (enabled): divider line `1x20` at `top: 4`
  - secondary or disabled: divider line `1x28` full-height
- `size` prop is intentionally removed.

## Related component sizing notes

- `alert` default width is `370px` (not `420px`).
- `alert` wide width is `420px`; larger widths should be content-driven (`size="auto"`).
- `alert` content paddings follow `top 20 / right 20 / bottom 66 / left 60`.

## Styling split policy

- Non-color styles (layout/spacing/sizing/position/transition shape) live in TSX class strings.
- `apps/www/registry/components/buttons/index.css` keeps color/state tokens only (`--btn-*`) and color mappings.
- The same policy should be applied when refactoring related components (`alert`, `combo-box`, `checkbox`).

## Docs and navigation expectations

- `buttons` is a grouped docs section, not a flat `button.mdx` page.
- Root sidebar should include only `"buttons"` once in:
  - `apps/www/content/docs/components/meta.json`
  - `apps/www/content/docs-zh/components/meta.json`
- Child pages are declared in `buttons/meta.json` with `"pages": ["index", "base-button"]`.

## Golden reference checks

A healthy buttons flow should satisfy all:

- `pnpm dlx shadcn@latest add @jetbrains-ui/buttons` succeeds in a clean shadcn sandbox.
- Generated files land under `components/jetbrains-ui/buttons/*`.
- `/docs/components/buttons` renders directory cards; `/docs/components/buttons/base-button` renders API details.
- Registry output (`apps/www/public/r/buttons.json`) reflects `slim` and `split` demo props.
