## ADDED Requirements

### Requirement: SVG dispatcher resolves icons via the manifest
The `<SVG name />` component SHALL resolve `name` against `manifest.ts` and render the resolved component. It SHALL NOT use `require.context`, `svg-sprite-loader`, or any sprite symbol lookup.

#### Scenario: Pathname renders the component
- **WHEN** `<SVG name="database/redis" />` is rendered
- **THEN** the `Redis` component SHALL render inline `<svg>` markup identical to `<Redis />`

#### Scenario: Bare slug renders when unique
- **WHEN** `<SVG name="redis" />` is rendered and `slugIndex['redis']` has exactly one entry
- **THEN** the `Redis` component SHALL render

#### Scenario: Ambiguous bare slug throws in development
- **WHEN** `<SVG name="commit" />` is rendered in development and `slugIndex['commit']` has more than one entry
- **THEN** the component SHALL throw an error listing the candidate pathnames (`vcs/commit`, `database/commit`)

### Requirement: SVG dispatcher follows the active theme
`<SVG />` SHALL derive `mode` (`'light'` | `'dark'`) from `next-themes` `resolvedTheme` and pass it to the resolved component, which encapsulates its own Light/Dark rendering.

#### Scenario: Dark theme renders the dark variant
- **WHEN** `<SVG name="database/redis" />` is rendered with `resolvedTheme === 'dark'`
- **THEN** the dark variant paths SHALL be rendered

### Requirement: Direct import and SVG dispatcher are the same component
For any icon, `import X from '@/registry/icons/<domain>/<icon>'` and `<SVG name="<domain>/<icon>" />` SHALL render identical output for the same `size` and `mode`.

#### Scenario: Equivalent rendering
- **WHEN** both `<Redis />` and `<SVG name="database/redis" />` are rendered with `size="md"` in the same theme
- **THEN** their emitted `<svg>` markup SHALL be identical
