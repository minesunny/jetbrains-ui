/**
 * Build-time script that scans the real project directory and generates
 * a static TypeScript module with file tree structure + file contents.
 *
 * Run:  tsx ./scripts/generate-project-data.ts
 * Output: registry/demo/components/idea-window/project-data.ts
 */

import { promises as fs } from 'fs';
import path from 'path';

// ─── Configuration ──────────────────────────────────────────

const PROJECT_ROOT = path.resolve(__dirname, '../../../packages');
const OUTPUT_PATH = path.resolve(
  __dirname,
  '../registry/demo/components/idea-window/project-data.ts',
);

const EXCLUDED_DIRS = new Set([
  'node_modules',
  '.next',
  '.git',
  '__registry__',
  '.pnpm-store',
  '.turbo',
  '.source',
  '.claude',
  '.cursor',
  '.cache',
  '.husky',
  'dist',
]);

const EXCLUDED_FILE_PATTERNS = [
  /\.log$/,
  /\.tsbuildinfo$/,
  /DS_Store$/,
  /pnpm-lock\.yaml$/,
];

// Only include text-based source files (skip binaries, images, fonts, etc.)
const ALLOWED_EXTENSIONS = new Set([
  '.ts',
  '.tsx',
  '.js',
  '.mjs',
  '.cjs',
  '.css',
  '.json',
  '.md',
  '.mdx',
  '.html',
  '.yaml',
  '.yml',
  '.sh',
  '.bash',
  '.xml',
  '.svg',
  '.txt',
  '.gitignore',
  '.eslintignore',
  '.prettierrc',
  '.env.example',
]);

const MAX_FILE_SIZE = 30 * 1024; // 30KB

const EXT_TO_MODE: Record<string, string> = {
  '.ts': 'typescript',
  '.tsx': 'typescript',
  '.js': 'javascript',
  '.mjs': 'javascript',
  '.cjs': 'javascript',
  '.css': 'css',
  '.json': 'json',
  '.md': 'markdown',
  '.mdx': 'markdown',
  '.html': 'html',
  '.yaml': 'yaml',
  '.yml': 'yaml',
  '.sh': 'sh',
  '.bash': 'sh',
  '.xml': 'xml',
};

// ─── Types (mirroring the generated output) ─────────────────

interface TreeNode {
  id: string;
  label: string;
  isFolder: boolean;
  children?: string[];
}

interface FileEntry {
  path: string;
  mode: string;
  content: string;
}

// ─── Scanner ────────────────────────────────────────────────

function getAceMode(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();
  return EXT_TO_MODE[ext] ?? 'text';
}

function isExcludedFile(fileName: string): boolean {
  return EXCLUDED_FILE_PATTERNS.some((p) => p.test(fileName));
}

async function scanDir(
  dirPath: string,
  relativeTo: string,
): Promise<{
  nodes: Record<string, TreeNode>;
  files: Record<string, FileEntry>;
}> {
  const nodes: Record<string, TreeNode> = {};
  const files: Record<string, FileEntry> = {};
  const childMap: Record<string, string[]> = {};

  async function walk(currentPath: string, parentId: string | null) {
    const entries = await fs.readdir(currentPath, { withFileTypes: true });

    // Sort: folders first, then files, alphabetical within each group
    const sorted = entries.sort((a, b) => {
      if (a.isDirectory() && !b.isDirectory()) return -1;
      if (!a.isDirectory() && b.isDirectory()) return 1;
      return a.name.localeCompare(b.name);
    });

    for (const entry of sorted) {
      const name = entry.name;

      // Skip excluded dirs
      if (entry.isDirectory() && EXCLUDED_DIRS.has(name)) continue;
      // Skip excluded files
      if (isExcludedFile(name)) continue;

      const fullPath = path.join(currentPath, name);
      const relativePath = path.relative(relativeTo, fullPath);

      if (entry.isDirectory()) {
        const nodeId = relativePath;
        nodes[nodeId] = { id: nodeId, label: name, isFolder: true };
        if (parentId) {
          childMap[parentId] = [...(childMap[parentId] ?? []), nodeId];
        }
        await walk(fullPath, nodeId);
      } else {
        const ext = path.extname(name).toLowerCase();
        const baseName = name.toLowerCase();

        // Skip binary/non-text files entirely (don't even add to tree)
        if (!ALLOWED_EXTENSIONS.has(ext) && !ALLOWED_EXTENSIONS.has(baseName))
          continue;

        // Check file size
        const stat = await fs.stat(fullPath);
        if (stat.size > MAX_FILE_SIZE) continue;

        const nodeId = relativePath;
        nodes[nodeId] = { id: nodeId, label: name, isFolder: false };

        if (parentId) {
          childMap[parentId] = [...(childMap[parentId] ?? []), nodeId];
        }

        // Read file content
        try {
          const content = await fs.readFile(fullPath, 'utf-8');
          files[relativePath] = {
            path: relativePath,
            mode: getAceMode(name),
            content,
          };
        } catch {
          // Skip files we can't read (binary, permissions, etc.)
        }
      }
    }
  }

  await walk(dirPath, null);

  // Attach children arrays to folder nodes
  for (const [parentId, children] of Object.entries(childMap)) {
    if (nodes[parentId]) {
      nodes[parentId].children = children;
    }
  }

  return { nodes, files };
}

