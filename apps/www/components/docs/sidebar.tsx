'use client';

import { cn } from '@workspace/ui/lib/utils';
import {
  Sidebar,
  SidebarComponents,
  SidebarFolder,
  SidebarFolderContent,
  SidebarFolderLink,
  SidebarFolderTrigger,
  SidebarFooter,
  SidebarItem,
  SidebarSeparator,
  SidebarViewport,
} from 'fumadocs-ui/components/layout/sidebar';
import { HideIfEmpty } from 'fumadocs-core/hide-if-empty';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { BaseLinkItem, LinkItemType } from 'fumadocs-ui/layouts/links';
import { DocsLayoutProps } from 'fumadocs-ui/layouts/docs';
import { Fragment, useMemo, useState } from 'react';
import { getLinks } from 'fumadocs-ui/layouts/shared';
import { ThemeSwitcher } from '../animate/theme-switcher';
import { PageTree } from 'fumadocs-core/server';
import { useTreeContext } from 'fumadocs-ui/provider';
import { usePathname } from 'next/navigation';
import { isActive } from 'fumadocs-ui/utils/is-active';
import { AnimatePresence, motion } from 'motion/react';
import { Separator } from '@/lib/attach-separator';
import { SquareMenu } from 'lucide-react';
import { useIsMobile } from '@workspace/ui/hooks/use-mobile';
import { useI18n } from '@/components/i18n-provider';
import { LocaleSwitcher } from '@/components/locale-switcher';

const sidebarItemClassName =
  'relative hover:bg-transparent !bg-transparent ml-2 !pl-4 data-[active=true]:bg-transparent';

const getIsActive = (pathname: string, href: string) => {
  return href !== undefined && isActive(href, pathname, false);
};

type SidebarSeparatorItem = {
  type: 'separator';
  icon?: React.ReactNode;
  name: string;
};

type SidebarLinkItemType = LinkItemType | SidebarSeparatorItem;

function isSidebarSeparatorItem(
  item: SidebarLinkItemType,
): item is SidebarSeparatorItem {
  return item.type === 'separator';
}

function isIconLinkItem(
  item: LinkItemType,
): item is Extract<LinkItemType, { type: 'icon' }> {
  return item.type === 'icon';
}

