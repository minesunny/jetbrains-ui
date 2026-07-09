# Role: Frontend UI Component Engineer

你是一名资深前端工程师，精通 React + TypeScript，擅长使用 Radix UI 构建高质量组件。

## Task

实现一个完整的 ComboBox 组件，遵循以下设计规范。

## Technical Requirements

### Core Stack

- React + TypeScript
- Radix UI Select (`@radix-ui/react-select`) as base primitive
- Tailwind CSS for styling

### Component API (Exports)

```typescript
// Root - wraps Radix Select.Root
const ComboBox: typeof SelectPrimitive.Root;

// Group - wraps Radix Select.Group
const ComboBoxGroup: typeof SelectPrimitive.Group;

// Value - wraps Radix Select.Value
const ComboBoxValue: typeof SelectPrimitive.Value;

// Trigger - the button that opens the dropdown
interface ComboBoxTriggerProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
  active?: boolean;
  size?: 'md' | 'fluid';
}
const ComboBoxTrigger: React.ForwardRefExoticComponent<ComboBoxTriggerProps>;

// Content - the dropdown panel
// Extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
const ComboBoxContent: React.ForwardRefExoticComponent<...>;

// Label - group label inside dropdown
// Extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
const ComboBoxLabel: React.ForwardRefExoticComponent<...>;

// Item - selectable option row
// Extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
const ComboBoxItem: React.ForwardRefExoticComponent<...>;

// Separator - divider between groups
// Extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
const ComboBoxSeparator: React.ForwardRefExoticComponent<...>;
```

## Design Specifications

### ComboBoxTrigger

**data-slot**: `combo-box-trigger`

#### Base (same as Input)

```
inline-flex h-7 min-w-0 items-center justify-between gap-2 rounded border border-gray-9 bg-gray-14 px-2 text-default text-gray-1 shadow-none transition-[border-color,box-shadow] duration-150 ease-in-out outline-none
```

| Property   | Light          | Dark            |
|------------|----------------|-----------------|
| border     | border-gray-9  | border-gray-5   |
| background | bg-gray-14     | bg-gray-2       |
| text       | text-gray-1    | text-gray-12    |

#### Placeholder

```
[&>span[data-placeholder]]:text-gray-7
dark:[&>span[data-placeholder]]:text-gray-8
```

#### Focus (same as Input)

```
focus-visible:border-2 focus-visible:border-blue-4 focus-visible:ring-2 focus-visible:ring-blue-4 focus-visible:ring-offset-0
dark:focus-visible:border-blue-6 dark:focus-visible:ring-blue-6
```

#### Open state (same visual as focus)

```
data-[state=open]:border-2 data-[state=open]:border-blue-4 data-[state=open]:ring-2 data-[state=open]:ring-blue-4 data-[state=open]:ring-offset-0
dark:data-[state=open]:border-blue-6 dark:data-[state=open]:ring-blue-6
```

#### Validated / Error (unfocused)

```
[&[aria-invalid='true']]:border-2 [&[aria-invalid='true']]:border-red-9
dark:[&[aria-invalid='true']]:border-red-2
```

#### Validated + Focused

```
[&[aria-invalid='true']:focus-visible]:border-red-4 [&[aria-invalid='true']:focus-visible]:ring-2 [&[aria-invalid='true']:focus-visible]:ring-red-4 [&[aria-invalid='true']:focus-visible]:ring-offset-0
dark:[&[aria-invalid='true']:focus-visible]:border-red-6 dark:[&[aria-invalid='true']:focus-visible]:ring-red-6
```

#### Validated + Open

```
[&[aria-invalid='true'][data-state=open]]:border-red-4 [&[aria-invalid='true'][data-state=open]]:ring-2 [&[aria-invalid='true'][data-state=open]]:ring-red-4 [&[aria-invalid='true'][data-state=open]]:ring-offset-0
dark:[&[aria-invalid='true'][data-state=open]]:border-red-6 dark:[&[aria-invalid='true'][data-state=open]]:ring-red-6
```

#### Disabled

```
disabled:cursor-not-allowed disabled:border disabled:border-gray-13 disabled:bg-gray-13 disabled:text-gray-8
dark:disabled:border-gray-5 dark:disabled:bg-gray-2 dark:disabled:text-gray-7
disabled:[&>span[data-placeholder]]:text-gray-8
dark:disabled:[&>span[data-placeholder]]:text-gray-7
```

