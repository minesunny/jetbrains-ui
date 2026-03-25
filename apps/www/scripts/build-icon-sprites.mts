import { promises as fs } from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { rimraf } from 'rimraf';

const appRoot = process.cwd();
const iconsRoot = path.join(appRoot, 'registry', 'icons');
const publicIconsRoot = path.join(appRoot, 'public', 'icons');
const schemaUrl = 'https://ui.shadcn.com/schema/registry-item.json';

(globalThis as { React?: typeof React }).React = React;

type SvgMode = 'light' | 'dark';

interface ParsedSvg {
  attributes: Map<string, string>;
  inner: string;
  source: string;
}

interface IconSource {
  mode: SvgMode;
  svg: ParsedSvg;
}

interface IconMeta {
  componentName: string;
  iconName: string;
  iconDir: string;
  iconDirRelative: string;
  collectionDir: string;
  collectionRelative: string;
  topCategory: string;
  viewBoxes: Record<SvgMode, string>;
  sources: Record<SvgMode, IconSource>;
  title: string;
}

interface CollectionMeta {
  collectionDir: string;
  collectionRelative: string;
  topCategory: string;
  title: string;
  icons: IconMeta[];
}

function toPosix(relativePath: string) {
  return relativePath.split(path.sep).join('/');
}

function withoutExtension(relativePath: string) {
  return relativePath.replace(/\.[^.]+$/, '');
}

function titleCase(input: string) {
  return input
    .split(/[-/]+/)
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ');
}

function compactComponentName(title: string | undefined | null) {
  if (!title) {
    return null;
  }

  const parts = title.match(/[A-Za-z0-9]+/g);

  if (!parts || parts.length === 0) {
    return null;
  }

  return parts.join('');
}

function unique<T>(values: T[]) {
  return Array.from(new Set(values));
}

function indent(input: string, spaces = 2) {
  const padding = ' '.repeat(spaces);

  return input
    .trim()
    .split('\n')
    .map((line) => `${padding}${line}`)
    .join('\n');
}

async function pathExists(targetPath: string) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function walkDirectories(rootDir: string): Promise<string[]> {
  const results: string[] = [rootDir];
  const entries = await fs.readdir(rootDir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }

    results.push(...(await walkDirectories(path.join(rootDir, entry.name))));
  }

  return results;
}

async function readJsonFile<T>(filePath: string): Promise<T | null> {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    return JSON.parse(content) as T;
  } catch {
    return null;
  }
}

function parseSvgMarkup(markup: string): ParsedSvg {
  const match = markup.match(/<svg\b([^>]*)>([\s\S]*)<\/svg>/i);

  if (!match) {
    throw new Error('Unable to parse rendered SVG markup.');
  }

  const [, rawAttributes, inner] = match;
  const attributes = new Map<string, string>();
  const attributeRegex = /([:@\w-]+)="([^"]*)"/g;

  for (const attributeMatch of rawAttributes.matchAll(attributeRegex)) {
    const [, name, value] = attributeMatch;

    if (
      name === 'width' ||
      name === 'height' ||
      name === 'class' ||
      name === 'className' ||
      name === 'role' ||
      name === 'aria-label' ||
      name === 'aria-hidden'
    ) {
      continue;
    }

    attributes.set(name, value);
  }

  if (!attributes.has('xmlns')) {
    attributes.set('xmlns', 'http://www.w3.org/2000/svg');
  }

  if (!attributes.has('viewBox')) {
    throw new Error('SVG is missing a viewBox.');
  }

  return {
    attributes,
    inner: inner.trim(),
    source: `<svg ${serializeAttributes(attributes)}>\n${indent(inner, 2)}\n</svg>\n`,
  };
}

function serializeAttributes(attributes: Map<string, string>) {
  return Array.from(attributes.entries())
    .map(([name, value]) => `${name}="${value}"`)
    .join(' ');
}

function extractSvgBlocksFromTsxSource(source: string) {
  const lightMatch = source.match(
    /const\s+\w+Light[\s\S]*?=>\s*\(\s*(<svg[\s\S]*?<\/svg>)\s*\);/,
  );
  const darkMatch = source.match(
    /const\s+\w+Dark[\s\S]*?=>\s*\(\s*(<svg[\s\S]*?<\/svg>)\s*\);/,
  );

  if (!lightMatch || !darkMatch) {
    throw new Error('Unable to extract light/dark SVG blocks from TSX source.');
  }

  return {
    light: lightMatch[1],
    dark: darkMatch[1],
  };
}

