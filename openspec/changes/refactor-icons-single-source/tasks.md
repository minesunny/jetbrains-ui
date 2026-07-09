Execution is split into two phases. **Phase 0 removes the sprite as a standalone, shippable PR (no generator, no `.svg` changes). Phase 1 is the bigger generator / `.svg` refactor.** Phase 0 must complete and validate before Phase 1 — it de-risks everything by removing the webpack sprite machinery early.

## 0. Phase 0 — Sprite standalone removal (independent PR)

Goal: kill the sprite pipeline entirely WITHOUT touching the generator or `.svg` sources.
Absorbs the old dispatcher rewrite (was 3.x), sprite-infra cleanup (was 6.2 / 6.3 / 6.6),
and the dispatcher part of (was 9.2).

- [x] **0.1** Write a manifest emitter that scans EXISTING `registry/icons/<domain>/<icon>/index.tsx` and emits `registry/icons/manifest.ts` (`iconRegistry` + `slugIndex`). Use STATIC per-pathname entries — `'database/redis': () => import('./database').then(m => m.Redis)` — never a fully-dynamic `import(path)` (that collapses to one giant context chunk and defeats per-domain splitting). Write it reusable: it becomes the generator's manifest step in task 1.9.
- [x] **0.2** Rewrite `<SVG name>` (`registry/components/svg/index.tsx`): drop `require.context` + `<use href>`; resolve via `manifest.ts` (pathname → direct; bare slug → `slugIndex`; ambiguous → throw in dev with candidates). Render via `React.lazy` + `Suspense`; derive `mode` from `next-themes`.
- [x] **0.3** Remove sprite infra: drop `svg-sprite-loader` + `svg-transform-loader` from `apps/www/package.json`; delete the SVG webpack block in `next.config.mjs` (sprite loader, the `symbolId` fn, `svg-transform-loader`, the `@registry` alias, and `fileLoaderRule.exclude`).
- [x] **0.4** Tests: update `src/__tests__/setup.ts` (the `require.context`-motivated SVG mock is now baseless — render real components, or keep a lighter mock; remove the stale comment either way); update `registry/components/svg/__tests__/svg.test.tsx` for pathname/slug resolution + unknown-throws.
- [x] **0.5** Validate Phase 0 alone: `pnpm --filter jetbrains-ui build && test`; smoke-check `<SVG name="database/redis" />` renders the component with no sprite; grep-confirm no `require.context` / `svg-sprite-loader` / `@registry` remain.

## 1. Rewrite generator — `apps/www/scripts/generate-icons.mts`

