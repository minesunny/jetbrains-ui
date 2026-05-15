# Checkbox Component Design Spec

## Technical Requirements

- Based on Radix UI Checkbox (`@radix-ui/react-checkbox`)
- Size: `size-4` (16x16px), rounded-[3px]
- Two modes: light / dark (via Tailwind `dark:` prefix)
- Three states: unchecked, checked, indeterminate
- Five interaction states: active (default), hovered, focused, invalid, disabled
- Uses design tokens that auto-invert in dark mode (same token name for both modes)

## Color Token Specification

All colors use JetBrains design tokens via Tailwind utilities.
The same token names apply to both light and dark modes — the tokens auto-invert.

### Light · Unchecked

| State    | border   | stroke (SVG) | background |
|----------|----------|--------------|------------|
| default  | `gray-8` | `gray-14`    | `white`    |
| hover    | `gray-8` | `gray-14`    | `white`    |
| focus    | `blue-4` | `gray-14`    | `white`    | (+ ring)
| invalid  | `red-4`  | `gray-14`    | `white`    |
| disabled | `gray-11`| `gray-13`    | `gray-13`  |

### Light · Checked / Indeterminate

| State    | border   | stroke (SVG) | background |
|----------|----------|--------------|------------|
| default  | `blue-4` | `gray-14`    | `blue-4`   |
| hover    | `blue-3` | `gray-14`    | `blue-3`   |
| focus    | `blue-4` | `gray-14`    | `blue-4`   | (+ ring)
| invalid  | `red-4`  | `gray-14`    | `blue-4`   |
| disabled | `gray-9` | `gray-14`    | `gray-9`   |

### Dark · Unchecked

| State    | border   | stroke (SVG) | background   |
|----------|----------|--------------|--------------|
| default  | `gray-8` | `gray-14`    | `transparent`|
| hover    | `gray-8` | `gray-14`    | `transparent`|
| focus    | `blue-4` | `gray-14`    | `transparent`| (+ ring)
| invalid  | `red-4`  | `gray-14`    | `transparent`|
| disabled | `gray-11`| `gray-13`    | `gray-3`     |

### Dark · Checked / Indeterminate

| State    | border   | stroke (SVG) | background |
|----------|----------|--------------|------------|
| default  | `blue-4` | `gray-14`    | `blue-6`   |
| hover    | `blue-3` | `gray-14`    | `blue-5`   |
| focus    | `blue-4` | `gray-14`    | `blue-6`   | (+ ring)
| invalid  | `red-4`  | `gray-14`    | `blue-6`   |
| disabled | `gray-9` | `gray-14`    | `gray-3`   |

## Icon Mapping

- **Checked**: `general/actions/checked` — all paths stroked
- **Indeterminate**: `general/actions/unselect-all` — first path hidden, last path stroked

Single `CheckboxIcon` component renders the appropriate SVG based on `state` prop.

## Behavior Rules

1. **Focus ring**: light `ring-blue-4`, dark `ring-blue-6`, `ring-2`
2. **Unchecked disabled**: `gray-13` stroke, `gray-11` border, `gray-13` bg (light) / `gray-3` bg (dark)
3. **Checked/Indeterminate disabled**: `gray-14` stroke, `gray-9` border, `gray-9` bg (light) / `gray-3` bg (dark)
4. **Checked/Indeterminate share identical tokens** — only the SVG icon differs
5. **Transition**: `background-color, border-color, color, box-shadow` 150ms ease-in-out
6. **Indicator** uses `forceMount` with visibility driven by `checked` prop

## Component API

```typescript
type CheckboxProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;
// checked: boolean | 'indeterminate' (native Radix support)
```

## Files

- Component: `apps/www/registry/components/checkbox/index.tsx`
- Registry: `apps/www/registry/components/checkbox/registry-item.json`
- Demo: `apps/www/registry/demo/components/checkbox/index.tsx`
- Tests: `apps/www/registry/components/checkbox/__tests__/checkbox.test.tsx`
- Docs: `apps/www/content/docs/components/checkbox/index.mdx` (EN + ZH)