function convertJsxSvgToXml(jsxSvg: string) {
  const attributeMap: Record<string, string> = {
    className: 'class',
    fillRule: 'fill-rule',
    clipRule: 'clip-rule',
    strokeWidth: 'stroke-width',
    strokeLinecap: 'stroke-linecap',
    strokeLinejoin: 'stroke-linejoin',
    strokeMiterlimit: 'stroke-miterlimit',
    fillOpacity: 'fill-opacity',
    strokeOpacity: 'stroke-opacity',
    stopColor: 'stop-color',
    stopOpacity: 'stop-opacity',
    strokeDasharray: 'stroke-dasharray',
    strokeDashoffset: 'stroke-dashoffset',
    colorInterpolationFilters: 'color-interpolation-filters',
    floodOpacity: 'flood-opacity',
    floodColor: 'flood-color',
    clipPath: 'clip-path',
    xmlnsXlink: 'xmlns:xlink',
    xlinkHref: 'xlink:href',
    maskType: 'mask-type',
  };

  let result = jsxSvg
    .replace(/\{\s*title\s*\?\s*<title>\{title\}<\/title>\s*:\s*null\s*\}/g, '')
    .replace(/\{\s*title\s*&&\s*<title>\{title\}<\/title>\s*\}/g, '')
    .replace(/\s(?:width|height|className|role|aria-label|aria-hidden)=\{[^}]+\}/g, '')
    .replace(/=\{([^}]+)\}/g, '="$1"');

  for (const [reactAttribute, xmlAttribute] of Object.entries(attributeMap)) {
    result = result.replaceAll(`${reactAttribute}=`, `${xmlAttribute}=`);
  }

  return result;
}

function readComponentNameFromSource(source: string) {
  const match = source.match(/export const (\w+):/);

  return match?.[1] ?? null;
}

function buildSymbolMarkup(id: string, svg: ParsedSvg) {
  const symbolAttributes = new Map(svg.attributes);
  symbolAttributes.delete('xmlns');
  symbolAttributes.set('id', id);

  return `  <symbol ${serializeAttributes(symbolAttributes)}>\n${indent(
    svg.inner,
    4,
  )}\n  </symbol>`;
}

async function importTsxModule(modulePath: string) {
  const imported = await import(pathToFileURL(modulePath).href);
  const candidates = [imported, imported.default, imported['module.exports']];

  for (const candidate of candidates) {
    if (!candidate || typeof candidate !== 'object') {
      continue;
    }

    const entries = Object.entries(candidate).filter(
      ([name, value]) => !name.endsWith('Props') && typeof value === 'function',
    );

    if (entries.length > 0) {
      const [componentName, component] = entries[0];
      return {
        componentName,
        component: component as React.ComponentType<{
          mode?: SvgMode;
          size?: 'md';
        }>,
      };
    }
  }

  throw new Error(`Unable to resolve icon component from ${modulePath}`);
}

function renderComponentSvg(
  Component: React.ComponentType<{ mode?: SvgMode; size?: 'md' }>,
  mode: SvgMode,
) {
  return renderToStaticMarkup(
    React.createElement(Component, {
      mode,
      size: 'md',
    }),
  );
}

async function readExistingSvg(iconDir: string, iconName: string, mode: SvgMode) {
  const filePath = path.join(iconDir, `${iconName}_${mode}.svg`);
  const markup = await fs.readFile(filePath, 'utf8');

  return parseSvgMarkup(markup);
}

