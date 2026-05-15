# JetBrains UI Typography System (Figma Source)

Source: [Int UI Kit (Community) — Typography](https://www.figma.com/design/Nvs9fjI2tnvgXIHlHtT8yz/Int-UI-Kit--Community-?node-id=7989-86302)

---

## UI Typeface: Inter (`font-sans`)

| Style | Token Name | Font Size | Line Height | Weight | Tailwind |
|-------|-----------|-----------|-------------|--------|----------|
| **H1** | `ui-h1` | 20px | 24px (1.2x) | Semibold (600) | `text-xl leading-6 font-semibold` |
| **H2** | `ui-h2` | 16px | 20px (1.25x) | Semibold (600) | `text-lg leading-5 font-semibold` |
| **Default** | `ui-default` | 13px | 16px (1.23x) | Medium (500) | `text-[13px] leading-4 font-medium` |
| **Default Semibold** | `ui-default-semibold` | 13px | 16px (1.23x) | Semibold (600) | `text-[13px] leading-4 font-semibold` |
| **Paragraph** | `ui-paragraph` | 13px | 18px (1.38x) | Medium (500) | `text-[13px] leading-[18px] font-medium` |
| **Medium** | `ui-medium` | 12px | 16px (1.33x) | Medium (500) | `text-xs leading-4 font-medium` |
| **Medium Semibold** | `ui-medium-semibold` | 12px | 16px (1.33x) | Semibold (600) | `text-xs leading-4 font-semibold` |

---

## Editor Typeface: JetBrains Mono (`font-mono`)

| Style | Token Name | Font Size | Line Height | Weight | Tailwind |
|-------|-----------|-----------|-------------|--------|----------|
| **Default** | `editor-default` | 13px | 22px (1.69x) | Medium (500) | `font-mono text-[13px] leading-[22px] font-medium` |
| **Default Bold** | `editor-default-bold` | 13px | 22px (1.69x) | Bold (700) | `font-mono text-[13px] leading-[22px] font-bold` |
| **Small** | `editor-small` | 12px | 22px (1.83x) | Medium (500) | `font-mono text-xs leading-[22px] font-medium` |
| **Small Bold** | `editor-small-bold` | 12px | 22px (1.83x) | Bold (700) | `font-mono text-xs leading-[22px] font-bold` |

---

## Common Component Mappings

| Component | Typography Token |
|-----------|-----------------|
| Button text | `ui-default` (13px / 16px / 500) |
| Dialog title | `ui-h2` (16px / 20px / 600) |
| Label text | `ui-default-semibold` (13px / 16px / 600) |
| Body / description | `ui-paragraph` (13px / 18px / 500) |
| Hint / secondary text | `ui-medium` (12px / 16px / 500) |
| Inline code | `editor-default` (13px / 22px / 500) |
