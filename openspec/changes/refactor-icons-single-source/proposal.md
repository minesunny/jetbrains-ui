## Why

The icons module runs on **two parallel rendering pipelines** that share one directory:

1. **React components** (`registry/icons/<domain>/<icon>/index.tsx`) — installable, tree-shakeable; this is the actual registry product.
2. **SVG sprite** (`require.context('@registry/icons/', true, /\.svg$/)` + `svg-sprite-loader`) — used only by the `<SVG name>` dispatcher; never touches the components.

Source `.svg` (PascalCase, e.g. `database/Providers/redis/redis_Theme-Light.svg`) and generated `.tsx` (kebab, e.g. `database/redis/index.tsx`) are **mixed in the same `registry/icons/` tree**. Consequences:

- **Redundant `types.ts`** duplicated across 11 domains (1338 lines total; the first 17 lines are byte-identical everywhere). Plus an `svgNames` / `SvgName` export with zero downstream consumers.
- **`database` is structurally inconsistent** with `general` — it has **0 per-icon `registry-item.json`**, so single-icon install commands don't exist for half the icon set.
- **Two generators with split responsibilities**: `generate-icons.mts` writes `.tsx` (manual, not in CI); `generate-registry-items.mts` writes manifests (in CI, discovers icons by `.svg` presence).
- **`<SVG name>` depends on raw `.svg` presence** and a webpack sprite loader — a second source of truth that drifts from the components.

Goal: **one source of truth — the `.tsx` component.** Both `import Redis from '@/registry/icons/database/redis'` and `<SVG name="database/redis" />` must resolve to the same component.

## What Changes

- **Drop all source `.svg` from `registry/icons/`** (~2230 files). Raw `.svg` becomes an external, non-committed build input (default — see flagged decision in design.md).
- **Unify the two generators**: `generate-icons.mts` becomes the single generator — reads external `.svg`, emits `.tsx` + per-icon `registry-item.json` + barrel `index.ts` + `manifest.ts`. **Delete `generate-registry-items.mts`**. `build-registry.mts` stays unchanged (it already reads committed `registry-item.json`, not `.svg`).
- **Deduplicate shared types**: move `SvgSize` / `SvgMode` / `SvgProps` / `sizeMap` into one `registry/icons/utils.ts`. Remove `svgNames` / `SvgName` and delete all 11 per-domain `types.ts`.
- **Add `export default`** to every icon component → `import Redis from '@/registry/icons/database/redis'` works.
- **Rewrite `<SVG name>` dispatcher**: replace the sprite + `require.context` path with a generated `manifest.ts` lookup (`pathname → lazy(() => import('./<domain>'))`). Theme via `next-themes`, passed as `mode` prop (components already encapsulate Light/Dark).
- **`name` accepts pathname OR bare slug**: `database/redis` (unambiguous, recommended) or `redis` (resolves if globally unique; errors with candidates if ambiguous — `commit`, `run`, `function`, etc. collide across domains).
- **Add expui icon batch** (170 icons) under `database/expui/<icon>/` — **coexists** with existing `database/<icon>` (no overwrite; distinct pathname via subdomain).
- **Per-icon install command** in the gallery popup; per-icon `registry-item.json` now generated for all domains including `database`.
- **Gallery search**: fuzzy subsequence match (case-insensitive) over manifest pathnames.
- **Remove dead infra**: `svg-sprite-loader`, `svg-transform-loader`, the `next.config` webpack SVG block, the `require.context` call.
- **Copyright passthrough**: generator emits the JetBrains Apache-2.0 notice as a header comment in each generated `.tsx` (currently dropped; required by Apache 2.0 §4(c), especially for the expui batch which carries the notice).

## Capabilities

### Modified Capabilities
- **icons-build**: single generator pipeline (`generate-icons.mts` → `build-registry.mts`); external SVG source input; per-icon manifest emission.
- **icons-svg-dispatcher**: `<SVG name>` resolves via generated `manifest.ts` instead of sprite loader; accepts pathname + bare slug.
- **icons-gallery**: per-icon install command in popup; fuzzy case-insensitive search over pathnames.

### New Capabilities
- **icons-manifest**: generated `registry/icons/manifest.ts` — `pathname → lazy component loader` map + bare-slug reverse index.

## Impact

- **Deleted**: ~2230 `*.svg` under `registry/icons/`; `scripts/generate-registry-items.mts`; 11 per-domain `types.ts`; `svg-sprite-loader` + `svg-transform-loader` deps; the `next.config` webpack SVG block; the `require.context` call in `registry/components/svg/index.tsx`.
- **New**: `registry/icons/utils.ts`; `registry/icons/manifest.ts` (generated); `registry/icons/database/expui/*` (170 icons).
- **Modified**: `scripts/generate-icons.mts` (external input + new outputs); every `registry/icons/<domain>/<icon>/index.tsx` (regenerated: default export, `../utils` import, copyright header); `registry/components/svg/index.tsx` (dispatcher rewrite); `components/docs/icons/svg-icons-gallery.tsx` (search + install); `apps/www/package.json` (script wiring).
- **Breaking (internal)**: `<SVG name>` sprite ID format is gone (component renders inline `<svg>`). Any code depending on sprite symbol IDs must update. The public `npx shadcn add` surface improves (more icons individually installable); per-icon `command` names should be audited for shifts.
- **Flagged reversible decision**: source `.svg` not committed (Philosophy A). If reproducibility-from-clone is later required, move source to `apps/www/icons-src/` and point the generator at it — no other changes needed.
