import { getSource } from '@/lib/source';
import { getLLMText } from '@/lib/get-llm-text';
import { NextRequest } from 'next/server';
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  type Locale,
  isLocale,
} from '@/lib/i18n/shared';

// cached forever
export const revalidate = false;

function resolveLocale(request: NextRequest): Locale {
  const locale = request.cookies.get(LOCALE_COOKIE)?.value;
  return isLocale(locale) ? locale : DEFAULT_LOCALE;
}

export async function GET(request: NextRequest) {
  const locale = resolveLocale(request);
  const docsSource = getSource(locale);
  const scan = docsSource.getPages().map(getLLMText);
  const scanned = await Promise.all(scan);

  return new Response(scanned.join('\n\n'));
}