export function SidebarPageTree(props: {
  components?: Partial<SidebarComponents>;
}) {
  const { root } = useTreeContext();
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return useMemo(() => {
    const { Separator, Item, Folder } = props.components ?? {};

    function renderSidebarList(
      items: PageTree.Node[],
      level: number,
    ): React.ReactNode[] {
      return items.flatMap((item, i) => {
        if (item.type === 'separator') {
          if (Separator)
            return <Separator key={item.$id ?? `sep-${i}`} item={item} />;
          return (
            <SidebarSeparator
              key={item.$id ?? `sep-${i}`}
              className={cn(i === 0 ? 'mb-2 mt-4' : 'mb-2 mt-8')}
            >
              {item.icon}
              {item.name}
            </SidebarSeparator>
          );
        }

        if (item.type === 'folder') {
          if (Folder)
            return (
              <Folder key={item.$id ?? `folder-${i}`} item={item} level={level}>
                {renderSidebarList(item.children, level + 1)}
              </Folder>
            );
          const folderUrl = item.index?.url;
          if (folderUrl) {
            const isFolderActive = getIsActive(pathname, folderUrl);
            const isFolderHovered = hoveredItem === folderUrl;
            const folderNode = (
              <SidebarItem
                key={`${folderUrl}-index`}
                title={item.name as string}
                href={folderUrl}
                className={cn(sidebarItemClassName, level > 1 && 'ml-6')}
                onMouseEnter={() => setHoveredItem(folderUrl)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="h-full w-px bg-border absolute left-[9px] inset-y-0" />
                <AnimatePresence initial={false} mode="wait">
                  {isFolderActive && (
                    <motion.span
                      layoutId="sidebar-item-active-indicator"
                      className="pointer-events-none absolute z-11 left-[8px] top-1/2 h-[56%] w-[3px] -translate-y-1/2 rounded-full bg-primary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 35,
                      }}
                    />
                  )}
                </AnimatePresence>
                <AnimatePresence initial={false} mode="wait">
                  {isFolderHovered && (
                    <motion.span
                      layoutId="sidebar-item-hover-indicator"
                      className="pointer-events-none absolute z-10 left-[8px] top-1/2 h-[56%] w-[3px] -translate-y-1/2 rounded-full dark:bg-neutral-600 bg-neutral-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 35,
                      }}
                    />
                  )}
                </AnimatePresence>
                <motion.span
                  className={cn(
                    'text-sm w-full pl-[12px] text-neutral-700 dark:text-neutral-200',
                    (isFolderActive || isFolderHovered) &&
                      'text-black dark:text-white',
                  )}
                  animate={{ x: isFolderHovered || isFolderActive ? 3 : 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                >
                  {item.name as string}
                </motion.span>
              </SidebarItem>
            );

            if (item.children.length === 0) return folderNode;
            const isInsideFolder =
              pathname === folderUrl || pathname.startsWith(`${folderUrl}/`);
            const isIconsFolder = folderUrl.startsWith('/docs/icons');
            const shouldRenderChildren = !isIconsFolder || isInsideFolder;

            if (!shouldRenderChildren) return folderNode;

            return (
              <Fragment key={folderUrl}>
                {folderNode}
                {renderSidebarList(item.children, level + 1)}
              </Fragment>
            );
          }
          // Folder without index page: inline its children
          return renderSidebarList(item.children, level + 1);
        }

        if (Item) return <Item key={item.url} item={item} />;

        const url = item.url;
        const isActive = getIsActive(pathname, url);
        const isHovered = hoveredItem === url;

        return (
          <SidebarItem
            key={url}
            title={item.name as string}
            href={url}
            className={cn(sidebarItemClassName, level > 1 && 'ml-6')}
            onMouseEnter={() => setHoveredItem(url)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span className="h-full w-px bg-border absolute left-[9px] inset-y-0" />

            <AnimatePresence initial={false} mode="wait">
              {isActive && (
                <motion.span
                  layoutId="sidebar-item-active-indicator"
                  className="pointer-events-none absolute z-11 left-[8px] top-1/2 h-[56%] w-[3px] -translate-y-1/2 rounded-full bg-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 35,
                  }}
                />
              )}
            </AnimatePresence>

            <AnimatePresence initial={false} mode="wait">
              {isHovered && (
                <motion.span
                  layoutId="sidebar-item-hover-indicator"
                  className="pointer-events-none absolute z-10 left-[8px] top-1/2 h-[56%] w-[3px] -translate-y-1/2 rounded-full dark:bg-neutral-600 bg-neutral-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 35,
                  }}
                />
              )}
            </AnimatePresence>

            <motion.span
              className={cn(
                'text-sm w-full pl-[12px] text-neutral-700 dark:text-neutral-200',
                (isActive || isHovered) && 'text-black dark:text-white',
              )}
              animate={{
                x: isHovered || isActive ? 3 : 0,
              }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 20,
              }}
            >
              {item.name as string}
            </motion.span>
          </SidebarItem>
        );
      });
    }

    return (
      <Fragment key={root.$id}>{renderSidebarList(root.children, 1)}</Fragment>
    );
  }, [props.components, root, hoveredItem, pathname]);
}

