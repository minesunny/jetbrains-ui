# Feature: Component-Level Internationalization (i18n)

## Summary

Add a `JetBrainsUIProvider` with React Context to provide locale translations for component-internal user-visible text. Built-in `en` and `zh-CN` locales, zero external i18n dependency. Developers can override any translation key or add entirely new locales.

## Motivation

25 hardcoded English strings exist across 5 components (dynamic-tabs, dynamic-tree, tree, alert, code-editor). These include context menu labels, aria-labels, status bar text, and checkbox labels. Without i18n, non-English users see a mixed-language UI.

Developers using this component library may already have their own i18n solution (react-intl, i18next, next-intl), or they may prefer to use the built-in system directly — including extending it with their own translations.

## Proposed Solution

React Context + Provider pattern (方案 B):

```
JetBrainsUIProvider (locale + custom translations)
  └── useJetBrainsLocale() → t(key) function
```

1. **`JetBrainsUIProvider`** — wraps the app tree, accepts `locale` (string) and optional `messages` (partial override)
2. **`useJetBrainsLocale()`** — hook returns a `t(key)` translation function
3. **Built-in locales** — `en` (default) and `zh-CN` as JSON-like TypeScript objects
4. **Custom locale support** — developers can:
   - Override specific keys in any locale via the `messages` prop
   - Add entirely new locale codes by providing a full message map
   - Use the built-in system as their app's i18n if they don't want a third-party library

### Affected components (25 strings)

| Component | Strings | Categories |
|-----------|---------|------------|
| dynamic-tabs | 9 | aria-labels, context menu items |
| dynamic-tree | 7 | aria-labels, context menu items |
| tree | 2 | aria-label |
| alert | 1 | checkbox label |
| code-editor | 3 | status bar text, defaults |

## Alternatives Considered

1. **Props-based (方案 A)** — each component accepts a `labels` prop. Rejected: prop drilling, inconsistent API surface, no central control.
2. **External i18n adapter** — provide a bridge to react-intl/i18next. Rejected: adds coupling, most developers just need simple key-value lookups. Our Context approach is compatible — developers can bridge themselves by passing i18next.t as the override.
3. **CSS content property** — use CSS variables for text. Rejected: inaccessible, no screen reader support.

## Impact

- [x] New public API: `JetBrainsUIProvider`, `useJetBrainsLocale`, locale type exports
- [ ] No breaking changes — all existing components work without the provider (falls back to `en`)
- [ ] No database migrations
- [ ] No API changes
