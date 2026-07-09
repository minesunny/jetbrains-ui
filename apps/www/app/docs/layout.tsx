import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { DocsSidebar } from '@/components/docs/sidebar';
import { DocsLayoutProps } from 'fumadocs-ui/layouts/docs';
import { getBaseOptions } from '@/app/layout.config';
import { getSource } from '@/lib/source';
import { ThemeSwitcher } from '@/components/animate/theme-switcher';
import { VirtualScrollbar } from '@/components/docs/virtual-scrollbar';
import { getSidebarTabData } from '@/lib/sidebar';
import { Nav } from '@/components/docs/nav';
import { getServerLocale } from '@/lib/i18n/server';
import type { Locale } from '@/lib/i18n/shared';
import { ClientDocsLayout } from '@/components/docs/client-layout';

function createDocsLayoutProps(locale: Locale): DocsLayoutProps {
  const baseOptions = getBaseOptions(locale);
  const docsSource = getSource(locale);

  return {
    tree: docsSource.pageTree,
    sidebar: {},
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
  const tabData = getSidebarTabData(locale);

  return (
    <ClientDocsLayout
      docsLayoutProps={docsLayoutProps}
      tabData={tabData}
      locale={locale}
    >
      {children}
      <VirtualScrollbar />
    </ClientDocsLayout>
  );
}
