# Proposal: Fix JetBrains UI Component Bugs and Enhance Styling

We identified several UI/UX bugs and style inconsistencies across the `jetbrains-ui` registry components. This proposal outlines the fixes, testing plans, and migration steps for syncing these back to `mine-query-web`.

## Goal
To resolve critical styling bugs (such as popover shadows not rendering) and refine interactive states (hover/focus) to match JetBrains IDE aesthetics.

## Scope of Changes

### 1. Popover Shadow Fix (`Select`, `ContextMenu`, `Tooltip`)
* **Problem**: Components reference `shadow-[var(--shadow-popover)]` which is not defined in Tailwind v4 `@theme`.
* **Fix**: Map `--shadow-popover` and `--shadow-popover-dark` to `--jb-shadow-popover` and `--jb-shadow-popover-dark` in `packages/ui/src/styles/theme.css`.

### 2. Button Dark Hover Response
* **Problem**: Dark mode secondary button has identical default and hover states (`bg-gray-2`).
* **Fix**: Update `dark:hover:bg-gray-2` to `dark:hover:bg-gray-3` and add border transition color.

### 3. Input Focus Layout Shift
* **Problem**: Focus transitions from `border` (1px) to `border-2` (2px), causing surrounding layout shifts.
* **Fix**: Maintain 1px border size on focus, relying on `ring` inside class list for focus outlines.

### 4. Checkbox Dark Hover Visibility
* **Problem**: Unchecked hover state does not change border color in dark mode.
* **Fix**: Set hover border to `dark:hover:border-gray-6` instead of `gray-8`.

### 5. Tabs Style Correction
* **Problem**: Active tab has an outer border `border-blue-5` instead of a bottom line indicator.
* **Fix**: Render a bottom line indicator (`after:bg-blue-5` absolute line) for active state.

## Verification
* Unit tests using `@testing-library/react` and `vitest`.
* Add missing unit test file for `Select` component (`select.test.tsx`).
* Verify styling locally via demo site before syncing to `mine-query-web`.
