import { docs, docsZh } from '@/.source';
import { LucideIcons } from '@/registry/icons/general/lucide-icons';
import { attachFile } from '@/lib/attach-file';
import { attachSeparator } from '@/lib/attach-separator';
import JetBrainsUIIcon from '@workspace/ui/components/icons/jetbrainsui-icon';
import {
  Component,
  Palette,
} from '@workspace/ui/components/icons/system-icons';
import {
  loader,
  type InferMetaType,
  type InferPageType,
} from 'fumadocs-core/source';
import { createElement } from 'react';
import type { Locale } from '@/lib/i18n/shared';

const docsIcons = {
  Component,
  Palette,
} as const;

function resolveIcon(icon: string | undefined) {
  if (!icon) {
    return;
  }

  if (icon in docsIcons) {
    return createElement(docsIcons[icon as keyof typeof docsIcons]);
  }

  if (icon === 'JetBrainsUIIcon') {
    return createElement(JetBrainsUIIcon);
  }

  if (icon === 'LucideIcons') {
    return createElement(LucideIcons);
  }
}

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  pageTree: {
    attachFile,
    attachSeparator,
  },
  icon: resolveIcon,
});

export const sourceZh = loader({
  baseUrl: '/docs',
  source: docsZh.toFumadocsSource(),
  pageTree: {
    attachFile,
    attachSeparator,
  },
  icon: resolveIcon,
});

export function getSource(locale: Locale) {
  return locale === 'zh' ? sourceZh : source;
}

export type Page = InferPageType<typeof source>;
export type Meta = InferMetaType<typeof source>;
