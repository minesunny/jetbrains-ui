import { promises as fs } from 'fs';
import path from 'path';
import { transform } from '@svgr/core';

// ─── Configuration ───────────────────────────────────────────────────────────

const REGISTRY_ROOT = path.join(process.cwd(), 'registry', 'icons');

// Standard JetBrains notice emitted at the top of every generated icon .tsx.
// (Source .svg in this repo are stripped of the notice; the expui batch carries
// it. Emitting the standard notice uniformly satisfies Apache-2.0 §4(c).)
const COPYRIGHT_HEADER = `/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */`;

const CATEGORY_MAP: Record<string, string> = {
  Breakpoints: 'breakpoints',
  Build: 'build',
  Database: 'database',
  Debugger: 'debugger',
  Editor: 'editor-icons',
  File_Types: 'file-types',
  General: 'general',
  Nodes: 'nodes',
  Run: 'run',
  Run_Configurations: 'run-configurations',
  Terminal: 'terminal',
  VCS: 'vcs',
};

// Categories where subdirectories should be flattened into the category root
const FLATTEN_CATEGORIES = new Set([
  'breakpoints',
  'build',
  'database',
  'debugger',
  'editor-icons',
  'file-types',
  'nodes',
  'run',
  'run-configurations',
  'terminal',
  'vcs',
]);

// Manual override map for General subcategory names
// Source directory name → registry subcategory name
const GENERAL_SUBCATEGORY_MAP: Record<string, string> = {
  'AI_Assistant': 'ai-assistant',
  'Access_Modifiers': 'access-modifiers',
  'Actions': 'actions',
  'Bookmarks': 'bookmarks',
  'DevKit': 'devkit',
  'devkit': 'devkit',
  'Duplicates': 'duplicates',
  'duplicates': 'duplicates',
  'Editor': 'editor',
  'General': 'general',
  'Inline': 'inline',
  'inline': 'inline',
  'Modifiers': 'modifiers',
  'New_UI': 'new-ui',
  'Object_Browser': 'object-browser',
  'Progress_bar': 'progress-bar',
  'Rating': 'rating',
  'Raiting': 'raiting',
  'raiting': 'raiting',
  'Setting_Sync': 'setting-sync',
  'Spinner': 'spinner',
  'Status': 'status',
  'status': 'status',
  'Tool_Windows': 'tool-windows',
  'Usages': 'usages',
  'Windows': 'windows',
  'windows': 'windows',
};

// ─── Types ───────────────────────────────────────────────────────────────────

type IconVariant = 'paired' | 'light-only' | 'dark-only' | 'single';

type IconEntry = {
  sourceDir: string;
  rawName: string;
  kebabName: string;
  pascalName: string;
  category: string;
  subcategory: string | null;
  registryDir: string;
  variant: IconVariant;
  lightSvgPath: string | null;
  darkSvgPath: string | null;
  singleSvgPath: string | null;
};

type GenerateOptions = {
  target: string;
  clean: boolean;
  dryRun: boolean;
  allowUnpaired: boolean;
  list: boolean;
  /** External source .svg root (PascalCase category dirs). Defaults to registry/icons. */
  src: string;
};

// ─── Name Utilities ──────────────────────────────────────────────────────────

function camelToKebab(name: string): string {
  return (
    name
      // Handle consecutive uppercase (e.g., "SQLDMLStatement" -> "SQL-DML-Statement")
      .replace(/([A-Z]+)([A-Z][a-z])/gu, '$1-$2')
      // Handle camelCase boundaries
      .replace(/([a-z0-9])([A-Z])/gu, '$1-$2')
      .toLowerCase()
  );
}

function kebabToPascal(name: string): string {
  return name.replace(/(^|-)([a-z])/gu, (_, _sep, char) =>
    char.toUpperCase(),
  );
}

function stripSizeSuffix(name: string): string {
  return name.replace(/@\d+x\d+$/u, '');
}

function hasSizeSuffix(name: string): boolean {
  return /@\d+x\d+$/u.test(name);
}

// Reserved names that conflict with barrel/index files
const RESERVED_NAMES = new Set(['index', 'types', 'registry-item']);

