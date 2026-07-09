import { escapeHtml } from '@workspace/ui/lib/escape-html';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkMdx from 'remark-mdx';
import { remarkInclude } from 'fumadocs-mdx/config';
import { source } from '@/lib/source';
import type { InferPageType } from 'fumadocs-core/source';
import fs from 'node:fs/promises';

const processor = remark()
  .use(remarkMdx)
  // needed for Fumadocs MDX
  .use(remarkInclude)
  .use(remarkGfm);

export async function getLLMText(page: InferPageType<typeof source>) {
  const processed = await processor.process({
    path: page.absolutePath,
    value: await fs.readFile(page.absolutePath),
  });

  const title = escapeHtml(String(page.data.title ?? '')).replace(
    /\r\n|\n|\r/g,
    ' ',
  );

  return `# ${title}
URL: ${page.url}

${processed.value}`;
}
