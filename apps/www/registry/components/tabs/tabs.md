# Tabs

Built with Radix UI `Tabs` primitives.

## Sub-components

- `Tabs` — Root (Radix `TabsPrimitive.Root`)
- `TabsList` — Trigger container
- `TabsTrigger` — Individual tab button
- `TabsContent` — Content panel for each tab

## TabsList

| Property | Value |
|----------|-------|
| Height | `h-8` (32px) |
| Padding | `p-1` (4px) |
| Gap | `gap-1` (4px) |
| Layout | `inline-flex items-center` |
| Light bg | `bg-gray-12` |
| Dark bg | `dark:bg-gray-2` |

## TabsTrigger

### Base styles

| Property | Value |
|----------|-------|
| Padding | `px-2.5 py-1` |
| Border radius | `rounded-md` (6px) |
| Font | `text-default` (13px) |
| Line height | `leading-4` (16px) |
| Font weight | `font-normal` (400) |

### Color states

| State | Property | Light | Dark |
|-------|----------|-------|------|
| **Default** | opacity | 0.67 | 0.67 |
| | text | `text-gray-1` | `text-gray-12` |
| | bg | transparent | transparent |
| **Hover** | opacity | 1 | 1 |
| | text | `text-gray-1` | `text-gray-12` |
| | bg | `bg-gray-12` | `bg-gray-3` |
| **Active** | opacity | 1 | 1 |
| | text | `text-gray-1` | `text-gray-12` |
| | bg | `bg-blue-12` | `bg-blue-2` |
| | border | `border-blue-5` | `border-blue-5` |
| **Disabled** | opacity | 0.5 | 0.5 |
| **Focus** | ring | `ring-blue-4` | `ring-blue-6` |

### Transition

`transition-[background-color,color,box-shadow,opacity] duration-100 ease-in-out`

## TabsContent

| Property | Value |
|----------|-------|
| Margin top | `mt-2` (8px) |
| Border radius | `rounded-[4px]` |
| Border | `border-gray-8` / `dark:border-gray-6` |
| Light bg | `bg-white` |
| Dark bg | `dark:bg-gray-3` |
| Padding | `p-3` (12px) |
| Font | `text-xs font-normal` |
| Light text | `text-gray-1` |
| Dark text | `dark:text-gray-12` |
| Focus ring | `ring-blue-4` / `dark:ring-blue-6` |
