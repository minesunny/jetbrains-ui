'use client';

import { createContext, useContext, useMemo } from 'react';
import { en } from '@/registry/locales/en';
import type { JetBrainsLocaleMessages } from '@/registry/locales/types';

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface LocaleContextValue {
  locale: string;
  messages: JetBrainsLocaleMessages;
}

export const LocaleContext = createContext<LocaleContextValue>({
  locale: 'en',
  messages: en,
});

// ---------------------------------------------------------------------------
// t() — dot-path lookup with {key} interpolation
// ---------------------------------------------------------------------------

function getNestedValue(obj: unknown, path: string): string | undefined {
  const keys = path.split('.');
  let current: unknown = obj;
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return undefined;
    }
  }
  return typeof current === 'string' ? current : undefined;
}

function interpolate(
  template: string,
  params?: Record<string, string | number>,
): string {
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, key) =>
    params[key] !== undefined ? String(params[key]) : `{${key}}`,
  );
}

// ---------------------------------------------------------------------------
// useJetBrainsLocale hook
// ---------------------------------------------------------------------------

export interface UseJetBrainsLocaleReturn {
  locale: string;
  t: (key: string, params?: Record<string, string | number>) => string;
}

export function useJetBrainsLocale(): UseJetBrainsLocaleReturn {
  const { locale, messages } = useContext(LocaleContext);

  const t = useMemo(
    () => (key: string, params?: Record<string, string | number>) => {
      const value = getNestedValue(messages, key);
      if (value !== undefined) return interpolate(value, params);
      // Fallback to English
      const fallback = getNestedValue(en, key);
      return fallback !== undefined ? interpolate(fallback, params) : key;
    },
    [messages],
  );

  return { locale, t };
}