- [x] **1.1** Change input source from `registry/icons/` to a configurable external path (CLI arg, e.g. `--src=<dir>`). Decouple `SOURCE_ROOT` from `REGISTRY_ROOT`.
- [x] **1.2** Stop emitting per-domain `types.ts`. Emit a single shared `registry/icons/utils.ts` with `SvgSize`, `SvgMode`, `SvgProps`, `sizeMap`.
- [x] **1.3** Remove `svgNames` / `SvgName` generation entirely (no array, no type).
- [x] **1.4** Remove the `export { svgNames }` / `export type { SvgName, ... }` lines from both barrel emitters (`generateBarrelIndex` ~L422 and the second site ~L965).
- [x] **1.5** Add `export default ${pascalName};` to the component template.
- [x] **1.6** Change the per-icon component import from `from '../types'` to the depth-aware utils path (`'../utils'` / `'../../utils'`).
- [x] **1.7** Emit a JetBrains Apache-2.0 copyright header comment at the top of each generated `.tsx` (read from source `.svg` if present, else standard notice).
- [x] **1.8** Emit per-icon `registry-item.json` for every generated icon (absorb `generate-registry-items.mts`'s job): `{ name: "icons-<domain>-<icon>", type: "registry:ui", files: [{path, target}] }`.
- [x] **1.9** Reuse the Phase 0 manifest emitter (0.1) so the generator also (re)emits `manifest.ts` after regenerating icons.

## 2. Manifest + shared utils

- [x] **2.1** `registry/icons/utils.ts`: `SvgSize`, `SvgMode`, `SvgProps`, `sizeMap` — the 4 shared exports only.
- [x] **2.2** `registry/icons/manifest.ts`: generator re-emits via the Phase 0 emitter (0.1 / 1.9) — `iconRegistry` (per-domain dynamic imports), `type IconPathname`, `slugIndex`.
- [x] **2.3** Mark both files `// Auto-generated — DO NOT EDIT`.

## 3. (Moved to Phase 0)

The `<SVG name>` dispatcher rewrite now lives in Phase 0 (task 0.2), since sprite removal is what forces it and it can ship independently. Nothing remains in this section.

## 4. Regenerate all existing icons

- [x] **4.1** Stage current in-repo source `.svg` (PascalCase dirs: `Database/`, `General/`, `Nodes/`, `VCS/`, etc.) into the generator's external input location.
- [x] **4.2** Run the rewritten generator over all existing source `.svg`.
- [x] **4.3** Verify every `<domain>/<icon>/index.tsx` now has `export default`, imports from `../utils`, and carries the copyright header.
- [x] **4.4** Diff a sample (`database/redis`, `general/actions/add`, `vcs/commit`) against pre-refactor — confirm only import line + default export + header changed, NOT the SVG path data.

## 5. Delete `generate-registry-items.mts` + rewire scripts

- [x] **5.1** Delete `apps/www/scripts/generate-registry-items.mts`.
- [x] **5.2** Update `apps/www/package.json`: remove it from `registry:build:ci`.
- [x] **5.3** Decide & document whether `generate-icons.mts` runs in CI (regenerate from committed source) or only on-demand (source not committed → CI skips).

## 6. Delete source `.svg` + remaining dead infra (PREREQUISITE: Phase 0 done + tasks 1–5)

- [x] **6.1** Delete all `*.svg` under `registry/icons/` (~2230) — ONLY after 4.2 confirms regeneration complete and 5.1 merged.
- [x] **6.2** Delete the 11 per-domain `types.ts` and their `types.registry.json` siblings.
- [x] **6.3** `pnpm install`; `pnpm lint && pnpm build`.
- Sprite-loader / `svg-transform-loader` / `@registry` alias / webpack block removal already happened in Phase 0.3 — nothing to do here.

## 7. expui import — coexist under `database/expui/`

- [x] **7.1** Point generator input at `/Users/maien/Downloads/expui` (170 icons, camelCase, light + dark pairs).
- [x] **7.2** Namespace output as `database/expui/<kebab>/` so expui **coexists** with existing `database/<kebab>/` (no overwrite). Pathname: `database/expui/<icon>`.
- [x] **7.3** Convert camelCase → kebab folder; PascalCase component. If a component name collides with an existing `database` export, disambiguate via the subdomain path (barrel under `database/expui/index.ts`).
- [x] **7.4** Verify expui copyright header (present in source) flows through to `.tsx`.
- [x] **7.5** Add 170 entries to `manifest.ts` + `database/expui` barrel; confirm `<SVG name="database/expui/access-method" />` renders.

## 8. Gallery — install command + fuzzy search

- [x] **8.1** In `svg-icons-gallery.tsx` popup, add install-command row: `npx shadcn add icons-<domain>-<icon>` derived from pathname + copy button.
- [x] **8.2** Replace `includes()` substring filter with case-insensitive subsequence match (fuzzy): query matches if every char appears in order. Keep label matching.
- [ ] **8.3** Source icon list from `manifest.ts` (`Object.keys(iconRegistry)`) where applicable.
- [x] **8.4** Keep the `n / total` count behavior.

## 9. Validation

- [x] **9.1** `pnpm --filter jetbrains-ui build` succeeds; `public/r/registry.json` now contains per-icon `database` entries.
- [x] **9.2** Dispatcher tests already updated in Phase 0.4 — remaining: add manifest-resolution tests against the generator-emitted manifest (pathname hit, unique bare-slug hit, ambiguous-throws-with-candidates).
- [x] **9.3** Smoke-check `npx shadcn add icons-database-redis` → single self-contained `.tsx`, no `.svg` / `../types` dependency.
- [x] **9.4** Grep-confirm no remaining `svgNames`, `SvgName`, `from '../types'` across `apps/www` (sprite/`require.context` already confirmed gone in Phase 0.5).
- [x] **9.5** `pnpm registry:build`; `openspec validate refactor-icons-single-source --strict`.
