# Buttons Component Analysis (Current Repo)

## Canonical implementation files

- Component source: `apps/www/registry/components/button/index.tsx`
- Component registry: `apps/www/registry/components/button/registry-item.json`
- Demo source: `apps/www/registry/demo/components/button/index.tsx`
- Demo registry: `apps/www/registry/demo/components/button/registry-item.json`
- English docs: `apps/www/content/docs/components/button.mdx`
- Chinese docs: `apps/www/content/docs-zh/components/button.mdx`

## Implemented behavior snapshot

- Built with Radix Slot (`@radix-ui/react-slot`) + `class-variance-authority` (cva).
- Supported props:
  - `variant`: `primary | secondary`
  - `slim`: `boolean`
  - `asChild`: `boolean`
- Figma-aligned sizing:
  - default: `h-7 (28px)`, `min-w-[72px]`
  - slim: `h-6 (24px)`, `min-w-[72px]`
- No separate CSS file — all styles are Tailwind utility classes inline in TSX.
- Dark mode via `dark:` variant classes (no CSS custom properties).

## Styling approach

- All styles (layout, spacing, sizing, colors, states) live in TSX via `cva()` + `cn()`.
- No separate `index.css` — color tokens are used directly as Tailwind classes (`bg-blue-4`, `text-gray-14`, etc.).
- Transition: `background-color, color, border-color, box-shadow` over 150ms ease-in-out.

## Docs structure

- Single flat page: `docs/components/button.mdx` (not a grouped section).
- Uses `<ComponentPreview name="demo-button" />` and `<ComponentInstallation name="button" />`.

## Golden reference checks

- `pnpm dlx shadcn@latest add @jetbrains-ui/buttons` should succeed in a clean shadcn sandbox.
- Generated files land at `components/jetbrains-ui/button.tsx`.
- `/docs/components/button` renders the doc page with live demo.
- Registry output (`apps/www/public/r/buttons.json`) reflects `variant` and `slim` demo props.