function resolveReservedName(kebabName: string): string {
  if (RESERVED_NAMES.has(kebabName)) {
    return `${kebabName}-icon`;
  }
  return kebabName;
}

// ─── SVG Processing ──────────────────────────────────────────────────────────

async function extractSvgInnerJsx(svgContent: string): Promise<{
  innerJsx: string;
  viewBox: string;
}> {
  // Extract viewBox from the root <svg> tag
  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/u);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 16 16';

  // Use @svgr/core to convert SVG to JSX, then extract the inner content
  const result = await transform(svgContent, {
    icon: false,
    ref: false,
    typescript: false,
    svgo: false,
    plugins: ['@svgr/plugin-jsx'],
  });

  // Extract the inner JSX from the generated component
  // The result looks like: export default ({...}) => ( <svg ...>inner</svg> )
  const innerMatch = result.match(
    /<svg[\s\S]*?>([\s\S]*?)<\/svg>/u,
  );

  if (!innerMatch) {
    throw new Error('Failed to extract inner JSX from SVG');
  }

  return { innerJsx: innerMatch[1].trim(), viewBox };
}

// ─── Template Generation ─────────────────────────────────────────────────────

function generatePairedComponent(
  pascalName: string,
  lightInnerJsx: string,
  darkInnerJsx: string,
  viewBox: string,
  utilsRelPath: string,
): string {
  return `${COPYRIGHT_HEADER}
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '${utilsRelPath}';

export type ${pascalName}Props = SvgProps;

const ${pascalName}Light: FC<SvgProps> = ({
  size,
  className,
  role,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="${viewBox}"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    ${lightInnerJsx}
  </svg>
);

const ${pascalName}Dark: FC<SvgProps> = ({
  size,
  className,
  role,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="${viewBox}"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    ${darkInnerJsx}
  </svg>
);

export const ${pascalName}: FC<${pascalName}Props> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ${pascalName}Light : ${pascalName}Dark;

  return (
    <SvgComponent
      size={sizeMap[size]}
      className={cn('inline-block flex-shrink-0', className)}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};

export default ${pascalName};
`;
}

function generateSingleComponent(
  pascalName: string,
  innerJsx: string,
  viewBox: string,
  utilsRelPath: string,
): string {
  return `${COPYRIGHT_HEADER}
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '${utilsRelPath}';

export type ${pascalName}Props = SvgProps;

export const ${pascalName}: FC<${pascalName}Props> = ({
  size = 'md',
  mode,
  className,
  'aria-label': ariaLabel,
  ...props
}) => (
  <svg
    width={sizeMap[size]}
    height={sizeMap[size]}
    viewBox="${viewBox}"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('inline-block flex-shrink-0', className)}
    role={ariaLabel ? 'img' : 'presentation'}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    {...props}
  >
    ${innerJsx}
  </svg>
);

export default ${pascalName};
`;
}

function generateRegistryItemJson(
  entry: IconEntry,
): string {
  const iconPath = entry.subcategory
    ? `${entry.category}/${entry.subcategory}/${entry.kebabName}`
    : `${entry.category}/${entry.kebabName}`;

  return JSON.stringify(
    {
      $schema: 'https://ui.shadcn.com/schema/registry-item.json',
      name: `icons-${iconPath.replace(/\//gu, '-')}`,
      type: 'registry:ui',
      title: entry.pascalName.replace(/([A-Z])/gu, ' $1').trim(),
      description: `${entry.pascalName.replace(/([A-Z])/gu, ' $1').trim()} icon from ${entry.category} category.`,
      registryDependencies: ['icons-utils'],
      files: [
        {
          path: `registry/icons/${iconPath}/index.tsx`,
          type: 'registry:ui',
          target: `components/jetbrains-ui/icons/${iconPath}/index.tsx`,
        },
      ],
      meta: {
        keywords: [entry.kebabName, 'icon', entry.category, 'jetbrains'],
      },
    },
    null,
    2,
  );
}

function generateUtilsFile(): string {
  return `import type React from 'react';

export type SvgSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SvgMode = 'light' | 'dark';

export type SvgProps = Omit<React.ComponentProps<'svg'>, 'size'> & {
  size?: SvgSize | number;
  mode?: SvgMode;
};

export const sizeMap: Record<SvgSize | number, number> = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
};
`;
}