async function buildIconMeta(iconDir: string): Promise<IconMeta> {
  const iconDirRelative = toPosix(path.relative(iconsRoot, iconDir));
  const collectionDir = path.dirname(iconDir);
  const collectionRelative = toPosix(path.relative(iconsRoot, collectionDir));
  const topCategory = iconDirRelative.split('/')[0];
  const iconName = path.basename(iconDir);
  const iconRegistryItemPath = path.join(iconDir, 'registry-item.json');
  const iconRegistryItem =
    (await readJsonFile<{ title?: string }>(iconRegistryItemPath)) ?? {};
  const tsxPath = path.join(iconDir, 'index.tsx');

  let componentName =
    compactComponentName(iconRegistryItem.title) ??
    titleCase(iconName).replace(/\s+/g, '');
  let lightSvg: ParsedSvg;
  let darkSvg: ParsedSvg;

  if (await pathExists(tsxPath)) {
    try {
      const moduleData = await importTsxModule(tsxPath);
      componentName = moduleData.componentName;
      lightSvg = parseSvgMarkup(renderComponentSvg(moduleData.component, 'light'));
      darkSvg = parseSvgMarkup(renderComponentSvg(moduleData.component, 'dark'));
    } catch {
      const source = await fs.readFile(tsxPath, 'utf8');
      componentName = readComponentNameFromSource(source) ?? componentName;
      const svgBlocks = extractSvgBlocksFromTsxSource(source);
      lightSvg = parseSvgMarkup(convertJsxSvgToXml(svgBlocks.light));
      darkSvg = parseSvgMarkup(convertJsxSvgToXml(svgBlocks.dark));
    }
  } else {
    lightSvg = await readExistingSvg(iconDir, iconName, 'light');
    darkSvg = await readExistingSvg(iconDir, iconName, 'dark');
  }

  const lightViewBox = lightSvg.attributes.get('viewBox');
  const darkViewBox = darkSvg.attributes.get('viewBox');

  if (!lightViewBox || !darkViewBox) {
    throw new Error(`Missing viewBox for ${iconDirRelative}`);
  }

  return {
    componentName,
    iconName,
    iconDir,
    iconDirRelative,
    collectionDir,
    collectionRelative,
    topCategory,
    viewBoxes: {
      light: lightViewBox,
      dark: darkViewBox,
    },
    sources: {
      light: {
        mode: 'light',
        svg: lightSvg,
      },
      dark: {
        mode: 'dark',
        svg: darkSvg,
      },
    },
    title: iconRegistryItem.title ?? componentName,
  };
}

async function readIconOrder(indexPath: string) {
  if (!(await pathExists(indexPath))) {
    return [];
  }

  const content = await fs.readFile(indexPath, 'utf8');
  const order = Array.from(
    content.matchAll(/from '\.\/([^']+)'/g),
    (match) => match[1],
  );

  return unique(order);
}

async function readIconNameOrder(typesPath: string) {
  if (!(await pathExists(typesPath))) {
    return [];
  }

  const content = await fs.readFile(typesPath, 'utf8');
  const match = content.match(/export const iconNames = \[([\s\S]*?)\] as const;/);

  if (!match) {
    return [];
  }

  return Array.from(match[1].matchAll(/'([^']+)'/g), (item) => item[1]);
}

function sortByExistingOrder<T extends { iconName: string }>(
  values: T[],
  order: string[],
) {
  const orderMap = new Map(order.map((value, index) => [value, index]));

  return [...values].sort((left, right) => {
    const leftIndex = orderMap.get(left.iconName);
    const rightIndex = orderMap.get(right.iconName);

    if (leftIndex !== undefined && rightIndex !== undefined) {
      return leftIndex - rightIndex;
    }

    if (leftIndex !== undefined) {
      return -1;
    }

    if (rightIndex !== undefined) {
      return 1;
    }

    return left.componentName.localeCompare(right.componentName);
  });
}

async function writeFileIfChanged(filePath: string, content: string) {
  const normalized = content.endsWith('\n') ? content : `${content}\n`;

  await fs.mkdir(path.dirname(filePath), { recursive: true });

  const current = (await pathExists(filePath))
    ? await fs.readFile(filePath, 'utf8')
    : null;

  if (current === normalized) {
    return;
  }

  await fs.writeFile(filePath, normalized, 'utf8');
}

async function removeIfExists(filePath: string) {
  if (await pathExists(filePath)) {
    await fs.rm(filePath);
  }
}

function spritePublicPath(topCategory: string) {
  return `/icons/${topCategory}.svg`;
}

