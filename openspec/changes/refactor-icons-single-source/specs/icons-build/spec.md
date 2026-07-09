## ADDED Requirements

### Requirement: Single icon generator
`apps/www/scripts/generate-icons.mts` SHALL be the only script that produces icon artifacts. It SHALL read source `.svg` from a configurable external input path (not `registry/icons/`) and emit, per icon: `index.tsx`, `registry-item.json`, plus shared `utils.ts`, `manifest.ts`, and per-domain barrel `index.ts`.

#### Scenario: Generator does not read from registry/icons
- **WHEN** the generator runs
- **THEN** its `SOURCE_ROOT` SHALL differ from `REGISTRY_ROOT`, and no `.svg` under `registry/icons/` SHALL be required as input

#### Scenario: Per-icon registry-item.json is emitted for all domains
- **WHEN** the generator runs across all domains
- **THEN** every `<domain>/<icon>/` SHALL contain a `registry-item.json`, including domains (e.g. `database`) that previously had none

### Requirement: No svgNames, no per-domain types.ts
The generator SHALL NOT emit any `svgNames` array, `SvgName` type, or per-domain `types.ts` file. Shared icon types SHALL live in a single `registry/icons/utils.ts` exporting `SvgSize`, `SvgMode`, `SvgProps`, and `sizeMap`.

#### Scenario: No types.ts remains
- **WHEN** `registry/icons/*/types.ts` is globbed
- **THEN** zero files SHALL match

#### Scenario: No svgNames export remains
- **WHEN** `registry/icons/` is searched for the identifier `svgNames`
- **THEN** zero matches SHALL be found

### Requirement: Each generated icon has a default export, utils import, and copyright header
Every generated `index.tsx` SHALL: (a) `export default` the PascalCase component; (b) import `SvgProps` and `sizeMap` from the shared `utils.ts` via a depth-aware relative path; (c) begin with a JetBrains Apache-2.0 copyright comment (read from the source `.svg` if present, otherwise the standard notice).

#### Scenario: Default export present
- **WHEN** `registry/icons/database/redis/index.tsx` is parsed
- **THEN** it SHALL contain `export default Redis`

#### Scenario: Imports from utils, not types
- **WHEN** the import statements of any generated icon are inspected
- **THEN** they SHALL reference `utils` and SHALL NOT reference `../types`

#### Scenario: Copyright header present
- **WHEN** the first non-blank line of a generated `.tsx` (whose source `.svg` carried the notice) is read
- **THEN** it SHALL be a comment containing `JetBrains s.r.o.` and `Apache 2.0`

### Requirement: Registry assembles without .svg presence
`build-registry.mts` SHALL assemble `public/r/registry.json` from committed `registry-item.json` files. The build SHALL succeed with zero `.svg` files present anywhere under `registry/icons/`.

#### Scenario: Build succeeds after svg deletion
- **WHEN** all `*.svg` under `registry/icons/` are deleted and `pnpm registry:build` is run
- **THEN** the build SHALL succeed and `public/r/registry.json` SHALL contain per-icon entries for every domain including `database`
