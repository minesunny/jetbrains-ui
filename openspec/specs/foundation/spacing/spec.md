# JetBrains UI Spacing System (Figma Source)

Source: [Int UI Kit (Community) — Spacing](https://www.figma.com/design/Nvs9fjI2tnvgXIHlHtT8yz/Int-UI-Kit--Community-?node-id=7990-79465)

---

Spacing (or "insets") is the empty space between components.

---

## Spacing Tokens

| Token | Value | Tailwind |
|-------|-------|----------|
| `space-0` | 0px | `gap-0` / `p-0` |
| `space-1` | 4px | `gap-1` / `p-1` |
| `space-2` | 6px | `gap-1.5` / `p-1.5` |
| `space-3` | 8px | `gap-2` / `p-2` |
| `space-4` | 12px | `gap-3` / `p-3` |
| `space-5` | 16px | `gap-4` / `p-4` |
| `space-6` | 20px | `gap-5` / `p-5` |
| `space-7` | 24px | `gap-6` / `p-6` |
| `space-8` | 32px | `gap-8` / `p-8` |
| `space-9` | 60px | `gap-[60px]` / `p-[60px]` |

---

## Inside a Form

### Vertical Spacing

| Context | Spacing | Description |
|---------|---------|-------------|
| Between groups | **20px** | Top-level separation between distinct setting groups |
| Between unrelated settings in one group | **8px** | Unrelated controls within the same group |
| Between related settings in one group | **0px** | Closely related controls (e.g., checkbox group) |

### Horizontal Spacing

| Context | Spacing | Description |
|---------|---------|-------------|
| Left inset for a dependent control or group | **16px** | Indentation for nested/hierarchical controls |
| Between settings in one line | **60px** | Horizontal gap between side-by-side settings |
| Between a setting and its addition (hint/link) | **20px** | Gap between control and its hint or link |
| Between columns | **20px** | Column gap in multi-column layouts |

---

## Inside a Control

### Control Vertical Spacing (above + below)

| Element | Top | Bottom | Description |
|---------|-----|--------|-------------|
| Labelled Input | **6px** | **6px** | Text field with label |
| Group header | **6px** | **6px** | Group title row |
| Button | **8px** | **8px** | Standalone button |
| Checkbox | **8px** | **8px** | Standalone checkbox |
| Radio Button with hint | — | **8px** | Extra space for bottom hint text |
| Label (for a group/table/list) | — | **6px** | Space below group label |

### Between Controls in a Group

| Context | Spacing |
|---------|---------|
| Between checkboxes in a group | **8px** |

---

## Inside a Control — Internal Padding

| Element | Padding | Description |
|---------|---------|-------------|
| Group header | `6px 0px` (vertical) | Row padding for group title |
| Label text | `0px 0px 6px` | Bottom padding below label text |
| Labelled Input | `gap: 6px` | Gap between label and input |

---

## Outer Insets (Dialog)

| Context | Value |
|---------|-------|
| Dialog border radius | **8px** |
| Dialog border width | **0.5px** |
| Dialog shadow | `0px 8px 40px rgba(0,0,0,0.3)` |
| Dialog footer border radius (bottom) | `0 0 10px 10px` |

---

## Tailwind Quick Reference

```css
/* Form layout */
.form-group-gap { gap: 20px; }         /* between groups */
.form-item-gap { gap: 8px; }           /* between unrelated items */
.form-related-gap { gap: 0px; }        /* between related items */

/* Horizontal */
.form-indent { padding-left: 16px; }   /* dependent control indent */
.form-column-gap { gap: 20px; }        /* between columns */

/* Control spacing */
.control-gap-y { gap: 8px; }           /* vertical gap between controls */
.control-inner { padding: 6px 0; }     /* control internal padding */
.label-gap { gap: 6px; }               /* label to input gap */
```
