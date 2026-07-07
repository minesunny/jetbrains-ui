## ADDED Requirements

### Requirement: Manifest maps every icon pathname to a lazy loader
`registry/icons/manifest.ts` SHALL export an `iconRegistry` record whose keys are every icon pathname (`<domain>/<icon>` form, e.g. `database/redis`) and whose values are zero-arg functions returning a dynamic import of that icon's component. Pathnames with a subdomain (e.g. `database/expui/access-method`) SHALL be included.

#### Scenario: Pathname resolves to the icon component
- **WHEN** `iconRegistry['database/redis']()` is called
- **THEN** it SHALL return a module whose default (or named `Redis`) export is the `Redis` React component

#### Scenario: Every generated icon has a manifest entry
- **WHEN** the set of `iconRegistry` keys is compared to the set of `<domain>/<icon>/index.tsx` files on disk
- **THEN** they SHALL match exactly

#### Scenario: Per-domain chunking
- **WHEN** two icons sharing the same domain (e.g. `database/redis` and `database/column`) are resolved on one page
- **THEN** both loaders SHALL reference the same dynamic `import('./database')` chunk

### Requirement: Bare-slug reverse index
`manifest.ts` SHALL export a `slugIndex` record mapping each bare slug (the last path segment, e.g. `redis`) to the array of pathnames that end with that slug.

#### Scenario: Unique slug maps to one pathname
- **WHEN** `slugIndex['redis']` is read
- **THEN** it SHALL equal `['database/redis']`

#### Scenario: Ambiguous slug lists all candidates
- **WHEN** `slugIndex['commit']` is read
- **THEN** it SHALL contain at least `['vcs/commit', 'database/commit']`

### Requirement: Pathname type covers all entries
`manifest.ts` SHALL export `type IconPathname = keyof typeof iconRegistry`, and the resolver SHALL reject any string not in that set at runtime in development.

#### Scenario: Unknown pathname is rejected
- **WHEN** a resolver is called with `'database/does-not-exist'`
- **THEN** it SHALL throw in development with a message naming the unknown pathname
