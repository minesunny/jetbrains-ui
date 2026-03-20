import { docs, docsZh } from '@/.source';
import { LucideIcons } from '@/registry/icons/general/lucide-icons';
import { attachFile } from '@/lib/attach-file';
import { attachSeparator } from '@/lib/attach-separator';
import JetBrainsUIIcon from '@workspace/ui/components/icons/jetbrainsui-icon';
import {
  loader,
  type InferMetaType,
  type InferPageType,
} from 'fumadocs-core/source';
import { icons } from 'lucide-react';
import { createElement } from 'react';
import type { Locale } from '@/lib/i18n/shared';

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  pageTree: {
    attachFile,
    attachSeparator,
  },
  icon(icon) {
    if (!icon) return;
    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
    if (icon === 'JetBrainsUIIcon') return createElement(JetBrainsUIIcon);
    if (icon === 'LucideIcons') return createElement(LucideIcons);
  },
});

export const sourceZh = loader({
  baseUrl: '/docs',
  source: docsZh.toFumadocsSource(),
  pageTree: {
    attachFile,
    attachSeparator,
  },
  icon(icon) {
    if (!icon) return;
    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
    if (icon === 'JetBrainsUIIcon') return createElement(JetBrainsUIIcon);
    if (icon === 'LucideIcons') return createElement(LucideIcons);
  },
});

export function getSource(locale: Locale) {
  return locale === 'zh' ? sourceZh : source;
}

export type Page = InferPageType<typeof source>;
export type Meta = InferMetaType<typeof source>;
