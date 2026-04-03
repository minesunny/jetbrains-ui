# JetBrains UI

## Project Structure

pnpm + Turborepo monorepo.

- `apps/www`: Next.js app (docs, demos, registry source)
- `apps/www/registry`: shadcn-style registry items (`components`, `primitives`, `icons`, `demo`, `hooks`, `styles`)
- `apps/www/scripts/build-registry.mts`: registry build script
- `packages/ui`: shared internal UI package
- `packages/eslint-config` and `packages/typescript-config`: shared tooling presets

Treat generated outputs (`.next/`, `__registry__/`, `public/r/`) as build artifacts unless a task explicitly requires updates.

## Commands

- `pnpm install`: install workspace dependencies (Node >=20)
- `pnpm dev`: run workspace dev tasks via Turbo
- `pnpm --filter jetbrains-ui dev`: run only the Next.js app
- `pnpm build`: build all packages/apps
- `pnpm lint`: run workspace lint tasks
- `pnpm test`: run workspace tests
- `pnpm format:check`: verify Prettier formatting
- `pnpm registry:build`: regenerate registry artifacts after changing registry items

## Coding Style

- TypeScript/TSX with strict type-checking
- Prettier: 2-space indent, single quotes, semicolons, trailing commas
- `PascalCase` for React components, `camelCase` for utilities/hooks, `kebab-case` for registry folders
- Registry item layout: `registry/<domain>/<name>/index.tsx` + `registry-item.json`

## Testing

- Vitest + Testing Library (jsdom environment)
- Test files colocated in `__tests__/`, named `*.test.tsx`
- `pnpm --filter jetbrains-ui test` / `pnpm --filter @workspace/ui test`

## Commits

- Conventional Commits (enforced by commitlint): `feat:`, `fix:`, `refactor:`, `docs:`, `chore:`
- Commit message format: use a one-line conventional-commit subject, then a blank line, then reference the related issue with `Closes #<number>` (or `Fixes #<number>`, `Resolves #<number>`). Example:
  ```
  feat: add AlertDialog component

  Closes #11
  ```
- Pre-push hook runs `pnpm lint && pnpm build`
- When changing components/primitives/icons, include related docs/demo updates and run `pnpm registry:build`
