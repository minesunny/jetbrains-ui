# Role: Frontend UI Component Engineer

你是一名资深前端工程师，精通 React + TypeScript，擅长使用 Radix UI 构建高质量组件。

## Task

实现一个完整的 ContextMenu 组件，遵循以下设计规范。

## Technical Requirements

### Core Stack

- React + TypeScript
- Radix UI ContextMenu primitive (`radix-ui`)
- Tailwind CSS for styling

### Component API

ContextMenu is a compound component. All sub-components are derived from `ContextMenu` in `radix-ui`.

```typescript
// Root — wraps ContextMenuPrimitive.Root
function ContextMenu(props: React.ComponentProps<typeof ContextMenuPrimitive.Root>): JSX.Element

// Trigger — right-click target area
function ContextMenuTrigger(props: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>): JSX.Element

// Portal — renders content in a portal
function ContextMenuPortal(props: React.ComponentProps<typeof ContextMenuPrimitive.Portal>): JSX.Element

// Content — the dropdown panel
function ContextMenuContent(props: React.ComponentProps<typeof ContextMenuPrimitive.Content>): JSX.Element

// Group — logical grouping container
function ContextMenuGroup(props: React.ComponentProps<typeof ContextMenuPrimitive.Group>): JSX.Element

// Item — a menu item
function ContextMenuItem(
  props: React.ComponentProps<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
    icon?: string;         // SVG icon name from registry
    variant?: 'default' | 'destructive';
  }
): JSX.Element

// CheckboxItem — a checkable menu item
function ContextMenuCheckboxItem(props: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>): JSX.Element

// RadioGroup — container for radio items
function ContextMenuRadioGroup(props: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>): JSX.Element

// RadioItem — a mutually-exclusive selectable menu item
function ContextMenuRadioItem(props: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>): JSX.Element

// Label — non-interactive section label
function ContextMenuLabel(
  props: React.ComponentProps<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
  }
): JSX.Element

// Separator — horizontal divider line
function ContextMenuSeparator(props: React.ComponentProps<typeof ContextMenuPrimitive.Separator>): JSX.Element

// Shortcut — right-aligned keyboard shortcut text
function ContextMenuShortcut(props: React.ComponentProps<'span'>): JSX.Element

// Sub — root for a nested submenu
function ContextMenuSub(props: React.ComponentProps<typeof ContextMenuPrimitive.Sub>): JSX.Element

// SubTrigger — item that opens a submenu
function ContextMenuSubTrigger(
  props: React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
): JSX.Element

// SubContent — the nested submenu panel
function ContextMenuSubContent(props: React.ComponentProps<typeof ContextMenuPrimitive.SubContent>): JSX.Element
```

## Design Specifications

### ContextMenuTrigger

When `asChild=false` (default), renders as a styled trigger button. When `asChild=true`, the child element is used as the trigger and no default styling is applied.

**Base (asChild=false):**
- Layout: `inline-flex h-10 min-w-0 items-center justify-between gap-2`
- Shape: `rounded border`
- Colors: `border-gray-9 bg-gray-14 text-gray-1`
- Padding: `py-1.5 pl-[9px] pr-0`
- Typography: `text-default`
- Shadow: `shadow-none`
- Transition: `transition-[border-color,box-shadow] duration-150 ease-in-out outline-none`

**Focus-visible:**
- `border-2 border-blue-4 ring-2 ring-blue-4 ring-offset-0`

**Open (`data-[state=open]`):**
- Same as focus: `border-2 border-blue-4 ring-2 ring-blue-4 ring-offset-0`

**Disabled:**
- `cursor-not-allowed border border-gray-13 bg-gray-13 text-gray-8`

**Dark mode:**
- Base: `border-gray-5 bg-gray-2 text-gray-12`
- Placeholder: `[&>span[data-placeholder]]:text-gray-8`
- Focus-visible: `border-blue-6 ring-blue-6`
- Open: `border-blue-6 ring-blue-6`
- Disabled: `border-gray-5 bg-gray-2 text-gray-7`

### ContextMenuContent

**Layout & sizing:**
- `w-[293px] overflow-hidden p-1`

**Shape & border:**
- `rounded-[8px] border-[0.5px] border-gray-9`

**Colors:**
- `bg-gray-14`

**Shadow:**
- `shadow-[0_6px_20px_0px_#91919178]`

**Z-index:**
- `z-[var(--z-popover)]`

**Dark mode:**
- `border-gray-3 bg-gray-2 shadow-[0_8px_32px_0px_#00000066]`

**Animation:**
- `data-[state=open]:animate-in data-[state=closed]:animate-out`
- `data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0`
- `data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95`
- Side-specific origin and slide: `data-[side=bottom]:origin-top data-[side=bottom]:slide-in-from-top-2` (and corresponding left/right/top variants)

