'use client';

import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { Languages } from '@workspace/ui/components/icons/system-icons';
import { cn } from '@workspace/ui/lib/utils';
import { LOCALE_COOKIE, type Locale } from '@/lib/i18n/shared';
import { useI18n } from '@/components/i18n-provider';

function setLocaleCookie(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

export function LocaleSwitcher({ className }: { className?: string }) {
  const { locale, messages } = useI18n();

  const applyLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return;
    setLocaleCookie(nextLocale);
    // Force a fresh request to avoid stale RSC cache when switching locales.
    window.location.reload();
  };

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-md border bg-background p-0.5',
        className,
      )}
      role="group"
      aria-label={messages.nav.language}
    >
      <Languages className="mx-1 size-3.5 text-fd-muted-foreground" />
      <button
        type="button"
        onClick={() => applyLocale('en')}
        className={cn(
          buttonVariants({
            color: 'ghost',
            size: 'sm',
            className: 'h-6 px-2 text-xs',
          }),
          locale === 'en' ? 'bg-fd-accent text-fd-accent-foreground' : '',
        )}
      >
        {messages.nav.english}
      </button>
      <button
        type="button"
        onClick={() => applyLocale('zh')}
        className={cn(
          buttonVariants({
            color: 'ghost',
            size: 'sm',
            className: 'h-6 px-2 text-xs',
          }),
          locale === 'zh' ? 'bg-fd-accent text-fd-accent-foreground' : '',
        )}
      >
        {messages.nav.chinese}
      </button>
    </div>
  );
}
