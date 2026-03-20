import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { DocsSidebar } from '@/components/docs/sidebar';
import { DocsLayoutProps } from 'fumadocs-ui/layouts/docs';
import { getBaseOptions } from '@/app/layout.config';
import { getSource } from '@/lib/source';
import { ThemeSwitcher } from '@/components/animate/theme-switcher';
import { VirtualScrollbar } from '@/components/docs/virtual-scrollbar';

import { SIDEBAR_TABS } from '@/lib/sidebar';
import { Nav } from '@/components/docs/nav';
import { getServerLocale } from '@/lib/i18n/server';
import type { Locale } from '@/lib/i18n/shared';

function createDocsLayoutProps(locale: Locale): DocsLayoutProps {
  const baseOptions = getBaseOptions(locale);
  const docsSource = getSource(locale);

  return {
    tree: docsSource.pageTree,
    sidebar: {
      tabs: SIDEBAR_TABS,
    },
    githubUrl: 'https://github.com/minesunny/jetbrains-ui',
    themeSwitch: {
      component: <ThemeSwitcher />,
    },
    ...baseOptions,
    links: [...(baseOptions.links || [])],
  };
}

export default async function Layout({ children }: { children: ReactNode }) {
  const locale = await getServerLocale();
  const docsLayoutProps = createDocsLayoutProps(locale);

  return (
    <>
      <DocsLayout
        {...docsLayoutProps}
        sidebar={{
          component: <DocsSidebar {...docsLayoutProps} />,
        }}
        nav={{
          component: <Nav />,
        }}
      >
        {children}
      </DocsLayout>
      <VirtualScrollbar />
    </>
  );
}
