## Context

`registry/icons/` currently contains **two interleaved trees** and **two rendering pipelines**:

```
registry/icons/database/
├── Providers/                     ← SOURCE (PascalCase, raw .svg, ~434 files)
│   └── redis/{redis_Theme-Light.svg, redis_Theme-Dark.svg}
├── DataGrip/...                   ← SOURCE
├── redis/index.tsx                ← GENERATED (kebab, .tsx only)
├── access-method/index.tsx        ← GENERATED
├── index.ts  types.ts             ← GENERATED barrel + types
└── registry-item.json             ← GENERATED category manifest
```

Pipeline A — React components (the registry product):

```
generate-icons.mts  reads  PascalCase .svg  ──▶  writes  kebab .tsx + barrel + types.ts
                                                              │
   import { Redis } from '@/registry/icons/database'  ◀──────┘   (tree-shakeable, installable)
```

Pipeline B — SVG sprite (used only by `<SVG name>`):

```
require.context('@registry/icons/', true, /\.svg$/)  ──▶  svg-sprite-loader  ──▶  global sprite
                                                                       │
   <SVG name="database/redis" />  ──▶  <svg><use href="#icon-database-redis-light"/></svg>
```

The two pipelines do not share code. `<SVG name="database/redis" />` does **not** render the `Redis` component — it references a sprite symbol.

Two generators split the work:

| script | job | wired to |
|---|---|---|
| `generate-icons.mts` (31 KB) | `.svg` → `.tsx` + barrel + `types.ts` | manual (not in CI) |
| `generate-registry-items.mts` (6 KB) | scan dirs → per-icon `registry-item.json` | `registry:build:ci` |

`build-registry.mts` reads **committed `registry-item.json`** files (line 159) and assembles `public/r/registry.json` — it does not read `.svg`.

### Verified facts driving this design

- 11 per-domain `types.ts`; first 17 lines byte-identical everywhere; 1338 lines total.
- `svgNames` / `SvgName` re-exported from every domain barrel but **imported nowhere** downstream (dead public API).
- `database` has **0** per-icon `registry-item.json` (vs `general`, which has them) → half the icon set is not individually installable.
- `generate-registry-items.mts` discovers icons by `.svg` presence (`hasSvgDirectly`, line 61) → deleting `.svg` without changing discovery empties the registry.
- `<SVG>` dispatcher resolves `name` via sprite IDs (`icon-${name.replace(/\//g,'-').toLowerCase()}-${mode}`); `name` already accepts `domain/slug` pathname form.
- Bare slugs are NOT globally unique: `commit`, `run`, `function`, `package`, `patch`, `rerun`, `test-ignored`, `data-schema` exist in ≥2 domains.
- expui download: 170 icons, camelCase names, light + dark pairs, source carries the JetBrains Apache-2.0 copyright notice (in-repo `.svg` are already stripped of it; generated `.tsx` never carried it).

## Goals / Non-Goals

**Goals**
- One source of truth: the `.tsx` component.
- `import X from '.../x'` and `<SVG name="...">` resolve to the same component.
- Single generator; delete `generate-registry-items.mts`.
- Every icon individually installable (`npx shadcn add icons-<domain>-<icon>`).
- Drop ~2230 `.svg` from the repo.

**Non-Goals**
- Runtime SVGR (`import x from './x.svg'`) — rejected: installed components would require consumer-side `@svgr/webpack` config, breaking the "copy-paste, zero-config" registry promise.
- Keep the sprite sheet — superseded by manifest-based dispatch.
- Re-touch icon path data — visual output must be byte-for-byte unchanged.
- Commit source `.svg` (default) — see Decision 3.

## Decisions

### 1. Component-first; generated `.tsx` is the single source of truth

**Decision**: The `.tsx` component is the canonical artifact. `<SVG name>` becomes a thin resolver over the same components.

**Rationale**: This is a shadcn-style registry — the component IS the product, copied into the consumer's project via `npx shadcn add`. A self-contained `.tsx` (plain JSX `<path>` elements) works in any React toolchain with zero build config. Runtime SVGR would push a build-tool dependency onto every consumer. The current generator already uses `@svgr/core` ahead-of-time, so generated `.tsx` IS SVGR's output — we are simply choosing *when* SVGR runs (ahead-of-time, committed), not whether to use it.

### 2. Unify generators; delete `generate-registry-items.mts`

**Decision**: `generate-icons.mts` becomes the single generator and additionally emits per-icon `registry-item.json` + `manifest.ts`. `generate-registry-items.mts` is deleted. `build-registry.mts` is unchanged.

**Rationale**: `build-registry.mts` already reads committed `registry-item.json` (not `.svg`), so the manifest files are the contract between generation and assembly. Today those manifests are produced by a *separate* CI script whose only other job is icon discovery (by `.svg` presence). Folding manifest emission into the icon generator removes the discovery-by-`.svg` coupling entirely and leaves one generator.

