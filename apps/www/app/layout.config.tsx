import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookOpen } from '@workspace/ui/components/icons/system-icons';
import { getMessages, type Locale } from '@/lib/i18n/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function getBaseOptions(locale: Locale): BaseLayoutProps {
  const messages = getMessages(locale);

  return {
    links: [
      {
        type: 'separator',
        name: messages.guide.title,
        icon: <BookOpen fill="currentColor" strokeWidth={2.5} />,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any,
      {
        text: messages.guide.introduction,
        url: '/docs',
        secondary: false,
      },
      {
        text: messages.guide.installation,
        url: '/docs/installation',
        secondary: false,
      },
      {
        text: messages.guide.accessibility,
        url: '/docs/accessibility',
        secondary: false,
      },
      {
        text: messages.guide.mcp,
        url: '/docs/mcp',
        secondary: false,
      },
      {
        text: messages.guide.troubleshooting,
        url: '/docs/troubleshooting',
        secondary: false,
      },
      {
        text: messages.guide.changelog,
        url: '/docs/changelog',
        secondary: false,
      },
      {
        text: messages.guide.roadmap,
        url: '/docs/roadmap',
        secondary: false,
      },
    ],
  };
}

export const baseOptions: BaseLayoutProps = getBaseOptions('en');
