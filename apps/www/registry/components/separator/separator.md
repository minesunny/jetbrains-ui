# Role: Frontend UI Component Engineer

你是一名资深前端工程师，精通 React + TypeScript，擅长使用 Radix UI 构建高质量组件。

## Task

实现一个完整的 Separator 组件，遵循以下设计规范。

## Technical Requirements

### Core Stack

- React + TypeScript
- Radix UI Separator as base (`radix-ui`)
- Tailwind CSS for styling

### Component API (Props)

```typescript
interface SeparatorProps extends React.ComponentProps<typeof SeparatorPrimitive.Root> {
  orientation?: 'horizontal' | 'vertical';
  decorative?: boolean;
}
```

Defaults:
- `orientation` = `'horizontal'`
- `decorative` = `true`

## Design Specifications

### Light Theme

| Property       | Horizontal           | Vertical             |
| -------------- | -------------------- | -------------------- |
| Background     | `bg-gray-12` (#ebecf0) | `bg-gray-12` (#ebecf0) |
| Size           | `h-px w-full`        | `h-full w-px`        |

### Dark Theme

| Property       | Horizontal           | Vertical             |
| -------------- | -------------------- | -------------------- |
| Background     | `dark:bg-gray-3` (#393b40) | `dark:bg-gray-3` (#393b40) |
| Size           | `h-px w-full`        | `h-full w-px`        |

### Layout

- `shrink-0` to prevent flex shrinking in flex/grid containers.

### Figma Source

- Light theme border: **Light / Gray / Gray 12**
- Dark theme border: **Dark / Gray / Gray 3**

### Accessibility

- `data-slot="separator-root"` on the root element.
- `decorative` defaults to `true` so screen readers announce it as decorative.
- Radix handles `role="separator"` and `aria-orientation` automatically.

## Implementation Notes

- Extend `React.ComponentProps<typeof SeparatorPrimitive.Root>` for full Radix compatibility.
- Inline all className strings in `cn()` — no named constants.
- No component-specific CSS variables or `index.css` needed.
- Use `orientation` to switch between `h-px w-full` (horizontal) and `h-full w-px` (vertical).