#### Icon (chevron-down)

- Container: `data-slot="combo-box-icon"`, `inline-flex h-full w-7 shrink-0 items-center justify-center self-stretch`
- Icon color:
  - Light: `text-gray-6`
  - Dark: `text-gray-8`
- Icon color disabled:
  - Light: `disabled:text-gray-8`
  - Dark: `dark:disabled:text-gray-7`
- Rotation on open: `[&[data-state=open]_[data-slot=combo-box-icon]]:rotate-180`
- Transition: `transition-transform duration-150` on the inner `<span>`

#### Size Variants

| Size    | Width       |
|---------|-------------|
| `'md'`  | `w-[224px]` |
| `'fluid'` (default) | `w-full` |

---

### ComboBoxContent

**data-slot**: `combo-box-content`

#### Base

```
z-[var(--z-popover)] min-w-[224px] overflow-hidden rounded-[8px] border border-gray-9 bg-white p-1 shadow-[0_4px_12px_rgba(0,0,0,0.15)]
dark:border-gray-5 dark:bg-gray-2 dark:shadow-[0_4px_12px_rgba(0,0,0,0.4)]
```

| Property   | Light                            | Dark                              |
|------------|----------------------------------|-----------------------------------|
| border     | border-gray-9                    | border-gray-5                     |
| background | bg-white                         | bg-gray-2                         |
| shadow     | shadow-[0_4px_12px_rgba(0,0,0,0.15)] | shadow-[0_4px_12px_rgba(0,0,0,0.4)] |

#### Position Offsets (popper mode)

```
data-[position=popper]:data-[side=bottom]:translate-y-1
data-[position=popper]:data-[side=top]:-translate-y-1
data-[position=popper]:data-[side=left]:-translate-x-1
data-[position=popper]:data-[side=right]:translate-x-1
```

#### Viewport (inner)

```
min-w-[224px]
```

Renders inside a `SelectPrimitive.Portal`.

---

### ComboBoxItem

**data-slot**: (no explicit data-slot, uses SelectPrimitive.Item)

#### Base

```
relative flex min-h-6 w-full cursor-pointer select-none items-center rounded-[3px] bg-transparent py-1 pl-7 pr-2 text-xs leading-4 font-normal text-gray-1 outline-none transition-[background-color,color] duration-75
```

#### Highlighted (hover/keyboard focus)

```
data-[highlighted]:bg-gray-12 data-[highlighted]:text-gray-1
dark:data-[highlighted]:bg-gray-4 dark:data-[highlighted]:text-gray-12
```

| Property        | Light           | Dark             |
|-----------------|-----------------|------------------|
| background      | bg-gray-12      | bg-gray-4        |
| text            | text-gray-1     | text-gray-12     |

#### Checked (selected)

```
data-[state=checked]:bg-blue-12 data-[state=checked]:text-blue-1
dark:data-[state=checked]:bg-blue-2 dark:data-[state=checked]:text-gray-12
```

| Property        | Light           | Dark             |
|-----------------|-----------------|------------------|
| background      | bg-blue-12      | bg-blue-2        |
| text            | text-blue-1     | text-gray-12     |

#### Disabled

```
data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:text-gray-8
dark:data-[disabled]:text-gray-7
```

#### Checkmark Indicator

- Position: `absolute left-2`, `inline-flex size-[14px] items-center justify-center`
- Color: Light `text-blue-4`, Dark `dark:text-blue-6`
- Renders via `SelectPrimitive.ItemIndicator` wrapping a checkmark SVG (`general/general/checkmark`, size `xs`)

---

### ComboBoxLabel

#### Base

```
px-2 py-1.5 text-xs leading-4 font-medium text-gray-6
dark:text-gray-8
```

| Property   | Light       | Dark        |
|------------|-------------|-------------|
| text       | text-gray-6 | text-gray-8 |

---

### ComboBoxSeparator

#### Base

```
-mx-1 my-1 h-px bg-gray-11
dark:bg-gray-5
```

| Property   | Light       | Dark       |
|------------|-------------|------------|
| background | bg-gray-11  | bg-gray-5  |
