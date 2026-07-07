// One-off migration: rewrite generated icon components to be self-contained
// (no `../../utils` import; inline size as px; shrink-0). The icon .svg
// sources were deleted (Phase 1.D), so we can't regenerate from source — but
// the committed .tsx is regular, so uniform text transforms suffice.
//
// Run: pnpm tsx scripts/transform-icons.mts            (write)
//      pnpm tsx scripts/transform-icons.mts --dry-run  (report only)

import { promises as fs } from 'fs';
import path from 'path';

const ICONS_ROOT = path.join(process.cwd(), 'registry', 'icons');
const DRY_RUN = process.argv.includes('--dry-run');

const transforms: { name: string; re: RegExp; repl: string }[] = [
  {
    name: 'import ComponentProps',
    re: /import type \{ FC \} from 'react';/,
    repl: "import type { ComponentProps, FC } from 'react';",
  },
  {
    name: 'drop utils import',
    re: /^import \{ type SvgProps, sizeMap \} from '[^']*';\r?\n/m,
    repl: '',
  },
  {
    name: 'inline Props type',
    re: /export type (\w+Props) = SvgProps;/,
    repl: "export type $1 = Omit<ComponentProps<'svg'>, 'size'> & {\n  size?: 12 | 14 | 16 | 20 | 24;\n  mode?: 'light' | 'dark';\n};",
  },
  {
    name: 'inline variant svg props type',
    re: /: FC<SvgProps> =/g,
    repl: ": FC<Omit<ComponentProps<'svg'>, 'size'> & { size: number }> =",
  },
  {
    name: 'size default px',
    re: /size = 'md'/,
    repl: 'size = 16',
  },
  {
    name: 'sizeMap[size] -> size',
    re: /sizeMap\[size\]/g,
    repl: 'size',
  },
  {
    name: 'flex-shrink-0 -> shrink-0',
    re: /flex-shrink-0/g,
    repl: 'shrink-0',
  },
];

async function walk(dir: string, out: string[] = []): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) await walk(full, out);
    else if (e.name === 'index.tsx') out.push(full);
  }
  return out;
}

async function main() {
  const files = await walk(ICONS_ROOT);
  let changed = 0;
  let unchanged = 0;
  for (const file of files) {
    const orig = await fs.readFile(file, 'utf8');
    let next = orig;
    for (const t of transforms) {
      next = next.replace(t.re, t.repl);
    }
    if (next !== orig) {
      changed++;
      if (!DRY_RUN) await fs.writeFile(file, next);
    } else {
      unchanged++;
    }
  }
  console.log(
    `${DRY_RUN ? '[dry-run] ' : ''}${files.length} icon files: ${changed} changed, ${unchanged} unchanged.`,
  );
}

void main().catch((e) => {
  console.error(e);
  process.exit(1);
});
