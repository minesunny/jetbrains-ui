# Repository Guidelines

## Project Structure & Module Organization
This repository is a `pnpm` + Turborepo monorepo.

- `apps/www`: main Next.js app (docs, demos, registry source).
- `apps/www/app`: routes and pages.
- `apps/www/content/docs`: MDX documentation.
- `apps/www/registry`: shadcn-style registry items (`components`, `primitives`, `icons`, `demo`, `hooks`, `styles`).
- `apps/www/scripts/build-registry.mts`: registry build script.
- `packages/ui`: shared internal UI package.
- `packages/eslint-config` and `packages/typescript-config`: shared tooling presets.

Treat generated outputs (for example `.next/` and `__registry__/`) as build artifacts unless a task explicitly requires updates.

## Build, Test, and Development Commands
- `pnpm install`: install workspace dependencies (Node `>=20`).
- `pnpm dev`: run workspace dev tasks via Turbo.
- `pnpm --filter jetbrains-ui dev`: run only the Next.js app.
- `pnpm build`: build all packages/apps.
- `pnpm lint`: run workspace lint tasks.
- `pnpm test`: run workspace tests.
- `pnpm format:check`: verify Prettier formatting.
- `pnpm registry:build`: regenerate registry artifacts after changing registry items.

## Coding Style & Naming Conventions
- Language: TypeScript/TSX with strict type-checking.
- Formatting is enforced by Prettier: 2-space indentation, single quotes, semicolons, trailing commas.
- ESLint config is shared through `@workspace/eslint-config`.
- Use `PascalCase` for React component names, `camelCase` for utilities/hooks, and kebab-case registry folders.
- Registry item layout should follow: `registry/<domain>/<name>/index.tsx` + `registry-item.json`.

## Testing Guidelines
- Frameworks: Vitest + Testing Library (`jsdom` environment).
- Test files are colocated in `__tests__` and use `*.test.tsx` naming.
- Run app tests: `pnpm --filter jetbrains-ui test`.
- Run UI package tests: `pnpm --filter @workspace/ui test`.
- Use `test:coverage` when touching component behavior; coverage is configured for component directories.

## Commit & Pull Request Guidelines
- Commits must follow Conventional Commits (enforced by commitlint), e.g. `feat:`, `fix:`, `refactor:`, `docs:`, `chore:`.
- Pre-push hook runs `pnpm lint && pnpm build`; keep your branch green before pushing.
- PRs should include a clear summary, linked issue (if any), and screenshots/GIFs for UI changes.
- When changing components/primitives/icons, include related docs/demo updates and run `pnpm registry:build`.
