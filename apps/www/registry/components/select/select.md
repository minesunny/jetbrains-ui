# Role: Frontend UI Component Engineer

你是一名资深前端工程师，精通 React + TypeScript，擅长使用 Radix UI 构建高质量组件。

## Task

实现一个完整的 Select 组件，遵循以下设计规范。

## Technical Requirements

### Core Stack

- React + TypeScript
- @radix-ui/react-select as base
- Tailwind CSS for styling

### Component API (Sub-components)

```typescript
import * as SelectPrimitive from '@radix-ui/react-select';

// Root: re-exports Radix Root
const Select = SelectPrimitive.Root;

// Group: re-exports Radix Group
const SelectGroup = SelectPrimitive.Group;

// Value: re-exports Radix Value
const SelectValue = SelectPrimitive.Value;

// Trigger
type SelectTriggerSize = 'fluid' | 'md';

interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
  active?: boolean;
  size?: SelectTriggerSize;
}

// Content
interface SelectContentProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> {}

// Item
interface SelectItemProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {}

// Label
interface SelectLabelProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label> {}

// Separator
interface SelectSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> {}
```

## Design Specifications

### SelectTrigger

与 Input / ComboBox Trigger 保持一致的样式风格。

#### Base

- `inline-flex h-10 min-w-0 items-center justify-between gap-2 rounded border border-gray-9 bg-gray-14 py-1.5 pl-[9px] pr-0 text-default text-gray-1 shadow-none transition-[border-color,box-shadow] duration-150 ease-in-out outline-none`
- Dark: `dark:border-gray-5 dark:bg-gray-2 dark:text-gray-12`

#### Placeholder text

- `[&>span[data-placeholder]]:text-gray-7`
- Dark: `dark:[&>span[data-placeholder]]:text-gray-8`

#### Focus

- `focus-visible:border-2 focus-visible:border-blue-4 focus-visible:ring-2 focus-visible:ring-blue-4 focus-visible:ring-offset-0`
- Dark: `dark:focus-visible:border-blue-6 dark:focus-visible:ring-blue-6`

#### Open (data-state=open)

- `data-[state=open]:border-2 data-[state=open]:border-blue-4 data-[state=open]:ring-2 data-[state=open]:ring-blue-4 data-[state=open]:ring-offset-0`
- Dark: `dark:data-[state=open]:border-blue-6 dark:data-[state=open]:ring-blue-6`

#### Validated / Error (aria-invalid=true)

- Border: `border-2 border-red-9`
- Dark: `dark:border-red-2`
- Error + Focus: `border-red-4 ring-2 ring-red-4 ring-offset-0`
- Dark error + focus: `dark:border-red-6 dark:ring-red-6`
- Error + Open: same as error + focus

#### Disabled

- `disabled:cursor-not-allowed disabled:border disabled:border-gray-13 disabled:bg-gray-13 disabled:text-gray-8`
- Dark: `dark:disabled:border-gray-5 dark:disabled:bg-gray-2 dark:disabled:text-gray-7`
- Placeholder in disabled: `disabled:[&>span[data-placeholder]]:text-gray-8 dark:disabled:[&>span[data-placeholder]]:text-gray-7`

#### Icon (chevron-down)

- Container: `inline-flex h-full w-7 shrink-0 items-center justify-center self-stretch`
- Inner span with `transition-transform duration-150` for rotation
- Color: `text-gray-6` / Dark: `text-gray-8`
- Disabled icon: `text-gray-8` / Dark: `text-gray-7`
- Open rotation: `[&[data-state=open]_[data-slot=select-icon]]:rotate-180`
- SVG name: `general/general/chevron-down`, size `md`

#### Size Variants

| Size   | Width      |
| ------ | ---------- |
| `md`   | `w-[224px]` |
| `fluid`| `w-full`   |

Default: `fluid`

---

### SelectContent

#### Base

- `w-[164px] overflow-hidden rounded-[8px] border-[0.5px] border-gray-9 bg-gray-14 p-0 shadow-[0_6px_20px_0px_#91919178]`
- Dark: `dark:border-gray-3 dark:bg-gray-2 dark:shadow-[0_8px_32px_0px_#00000066]`
- `z-[var(--z-popover)]`

#### Position offsets (popper mode)

- Bottom: `data-[position=popper]:data-[side=bottom]:translate-y-1`
- Top: `data-[position=popper]:data-[side=top]:-translate-y-1`
- Left: `data-[position=popper]:data-[side=left]:-translate-x-1`
- Right: `data-[position=popper]:data-[side=right]:translate-x-1`

#### Viewport

- Inner viewport: `p-1` (SelectPrimitive.Viewport)

---

### SelectItem

#### Base

- `relative flex h-6 w-full cursor-pointer select-none items-center rounded py-0 pl-2 pr-2 text-default text-gray-1 outline-none`
- Transition: `transition-[background-color] duration-75`
- Dark: `dark:text-gray-12`

#### Hover / Highlighted

- `data-[highlighted]:bg-blue-11`
- Dark: `dark:data-[highlighted]:bg-blue-2`

#### Checked

- `data-[state=checked]:font-medium`
- Checked indicator: absolute positioned `right-2`, `size-3.5`, using SVG `general/general/checkmark` size `xs`

#### Disabled

- `data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:text-gray-8`
- Dark: `dark:data-[disabled]:text-gray-7`

---

### SelectLabel

- `px-2 py-1.5 text-xs leading-4 font-medium text-gray-6`
- Dark: `dark:text-gray-8`

---

### SelectSeparator

- `-mx-1 my-1 h-px bg-gray-12`
- Dark: `dark:bg-gray-3`
- Matches the Separator component styling

---

## Figma Reference Values

| Token / Property     | Light         | Dark          | Usage                     |
| -------------------- | ------------- | ------------- | ------------------------- |
| `gray-1`             | #1E1F22       | #DFE1E5       | Trigger text, Item text   |
| `gray-2`             | #2B2D30       | -             | Dark bg (trigger, content)|
| `gray-3`             | -             | #393B40       | Dark border, separator    |
| `gray-5`             | -             | #5A5D63       | Dark border (trigger)     |
| `gray-6`             | -             | #787A7D       | Label, icon               |
| `gray-7`             | -             | #9B9EA3       | Placeholder, disabled     |
| `gray-8`             | -             | #B8B9BC       | Placeholder dark, disabled|
| `gray-9`             | #C9CBD1       | -             | Light border              |
| `gray-12`            | -             | #6A6D73       | Light separator           |
| `gray-13`            | #E8EAED       | -             | Disabled bg (light)       |
| `gray-14`            | #FFFFFF       | -             | Light bg (trigger, content)|
| `blue-2`             | -             | #2E436E       | Dark item highlight bg    |
| `blue-4`             | #467FF2       | -             | Focus ring/border (light) |
| `blue-6`             | -             | #5E97FF       | Focus ring/border (dark)  |
| `blue-11`            | #EDF3FF       | -             | Light item highlight bg   |
| `red-2`             | -             | #7E2A2A       | Dark error border         |
| `red-4`             | #F4474A       | -             | Light error focus ring    |
| `red-6`             | -             | #FB777A       | Dark error focus ring     |
| `red-9`             | #D52A2A       | -             | Light error border        |

## Accessibility

- Keyboard navigation (Arrow keys, Enter, Escape) handled by Radix
- `aria-invalid` support for validated/error states
- `aria-disabled` via Radix disabled prop
- Focus ring visible on keyboard focus only (`focus-visible`)
- Checked items announced via Radix `data-state` attribute
