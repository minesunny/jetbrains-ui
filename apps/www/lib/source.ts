import { docs, docsZh } from '@/.source';
import { attachFile } from '@/lib/attach-file';
import { attachSeparator } from '@/lib/attach-separator';
import JetBrainsUIIcon from '@/lib/jetbrains-ui-icon';
import {
  loader,
  type InferMetaType,
  type InferPageType,
} from 'fumadocs-core/source';
import { createElement } from 'react';
import type { Locale } from '@/lib/i18n/shared';
import {
  JavaEeComponentIcon,
  ColorsIcon,
} from '@/components/docs/icon-wrappers';
import { Search } from 'lucide-react';

const docsIcons = {
  Component: JavaEeComponentIcon,
  Palette: ColorsIcon,
} as const;

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  pageTree: {
    attachFile,
    attachSeparator,
  },
  icon(icon) {
    if (!icon) return;
    if (icon in docsIcons)
      return createElement(docsIcons[icon as keyof typeof docsIcons]);
    if (icon === 'JetBrainsUIIcon') return createElement(JetBrainsUIIcon);
    if (icon === 'LucideIcons') return createElement(Search);
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
    if (icon in docsIcons)
      return createElement(docsIcons[icon as keyof typeof docsIcons]);
    if (icon === 'JetBrainsUIIcon') return createElement(JetBrainsUIIcon);
    if (icon === 'LucideIcons') return createElement(Search);
  },
});

export function getSource(locale: Locale) {
  return locale === 'zh' ? sourceZh : source;
}

export type Page = InferPageType<typeof source>;
export type Meta = InferMetaType<typeof source>;
