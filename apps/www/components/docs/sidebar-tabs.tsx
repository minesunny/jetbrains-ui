'use client';

import { cn } from '@workspace/ui/lib/utils';
import { Dancing_Script } from 'next/font/google';
import { SVG } from '@/registry/components/svg';
import { Search } from 'lucide-react';
import type { SidebarTabData } from '@/lib/sidebar';

const dancing = Dancing_Script({ subsets: ['latin'] });

const TabsDescription = ({
  title,
  count,
}: {
  title: string;
  count: number;
}) => {
  return (
    <span className="flex items-center flex-row gap-2">
      <span>{title}</span>
      <span className="pt-0.5 pb-px px-1.5 font-semibold rounded-full bg-foreground/10 text-[10px] text-foreground/50">
        {count}
      </span>
    </span>
  );
};

export function renderSidebarTabs(tabs: SidebarTabData[]) {
  return tabs.map((tab) => ({
    title: tab.beta ? (
      <span>
        {tab.title}{' '}
        <span
          className={cn(
            dancing.className,
            'text-sm ml-2 text-blue-600 dark:text-blue-400',
          )}
        >
          beta
        </span>
      </span>
    ) : (
      tab.title
    ),
    description: <TabsDescription title={tab.title} count={tab.count} />,
    icon: (
      <div className="[&_svg]:size-full rounded-lg size-full text-muted-foreground max-md:bg-(--tab-color)/10 max-md:border max-md:p-1.5">
        {tab.icon === 'general/general/search' ? (
          <Search />
        ) : (
          <SVG name={tab.icon} />
        )}
      </div>
    ),
    url: tab.url,
  }));
}
