# Figma Auto Layout → Tailwind CSS Conversion Rules

## Layout Direction

| Figma Auto Layout | Tailwind CSS |
|-------------------|--------------|
| Direction: Horizontal | `flex flex-row` |
| Direction: Vertical | `flex flex-col` |

## Primary Axis Alignment

| Figma Property | Horizontal Layout | Vertical Layout |
|---------------|-------------------|-----------------|
| Primary: Min (start) | `justify-start` | `justify-start` |
| Primary: Center | `justify-center` | `justify-center` |
| Primary: Max (end) | `justify-end` | `justify-end` |
| Primary: Space Between | `justify-between` | `justify-between` |

## Cross Axis Alignment

| Figma Property | Tailwind CSS |
|---------------|-------------|
| Counter: Min (start) | `items-start` |
| Counter: Center | `items-center` |
| Counter: Max (end) | `items-end` |
| Counter: Baseline | `items-baseline` |
| Counter: Stretch | `items-stretch` |

## Gap (Item Spacing)

| Figma Value | Tailwind CSS |
|------------|-------------|
| 0px | (no gap) |
| 2px | `gap-0.5` |
| 4px | `gap-1` |
| 6px | `gap-1.5` |
| 8px | `gap-2` |
| 10px | `gap-2.5` |
| 12px | `gap-3` |
| 16px | `gap-4` |
| 20px | `gap-5` |
| 24px | `gap-6` |
| 32px | `gap-8` |
| 40px | `gap-10` |
| 48px | `gap-12` |
| Custom N px | `gap-[${N}px]` |

## Padding

| Figma Property | Tailwind CSS |
|---------------|-------------|
| Padding all equal | `p-{n}` |
| Padding horizontal | `px-{n}` |
| Padding vertical | `py-{n}` |
| Padding left/right/top/bottom | `pl-{n}` / `pr-{n}` / `pt-{n}` / `pb-{n}` |
| 0px | `p-0` |
| 2px | `p-0.5` / `px-0.5` |
| 4px | `p-1` / `px-1` |
| 6px | `p-1.5` / `px-1.5` |
| 8px | `p-2` / `px-2` |
| 12px | `p-3` / `px-3` |
| 16px | `p-4` / `px-4` |
| 20px | `p-5` / `px-5` |
| 24px | `p-6` / `px-6` |
| 32px | `p-8` / `px-8` |

## Width / Height Constraints

| Figma Constraint | Tailwind CSS |
|-----------------|-------------|
| Fixed (explicit px) | `w-[${N}px]` / `h-[${N}px]` |
| Fill container | `w-full` / `h-full` |
| Hug contents | `w-fit` / `h-fit` (or omit for auto) |
| Relative (%) | `w-[${N}%]` |
| Min width | `min-w-[${N}px]` |
| Max width | `max-w-[${N}px]` |
| Fill remaining | `flex-1` |

## Flex Grow / Shrink

| Figma Property | Tailwind CSS |
|---------------|-------------|
| Grow: 0 | `grow-0` |
| Grow: 1+ | `grow` or `grow-[${N}]` |
| Shrink: 0 | `shrink-0` |
| Shrink: 1 (default) | (default, omit) |

## Wrap

| Figma Property | Tailwind CSS |
|---------------|-------------|
| Wrap: No | `flex-nowrap` (default, omit) |
| Wrap: Yes | `flex-wrap` |

## Overflow

| Figma Property | Tailwind CSS |
|---------------|-------------|
| Clip content: On | `overflow-hidden` |
| Clip content: Off | `overflow-visible` |
| Scroll: Horizontal | `overflow-x-auto` |
| Scroll: Vertical | `overflow-y-auto` |

## Shadows

Use global tokens defined in `tokens.css` → `--shadow-*`.

| Token Name | Value | Figma Effect Name | Usage |
|-----------|-------|-------------------|-------|
| `--shadow-sm` | `0 1px 2px 0 rgb(0 0 0 / 0.05)` | — | Subtle elevation |
| `--shadow-default` | `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)` | — | Default elevation |
| `--shadow-md` | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)` | — | Medium elevation |
| `--shadow-lg` | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)` | — | Large elevation |
| `--shadow-xl` | `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)` | — | Extra large elevation |
| `--shadow-dialog` | `0px 8px 40px 0px rgba(0, 0, 0, 0.3)` | `Light/Shadow/Dialog` | Alert / Dialog |
| `--shadow-tooltip` | `0px 3px 12px 0px rgba(27, 31, 38, 0.51)` | — | Tooltip |
| `--shadow-popover` | `0px 6px 20px 0px rgba(145, 145, 145, 0.47)` | — | Select / ContextMenu (Light) |
| `--shadow-popover-dark` | `0px 8px 32px 0px rgba(0, 0, 0, 0.4)` | — | Select / ContextMenu (Dark) |

### Figma → Token Mapping

| Figma Effect Name | Token | Tailwind |
|-------------------|-------|----------|
| `Light/Shadow/Dialog` | `--shadow-dialog` | `shadow-[var(--shadow-dialog)]` |
| Tooltip shadow | `--shadow-tooltip` | `shadow-[var(--shadow-tooltip)]` |
| Popover (light) | `--shadow-popover` | `shadow-[var(--shadow-popover)]` |
| Popover (dark) | `--shadow-popover-dark` | `dark:shadow-[var(--shadow-popover-dark)]` |