// ─── Code generator ─────────────────────────────────────────

function escapeForTemplateLiteral(str: string): string {
  return str.replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

function generateModule(
  rootId: string,
  nodes: Record<string, TreeNode>,
  files: Record<string, FileEntry>,
): string {
  const lines: string[] = [
    '// Auto-generated by generate-project-data.ts — DO NOT EDIT',
    '',
    'export interface TreeNode {',
    '  id: string;           // relative path from project root',
    '  label: string;        // filename or directory name',
    '  isFolder: boolean;',
    '  children?: string[];  // child IDs',
    '}',
    '',
    'export interface FileEntry {',
    '  path: string;         // relative path',
    '  mode: string;         // Ace mode (typescript, css, json, etc.)',
    '  content: string;      // file content',
    '}',
    '',
    `export const rootId = ${JSON.stringify(rootId)} as const;`,
    '',
  ];

  // treeNodes
  lines.push('export const treeNodes: Record<string, TreeNode> = {');
  for (const [id, node] of Object.entries(nodes)) {
    const nodeObj: Record<string, unknown> = {
      id: node.id,
      label: node.label,
      isFolder: node.isFolder,
    };
    if (node.children) {
      nodeObj.children = node.children;
    }
    lines.push(`  ${JSON.stringify(id)}: ${JSON.stringify(nodeObj)},`);
  }
  lines.push('};');
  lines.push('');

  // fileContents
  lines.push('export const fileContents: Record<string, FileEntry> = {');
  for (const [filePath, entry] of Object.entries(files)) {
    lines.push(`  ${JSON.stringify(filePath)}: {`);
    lines.push(`    path: ${JSON.stringify(entry.path)},`);
    lines.push(`    mode: ${JSON.stringify(entry.mode)},`);
    lines.push(`    content: \`${escapeForTemplateLiteral(entry.content)}\`,`);
    lines.push('  },');
  }
  lines.push('};');
  lines.push('');

  return lines.join('\n');
}

// ─── Main ───────────────────────────────────────────────────

async function main() {
  console.log('Scanning packages directory:', PROJECT_ROOT);

  const rootLabel = 'packages';
  const rootId = rootLabel;

  const { nodes, files } = await scanDir(PROJECT_ROOT, PROJECT_ROOT);

  // Add root node
  const rootChildren = Object.keys(nodes).filter(
    (id) => !id.includes(path.sep),
  );
  nodes[rootId] = {
    id: rootId,
    label: rootLabel,
    isFolder: true,
    children: rootChildren,
  };

  const output = generateModule(rootId, nodes, files);

  // Ensure output directory exists
  const outputDir = path.dirname(OUTPUT_PATH);
  await fs.mkdir(outputDir, { recursive: true });

  await fs.writeFile(OUTPUT_PATH, output, 'utf-8');

  const folderCount = Object.values(nodes).filter((n) => n.isFolder).length;
  const fileCount = Object.values(nodes).filter((n) => !n.isFolder).length;
  const contentFileCount = Object.keys(files).length;
  const outputSize = (output.length / 1024).toFixed(0);

  console.log(
    `Generated: ${folderCount} folders, ${fileCount} files (${contentFileCount} with content)`,
  );
  console.log(`Output: ${OUTPUT_PATH} (${outputSize}KB)`);
}

main().catch((err) => {
  console.error('Failed to generate project data:', err);
  process.exit(1);
});
