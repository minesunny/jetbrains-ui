# Role: Frontend UI Component Engineer

你是一名资深前端工程师，精通 React + TypeScript，擅长使用 Radix UI 构建高质量对话框组件。

## Task

实现一个完整的 Dialog 组件，遵循以下设计规范。

## Technical Requirements

### Core Stack

- React + TypeScript
- Radix UI Dialog (`@radix-ui/react-dialog`) via `radix-ui` package
- Tailwind CSS for styling

### Component API (Sub-components)

遵循 shadcn/ui 风格的复合组件接口：

```typescript
Dialog          // wraps Radix Dialog.Root
DialogTrigger   // wraps Radix Dialog.Trigger
DialogPortal    // wraps Radix Dialog.Portal
DialogOverlay   // wraps Radix Dialog.Overlay
DialogClose     // wraps Radix Dialog.Close
DialogContent   // wraps Radix Dialog.Content
DialogHeader    // div with border-bottom separator
DialogFooter    // div with border-top separator
DialogTitle     // wraps Radix Dialog.Title
DialogDescription // wraps Radix Dialog.Description
```

## Design Specifications

### DialogContent (root panel)

- **data-slot**: `"dialog-content"`
- **border-radius**: `rounded-lg` (8px)
- **border-width**: `border-[0.5px]`
- **border color (light)**: `border-gray-12`
- **border color (dark)**: `dark:border-gray-3`
- **background (light)**: `bg-gray-13`
- **background (dark)**: `dark:bg-gray-2`
- **box-shadow (light)**: `shadow-[var(--shadow-dialog)]`
- **box-shadow (dark)**: `dark:shadow-[var(--shadow-dialog-dark)]`
- **text color (light)**: `text-gray-1`
- **text color (dark)**: `dark:text-gray-12`
- **Layout**: `fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex min-h-[495px] w-full max-w-[560px] flex-col`
- **Animation**: `data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95`

### DialogOverlay

- **data-slot**: `"dialog-overlay"`
- **background**: `bg-[rgb(0_0_0_/_0.45)]`
- **backdrop**: `backdrop-blur-[1px]`
- **Layout**: `fixed inset-0 z-[var(--z-modal-backdrop)]`
- **Animation**: opacity transition, `data-[state=open]:opacity-100`

### DialogHeader

- **data-slot**: `"dialog-header"`
- **border-bottom**: `border-b border-gray-12` (light) / `dark:border-gray-3` (dark)
- **border-radius (top)**: `rounded-t-[5px]`
- **Layout**: `flex items-center justify-center px-5 py-2`

### DialogFooter

- **data-slot**: `"dialog-footer"`
- **border-top**: `border-t border-gray-12` (light) / `dark:border-gray-3` (dark)
- **border-radius (bottom)**: `rounded-b-[10px]`
- **Layout**: `flex items-center justify-end gap-3 px-5 py-4`

### DialogTitle

- **data-slot**: `"dialog-title"`
- **font**: `text-[13px] font-semibold leading-4`
- **text color (light)**: `text-gray-1`
- **text color (dark)**: `dark:text-gray-12`

### DialogDescription

- **data-slot**: `"dialog-description"`
- **text color (light)**: `text-gray-6`
- **text color (dark)**: `dark:text-gray-8`

### DialogClose

- **data-slot**: `"dialog-close"`
- **设计规则**: DialogClose 使用 Button secondary 的 active 状态样式作为默认样式，不需要 `asChild`

#### 默认样式（Button secondary active 状态）

| Property   | Light                  | Dark                     |
|------------|------------------------|--------------------------|
| border     | `border-gray-9`        | `dark:border-gray-5`     |
| background | `bg-gray-13`           | `dark:bg-gray-2`         |
| text       | `text-gray-1`          | `dark:text-gray-12`      |

- **Layout**: `inline-flex h-7 min-w-[72px] items-center justify-center gap-2 rounded px-3`
- **Font**: `font-sans text-[13px] leading-4 font-medium`
- **Transition**: `transition-[background-color,color,border-color,box-shadow] duration-150 ease-in-out`

### Shadow Tokens

```css
--shadow-dialog: 0px 8px 40px 0px rgba(0, 0, 0, 0.3);
--shadow-dialog-dark: 0px 8px 40px 0px rgba(0, 0, 0, 0.3);
```

## References

- Alert component (`apps/www/registry/components/alert/index.tsx`) for overlay/content pattern
- ContextMenu component for data-slot conventions
- Button component for action button styling