function generateUtilsRegistryJson(): string {
  return JSON.stringify(
    {
      $schema: 'https://ui.shadcn.com/schema/registry-item.json',
      name: 'icons-utils',
      type: 'registry:ui',
      title: 'Icon Utils',
      description: 'Shared types and size map for icon components.',
      files: [
        {
          path: 'registry/icons/utils.ts',
          type: 'registry:ui',
          target: 'components/jetbrains-ui/icons/utils.ts',
        },
      ],
    },
    null,
    2,
  );
}

function generateCategoryRegistryJson(
  category: string,
  title: string,
  iconEntries: IconEntry[],
): string {
  const files: { path: string; type: string; target: string }[] = [
    {
      path: `registry/icons/${category}/index.ts`,
      type: 'registry:ui',
      target: `components/jetbrains-ui/icons/${category}/index.ts`,
    },
  ];

  for (const entry of iconEntries) {
    const iconPath = entry.subcategory
      ? `${category}/${entry.subcategory}/${entry.kebabName}`
      : `${category}/${entry.kebabName}`;
    files.push({
      path: `registry/icons/${iconPath}/index.tsx`,
      type: 'registry:ui',
      target: `components/jetbrains-ui/icons/${iconPath}/index.tsx`,
    });
  }

  return JSON.stringify(
    {
      $schema: 'https://ui.shadcn.com/schema/registry-item.json',
      name: `icons-${category}`,
      type: 'registry:ui',
      title: `${title} Icons`,
      description: `All ${iconEntries.length} icons from the ${title} category.`,
      registryDependencies: ['icons-utils'],
      files,
    },
    null,
    2,
  );
}

function generateBarrelIndex(iconEntries: IconEntry[]): string {
  const lines = iconEntries
    .map(
      (entry) =>
        `export { ${entry.pascalName} } from './${entry.kebabName}';\nexport type { ${entry.pascalName}Props } from './${entry.kebabName}';`,
    )
    .join('\n');

  return `${lines}\nexport type { SvgMode, SvgProps, SvgSize } from '../utils';\n`;
}

function generateSubcategoryBarrelIndex(
  iconEntries: IconEntry[],
): string {
  const lines = iconEntries
    .map(
      (entry) =>
        `export { ${entry.pascalName} } from './${entry.kebabName}';\nexport type { ${entry.pascalName}Props } from './${entry.kebabName}';`,
    )
    .join('\n');

  return `${lines}\n`;
}

// ─── Icon Discovery ──────────────────────────────────────────────────────────

