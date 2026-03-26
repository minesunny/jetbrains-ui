# Icons Directory Guidelines

## Scope
These rules apply to `apps/www/registry/icons/**`.

## Source of Truth
- Treat SVG files under `public/icons/**` as the single source of truth.
- Do not hand-edit generated icon component files unless there is a one-off emergency fix.
- Preferred generator:
  - `pnpm --filter jetbrains-ui icons:generate:public -- --target <target> --clean`
- Useful options:
  - `--list` to view supported targets
  - `--allow-unpaired` only if a light/dark pair is intentionally missing
  - `--include-at` only if `@` variants are intentionally needed
- Target mapping is defined in:
  - `apps/www/scripts/generate-icons-from-public-source.mts` (`TARGETS`)

## Directory Conventions
- Top-level category structure:
  - `<category>/index.ts`
  - `<category>/types.ts`
  - `<category>/registry-item.json`
  - `<category>/types.registry.json`
- Generated icon item structure:
  - `<category>/<icon-kebab-name>/index.tsx`
  - `<category>/<icon-kebab-name>/registry-item.json`
- Nested packs:
  - `general/<pack>/<icon>/...`
  - `plugins/<pack>/<icon>/...`
  - each pack keeps its own `index.ts` + `registry-item.json`
- Naming:
  - folder/file names use `kebab-case`
  - component exports use `PascalCase`

## Files Usually Maintained Manually
- `apps/www/registry/icons/general/blocks.tsx`
- `apps/www/registry/icons/general/components.tsx`
- `apps/www/registry/icons/general/lucide-icons.tsx`
- `apps/www/registry/icons/general/primitives.tsx`

If generation unexpectedly changes these files, stop and verify script behavior before committing.

## Standard Change Workflow
1. Add or update SVG files in `public/icons/**`.
2. Regenerate only affected targets:
   - example: `pnpm --filter jetbrains-ui icons:generate:public -- --target build,general/actions --clean`
3. If `general/*` targets were regenerated, verify the follow-up migration script output:
   - `apps/www/scripts/migrate-general-registry-to-folders.mjs`
4. Rebuild registry artifacts:
   - `pnpm --filter jetbrains-ui registry:build`
5. If category/subcategory structure changed, update docs metadata and galleries:
   - `apps/www/content/docs/icons/**`
   - `apps/www/content/docs-zh/icons/**`
   - `apps/www/components/docs/icons/**`
6. Validate before commit:
   - `pnpm --filter jetbrains-ui lint`
   - `pnpm --filter jetbrains-ui build`

## Guardrails
- Keep import paths stable; avoid renaming icon folders without a planned migration.
- Keep `index.ts` exports and `registry-item.json` in sync.
- Preserve icon API contract (`size`, `mode`, `aria-label`, `title`) for consistency.
