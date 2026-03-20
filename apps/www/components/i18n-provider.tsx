'use client';

import type { I18nMessages, Locale } from '@/lib/i18n/shared';
import { createContext, useContext, type ReactNode } from 'react';

type I18nContextValue = {
  locale: Locale;
  messages: I18nMessages;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  locale,
  messages,
  children,
}: I18nContextValue & { children: ReactNode }) {
  return (
    <I18nContext.Provider value={{ locale, messages }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used inside <I18nProvider />');
  }
  return context;
}
