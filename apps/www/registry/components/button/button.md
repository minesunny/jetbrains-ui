# Role: Frontend UI Component Engineer

你是一名资深前端工程师，精通 React + TypeScript，擅长使用 CVA + Tailwind 构建高质量按钮组件。

## Task

实现一个完整的 Button 组件，遵循以下设计规范。

## Technical Requirements

### Core Stack

- React + TypeScript
- class-variance-authority (CVA) for variant management
- Tailwind CSS for styling
- @radix-ui/react-slot for `asChild` support

### Component API (Props)

```typescript
type ButtonProps = React.ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary';
  slim?: boolean;
  asChild?: boolean;
};
```

## Design Specifications

### Base (shared)

- **data-slot**: `"button"`
- **Layout**: `inline-flex items-center justify-center`
- **Border**: `rounded border`
- **Font**: `font-sans text-[13px] leading-4 font-medium`
- **Transition**: `transition-[background-color,color,border-color,box-shadow] duration-150 ease-in-out`
- **Focus**: `focus-visible:outline-none`
- **Disabled**: `disabled:pointer-events-none disabled:cursor-not-allowed`

### Size Variants

| Size    | Height | Min-width | Padding |
|---------|--------|-----------|---------|
| default | `h-7`  | `72px`    | `px-3`  |
| slim    | `h-6`  | `72px`    | `px-3`  |

### Primary Variant

| State    | Light                                              | Dark                                                       |
|----------|----------------------------------------------------|------------------------------------------------------------|
| Default  | `border-transparent bg-blue-4 text-gray-14`       | `dark:border-transparent dark:bg-blue-6 dark:text-gray-14` |
| Hover    | `hover:bg-blue-3 hover:text-gray-14`              | `dark:hover:bg-blue-5 dark:hover:text-gray-14`            |
| Active   | `active:bg-blue-2 active:text-gray-14`            | `dark:active:bg-blue-4 dark:active:text-gray-14`          |
| Focus    | `focus-visible:ring-2 focus-visible:ring-blue-4 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-14` | `dark:focus-visible:ring-blue-6 dark:focus-visible:ring-offset-gray-2` |
| Disabled | `disabled:bg-blue-4 disabled:text-gray-14 disabled:opacity-50` | `dark:disabled:bg-gray-5 dark:disabled:text-gray-8 dark:disabled:opacity-100` |

### Secondary Variant

| State    | Light                                              | Dark                                                       |
|----------|----------------------------------------------------|------------------------------------------------------------|
| Default  | `border-gray-9 bg-gray-14 text-gray-1`            | `dark:border-transparent dark:bg-gray-2 dark:text-gray-12` |
| Hover    | `hover:bg-gray-14 hover:text-gray-1 hover:border-gray-7` | `dark:hover:bg-gray-2 dark:hover:text-gray-12 dark:hover:border-transparent` |
| Active   | `active:bg-gray-13 active:text-gray-1 active:border-gray-9` | `dark:active:bg-gray-2 dark:active:text-gray-1 dark:active:border-gray-5` |
| Focus    | `focus-visible:bg-gray-14 focus-visible:border-blue-4 focus-visible:ring-2 focus-visible:ring-blue-4 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-14` | `dark:focus-visible:ring-blue-6 dark:focus-visible:ring-offset-gray-2` |
| Disabled | `disabled:bg-gray-12 disabled:text-gray-8 disabled:border-transparent` | `dark:disabled:bg-gray-5 dark:disabled:text-gray-8 dark:disabled:border-transparent` |
