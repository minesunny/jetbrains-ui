# Button Component Design Spec

## Typography: ui-default

| Property | Figma Value | Tailwind CSS |
|----------|------------|-------------|
| Font | Inter | `font-sans` |
| Weight | 500 (Medium) | `font-medium` |
| Size | 13px | `text-[13px]` |
| Line height | 16px | `leading-4` |
| Letter spacing | 0px | `tracking-normal` |

## Figma Auto Layout

### Default Size

| Property | Figma Value | Tailwind CSS |
|----------|------------|-------------|
| Direction | Horizontal | `flex flex-row` |
| Width | Hug (72px) | `min-w-[72px]` |
| Height | Hug (28px) | `h-7` |
| Padding | — | `px-3` (12px) |
| Gap | — | `gap-2` (8px) |
| Radius | 4px | `rounded` |

### Slim Size

| Property | Figma Value | Tailwind CSS |
|----------|------------|-------------|
| Direction | Horizontal | `flex flex-row` |
| Width | Hug (72px) | `min-w-[72px]` |
| Height | Hug (24px) | `h-6` |
| Padding | — | `px-3` (12px) |
| Gap | — | `gap-2` (8px) |
| Radius | 4px | `rounded` |

## Technical Requirements

- Based on Radix UI Slot (`@radix-ui/react-slot`) for `asChild` polymorphism
- Two sizes: default (h-7, min-w-[72px]), slim (h-6, min-w-[72px])
- Two modes: light / dark (via Tailwind `dark:` prefix)
- Two variants: primary / secondary
- Five states: active, hover, pressed, focused, disabled

## Color Token Specification

All colors use JetBrains design tokens via Tailwind utilities (e.g. `bg-blue-4`, `text-gray-14`).
Available blue range: blue-1 through blue-13. Available gray range: gray-1 through gray-14.

### Light · Primary

| State    | background | text     | border       |
|----------|------------|----------|--------------|
| default  | `blue-4`   | `gray-14`| transparent  |
| hover    | `blue-3`   | `gray-14`| transparent  |
| pressed  | `blue-2`   | `gray-14`| transparent  |
| focused  | `blue-4`   | `gray-14`| transparent  | (= default + ring)
| disabled | `blue-4`   | `gray-14`| transparent  | (reduced opacity)

### Light · Secondary

| State    | background | text    | border     |
|----------|------------|---------|------------|
| default  | `blue-4`   | `gray-1`| `gray-9`   |
| hover    | `blue-13`  | `gray-1`| `gray-7`   |
| pressed  | `gray-13`  | `gray-1`| `gray-7`   |
| focused  | `gray-14`  | `gray-1`| `blue-4`   | (+ ring)
| disabled | `blue-12`  | `gray-8`| none       |

### Dark · Primary

| State    | background | text     | border       |
|----------|------------|----------|--------------|
| default  | `blue-6`   | `gray-14`| transparent  |
| hover    | `blue-5`   | `gray-14`| transparent  |
| pressed  | `blue-4`   | `gray-14`| transparent  |
| focused  | `blue-6`   | `gray-14`| transparent  | (= default + ring)
| disabled | `gray-5`   | `gray-8` | transparent  |

### Dark · Secondary

| State    | background | text     | border     |
|----------|------------|----------|------------|
| default  | `blue-5`   | `gray-12`| none       |
| hover    | `blue-7`   | `gray-12`| none       |
| pressed  | `gray-2`   | `gray-1` | `gray-7`   |
| focused  | `gray-2`   | `gray-12`| `blue-6`   |
| disabled | `blue-5`   | `gray-8` | none       |

## Behavior Rules

1. **Primary focused** = same tokens as default + `focus-visible:ring-2` (light: `ring-blue-4`, dark: `ring-blue-6`)
2. **Secondary focused** (light) = bg `gray-14` + border `blue-4` + ring `ring-blue-4`; (dark) = bg `gray-2` + border `blue-6` + ring `ring-blue-6`
3. **Secondary disabled** has no border (`border-transparent`)
3. **Disabled** blocks all interaction: `disabled:pointer-events-none disabled:cursor-not-allowed`
4. **Focus ring offset**: light uses `ring-offset-gray-14`, dark uses `ring-offset-gray-2`

## Component API

```typescript
type ButtonProps = React.ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary';
  slim?: boolean;
  asChild?: boolean;
};
```

## Files

- Component: `apps/www/registry/components/button/index.tsx`
- Registry: `apps/www/registry/components/button/registry-item.json`
- Demo: `apps/www/registry/demo/components/button/index.tsx`
- Docs: `apps/www/content/docs/components/buttons/base-button/index.mdx` (EN + ZH)

## Usage Example

```tsx
import { Button } from '@/registry/components/button';

<Button variant="primary">Click me</Button>
<Button variant="secondary" slim>Small</Button>
<Button variant="primary" disabled>Disabled</Button>
```
