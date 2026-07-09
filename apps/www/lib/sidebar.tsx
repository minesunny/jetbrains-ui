import type { Locale } from '@/lib/i18n/shared';
import { getMessages } from '@/lib/i18n/shared';
import { index } from '@/__registry__';

export interface SidebarTabData {
  title: string;
  url: string;
  icon: string;
  count: number;
  beta?: boolean;
}

export function getSidebarTabData(locale: Locale): SidebarTabData[] {
  const messages = getMessages(locale);
  const componentsCount = Object.values(index).filter((item) =>
    item.name.startsWith('components-'),
  ).length;
  const primitivesCount = Object.values(index).filter((item) =>
    item.name.startsWith('primitives-'),
  ).length;

  return [
    {
      title: messages.docs.components,
      url: '/docs/components',
      icon: 'plugins/java-ee/component',
      count: componentsCount,
    },
    {
      title: messages.docs.primitives,
      url: '/docs/primitives',
      icon: 'general/general/layout',
      count: primitivesCount,
    },
    {
      title: messages.nav.icons,
      url: '/docs/icons',
      icon: 'general/general/search',
      count: 99,
      beta: true,
    },
  ];
}