When encountering a Figma shadow not listed above, add it as a new token in `tokens.css` under `--shadow-{name}`.

## Position (Absolute within Auto Layout)

| Figma Property | Tailwind CSS |
|---------------|-------------|
| Position: Auto | (default flow) |
| Position: Absolute | `absolute` + `top-/left-/right-/bottom-` |

## Common Patterns

### Centered content
Figma: Horizontal + Center + Center
```tsx
<div className="flex items-center justify-center" />
```

### Icon + Label (horizontal, centered, 4px gap)
Figma: Horizontal + Center + Min + gap 4px
```tsx
<div className="flex items-center gap-1" />
```

### Card with padding and full width
Figma: Vertical + padding 16px + Fill container
```tsx
<div className="flex flex-col w-full p-4" />
```

### Two-column layout
Figma: Horizontal + Space Between + Fill container
```tsx
<div className="flex justify-between w-full" />
```

### Button content (icon + text + hug)
Figma: Horizontal + Center + gap 6px + padding 4px 12px + Hug contents
```tsx
<div className="flex items-center gap-1.5 px-3 py-1 w-fit" />
```

## Typography: Figma Text Styles → CSS Tokens

All text styles are defined as CSS custom properties in `tokens.css` under `--typography-{name}-*`.
Use these tokens instead of raw Tailwind values for consistency.

### UI Typeface: Inter (`font-sans`)

| Figma Style Name | Token Name | Font Size | Line Height | Weight | Tailwind Equivalent |
|-----------------|-----------|-----------|-------------|--------|-------------------|
| `UI/H1` | `ui-h1` | 20px | 24px | 600 | `text-xl leading-6 font-semibold` |
| `UI/H2` | `ui-h2` | 16px | 20px | 600 | `text-lg leading-5 font-semibold` |
| `UI/Default` | `ui-default` | 13px | 16px | 500 | `text-[13px] leading-4 font-medium` |
| `UI/Default semibold` | `ui-default-semibold` | 13px | 16px | 600 | `text-[13px] leading-4 font-semibold` |
| `UI/Default underlined` | `ui-default-underlined` | 13px | 16px | 500 | `text-[13px] leading-4 font-medium underline underline-offset-2` |
| `UI/Paragraph` | `ui-paragraph` | 13px | 18px | 500 | `text-[13px] leading-[18px] font-medium` |
| `UI/Medium` | `ui-medium` | 12px | 16px | 500 | `text-xs leading-4 font-medium` |
| `UI/Medium semibold` | `ui-medium-semibold` | 12px | 16px | 600 | `text-xs leading-4 font-semibold` |

### Editor Typeface: JetBrains Mono (`font-mono`)

| Figma Style Name | Token Name | Font Size | Line Height | Weight | Tailwind Equivalent |
|-----------------|-----------|-----------|-------------|--------|-------------------|
| `Editor/Default` | `editor-default` | 13px | 22px | 500 | `font-mono text-[13px] leading-[22px] font-medium` |
| `Editor/Default bold` | `editor-default-bold` | 13px | 22px | 700 | `font-mono text-[13px] leading-[22px] font-bold` |
| `Editor/Small` | `editor-small` | 12px | 22px | 500 | `font-mono text-xs leading-[22px] font-medium` |
| `Editor/Small bold` | `editor-small-bold` | 12px | 22px | 700 | `font-mono text-xs leading-[22px] font-bold` |

### Quick Reference for Spec Files

When writing component specs, reference typography by **token name**, not raw values:

```
Title    → ui-h2
Body     → ui-paragraph
Label    → ui-default
Hint     → ui-medium
Code     → editor-default
```

### Weight Mapping (Figma → Implementation)

Per JetBrains design guidance, Medium (500) in Figma renders as Regular (400) in implementation.
However, the current `tokens.css` preserves Figma weights. Follow the token values directly.

## Component Defaults

When a spec references Button, Checkbox, SVG, or other existing components, prefer their default styles:

| Component | Default Usage | Notes |
|-----------|-------------|-------|
| **Button** (primary) | `buttonVariants({ variant: 'primary' })` | 28px tall, 72px min-w, blue-4 bg |
| **Button** (secondary) | `buttonVariants({ variant: 'secondary' })` | Gray-9 border, white bg |
| **Checkbox** | `<Checkbox />` | 16x16px, auto-styled |
| **SVG** (icon) | `<SVG name="..." size="md" />` | md=16px, lg=20px, xl=24px |

Do not override these components' internal padding, border-radius, or typography unless the Figma design explicitly differs.

### XXXTrigger / XXXAction / XXXCancel Rule

| Component Pattern | Button Style | Code |
|-------------------|-------------|------|
| `*Trigger` | Primary default | `buttonVariants({ variant: 'primary' })` |
| `*Action` (confirm/submit) | Primary default | `buttonVariants({ variant: 'primary' })` |
| `*Cancel` (dismiss/cancel) | Secondary default | `buttonVariants({ variant: 'secondary' })` |

No variant/slim customization unless Figma explicitly differs. Error/destructive variants may override Action with red theme.
