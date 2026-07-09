'use client';

import { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { DocsSidebar } from '@/components/docs/sidebar';
import { Nav } from '@/components/docs/nav';
import { DocsLayoutProps } from 'fumadocs-ui/layouts/docs';
import type { SidebarTabData } from '@/lib/sidebar';
import { renderSidebarTabs } from './sidebar-tabs';

export function ClientDocsLayout({
  docsLayoutProps,
  tabData,
  children,
}: {
  docsLayoutProps: DocsLayoutProps;
  tabData: SidebarTabData[];
  locale: string;
  children: ReactNode;
}) {
  const tabs = renderSidebarTabs(tabData);

  return (
    <DocsLayout
      {...docsLayoutProps}
      sidebar={{
        ...docsLayoutProps.sidebar,
        tabs,
        component: <DocsSidebar {...docsLayoutProps} />,
      }}
      nav={{
        component: <Nav />,
      }}
    >
      {children}
    </DocsLayout>
  );
}
