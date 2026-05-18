'use client';

import { type ReactNode, useMemo } from 'react';
import type {
  DeepPartial,
  JetBrainsLocaleMessages,
} from '@/registry/locales/types';
import { builtinLocales, deepMerge } from '@/registry/locales';
import { LocaleContext } from './use-locale';

// ---------------------------------------------------------------------------
// JetBrainsUIProvider
// ---------------------------------------------------------------------------

export interface JetBrainsUIProviderProps {
  children: ReactNode;
  /** Locale code, e.g. 'en', 'zh-CN' */
  locale?: string;
  /** Partial override to merge on top of the resolved locale */
  messages?: DeepPartial<JetBrainsLocaleMessages>;
}

function JetBrainsUIProvider({
  children,
  locale = 'en',
  messages: override,
}: JetBrainsUIProviderProps) {
  const resolved = useMemo(() => {
    const base = builtinLocales[locale] ?? builtinLocales.en;
    return override ? deepMerge(base, override) : base;
  }, [locale, override]);

  return (
    <LocaleContext.Provider value={{ locale, messages: resolved }}>
      {children}
    </LocaleContext.Provider>
  );
}

JetBrainsUIProvider.displayName = 'JetBrainsUIProvider';

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export { JetBrainsUIProvider };
export { useJetBrainsLocale, LocaleContext } from './use-locale';
