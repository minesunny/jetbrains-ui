import { promises as fs } from 'fs';
import path from 'path';
import { rimraf } from 'rimraf';

const REGISTRY_JSON_PATH = path.join(
  process.cwd(),
  'public',
  'r',
  'registry.json',
);

function replaceRegistryPaths(inputStr: string): string {
  return inputStr.replace(/(['"])([\s\S]*?)\1/g, (match, quote, content) => {
    if (content.startsWith('@/registry/')) {
      const rest = content.slice('@/registry/'.length);

      if (rest.startsWith('lib/')) {
        return `${quote}@/${rest}${quote}`;
      }

      if (rest.startsWith('hooks/')) {
        return `${quote}@/${rest}${quote}`;
      }

      if (rest.startsWith('components/')) {
        return `${quote}@/components/jetbrains-ui/${rest.slice(
          'components/'.length,
        )}${quote}`;
      }

      if (rest.startsWith('icons/')) {
        return `${quote}@/components/jetbrains-ui/icons/${rest.slice(
          'icons/'.length,
        )}${quote}`;
      }

      if (rest.startsWith('demo/components/')) {
        return `${quote}@/components/jetbrains-ui/demo/${rest.slice(
          'demo/components/'.length,
        )}${quote}`;
      }

      return `${quote}@/components/jetbrains-ui/${rest}${quote}`;
    }

    if (content.startsWith('@workspace/ui/')) {
      const rest = content.slice('@workspace/ui/'.length);
      return `${quote}@/${rest}${quote}`;
    }

    return match;
  });
}

function normalizeRegistryDependencies(
  itemName: string,
  registryDependencies: unknown,
) {
  if (!Array.isArray(registryDependencies)) {
    return undefined;
  }

  const seen = new Set<string>();
  const normalized: string[] = [];

  for (const rawDep of registryDependencies) {
    if (typeof rawDep !== 'string' || rawDep.length === 0) {
      continue;
    }

    let dep = rawDep;

    if (dep !== 'utils' && !dep.startsWith('@')) {
      dep = `@jetbrains-ui/${dep}`;
    }

    if (dep === `@jetbrains-ui/${itemName}` || seen.has(dep)) {
      continue;
    }

    seen.add(dep);
    normalized.push(dep);
  }

  return normalized.length > 0 ? normalized : undefined;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalizeRegistryItem(item: any) {
  if (!item || typeof item !== 'object') {
    return item;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const normalizedItem: any = { ...item };
  const normalizedDeps = normalizeRegistryDependencies(
    normalizedItem.name,
    normalizedItem.registryDependencies,
  );

  if (normalizedDeps) {
    normalizedItem.registryDependencies = normalizedDeps;
  } else {
    delete normalizedItem.registryDependencies;
  }

  return normalizedItem;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ensureUtilsRegistryDependency(
  registryDependencies: any,
  files: any[],
) {
  const deps = Array.isArray(registryDependencies)
    ? [...registryDependencies]
    : [];
  const usesUtils = files.some(
    (file) =>
      typeof file?.content === 'string' && file.content.includes('@/lib/utils'),
  );

  if (usesUtils && !deps.includes('utils')) {
    deps.unshift('utils');
  }

  return deps.length > 0 ? deps : undefined;
}

async function buildRegistryFile() {
  const registryJsonContent = await fs.readFile(REGISTRY_JSON_PATH, 'utf-8');
  const registryData = JSON.parse(registryJsonContent);
  const registryFolderPath = path.join(process.cwd(), 'registry');
  const newItems = (await getRegistryItemsFromFolder(registryFolderPath)).map(
    normalizeRegistryItem,
  );

  registryData.items = [
    normalizeRegistryItem({
      name: 'index',
      type: 'registry:style',
      dependencies: [
        'tw-animate-css',
        'class-variance-authority',
        'lucide-react',
      ],
      registryDependencies: ['utils'],
      cssVars: {},
      files: [],
    }),
    ...newItems,
  ];

  await fs.writeFile(REGISTRY_JSON_PATH, JSON.stringify(registryData, null, 2));
}

async function getRegistryItemsFromFolder(dir: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const items: any[] = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });

  const registryItemPath = path.join(dir, 'registry-item.json');

  try {
    await fs.access(registryItemPath);
    const content = await fs.readFile(registryItemPath, 'utf-8');
    const item = JSON.parse(content);

    if (item.$schema) {
      delete item.$schema;
    }

    items.push(item);
  } catch {
    // No registry-item.json at this level.
  }

  for (const entry of entries) {
    if (entry.isFile() && entry.name.endsWith('.registry.json')) {
      const fullPath = path.join(dir, entry.name);
      const content = await fs.readFile(fullPath, 'utf-8');
      const item = JSON.parse(content);

      if (item.$schema) {
        delete item.$schema;
      }

      items.push(item);
    }
  }

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const subItems = await getRegistryItemsFromFolder(
        path.join(dir, entry.name),
      );
      items.push(...subItems);
    }
  }

  return items;
}

