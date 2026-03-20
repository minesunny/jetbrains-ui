import { cookies, headers } from 'next/headers';
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  type Locale,
  isLocale,
} from '@/lib/i18n/shared';

function detectLocaleFromAcceptLanguage(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return DEFAULT_LOCALE;
  return acceptLanguage.toLowerCase().includes('zh') ? 'zh' : DEFAULT_LOCALE;
}

export async function getServerLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get(LOCALE_COOKIE)?.value;

  if (isLocale(cookieLocale)) return cookieLocale;

  const headerStore = await headers();
  return detectLocaleFromAcceptLanguage(headerStore.get('accept-language'));
}