```
generate-icons.mts  ──▶  .tsx + barrel + per-icon registry-item.json + utils.ts + manifest.ts
                                                                                   │
build-registry.mts  ──reads registry-item.json──▶  public/r/registry.json  (unchanged)
```

### 3. External SVG source input; source not committed (Philosophy A) — FLAGGED

**Decision**: `generate-icons.mts` reads `.svg` from a configurable external path (CLI `--src=<dir>`). Source `.svg` is **not** committed. After generation the `.tsx` is the maintained source; future icon tweaks edit `.tsx` directly.

**Rationale**: Matches the project's "minimize files, one truth" thrust. The `.tsx` embeds all path data, so the `.svg` is functionally redundant post-generation.

**Generator operating mode (resolves the "generated vs hand-maintained" tension)**: `generate-icons.mts` processes ONLY the icons under its `--src` path — it is **not** a full-regenerate step. This makes `.tsx` safely hand-maintainable:

- **Migration / batch import** (tasks 4, 7): point `--src` at a source pack → only those icons generate. The one-time migration (task 4) runs it against all current source `.svg` by design (no hand edits exist yet to lose). The expui import (task 7) points it at the expui dir → only expui icons generate; existing `.tsx` are untouched (reinforced by Decision 8's `database/expui/` coexist namespacing).
- **Day-to-day**: `.tsx` IS the hand-maintained source. Tweaking an icon's paths/colors = edit the `.tsx` directly. The generator is not involved and will never overwrite it, because it only ever writes icons present in `--src`.

`manifest.ts` and per-icon `registry-item.json` are derived from the `.tsx` files that exist on disk (the Phase 0 emitter scans `registry/icons/**/index.tsx`), so they stay correct after any change — re-run the manifest emitter only if an icon's name/path changes or a new icon is added by hand (the generator path handles this automatically on batch import).

**Trade-off (must accept)**: a fresh `git clone` cannot regenerate icons — the generator becomes an on-demand/on-add tool, not a CI build step. Adding the expui batch works because we point `--src` at the download dir; the svgs are transient.

**Reversibility**: If reproducibility-from-clone is later needed, move source to `apps/www/icons-src/` (committed, outside `registry/`) and point `--src` there. No other changes.

### 4. Shared `utils.ts`; delete `types.ts` + `svgNames`

**Decision**: Emit one `registry/icons/utils.ts` with `SvgSize`, `SvgMode`, `SvgProps`, `sizeMap`. Delete all 11 `types.ts`. Remove `svgNames` / `SvgName` and their barrel re-exports.

**Rationale**: The 4 shared exports are duplicated 11× (1338 lines). `sizeMap` is a runtime value, so `utils.ts` is semantically more correct than `types.ts`. `svgNames` has zero downstream consumers. Per-icon imports change from `from '../types'` to a depth-aware `from '../utils'` / `from '../../utils'` (the generator already computes depth for the barrel).

### 5. `export default` per icon

**Decision**: Each generated component adds `export default ${pascalName}`.

**Rationale**: Unlocks `import Redis from '@/registry/icons/database/redis'` (the smoothest per-icon form) on top of the existing named export and barrel. One-line template change.

### 6. `<SVG name>` via generated `manifest.ts`

**Decision**: Replace the sprite pipeline with a generated `registry/icons/manifest.ts`:

```ts
// Auto-generated — DO NOT EDIT
import type { ComponentType } from 'react';
import type { SvgProps } from './utils';

export const iconRegistry = {
  // per-domain dynamic import → N icons from one domain on a page = 1 chunk
  'database/redis':  () => import('./database').then(m => m.Redis),
  'database/column': () => import('./database').then(m => m.Column),
  'vcs/commit':      () => import('./vcs').then(m => m.Commit),
} as const;

export type IconPathname = keyof typeof iconRegistry;

export const slugIndex: Record<string, IconPathname[]> = {
  redis: ['database/redis'],
  commit: ['vcs/commit', 'database/commit'],
  // ...
};
```

`<SVG name="...">` resolves via `iconRegistry` (if pathname) or `slugIndex` (if bare slug), then renders `React.lazy(resolver)` inside `Suspense`, passing `mode` from `next-themes`.

**Rationale**: Same React components as direct import; per-domain chunking approximates the sprite's bandwidth efficiency (a gallery page showing 50 database icons = 1 `database` chunk) without a second source of truth or a webpack loader.

### 7. `name` accepts pathname OR bare slug

**Decision**: One `name` prop. `database/redis` (pathname, always unambiguous, recommended) or `redis` (bare slug). Resolution:

- contains `/` → direct `iconRegistry[name]` lookup.
- else → `slugIndex[name]`; if exactly one pathname, use it; if >1, throw in dev: *"redis-style slug 'commit' is ambiguous: [vcs/commit, database/commit]. Use the pathname."*

**Rationale**: Two props (`name` / `pathname`) is more to remember for no real gain. Bare-slug convenience is preserved for the common (unique) case; ambiguity is loud, not silent.

### 8. expui coexists under `database/expui/`

**Decision**: expui's 170 icons are generated into `database/expui/<kebab>/`. They **coexist** with existing `database/<kebab>/` — no overwrite. Pathname is `database/expui/<icon>`.

**Rationale**: User decision (并存). The existing `database` icons and the expui batch come from different sources and differ in path detail (e.g. `database` icon: 4 paths existing vs 2 paths expui). Coexistence via subdomain keeps both addressable without destroying either. The `database/expui/index.ts` barrel isolates expui exports so component-name collisions (e.g. both could export `AccessMethod`) don't clash at the `database` barrel level.

### 9. Copyright passthrough

**Decision**: The generator reads the JetBrains notice from the source `.svg` XML comment (or uses the standard notice if absent) and emits it as a `//` header at the top of each generated `.tsx`.

**Rationale**: Apache 2.0 §4(c) requires retaining copyright/attribution notices in derivative works' source form. Generated `.tsx` currently drops it. The in-repo source `.svg` are already stripped, but the expui batch carries it — so this must be in place before expui import to avoid actively stripping attribution from a clearly-attributed source.

### 10. Execution order

```
Phase 0 — sprite standalone removal (independent PR; ship & verify first):
  0.1 emit manifest.ts from EXISTING .tsx (static per-pathname entries)
  0.2 rewrite <SVG name> to resolve via manifest (no require.context, no <use>)
  0.3 remove sprite webpack block + svg-sprite-loader + svg-transform-loader + @registry alias
  0.4 update tests (setup.ts mock now baseless; svg.test.tsx for new semantics)
  0.5 validate build + test + smoke render
  ↳ This removes the entire webpack sprite machinery and de-risks Phase 1.
    Nothing in Phase 0 touches the generator or any .svg.

Phase 1 — prerequisites (must precede the delete):
  ① rewrite generate-icons.mts (external src, utils.ts, no svgNames, default export,
     per-icon registry-item.json, copyright header, manifest emit)
  ② emit manifest.ts + utils.ts
  ③ rewrite <SVG name> dispatcher (manifest-based)
  ④ regenerate all existing icons from staged source .svg; diff-verify path data unchanged
  ⑤ delete generate-registry-items.mts; rewire package.json

Phase 2 — the cutover (only after Phase 1 green):
  ⑥ delete ~2230 .svg under registry/icons/; remove sprite deps + next.config block +
     require.context; delete 11 types.ts
  ⑦ expui import (point --src at download dir → database/expui/*)
  ⑧ gallery: install command + fuzzy search

Phase 3 — validation:
  ⑨ build, test, shadcn-add smoke check, grep guard, openspec validate
```

**Critical ordering constraint**: ⑥ (delete `.svg`) must happen only after ④ (regeneration verified) and ⑤ (the `.svg`-discovery script is gone). expui (⑦) can run before or after ⑥ since it reads from an external source either way.

## Open Questions

- **expui component-name collisions**: if `database/expui/access-method` exports `AccessMethod` and `database/access-method` also exports `AccessMethod`, the `database` barrel must not re-export both. Decision: expui exports live only in the `database/expui/index.ts` sub-barrel; the top-level `database/index.ts` does not re-export expui. Confirm acceptable.
- **`generate-icons.mts` in CI?** If source `.svg` is not committed (Decision 3), the generator cannot run in CI. Confirm CI flow = `build-registry.mts` only (assemble from committed `.tsx` + `registry-item.json`).
- **Legacy sprite ID references — RESOLVED (user decision: migrate)**: audited the codebase. **No inline `<use href="#icon-...">` references exist** in any component, demo, or docs page (the `icon-` grep hits are all unrelated `size="icon-sm"` button variants). The only sprite surface is:
  1. `registry/components/svg/index.tsx` — the dispatcher itself (consumed by task 3 rewrite).
  2. `src/__tests__/setup.ts` — mocks `@/registry/components/svg` specifically because `require.context` is unavailable in Vitest (see its inline comment). Once the dispatcher drops `require.context` for standard dynamic `import()`, this mock's rationale disappears — review whether to render real components in tests or keep a lighter mock (**Phase 0 task 0.4**).
  3. `registry/components/svg/__tests__/svg.test.tsx` — tests assert rendering through the mock; realign with the new pathname/slug resolution semantics (**Phase 0 task 0.4**).