async function discoverIcons(
  categoryDir: string,
  registryCategory: string,
  options: GenerateOptions,
): Promise<IconEntry[]> {
  const entries: IconEntry[] = [];
  const isFlat = FLATTEN_CATEGORIES.has(registryCategory);

  async function scanDir(dir: string, subcategory: string | null) {
    const items = await fs.readdir(dir, { withFileTypes: true });

    for (const item of items) {
      if (!item.isDirectory()) continue;

      // Skip @NNxNN size variant directories
      if (hasSizeSuffix(item.name)) continue;

      const fullPath = path.join(dir, item.name);
      const files = await fs.readdir(fullPath);

      // Check for paired Theme-Light/Theme-Dark SVGs
      const lightFile = files.find((f) => f.endsWith('_Theme-Light.svg'));
      const darkFile = files.find((f) => f.endsWith('_Theme-Dark.svg'));

      if (lightFile || darkFile) {
        const rawName = lightFile
          ? lightFile.replace('_Theme-Light.svg', '')
          : darkFile!.replace('_Theme-Dark.svg', '');
        const strippedName = stripSizeSuffix(rawName);
        const kebabName = resolveReservedName(camelToKebab(strippedName));
        const pascalName = kebabToPascal(kebabName);

        let variant: IconVariant;
        if (lightFile && darkFile) {
          variant = 'paired';
        } else if (lightFile) {
          variant = 'light-only';
          console.warn(
            `  Warning: ${fullPath} has only Light variant (no Dark)`,
          );
        } else {
          variant = 'dark-only';
          console.warn(
            `  Warning: ${fullPath} has only Dark variant (no Light)`,
          );
        }

        // Determine registry directory
        let registryDir: string;
        if (subcategory) {
          registryDir = `${registryCategory}/${subcategory}/${kebabName}`;
        } else {
          registryDir = `${registryCategory}/${kebabName}`;
        }

        entries.push({
          sourceDir: fullPath,
          rawName: strippedName,
          kebabName,
          pascalName,
          category: registryCategory,
          subcategory,
          registryDir,
          variant,
          lightSvgPath: lightFile
            ? path.join(fullPath, lightFile)
            : null,
          darkSvgPath: darkFile ? path.join(fullPath, darkFile) : null,
          singleSvgPath: null,
        });
      } else if (options.allowUnpaired) {
        // Check for non-standard SVGs
        const svgFiles = files.filter((f) => f.endsWith('.svg'));
        if (svgFiles.length > 0) {
          const rawName = stripSizeSuffix(item.name);
          const kebabName = resolveReservedName(camelToKebab(rawName));
          const pascalName = kebabToPascal(kebabName);

          let registryDir: string;
          if (subcategory) {
            registryDir = `${registryCategory}/${subcategory}/${kebabName}`;
          } else {
            registryDir = `${registryCategory}/${kebabName}`;
          }

          entries.push({
            sourceDir: fullPath,
            rawName,
            kebabName,
            pascalName,
            category: registryCategory,
            subcategory,
            registryDir,
            variant: 'single',
            lightSvgPath: null,
            darkSvgPath: null,
            singleSvgPath: path.join(fullPath, svgFiles[0]),
          });
        }
      }

      // Always recurse into subdirectories for non-flatten categories
      if (!isFlat) {
        let childSubcategory: string | null;
        if (
          registryCategory === 'general' &&
          GENERAL_SUBCATEGORY_MAP[item.name]
        ) {
          // This directory IS a known subcategory
          childSubcategory = GENERAL_SUBCATEGORY_MAP[item.name];
        } else if (subcategory) {
          // Nested subdir within a known subcategory — keep parent to flatten
          childSubcategory = subcategory;
        } else {
          // Unknown top-level directory — use kebab-case as subcategory
          childSubcategory = camelToKebab(
            item.name.replace(/_/gu, '-'),
          );
        }
        await scanDir(fullPath, childSubcategory);
      }
    }
  }

  if (isFlat) {
    // For flat categories, recurse all subdirectories
    async function scanFlat(dir: string) {
      const items = await fs.readdir(dir, { withFileTypes: true });
      for (const item of items) {
        if (!item.isDirectory()) continue;

        // Skip @NNxNN size variant directories (e.g., overridingProperty@14x14)
        if (hasSizeSuffix(item.name)) continue;

        const fullPath = path.join(dir, item.name);
        const files = await fs.readdir(fullPath);

        const lightFile = files.find((f) => f.endsWith('_Theme-Light.svg'));
        const darkFile = files.find((f) => f.endsWith('_Theme-Dark.svg'));

        if (lightFile || darkFile) {
          // Create a synthetic subcategory scan entry
          const rawName = lightFile
            ? lightFile.replace('_Theme-Light.svg', '')
            : darkFile!.replace('_Theme-Dark.svg', '');
          const strippedName = stripSizeSuffix(rawName);
          const kebabName = resolveReservedName(camelToKebab(strippedName));
          const pascalName = kebabToPascal(kebabName);

          let variant: IconVariant;
          if (lightFile && darkFile) {
            variant = 'paired';
          } else if (lightFile) {
            variant = 'light-only';
            console.warn(
              `  Warning: ${fullPath} has only Light variant (no Dark)`,
            );
          } else {
            variant = 'dark-only';
            console.warn(
              `  Warning: ${fullPath} has only Dark variant (no Light)`,
            );
          }

          entries.push({
            sourceDir: fullPath,
            rawName: strippedName,
            kebabName,
            pascalName,
            category: registryCategory,
            subcategory: null,
            registryDir: `${registryCategory}/${kebabName}`,
            variant,
            lightSvgPath: lightFile
              ? path.join(fullPath, lightFile)
              : null,
            darkSvgPath: darkFile ? path.join(fullPath, darkFile) : null,
            singleSvgPath: null,
          });
        } else if (options.allowUnpaired) {
          const svgFiles = files.filter((f) => f.endsWith('.svg'));
          if (svgFiles.length > 0) {
            const rawName = stripSizeSuffix(item.name);
            const kebabName = resolveReservedName(camelToKebab(rawName));
            const pascalName = kebabToPascal(kebabName);

            entries.push({
              sourceDir: fullPath,
              rawName,
              kebabName,
              pascalName,
              category: registryCategory,
              subcategory: null,
              registryDir: `${registryCategory}/${kebabName}`,
              variant: 'single',
              lightSvgPath: null,
              darkSvgPath: null,
              singleSvgPath: path.join(fullPath, svgFiles[0]),
            });
          }
        } else {
          await scanFlat(fullPath);
        }
      }
    }

    await scanFlat(categoryDir);
  } else {
    await scanDir(categoryDir, null);
  }

  // Deduplicate by registryDir (keep first occurrence)
  const seen = new Set<string>();
  const deduped: IconEntry[] = [];
  for (const entry of entries) {
    if (!seen.has(entry.registryDir)) {
      seen.add(entry.registryDir);
      deduped.push(entry);
    } else {
      console.warn(
        `  Warning: Duplicate registry path "${entry.registryDir}" from ${entry.sourceDir}, skipping.`,
      );
    }
  }

  // Note: PascalName conflicts (e.g., Bookmarks in bookmarks/ and tool-windows/)
  // are resolved during barrel index generation, not here. Each icon keeps its
  // original name in its own directory; only the category barrel needs dedup.

  return deduped;
}