async function writeLeafAssets(icon: IconMeta) {
  const lightSvgPath = path.join(icon.iconDir, `${icon.iconName}_light.svg`);
  const darkSvgPath = path.join(icon.iconDir, `${icon.iconName}_dark.svg`);
  const indexTsPath = path.join(icon.iconDir, 'index.ts');
  const tsxPath = path.join(icon.iconDir, 'index.tsx');

  await writeFileIfChanged(lightSvgPath, icon.sources.light.svg.source);
  await writeFileIfChanged(darkSvgPath, icon.sources.dark.svg.source);
  await removeIfExists(tsxPath);
  await removeIfExists(indexTsPath);
}

function buildLeafRegistryItem(icon: IconMeta, collectionTitle: string) {
  return {
    $schema: schemaUrl,
    name: `icons-${icon.iconDirRelative.replace(/\//g, '-')}`,
    type: 'registry:ui',
    title: icon.title,
    description: `${icon.title} icon from ${collectionTitle.replace(/ Icons$/, '')} category.`,
    registryDependencies: [
      `icons-${icon.topCategory}-types`,
      'icons-components',
    ],
    files: [
      {
        path: `registry/icons/${icon.collectionRelative}/index.ts`,
        type: 'registry:ui',
        target: `components/jetbrains-ui/icons/${icon.collectionRelative}/index.ts`,
      },
      {
        path: `public/icons/${icon.topCategory}.svg`,
        type: 'registry:ui',
        target: `public/icons/${icon.topCategory}.svg`,
      },
    ],
    meta: {
      keywords: unique([
        icon.iconName,
        'icon',
        ...icon.collectionRelative.split('/'),
        'jetbrains',
      ]),
    },
  };
}

async function writeTopCategorySprite(topCategory: string, icons: IconMeta[]) {
  const spriteSymbols: string[] = [];

  for (const icon of icons) {
    spriteSymbols.push(
      buildSymbolMarkup(`${icon.iconName}_light`, icon.sources.light.svg),
      buildSymbolMarkup(`${icon.iconName}_dark`, icon.sources.dark.svg),
    );
  }

  const spriteContent = [
    '<svg xmlns="http://www.w3.org/2000/svg" style="display:none">',
    ...spriteSymbols,
    '</svg>',
  ].join('\n');

  const spriteFilePath = path.join(publicIconsRoot, `${topCategory}.svg`);

  await writeFileIfChanged(spriteFilePath, spriteContent);
}

async function writeCollectionIndex(collection: CollectionMeta) {
  const indexPath = path.join(collection.collectionDir, 'index.ts');
  const typesPath = collection.collectionRelative.includes('/')
    ? '../types'
    : './types';
  const lines: string[] = [
    "import type { FC } from 'react';",
    "import { createSpriteIcon } from '@/registry/components/icons';",
    `import type { IconProps } from '${typesPath}';`,
    '',
  ];

  for (const icon of collection.icons) {
    lines.push(
      `export type ${icon.componentName}Props = IconProps;`,
      '',
      `export const ${icon.componentName}: FC<${icon.componentName}Props> = createSpriteIcon({`,
      `  name: '${collection.collectionRelative}/${icon.iconName}',`,
      icon.viewBoxes.light === icon.viewBoxes.dark
        ? `  viewBox: '${icon.viewBoxes.light}',`
        : `  viewBox: { light: '${icon.viewBoxes.light}', dark: '${icon.viewBoxes.dark}' },`,
      `  displayName: '${icon.componentName}',`,
      '});',
      '',
    );
  }

  lines.push(`export { iconNames } from '${typesPath}';`);
  lines.push(
    `export type { IconName, IconMode, IconProps, IconSize } from '${typesPath}';`,
  );

  await writeFileIfChanged(indexPath, lines.join('\n'));
}

function buildCollectionRegistryItem(collection: CollectionMeta) {
  return {
    $schema: schemaUrl,
    name: `icons-${collection.collectionRelative.replace(/\//g, '-')}`,
    type: 'registry:ui',
    title: collection.title,
    description: `All ${collection.icons.length} icons from the ${collection.title.replace(
      / Icons$/,
      '',
    )} category.`,
    registryDependencies: [
      `icons-${collection.topCategory}-types`,
      'icons-components',
    ],
    files: [
      {
        path: `registry/icons/${collection.collectionRelative}/index.ts`,
        type: 'registry:ui',
        target: `components/jetbrains-ui/icons/${collection.collectionRelative}/index.ts`,
      },
      {
        path: `public/icons/${collection.topCategory}.svg`,
        type: 'registry:ui',
        target: `public/icons/${collection.topCategory}.svg`,
      },
    ],
    meta: {
      keywords: unique([
        'icons',
        ...collection.collectionRelative.split('/'),
        'jetbrains',
        'icon-pack',
      ]),
    },
  };
}

