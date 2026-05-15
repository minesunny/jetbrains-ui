# JetBrains UI Alert Component Spec (Figma Source)

Source: [Int UI Kit (Community) — Alert](https://www.figma.com/design/Nvs9fjI2tnvgXIHlHtT8yz/Int-UI-Kit--Community-?node-id=7875-49181)

---

## Alert Types

| Type | SVG Icon Name | Usage |
|------|-------------|-------|
| **Info** | `general/status/information-dialog` | Informational messages |
| **Warning** | `general/status/warning-dialog` | Caution / warning messages |
| **Error** | `general/status/error-dialog` | Error / destructive actions |
| **Question** | `general/status/question-dialog` | Confirmation / question dialogs |

Each type has Light and Dark theme variants. Icon rendered via `<SVG name={...} size="lg" />` (20x20px visual in 28x28px box).

---

## Container

| Property | Light | Dark |
|----------|-------|------|
| Background | `bg-gray-13` (`#F7F8FA`) | `dark:bg-gray-2` (`#2B2D30`) |
| Border | `border-gray-10` (`#D3D5DB`) | `dark:border-gray-4` (`#43454A`) |
| Border radius | `rounded-lg` (8px) | — |
| Shadow | `shadow-[var(--shadow-dialog)]` | — |
| Text color | `text-gray-1` | `dark:text-gray-12` |
| Padding | `p-[20px_20px_66px_60px]` (top/right/bottom/left) | — |
| Width | `data-[size=default]:w-[370px]` / `data-[size=wide]:w-[420px]` / `data-[size=auto]:w-fit data-[size=auto]:min-w-[370px]` | — |
| Layout | `flex flex-col items-stretch` | — |

**Note:** Container uses neutral gray for ALL types — no type-specific backgrounds or borders.

---

## Layout Structure

```
┌──────────────────────────────────────────┐
│  [SVG icon]                              │  ← absolute, left-5 top-5
│                                          │
│          Title (ui-h2)                   │  ← fill width
│          Body text (ui-paragraph)        │  ← fill width
│          ☐ Do not ask again             │  ← optional, Checkbox default
│                                          │
│               [Cancel]  [OK]            │  ← absolute bottom, Button defaults
└──────────────────────────────────────────┘
```

---

## Type Icon

| Property | Value |
|----------|-------|
| Component | `<SVG name={iconName} size="lg" className="absolute left-5 top-5 shrink-0" />` |
| Position | `absolute`, `top: 20px` (`top-5`), `left: 20px` (`left-5`) |

---

## Text Content

Use typography tokens — see `openspec/specs/foundation/figma-to-tailwind/` for full reference.

| Element | Token | Tailwind Classes | Color |
|---------|-------|-----------------|-------|
| **Title** | `ui-h2` | `text-lg leading-5 font-semibold` | `text-gray-1` / `dark:text-gray-12` |
| **Body text** | `ui-paragraph` | `text-[13px] leading-[18px] font-medium` | `text-gray-1` / `dark:text-gray-12` |
| **Checkbox label** | `ui-default` | `text-[13px] leading-4 font-medium` | `text-gray-1` / `dark:text-gray-12` |

> All alert text uses the same weight as the token — no weight remapping.

- Text content layout: `flex flex-col gap-2` (column, 8px gap), fill horizontal
- Title and description: `w-full`, with `max-w-[480px]` when `size="auto"`

---

## Checkbox ("Do not ask again")

Uses default `<Checkbox />` component — no style overrides needed.

| Property | Value |
|----------|-------|
| Component | `<Checkbox id={id} />` (default styles) |
| Layout wrapper | `flex items-center gap-2 py-2` |
| Label | `<label htmlFor={id}>` with `ui-default` token |
| Text | "Do not ask again" |

---

## Bottom Buttons

Uses default `<Button>` component — `buttonVariants({ variant: 'primary' })` and `buttonVariants({ variant: 'secondary' })`.

| Property | Value |
|----------|-------|
| Footer wrapper | `absolute bottom-5 left-5 right-5 flex h-10 shrink-0 items-center gap-3` |
| Actions wrapper | `ml-auto inline-flex items-center justify-end gap-3` |
| Cancel button | `<AlertCancel />` → `buttonVariants({ variant: 'secondary' })` |
| OK button | `<AlertAction />` → `buttonVariants({ variant: 'primary' })` |
| Error override | When `type="error"`, action button gets red variant classes |

**Note:** Do NOT override button border-radius, padding, or font. These come from the Button component defaults.

---

## Help Icon

| Property | Value |
|----------|-------|
| Component | `<SVG name="general/general/question-mark" />` (default `size="md"`, 16x16px) |
| Visible | When `help={true}` |

---

## Component Properties (Figma)

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `type` | enum | `'info'` | `info` / `warning` / `error` / `question` |
| `size` | enum | `'auto'` | `'default'` (370px) / `'wide'` (420px) / `'auto'` (fit) |
| `check` | boolean | `false` | Show "Do not ask again" checkbox |
| `help` | boolean | `false` | Show help icon in footer |

---

## Spacing Summary

| Context | Value | Tailwind |
|---------|-------|----------|
| Container top/right padding | 20px | `pt-5 pr-5` |
| Container bottom padding | 66px | `pb-[66px]` |
| Container left padding | 60px | `pl-[60px]` |
| Text gap | 8px | `gap-2` |
| Checkbox row gap | 8px | `gap-2` |
| Checkbox row padding | 8px 0 | `py-2` |
| Button row gap | 12px | `gap-3` |
| Icon offset | 20px | `left-5 top-5` |
| Footer offset | 20px | `bottom-5 left-5 right-5` |