// ─── Prettier Formatting ─────────────────────────────────────────────────────

async function formatWithPrettier(
  code: string,
  filePath: string,
): Promise<string> {
  try {
    const { format } = await import('prettier');
    const config = await format(code, {
      filepath: filePath,
      singleQuote: true,
      trailingComma: 'all',
      tabWidth: 2,
      semi: true,
    });
    return config;
  } catch {
    return code;
  }
}

// ─── Main Generation Logic ───────────────────────────────────────────────────

async function generateIcons(options: GenerateOptions) {
  const SOURCE_ROOT = options.src;

  // Determine which categories to process
  let categoriesToProcess: string[];

  if (options.target === 'all') {
    categoriesToProcess = Object.keys(CATEGORY_MAP);
  } else {
    // Handle subcategory targets like "general/actions"
    const parts = options.target.split('/');
    const categoryKey = parts[0];

    if (!(categoryKey in CATEGORY_MAP)) {
      console.error(
        `Unknown category: ${categoryKey}. Available: ${Object.keys(CATEGORY_MAP).join(', ')}`,
      );
      process.exit(1);
    }

    categoriesToProcess = [categoryKey];
  }

  const subcategoryFilter =
    options.target.includes('/') && options.target !== 'all'
      ? options.target.split('/').slice(1).join('/')
      : null;

  // Emit the shared utils.ts + its registry item once (shared across all domains).
  if (!options.dryRun) {
    const utilsCode = await formatWithPrettier(
      generateUtilsFile(),
      path.join(REGISTRY_ROOT, 'utils.ts'),
    );
    await fs.writeFile(path.join(REGISTRY_ROOT, 'utils.ts'), utilsCode);
    await fs.writeFile(
      path.join(REGISTRY_ROOT, 'utils.registry.json'),
      generateUtilsRegistryJson() + '\n',
    );
  }

  let totalGenerated = 0;

  for (const [sourceCategory, registryCategory] of Object.entries(
    CATEGORY_MAP,
  )) {
    if (!categoriesToProcess.includes(sourceCategory)) continue;

    const categoryDir = path.join(SOURCE_ROOT, sourceCategory);
    if (!(await fs.stat(categoryDir).catch(() => null))) {
      console.warn(`  Source directory not found: ${categoryDir}`);
      continue;
    }

    console.log(`\nProcessing: ${sourceCategory} → ${registryCategory}`);

    // Discover icons
    let entries = await discoverIcons(categoryDir, registryCategory, options);

    // Apply subcategory filter if specified
    if (subcategoryFilter) {
      entries = entries.filter(
        (e) => e.subcategory === subcategoryFilter,
      );
      console.log(`  Filtered to subcategory: ${subcategoryFilter}`);
    }

    if (entries.length === 0) {
      console.log('  No icons found.');
      continue;
    }

    console.log(`  Found ${entries.length} icons.`);

    if (options.dryRun) {
      for (const entry of entries) {
        console.log(
          `  [${entry.variant}] ${entry.registryDir} → ${entry.pascalName}`,
        );
      }
      totalGenerated += entries.length;
      continue;
    }

    // Clean mode: remove existing generated files
    if (options.clean) {
      const registryCategoryDir = path.join(
        REGISTRY_ROOT,
        registryCategory,
      );
      if (await fs.stat(registryCategoryDir).catch(() => null)) {
        const existingDirs = await fs.readdir(registryCategoryDir, {
          withFileTypes: true,
        });
        for (const dir of existingDirs) {
          if (dir.isDirectory()) {
            await fs.rm(
              path.join(registryCategoryDir, dir.name),
              { recursive: true, force: true },
            );
          }
        }
      }
    }

    // Group entries by subcategory
    const bySubcategory = new Map<string | null, IconEntry[]>();
    for (const entry of entries) {
      const key = entry.subcategory;
      if (!bySubcategory.has(key)) {
        bySubcategory.set(key, []);
      }
      bySubcategory.get(key)!.push(entry);
    }

    // Process each icon
    for (const entry of entries) {
      const targetDir = path.join(REGISTRY_ROOT, entry.registryDir);
      await fs.mkdir(targetDir, { recursive: true });

      // Determine utils relative path (shared at registry/icons/utils.ts)
      const depth = entry.subcategory ? 3 : 2;
      const utilsRelPath = '../'.repeat(depth) + 'utils';

      // Generate component
      let componentCode: string;

      if (entry.variant === 'paired') {
        const lightSvg = await fs.readFile(entry.lightSvgPath!, 'utf-8');
        const darkSvg = await fs.readFile(entry.darkSvgPath!, 'utf-8');

        const { innerJsx: lightInner, viewBox } =
          await extractSvgInnerJsx(lightSvg);
        const { innerJsx: darkInner } = await extractSvgInnerJsx(darkSvg);

        componentCode = generatePairedComponent(
          entry.pascalName,
          lightInner,
          darkInner,
          viewBox,
          utilsRelPath,
        );
      } else if (entry.variant === 'single') {
        const svg = await fs.readFile(entry.singleSvgPath!, 'utf-8');
        const { innerJsx, viewBox } = await extractSvgInnerJsx(svg);

        componentCode = generateSingleComponent(
          entry.pascalName,
          innerJsx,
          viewBox,
          utilsRelPath,
        );
      } else if (entry.variant === 'light-only') {
        const lightSvg = await fs.readFile(entry.lightSvgPath!, 'utf-8');
        const { innerJsx, viewBox } = await extractSvgInnerJsx(lightSvg);

        componentCode = generateSingleComponent(
          entry.pascalName,
          innerJsx,
          viewBox,
          utilsRelPath,
        );
      } else {
        // dark-only
        const darkSvg = await fs.readFile(entry.darkSvgPath!, 'utf-8');
        const { innerJsx, viewBox } = await extractSvgInnerJsx(darkSvg);

        componentCode = generateSingleComponent(
          entry.pascalName,
          innerJsx,
          viewBox,
          utilsRelPath,
        );
      }

      // Format with prettier
      const formattedCode = await formatWithPrettier(
        componentCode,
        path.join(targetDir, 'index.tsx'),
      );

      // Write component
      await fs.writeFile(
        path.join(targetDir, 'index.tsx'),
        formattedCode,
      );

      // Write registry-item.json
      const registryJson = generateRegistryItemJson(entry);
      await fs.writeFile(
        path.join(targetDir, 'registry-item.json'),
        registryJson + '\n',
      );

      totalGenerated++;
    }

    // Generate barrel index files
    if (bySubcategory.size === 1 && bySubcategory.has(null)) {
      // Flat category - single index.ts at category root
      const barrelIndex = generateBarrelIndex(entries);
      const formattedBarrel = await formatWithPrettier(
        barrelIndex,
        path.join(REGISTRY_ROOT, registryCategory, 'index.ts'),
      );
      await fs.writeFile(
        path.join(REGISTRY_ROOT, registryCategory, 'index.ts'),
        formattedBarrel,
      );
    } else {
      // Subcategorized - generate subcategory barrel + category barrel
      const categoryExports: string[] = [];
      const categoryExportedNames = new Set<string>(); // Track PascalNames to avoid duplicates

      for (const [subcategory, subEntries] of bySubcategory) {
        if (subcategory) {
          // Subcategory barrel index
          const subBarrel = generateSubcategoryBarrelIndex(subEntries);
          const subDir = path.join(
            REGISTRY_ROOT,
            registryCategory,
            subcategory,
          );
          await fs.mkdir(subDir, { recursive: true });
          const formattedSubBarrel = await formatWithPrettier(
            subBarrel,
            path.join(subDir, 'index.ts'),
          );
          await fs.writeFile(
            path.join(subDir, 'index.ts'),
            formattedSubBarrel,
          );

          // Add to category exports (skip duplicates)
          for (const entry of subEntries) {
            if (!categoryExportedNames.has(entry.pascalName)) {
              categoryExportedNames.add(entry.pascalName);
              categoryExports.push(
                `export { ${entry.pascalName} } from './${subcategory}/${entry.kebabName}';`,
              );
              categoryExports.push(
                `export type { ${entry.pascalName}Props } from './${subcategory}/${entry.kebabName}';`,
              );
            }
          }
        } else {
          // Root-level entries
          for (const entry of subEntries) {
            if (!categoryExportedNames.has(entry.pascalName)) {
              categoryExportedNames.add(entry.pascalName);
              categoryExports.push(
                `export { ${entry.pascalName} } from './${entry.kebabName}';`,
              );
              categoryExports.push(
                `export type { ${entry.pascalName}Props } from './${entry.kebabName}';`,
              );
            }
          }
        }
      }

      const categoryBarrel =
        categoryExports.join('\n') +
        "\nexport type { SvgMode, SvgProps, SvgSize } from '../utils';\n";
      const formattedCategoryBarrel = await formatWithPrettier(
        categoryBarrel,
        path.join(REGISTRY_ROOT, registryCategory, 'index.ts'),
      );
      await fs.writeFile(
        path.join(REGISTRY_ROOT, registryCategory, 'index.ts'),
        formattedCategoryBarrel,
      );
    }

    // Generate category-level registry-item.json
    const categoryRegistryJson = generateCategoryRegistryJson(
      registryCategory,
      kebabToPascal(registryCategory),
      entries,
    );
    await fs.writeFile(
      path.join(REGISTRY_ROOT, registryCategory, 'registry-item.json'),
      categoryRegistryJson + '\n',
    );
  }

  console.log(
    `\nDone! Total icons ${options.dryRun ? 'discovered' : 'generated'}: ${totalGenerated}`,
  );
}

