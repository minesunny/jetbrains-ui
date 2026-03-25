# Icons Directory Guidelines

## Scope

These rules apply to `apps/www/registry/icons/**`.

## Current Architecture

- `apps/www/registry/icons/**` stores source icon assets and generated collection exports.
- Leaf icon directories are SVG-first. A normal leaf directory contains:
  - `<icon-name>_light.svg`
  - `<icon-name>_dark.svg`
  - `registry-item.json`
- Top-level and nested collection directories keep generated `index.ts` files that export `createSpriteIcon(...)` wrappers.
- Top-level sprite bundles are generated into:
  - `apps/www/public/icons/breakpoints.svg`
  - `apps/www/public/icons/build.svg`
  - `apps/www/public/icons/database.svg`
  - `apps/www/public/icons/debugger.svg`
  - `apps/www/public/icons/editor-icons.svg`
  - `apps/www/public/icons/file-types.svg`
  - `apps/www/public/icons/general.svg`
  - `apps/www/public/icons/nodes.svg`
  - `apps/www/public/icons/plugins.svg`
  - `apps/www/public/icons/run.svg`
  - `apps/www/public/icons/run-configurations.svg`
  - `apps/www/public/icons/terminal.svg`
  - `apps/www/public/icons/vcs.svg`
- Runtime usage lives in `apps/www/registry/components/icons`, not in this directory.

## Source Of Truth

- Treat the per-icon SVG pairs under `apps/www/registry/icons/**` as the source of truth.
- Do not treat `public/icons/*.svg` as manually maintained source files. They are generated sprite outputs.
- Do not manually recreate removed leaf `index.tsx` files. The current system intentionally does not keep per-leaf TSX components.
- Do not reintroduce the removed root runtime files under `apps/www/registry/icons` such as:
  - `icon-registry.ts`
  - `icon.ts`
  - `runtime.registry.json`
  - `sprite-icon.ts`
  - `types.ts`

## Directory Conventions

- Top-level category directories keep:
  - `index.ts`
  - `types.ts`
  - `registry-item.json`
  - `types.registry.json`
- Nested collection packs such as `general/actions` or `plugins/ruby` keep:
  - `index.ts`
  - `registry-item.json`
- Leaf icon directories keep:
  - `<icon-name>_light.svg`
  - `<icon-name>_dark.svg`
  - `registry-item.json`
- Naming:
  - folders and SVG files use `kebab-case`
  - generated React exports use `PascalCase`

## Runtime Boundary

- `apps/www/registry/icons/**` should not define the shared sprite runtime.
- Shared runtime helpers belong in:
  - `apps/www/registry/components/icons/icon/index.tsx`
  - `apps/www/registry/components/icons/categories.tsx`
  - `apps/www/registry/components/icons/index.ts`
- If a change is about `<SVG />`, category wrappers, theme resolution, or sprite href construction, update `registry/components/icons`, not this directory.

## Registry Rules

- Keep every `registry-item.json`. Do not delete them as cleanup.
- Leaf `registry-item.json` files should continue pointing consumers to the collection `index.ts` plus the corresponding top-level sprite file.
- Keep generated `index.ts`, `types.ts`, `types.registry.json`, and `registry-item.json` files in sync with the generator output.

## Generation Workflow

1. Add or update icon SVG pairs under the relevant leaf directory in `apps/www/registry/icons/**`.
2. Run:
   - `pnpm --filter jetbrains-ui registry:build`
3. This regenerates:
   - `apps/www/public/icons/*.svg`
   - collection `index.ts` files
   - `types.ts`
   - `types.registry.json`
   - `registry-item.json`
   - registry output under `apps/www/public/r/**`
4. Validate before commit:
   - `pnpm --filter jetbrains-ui test`
   - `pnpm --filter jetbrains-ui build`

## Generator Notes

- The generator is `apps/www/scripts/build-icon-sprites.mts`.
- It removes stale leaf `index.tsx` and `index.ts` files inside icon directories on purpose.
- It also removes stale root runtime files under `apps/www/registry/icons`.
- If the generator output looks wrong, fix the generator or the SVG inputs instead of patching generated files by hand.

## Guardrails

- Do not rename icon directories casually. Registry names, generated exports, and docs depend on path stability.
- Do not add a new maintenance path that bypasses `registry:build`.
- Preserve the light/dark pair naming contract: `<icon-name>_light.svg` and `<icon-name>_dark.svg`.
- When adding a new top-level category, update both the generator output expectations and the runtime allowlist in `apps/www/registry/components/icons/icon/index.tsx`.