async function buildRegistryIndex() {
  const registryJsonContent = await fs.readFile(REGISTRY_JSON_PATH, 'utf-8');
  const registryItems = JSON.parse(registryJsonContent);

  let index = `/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
// This file is autogenerated by scripts/build-registry.mts
// Do not edit this file directly.
import * as React from "react"

export const index: Record<string, any> = {`;

  const uniqueItemsMap = new Map<string, (typeof registryItems.items)[0]>();

  for (const item of registryItems.items) {
    if (uniqueItemsMap.has(item.name)) {
      console.warn(
        `Duplicate item name detected: ${item.name}. Overwriting previous entry.`,
      );
    }

    uniqueItemsMap.set(item.name, item);
  }

  for (const item of uniqueItemsMap.values()) {
    if (!item.files) {
      continue;
    }

    if (item.name.startsWith('icons-')) {
      continue;
    }

    console.log('Processing item:', item.name);

    const componentPath = item.files[0]?.path ? `@/${item.files[0].path}` : '';
    const filesWithContent = await Promise.all(
      item.files.map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        async (file: any) => {
          const filePath = typeof file === 'string' ? file : file.path;
          const resolvedFilePath = path.resolve(filePath);

          try {
            const content = await fs.readFile(resolvedFilePath, 'utf-8');
            const processedContent = replaceRegistryPaths(content).trim();

            return {
              path: filePath,
              type: file.type || 'unknown',
              target: file.target || '',
              content: processedContent,
            };
          } catch (error) {
            console.error(`Error reading file ${filePath}:`, error);
            return {
              path: filePath,
              type: file.type || 'unknown',
              target: file.target || '',
              content: '',
            };
          }
        },
      ),
    );
    const registryDependencies = ensureUtilsRegistryDependency(
      item.registryDependencies,
      filesWithContent,
    );

    index += `
  "${item.name}": {
    name: ${JSON.stringify(item.name)},
    description: ${JSON.stringify(item.description ?? '')},
    type: "${item.type}",
    dependencies: ${JSON.stringify(item.dependencies)},
    devDependencies: ${JSON.stringify(item.devDependencies)},
    registryDependencies: ${JSON.stringify(registryDependencies)},
    files: ${JSON.stringify(filesWithContent, null, 2)},
    keywords: ${JSON.stringify(item.meta?.keywords ?? [])},
    component: ${
      componentPath
        ? `(function() {
      const LazyComp = React.lazy(async () => {
        const mod = await import("${componentPath}");
        const exportName = Object.keys(mod).find(
          key => typeof mod[key] === 'function' || typeof mod[key] === 'object'
        ) || "${item.name}";
        const Comp = mod.default || mod[exportName];
        if (mod.animations) {
          (LazyComp as any).animations = mod.animations;
        }
        return { default: Comp };
      });
      LazyComp.demoProps = ${JSON.stringify(item?.meta?.demoProps ?? {})};
      return LazyComp;
    })()`
        : 'null'
    },
    command: '@jetbrains-ui/${item.name}',
  },`;
  }

  index += `
  }`;

  rimraf.sync(path.join(process.cwd(), '__registry__/index.tsx'));
  await fs.writeFile(path.join(process.cwd(), '__registry__/index.tsx'), index);
}

async function buildRegistry() {
  await fs.mkdir('public/r', { recursive: true });

  const entries = await fs.readdir('public/r');
  await Promise.all(
    entries.map(async (entry) => {
      if (entry === 'registry.json') {
        return;
      }

      const entryPath = path.join('public/r', entry);
      await fs.rm(entryPath, { recursive: true, force: true });
    }),
  );

  const registryContent = await fs.readFile(
    path.join(process.cwd(), 'public/r/registry.json'),
    'utf-8',
  );
  const registry = JSON.parse(registryContent);

  await Promise.all(
    registry.items.map(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      async (item: any) => {
        const normalizedItem = normalizeRegistryItem(item);
        const filesWithContent = await Promise.all(
          (normalizedItem.files ?? []).map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            async (file: any) => {
              const filePath = typeof file === 'string' ? file : file.path;
              const resolvedFilePath = path.resolve(filePath);

              let content = '';
              try {
                content = replaceRegistryPaths(
                  (await fs.readFile(resolvedFilePath, 'utf-8')).trim(),
                );
              } catch (error) {
                console.error(`Error reading file ${filePath}:`, error);
              }

              if (typeof file === 'string') {
                return {
                  path: filePath,
                  type: 'unknown',
                  target: '',
                  content,
                };
              }

              return {
                ...file,
                content,
              };
            },
          ),
        );
        const registryDependencies = ensureUtilsRegistryDependency(
          normalizedItem.registryDependencies,
          filesWithContent,
        );

        const filename = `${item.name}.json`;
        const filepath = path.join(process.cwd(), 'public/r', filename);
        await fs.writeFile(
          filepath,
          JSON.stringify(
            {
              ...normalizedItem,
              registryDependencies,
              files: filesWithContent,
            },
            null,
            2,
          ),
        );
      },
    ),
  );
}

try {
  console.log('Building merged registry file...');
  await buildRegistryFile();
  console.log('Building __registry__/index.tsx...');
  await buildRegistryIndex();
  console.log('Building public registry payloads...');
  await buildRegistry();
} catch (error) {
  console.error(error);
  process.exit(1);
}