### ContextMenuItem

**Layout & sizing:**
- `relative flex h-6 w-full items-center gap-2`

**Shape & padding:**
- `rounded px-2 py-1`

**Typography:**
- `text-default text-gray-1`

**Interaction:**
- `cursor-default select-none outline-none`
- Transition: `transition-[background-color] duration-75`

**Highlighted (`data-[highlighted]`) / Open (`data-[state=open]`):**
- `bg-blue-11 text-gray-1`

**Disabled:**
- `pointer-events-none cursor-not-allowed text-gray-8`

**With inset (`data-[inset]`):**
- `pl-7`

**Destructive variant (`data-[variant=destructive]`):**
- `text-red-3`
- Highlighted: `bg-red-10`

**Icon:**
- Renders an `<SVG>` in a `size-4` container when `icon` prop is provided
- Empty `size-4` spacer when no icon (keeps alignment consistent)

**Dark mode:**
- `text-gray-12`
- Highlighted/Open: `bg-blue-2 text-gray-12`
- Disabled: `text-gray-7`
- Destructive: `text-red-7`

### ContextMenuCheckboxItem

**Layout & sizing:**
- `relative flex h-6 w-full items-center gap-2`

**Shape & padding:**
- `rounded py-1 pl-7 pr-2`

**Typography & colors (same as Item):**
- `text-default text-gray-1`

**States — same highlight/open/disabled logic as Item:**
- Highlighted: `bg-blue-11 text-gray-1`
- Checked (`data-[state=checked]`): `bg-blue-12 text-blue-1`
- Disabled: `pointer-events-none cursor-not-allowed text-gray-8`

**Check indicator:**
- Absolutely positioned at `left-2`, `size-[14px]` container
- Uses `MenuCheckIcon` (checkmark SVG, `size-3`)
- Color: `text-blue-4` / dark: `text-blue-6`

**Dark mode:**
- Base: `text-gray-12`
- Highlighted/Open: `bg-blue-2 text-gray-12`
- Checked: `bg-blue-2 text-gray-12`
- Disabled: `text-gray-7`

### ContextMenuRadioItem

**Layout & sizing:**
- Same as CheckboxItem: `relative flex h-6 w-full items-center gap-2 rounded py-1 pl-7 pr-2`

**States — identical to CheckboxItem** (highlight, open, checked, disabled)

**Radio indicator:**
- Absolutely positioned at `left-2`, `size-[14px]` container
- Renders a `size-2 rounded-full` dot with `bg-current`
- Color: `text-blue-4` / dark: `text-blue-6`

### ContextMenuSubTrigger

**Layout & sizing:**
- `relative flex h-6 w-full items-center gap-2`

**Shape & padding:**
- `rounded pl-2 py-1 pr-1.5`

**Typography & base colors:**
- Same as Item: `text-default text-gray-1`

**States:**
- Highlighted/Open: `bg-blue-11 text-gray-1`
- Disabled: `pointer-events-none text-gray-8`

**With inset (`data-[inset]`):**
- `pl-7`

**Chevron icon:**
- `MenuChevronRightIcon` at `ml-auto size-[14px]`
- Color: `text-blue-4` / dark: `text-blue-6`

**Dark mode:**
- Base: `text-gray-12`
- Highlighted/Open: `bg-blue-2 text-gray-12`
- Disabled: `text-gray-7`

### ContextMenuSubContent

**Layout & sizing:**
- `min-w-[196px] overflow-hidden p-1`

**Shape, border, shadow, animation:**
- Identical to `ContextMenuContent` (`rounded-[8px]`, `border-[0.5px]`, same shadow, same animation classes)

**Default `sideOffset`:** `8`

### ContextMenuSeparator

- `h-px -mx-1 my-1`
- Light: `bg-gray-12`
- Dark: `bg-gray-3`

### ContextMenuLabel

**Padding & typography:**
- `px-2 py-1.5 text-xs leading-4 font-medium`
- Color: `text-gray-6` / dark: `text-gray-8`

**With inset (`data-[inset]`):**
- `pl-7`

### ContextMenuShortcut

**Layout:**
- `ml-auto text-xs tracking-[var(--tracking-wide)]`

**Color:**
- `text-gray-6` / dark: `text-gray-8`

## Internal Helper Components

### MenuCheckIcon

- SVG viewBox `0 0 16 16`, stroke-based checkmark
- Path: `m3.5 8 3 3 6-6`, `strokeWidth="1.75"`, round caps/joins
- `aria-hidden="true"`

### MenuChevronRightIcon

- SVG viewBox `0 0 16 16`, stroke-based chevron
- Path: `M6 4.5 9.5 8 6 11.5`, `strokeWidth="1.5"`, round caps/joins
- `aria-hidden="true"`
