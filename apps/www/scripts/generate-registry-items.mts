import { promises as fs } from 'fs';
import path from 'path';

const ICONS_ROOT = path.join(process.cwd(), 'registry', 'icons');

// Category mapping (source name -> registry name)
const CATEGORY_MAP: Record<string, string> = {
  Breakpoints: 'breakpoints',
  Build: 'build',
  Database: 'database',
  Debugger: 'debugger',
  Editor: 'editor-icons',
  File_Types: 'file-types',
  General: 'general',
  Nodes: 'nodes',
  Plugins: 'plugins',
  Run: 'run',
  Run_Configurations: 'run-configurations',
  Termial: 'terminal',
  VCS: 'vcs',
};

function kebabToPascal(str: string): string {
  return str.replace(/(^|-)([a-z])/g, (_, _sep, char) => char.toUpperCase());
}

async function hasSvgFiles(dir: string): Promise<boolean> {
  try {
    const files = await fs.readdir(dir);
    return files.some((f) => f.endsWith('.svg'));
  } catch {
    return false;
  }
}

async function collectIcons(
  dir: string,
  basePath: string,
): Promise<{ registryPath: string; sourceDir: string }[]> {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return [];
  }

  const icons: { registryPath: string; sourceDir: string }[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const fullPath = path.join(dir, entry.name);

    let svgFiles;
    try {
      svgFiles = await fs.readdir(fullPath);
    } catch {
      continue;
    }

    const hasSvgDirectly = svgFiles.some((f) => f.endsWith('.svg'));

    if (hasSvgDirectly) {
      // Skip @size variants when the base icon directory exists
      if (entry.name.includes('@')) {
        const baseName = entry.name.replace(/@.*$/, '');
        const baseDir = path.join(dir, baseName);
        if (await hasSvgFiles(baseDir)) continue;
      }

      // This is an icon - store the relative path from category root
      const iconName = entry.name.replace(/@.*$/, '');
      const registryPath = basePath ? `${basePath}/${iconName}` : iconName;
      const sourceDir = basePath ? `${basePath}/${entry.name}` : entry.name;
      icons.push({ registryPath, sourceDir });
    } else {
      // Not an icon dir, recurse
      const newBasePath = basePath ? `${basePath}/${entry.name}` : entry.name;
      const subIcons = await collectIcons(fullPath, newBasePath);
      icons.push(...subIcons);
    }
  }

  return icons;
}

async function generateRegistryItems() {
  const categories = Object.keys(CATEGORY_MAP);
  let totalIcons = 0;

  for (const sourceCategory of categories) {
    const registryCategory = CATEGORY_MAP[sourceCategory];

    // Resolve actual directory name (case-sensitive filesystems like Vercel/Linux)
    // Git may store dirs as lowercase (e.g. 'vcs', 'general') while CATEGORY_MAP
    // keys are PascalCase (e.g. 'VCS', 'General'). Use fs.readdir to find the
    // actual on-disk name with correct casing.
    let categoryPath: string | null = null;
    let actualCategoryName: string | null = null;
    const parentEntries = await fs.readdir(ICONS_ROOT, { withFileTypes: true });
    for (const candidate of [sourceCategory, registryCategory]) {
      const match = parentEntries.find(
        (e) => e.isDirectory() && e.name === candidate,
      );
      if (match) {
        categoryPath = path.join(ICONS_ROOT, match.name);
        actualCategoryName = match.name;
        break;
      }
    }

    if (!categoryPath || !actualCategoryName) {
      console.warn(`Category not found: ${sourceCategory} or ${registryCategory}`);
      continue;
    }

    console.log(`\nProcessing: ${sourceCategory} -> ${registryCategory}`);

    // Collect all icons in this category
    const icons = await collectIcons(categoryPath, '');

    if (icons.length === 0) {
      console.log('  No icons found');
      continue;
    }

    console.log(`  Found ${icons.length} icons`);

    // Generate registry-item.json for each icon
    for (const icon of icons) {
      const iconDir = path.join(categoryPath, icon.sourceDir);
      const iconFiles = await fs.readdir(iconDir);
      const hasLight = iconFiles.some((f) => f.endsWith('_Theme-Light.svg'));
      const hasDark = iconFiles.some((f) => f.endsWith('_Theme-Dark.svg'));

      const iconNameKebab = icon.registryPath;
      const iconNamePascal = kebabToPascal(iconNameKebab);

      const registryItem = {
        $schema: 'https://ui.shadcn.com/schema/registry-item.json',
        name: `icons-${registryCategory}-${iconNameKebab}`,
        type: 'registry:ui',
        title: iconNamePascal,
        description: `${iconNamePascal} icon from ${registryCategory} category.`,
        registryDependencies: [],
        files: iconFiles
          .filter((f) => f.endsWith('.svg'))
          .map((f) => ({
            path: `registry/icons/${actualCategoryName}/${icon.sourceDir}/${f}`,
            type: 'registry:source',
          })),
        meta: {
          keywords: [iconNameKebab, 'icon', registryCategory, 'jetbrains'],
          hasLight,
          hasDark,
        },
      };

      const registryItemPath = path.join(iconDir, 'registry-item.json');
      await fs.writeFile(registryItemPath, JSON.stringify(registryItem, null, 2) + '\n');
      totalIcons++;
    }

    // Generate category-level registry-item.json
    const categoryRegistryItem = {
      $schema: 'https://ui.shadcn.com/schema/registry-item.json',
      name: `icons-${registryCategory}`,
      type: 'registry:ui',
      title: `${kebabToPascal(registryCategory)} Icons`,
      description: `All icons from the ${registryCategory} category.`,
      registryDependencies: [],
      files: icons.map((icon) => ({
        path: `registry/icons/${actualCategoryName}/${icon.sourceDir}/registry-item.json`,
        type: 'registry:item',
      })),
    };

    const categoryRegistryPath = path.join(categoryPath, 'registry-item.json');
    await fs.writeFile(categoryRegistryPath, JSON.stringify(categoryRegistryItem, null, 2) + '\n');
  }

  console.log(`\nDone! Total icons: ${totalIcons}`);
}

generateRegistryItems().catch((error) => {
  console.error(error);
  process.exit(1);
});