async function writeCollectionRegistryItem(collection: CollectionMeta) {
  const registryItemPath = path.join(collection.collectionDir, 'registry-item.json');
  const registryItem = buildCollectionRegistryItem(collection);

  await writeFileIfChanged(
    registryItemPath,
    JSON.stringify(registryItem, null, 2),
  );

  for (const icon of collection.icons) {
    const leafRegistryItem = buildLeafRegistryItem(icon, collection.title);
    await writeFileIfChanged(
      path.join(icon.iconDir, 'registry-item.json'),
      JSON.stringify(leafRegistryItem, null, 2),
    );
  }
}

function buildTypesFile(iconNames: string[]) {
  const iconNamesLiteral = iconNames.map((name) => `  '${name}',`).join('\n');

  return `export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type IconMode = 'light' | 'dark';

export interface IconProps {
  size?: IconSize;
  mode?: IconMode;
  className?: string;
  /** Accessible label for the icon */
  'aria-label'?: string;
  /** Title element for the icon tooltip */
  title?: string;
  [key: string]: any;
}

export interface SvgProps {
  size: number;
  className?: string;
  title?: string;
  role?: string;
  'aria-label'?: string;
  'aria-hidden'?: boolean;
}

export const sizeMap: Record<IconSize, number> = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
};

export const iconNames = [
${iconNamesLiteral}
] as const;

export type IconName = (typeof iconNames)[number];
`;
}

async function writeTopCategoryTypes(
  topCategory: string,
  icons: IconMeta[],
  existingOrder: string[],
) {
  const sorted = sortByExistingOrder(icons, existingOrder);
  const typesPath = path.join(iconsRoot, topCategory, 'types.ts');

  await writeFileIfChanged(
    typesPath,
    buildTypesFile(sorted.map((icon) => icon.iconName)),
  );

  const typesRegistryPath = path.join(iconsRoot, topCategory, 'types.registry.json');
  const typesRegistryItem = {
    $schema: schemaUrl,
    name: `icons-${topCategory}-types`,
    type: 'registry:ui',
    title: `${titleCase(topCategory)} Icons Types`,
    description: `Shared types and utilities for ${titleCase(
      topCategory,
    )} icon components.`,
    files: [
      {
        path: `registry/icons/${topCategory}/types.ts`,
        type: 'registry:ui',
        target: `components/jetbrains-ui/icons/${topCategory}/types.ts`,
      },
    ],
  };

  await writeFileIfChanged(
    typesRegistryPath,
    JSON.stringify(typesRegistryItem, null, 2),
  );
}

async function writeTopCategoryRegistryItem(
  topCategory: string,
  collections: CollectionMeta[],
) {
  if (collections.length <= 1 && collections[0]?.collectionRelative === topCategory) {
    return;
  }

  const registryItemPath = path.join(iconsRoot, topCategory, 'registry-item.json');
  const title = `${titleCase(topCategory)} Icons`;
  const files = collections.flatMap((collection) => [
    {
      path: `registry/icons/${collection.collectionRelative}/index.ts`,
      type: 'registry:ui' as const,
      target: `components/jetbrains-ui/icons/${collection.collectionRelative}/index.ts`,
    },
  ]);
  files.unshift({
    path: `public/icons/${topCategory}.svg`,
    type: 'registry:ui' as const,
    target: `public/icons/${topCategory}.svg`,
  });

  const registryItem = {
    $schema: schemaUrl,
    name: `icons-${topCategory}`,
    type: 'registry:ui',
    title,
    description: `All ${collections.reduce(
      (count, collection) => count + collection.icons.length,
      0,
    )} icons from the ${titleCase(topCategory)} category.`,
    registryDependencies: [`icons-${topCategory}-types`, 'icons-components'],
    files,
    meta: {
      keywords: ['icons', topCategory, 'jetbrains', 'icon-pack'],
    },
  };

  await writeFileIfChanged(
    registryItemPath,
    JSON.stringify(registryItem, null, 2),
  );
}

