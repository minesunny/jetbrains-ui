# JetBrains UI ComboBox Component Spec (Figma Source)

Source: [Int UI Kit (Community) — ComboBox States](https://www.figma.com/design/Nvs9fjI2tnvgXIHlHtT8yz/Int-UI-Kit--Community-?node-id=7905-68143)

---

## Component Structure

```
┌─────────────────────────────────────────┐
│  Content                                │
│  ┌─────────────────────────┬──────────┐ │
│  │  Text          (fill)   │ Type (28)│ │  ← row, align center, gap 8px
│  └─────────────────────────┴──────────┘ │
│  ┌─────────────────────────────────────┐ │  ← optional (Hint / Validation)
│  │  Hint / Error text                  │ │
│  └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

---

## Outer Container

| Property | Value |
|----------|-------|
| Width | `224px` (fixed in Figma; implementation may vary) |
| Layout | Column, `justify-content: center`, `gap: 6px` |
| Padding | `6px 0px` (vertical only) |
| Vertical sizing | Hug content |

---

## Content (Input Field)

| Property | Value |
|----------|-------|
| Layout | Row, `align-items: center`, `gap: 8px` |
| Padding | `0px 0px 0px 9px` (left padding) |
| Sizing | Fill horizontal, hug vertical |
| Border radius | `4px` |

### States — Light Theme

| State | Background | Border | Border Width | Text Color |
|-------|-----------|--------|-------------|------------|
| **Default** | `#FFFFFF` (Gray 14) | `#C9CCD6` (Gray 9) | 1px | `#000000` (Gray 1) |
| **Focused** | `#FFFFFF` (Gray 14) | `#3574F0` (Blue 4) | 2px | `#000000` (Gray 1) |
| **Validated (error, unfocused)** | `#FFFFFF` (Gray 14) | `#FAD4D8` (Red 9) | 2px | `#000000` (Gray 1) |
| **Validated + Focused** | `#FFFFFF` (Gray 14) | `#DB3B4B` (Red 4) | 2px | `#000000` (Gray 1) |
| **Disabled** | `#F7F8FA` (Gray 13) | `#DFE1E5` (Gray 11) | 1px | `#A8ADBD` (Gray 8) |

### States — Dark Theme

| State | Background | Border | Border Width | Text Color |
|-------|-----------|--------|-------------|------------|
| **Default** | `#2B2D30` (Gray 2) | `#4E5157` (Gray 5) | 1px | `#DFE1E5` (Gray 12) |
| **Focused** | `#2B2D30` (Gray 2) | `#3574F0` (Blue 6) | 2px | `#DFE1E5` (Gray 12) |
| **Validated (error, unfocused)** | `#2B2D30` (Gray 2) | `#5E3838` (Red 2) | 2px | `#DFE1E5` (Gray 12) |
| **Validated + Focused** | `#2B2D30` (Gray 2) | `#DB5C5C` (Red 6) | 2px | `#DFE1E5` (Gray 12) |
| **Disabled** | `#2B2D30` (Gray 2) | `#4E5157` (Gray 5) | 1px | `#6F737A` (Gray 7) |

---

## Text Input

| Property | Value |
|----------|-------|
| Style | UI/Default |
| Font | Inter, 13px, weight 500 → 400 (Regular) |
| Line height | 16px (1.23x) |
| Sizing | Fill horizontal, hug vertical |

---

## Type Button (Dropdown Arrow)

| Property | Value |
|----------|-------|
| Size | `28 × 28px` (fixed) |
| Border radius | `3px` |
| Component | `_Input / Type` → `Type=Combobox` |
| Sizing | Fixed 28×28 |

### Combobox Type States — Light

| State | Background | Icon Color |
|-------|-----------|------------|
| Active | Default (inherit) | Gray 1 |
| Disabled | Default (inherit) | Gray 8 |

### Combobox Type States — Dark

| State | Background | Icon Color |
|-------|-----------|------------|
| Active | Default (inherit) | Gray 12 |
| Disabled | Default (inherit) | Gray 7 |

---

## Tailwind Reference — Light Theme

```css
/* Default */
.combobox-content { @apply bg-gray-14 border border-gray-9 rounded; }

/* Focused */
.combobox-content[data-state="focused"] { @apply border-blue-4 border-2; }

/* Validated (error, unfocused) */
.combobox-content[data-state="error"] { @apply border-red-9 border-2; }

/* Validated + Focused */
.combobox-content[data-state="error-focused"] { @apply border-red-4 border-2; }

/* Disabled */
.combobox-content:disabled { @apply bg-gray-13 border-gray-11 text-gray-8; }
```

---

## Tailwind Reference — Dark Theme

```css
/* Default */
.combobox-content { @apply dark:bg-gray-2 dark:border-gray-5; }

/* Focused */
.combobox-content[data-state="focused"] { @apply dark:border-blue-6; }

/* Validated (error, unfocused) */
.combobox-content[data-state="error"] { @apply dark:border-red-2; }

/* Validated + Focused */
.combobox-content[data-state="error-focused"] { @apply dark:border-red-6; }

/* Disabled */
.combobox-content:disabled { @apply dark:text-gray-7; }
```

---

## Spacing Summary

| Context | Value |
|---------|-------|
| Outer vertical padding | 6px |
| Content left padding | 9px |
| Content internal gap | 8px |
| Hint/validation gap (below content) | 6px |
| Type button size | 28 × 28px |
| Border radius | 4px |
| Type button border radius | 3px |
| Focused/error border width | 2px |
| Default border width | 1px |
