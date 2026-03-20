import { RootProvider } from 'fumadocs-ui/provider';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Outfit } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import './globals.css';
import { jsonLd } from '@/lib/json-ld';
import { cn } from '@workspace/ui/lib/utils';
import { getServerLocale } from '@/lib/i18n/server';
import { getMessages } from '@/lib/i18n/shared';
import { I18nProvider } from '@/components/i18n-provider';

export const metadata: Metadata = {
  metadataBase: new URL('https://jetbrains-ui.maien.site'),
  title: {
    template: '%s - JetBrains UI',
    default: 'JetBrains UI - React Components',
  },
  description:
    'Open-source component distribution built with React, TypeScript, Tailwind CSS, Motion and Shadcn CLI. Browse a list of components you can install, modify, and use in your projects.',
  keywords: [
    'JetBrains UI',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'Open-source components',
    'UI components',
    'UI library',
  ],
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
  ],
  authors: [
    {
      name: 'minesunny',
      url: 'https://github.com/minesunny',
    },
  ],
  publisher: 'JetBrains UI',
  openGraph: {
    title: 'JetBrains UI',
    description:
      'Open-source component distribution built with React, TypeScript, Tailwind CSS, Motion and Shadcn CLI. Browse a list of components you can install, modify, and use in your projects.',
    url: 'https://jetbrains-ui.maien.site',
    siteName: 'JetBrains UI',
    images: [
      {
        url: 'https://jetbrains-ui.maien.site/og-image.png',
        width: 1200,
        height: 630,
        alt: 'JetBrains UI',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@minesunny',
    title: 'JetBrains UI',
    description:
      'Open-source component distribution built with React, TypeScript, Tailwind CSS, Motion and Shadcn CLI. Browse a list of components you can install, modify, and use in your projects.',
    images: [
      {
        url: 'https://jetbrains-ui.maien.site/og-image.png',
        width: 1200,
        height: 630,
        alt: 'JetBrains UI',
      },
    ],
  },
};

const outfit = Outfit({ subsets: ['latin'] });

export default async function Layout({ children }: { children: ReactNode }) {
  const locale = await getServerLocale();
  const messages = getMessages(locale);

  return (
    <html lang={locale} className={outfit.className} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body
        className={cn(
          'flex flex-col min-h-screen',
          // Allows to make more attractive video recordings
          // 'screenshot-mode',
        )}
      >
        <RootProvider>
          <I18nProvider locale={locale} messages={messages}>
            <NuqsAdapter>{children}</NuqsAdapter>
          </I18nProvider>
        </RootProvider>
      </body>
    </html>
  );
}