export function SidebarLinkItem({
  item,
  ...props
}: {
  item: SidebarLinkItemType;
  className?: string;
}) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathname = usePathname();

  if (item.type === 'menu')
    return (
      <SidebarFolder {...props}>
        {item.url ? (
          <SidebarFolderLink href={item.url}>
            {item.icon}
            {item.text}
          </SidebarFolderLink>
        ) : (
          <SidebarFolderTrigger>
            {item.icon}
            {item.text}
          </SidebarFolderTrigger>
        )}
        <SidebarFolderContent>
          {item.items.map((child, i) => (
            <SidebarLinkItem key={i} item={child} />
          ))}
        </SidebarFolderContent>
      </SidebarFolder>
    );

  if (item.type === 'custom') {
    return <div {...props}>{item.children as React.ReactNode}</div>;
  }

  if (isSidebarSeparatorItem(item)) {
    return (
      <SidebarSeparator className={cn('mb-2', props.className, '!pl-0')}>
        <Separator icon={item.icon} name={item.name} />
      </SidebarSeparator>
    );
  }

  const isHovered = hoveredItem === item.url;
  const isActive = getIsActive(pathname, item.url);

  return (
    <SidebarItem
      href={item.url}
      icon={item.icon}
      external={item.external}
      className={sidebarItemClassName}
      onMouseEnter={() => setHoveredItem(item.url)}
      onMouseLeave={() => setHoveredItem(null)}
      {...props}
    >
      <span className="h-full w-px bg-border absolute left-[9px] inset-y-0" />

      <AnimatePresence initial={false} mode="wait">
        {isActive && (
          <motion.span
            layoutId="sidebar-item-active-indicator"
            className="pointer-events-none absolute z-11 left-[8px] top-1/2 h-[56%] w-[3px] -translate-y-1/2 rounded-full bg-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 35,
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence initial={false} mode="wait">
        {isHovered && (
          <motion.span
            layoutId="sidebar-item-hover-indicator"
            className="pointer-events-none absolute z-10 left-[8px] top-1/2 h-[56%] w-[3px] -translate-y-1/2 rounded-full dark:bg-neutral-600 bg-neutral-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 35,
            }}
          />
        )}
      </AnimatePresence>

      <motion.span
        className={cn(
          'text-sm w-full pl-[12px] text-neutral-700 dark:text-neutral-200',
          (isActive || isHovered) && 'text-black dark:text-white',
        )}
        animate={{
          x: isHovered || isActive ? 3 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
        }}
      >
        {item.text as string}
      </motion.span>
    </SidebarItem>
  );
}

export const DocsSidebar = ({
  sidebar: {
    tabs: sidebarTabs,
    footer: sidebarFooter,
    components: sidebarComponents,
    ...sidebarProps
  } = {},
  ...props
}: DocsLayoutProps) => {
  void sidebarTabs;
  const { messages } = useI18n();
  const pathname = usePathname();
  const links = getLinks(props.links ?? [], props.githubUrl);
  const menuItems = [
    {
      name: messages.menu.menu,
      type: 'separator',
      icon: <SquareMenu />,
    },
    {
      text: messages.nav.components,
      url: '/docs/components',
    },
    {
      text: messages.nav.icons,
      url: '/docs/icons',
    },
  ];

  const isMenu =
    !pathname.startsWith('/docs/primitives') &&
    !pathname.startsWith('/docs/components') &&
    !pathname.startsWith('/docs/icons');
  const isMobile = useIsMobile();

  return (
    <>
      <Sidebar
        collapsible={false}
        className="md:mt-20 3xl:!absolute"
        {...sidebarProps}
      >
        <SidebarViewport className="md:[&_[data-radix-scroll-area-viewport]]:pb-14 [&_[data-radix-scroll-area-viewport]]:pb-4 max-md:pt-2">
          {links
            .filter((v) => v.type !== 'icon')
            .map((item, i, list) => (
              <SidebarLinkItem
                key={i}
                item={item}
                className={cn(
                  item.type !== 'custom' && sidebarItemClassName,
                  i === list.length - 1 && 'mb-4',
                )}
              />
            ))}

          {isMobile && (
            <div>
              {menuItems.map((item, i) => (
                <SidebarLinkItem
                  key={i}
                  item={item as LinkItemType}
                  className={cn(
                    sidebarItemClassName,
                    i === 0 && 'mt-4',
                    i === menuItems.length - 1 && 'mb-4',
                  )}
                />
              ))}
            </div>
          )}

          {((!isMenu && isMobile) || !isMobile) && (
            <SidebarPageTree components={sidebarComponents} />
          )}
        </SidebarViewport>

        <HideIfEmpty>
          <SidebarFooter className="data-[empty=true]:hidden md:hidden border-0">
            <div className="flex items-center justify-end empty:hidden">
              {links.filter(isIconLinkItem).map((item, i, arr) => (
                <BaseLinkItem
                  key={i}
                  item={item}
                  className={cn(
                    buttonVariants({ size: 'icon', color: 'ghost' }),
                    'text-fd-muted-foreground md:[&_svg]:size-4.5',
                    i === arr.length - 1 && 'me-auto',
                  )}
                  aria-label={item.label}
                >
                  {item.icon}
                </BaseLinkItem>
              ))}

              <ThemeSwitcher />
              <LocaleSwitcher />
            </div>
            {sidebarFooter}
          </SidebarFooter>
        </HideIfEmpty>
      </Sidebar>
    </>
  );
};