// ─── CLI ─────────────────────────────────────────────────────────────────────

function parseArgs(): GenerateOptions {
  const args = process.argv.slice(2);
  const options: GenerateOptions = {
    target: 'all',
    clean: false,
    dryRun: false,
    allowUnpaired: false,
    list: false,
    src: path.join(process.cwd(), 'registry', 'icons'),
  };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--target':
        options.target = args[++i];
        break;
      case '--clean':
        options.clean = true;
        break;
      case '--dry-run':
        options.dryRun = true;
        break;
      case '--allow-unpaired':
        options.allowUnpaired = true;
        break;
      case '--list':
        options.list = true;
        break;
      case '--src':
        options.src = path.resolve(args[++i]);
        break;
      default:
        if (!args[i].startsWith('--')) {
          options.target = args[i];
        }
    }
  }

  return options;
}

async function main() {
  const options = parseArgs();

  if (options.list) {
    console.log('Available targets:');
    console.log('  all');
    for (const [source, registry] of Object.entries(CATEGORY_MAP)) {
      console.log(`  ${source} → ${registry}`);
    }
    console.log('\n  Subcategory targets (for General):');
    console.log(
      '  general/<subcategory> (e.g., general/actions, general/modifiers)',
    );
    return;
  }

  await generateIcons(options);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
