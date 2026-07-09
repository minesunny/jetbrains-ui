// Stage the expui icon pack into the nested _Theme-Light/_Theme-Dark layout
// generate-icons.mts expects, under Database/expui/<name>/, so the generator
// emits them as database/expui/<kebab> (coexisting with existing database icons).
//
// expui layout:  flat  <name>.svg  +  <name>_dark.svg   (camelCase)
// staged layout: Database/expui/<name>/<name>_Theme-Light.svg
//                          + <name>/<name>_Theme-Dark.svg
//
// Usage: pnpm tsx scripts/stage-expui.mts --src <expui-dir> --out <staging-dir>

import { promises as fs } from 'fs';
import path from 'path';

function parseArgs() {
  const args = process.argv.slice(2);
  let src = '';
  let out = '';
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--src') src = path.resolve(args[++i]);
    else if (args[i] === '--out') out = path.resolve(args[++i]);
  }
  if (!src || !out) {
    console.error(
      'Usage: stage-expui.mts --src <expui-dir> --out <staging-dir>',
    );
    process.exit(1);
  }
  return { src, out };
}

async function exists(p: string): Promise<boolean> {
  try {
    await fs.stat(p);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const { src, out } = parseArgs();
  const files = await fs.readdir(src);

  // Group by base name: 'accessMethod' from both 'accessMethod.svg' and
  // 'accessMethod_dark.svg'. Skip @NNxNN size variants.
  const bases = new Set<string>();
  for (const f of files) {
    if (!f.endsWith('.svg')) continue;
    const base = f.replace(/_dark\.svg$/u, '').replace(/\.svg$/u, '');
    if (/@\d+x\d+$/u.test(base)) continue;
    bases.add(base);
  }

  const destRoot = path.join(out, 'Database', 'expui');
  await fs.rm(destRoot, { recursive: true, force: true });
  await fs.mkdir(destRoot, { recursive: true });

  let staged = 0;
  let skipped = 0;
  for (const base of bases) {
    const lightSrc = path.join(src, `${base}.svg`);
    const darkSrc = path.join(src, `${base}_dark.svg`);
    if (!(await exists(lightSrc)) || !(await exists(darkSrc))) {
      // expui is a paired pack; skip unpaired (e.g. light-only leftovers).
      skipped++;
      continue;
    }
    const iconDir = path.join(destRoot, base);
    await fs.mkdir(iconDir, { recursive: true });
    await fs.copyFile(lightSrc, path.join(iconDir, `${base}_Theme-Light.svg`));
    await fs.copyFile(darkSrc, path.join(iconDir, `${base}_Theme-Dark.svg`));
    staged++;
  }

  console.log(
    `Staged ${staged} expui icons under ${destRoot} (skipped ${skipped} unpaired).`,
  );
}

void main().catch((err) => {
  console.error(err);
  process.exit(1);
});