async function removeObsoleteRuntimeFiles() {
  await Promise.all(
    [
      path.join(iconsRoot, 'icon-registry.ts'),
      path.join(iconsRoot, 'icon.ts'),
      path.join(iconsRoot, 'runtime.registry.json'),
      path.join(iconsRoot, 'sprite-icon.ts'),
      path.join(iconsRoot, 'types.ts'),
    ].map(removeIfExists),
  );
}

async function collectLeafIconDirs() {
  const allDirs = await walkDirectories(iconsRoot);
  const iconDirs: string[] = [];

  for (const dir of allDirs) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const hasTsx = entries.some((entry) => entry.name === 'index.tsx');
    const hasRawSvg = entries.some(
      (entry) =>
        entry.isFile() &&
        (entry.name.endsWith('_light.svg') || entry.name.endsWith('_dark.svg')),
    );

    if (hasTsx || hasRawSvg) {
      iconDirs.push(dir);
    }
  }

  return iconDirs;
}

async function main() {
  await rimraf(publicIconsRoot);

  const iconDirs = await collectLeafIconDirs();
  const icons: IconMeta[] = [];

  for (const iconDir of iconDirs) {
    const icon = await buildIconMeta(iconDir);
    icons.push(icon);
  }

  const iconsByCollection = new Map<string, IconMeta[]>();

  for (const icon of icons) {
    const collectionIcons = iconsByCollection.get(icon.collectionRelative) ?? [];
    collectionIcons.push(icon);
    iconsByCollection.set(icon.collectionRelative, collectionIcons);
  }

  const collections: CollectionMeta[] = [];

  for (const [collectionRelative, collectionIcons] of iconsByCollection.entries()) {
    const collectionDir = path.join(iconsRoot, collectionRelative);
    const collectionRegistryItem =
      (await readJsonFile<{ title?: string }>(
        path.join(collectionDir, 'registry-item.json'),
      )) ?? {};
    const existingOrder = await readIconOrder(path.join(collectionDir, 'index.ts'));

    collections.push({
      collectionDir,
      collectionRelative,
      topCategory: collectionRelative.split('/')[0],
      title:
        collectionRegistryItem.title ??
        `${titleCase(collectionRelative.split('/').slice(-1)[0])} Icons`,
      icons: sortByExistingOrder(collectionIcons, existingOrder),
    });
  }

  collections.sort((left, right) =>
    left.collectionRelative.localeCompare(right.collectionRelative),
  );

  for (const icon of icons) {
    await writeLeafAssets(icon);
  }

  const iconsByTopCategory = new Map<string, IconMeta[]>();
  const collectionsByTopCategory = new Map<string, CollectionMeta[]>();

  for (const icon of icons) {
    const categoryIcons = iconsByTopCategory.get(icon.topCategory) ?? [];
    categoryIcons.push(icon);
    iconsByTopCategory.set(icon.topCategory, categoryIcons);
  }

  for (const collection of collections) {
    const categoryCollections =
      collectionsByTopCategory.get(collection.topCategory) ?? [];
    categoryCollections.push(collection);
    collectionsByTopCategory.set(collection.topCategory, categoryCollections);
  }

  for (const [topCategory, categoryIcons] of iconsByTopCategory.entries()) {
    await writeTopCategorySprite(topCategory, categoryIcons);

    const existingOrder = await readIconNameOrder(
      path.join(iconsRoot, topCategory, 'types.ts'),
    );
    await writeTopCategoryTypes(topCategory, categoryIcons, existingOrder);
  }

  for (const collection of collections) {
    await writeCollectionIndex(collection);
    await writeCollectionRegistryItem(collection);
  }

  for (const [topCategory, categoryCollections] of collectionsByTopCategory.entries()) {
    await writeTopCategoryRegistryItem(topCategory, categoryCollections);
  }

  await removeObsoleteRuntimeFiles();

  console.log(
    `Built ${icons.length} icons and ${iconsByTopCategory.size} sprite files.`,
  );
}

await main();
