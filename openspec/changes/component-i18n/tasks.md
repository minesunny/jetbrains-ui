# Tasks: component-i18n

## 1. Locale Infrastructure

- [x] **1.1** Create `apps/www/registry/locales/en.ts` — default English locale with all 25 keys organized by component namespace
- [x] **1.2** Create `apps/www/registry/locales/zh-CN.ts` — Chinese (Simplified) locale
- [x] **1.3** Create `apps/www/registry/locales/types.ts` — `JetBrainsLocaleMessages` type (recursive to allow deep partial overrides), locale key types
- [x] **1.4** Create `apps/www/registry/locales/index.ts` — barrel export, built-in locale map, `deepMerge` utility for custom overrides

## 2. Provider & Hook

- [x] **2.1** Create `apps/www/registry/components/provider/index.tsx` — `JetBrainsUIProvider` with React Context, accepts `locale` and `messages` props
- [x] **2.2** Create `apps/www/registry/components/provider/use-locale.ts` — `useJetBrainsLocale()` hook returning `{ locale, t }` where `t(key)` resolves the translation
- [x] **2.3** Register provider as a registry item with `registry-item.json`

## 3. Migrate Components

- [x] **3.1** Migrate `dynamic-tabs` — replace 9 hardcoded strings with `t()` calls
- [x] **3.2** Migrate `dynamic-tree` — replace 7 hardcoded strings with `t()` calls
- [x] **3.3** Migrate `tree` — replace 2 hardcoded aria-labels with `t()` calls
- [x] **3.4** Migrate `alert` — replace 1 hardcoded label with `t()` call
- [x] **3.5** Migrate `code-editor` — replace 3 hardcoded status bar strings with `t()` calls (with param interpolation for Ln/Col)

## 4. Tests

- [x] **4.1** Test `useJetBrainsLocale` hook — default locale, custom locale, key override, deep merge, missing key fallback
- [x] **4.2** Test `JetBrainsUIProvider` — context provides correct locale, `messages` prop merges correctly
- [x] **4.3** Snapshot tests for built-in locales (`en`, `zh-CN`) to catch missing keys

## 5. Docs & Registry

- [x] **5.1** Create demo for `JetBrainsUIProvider` — toggle between en/zh-CN, show custom override
- [x] **5.2** Run `pnpm registry:build` to update registry artifacts
