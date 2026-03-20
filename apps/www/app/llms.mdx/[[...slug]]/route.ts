import { type NextRequest, NextResponse } from 'next/server';
import { getLLMText } from '@/lib/get-llm-text';
import { getSource, source, sourceZh } from '@/lib/source';
import { notFound } from 'next/navigation';
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  type Locale,
  isLocale,
} from '@/lib/i18n/shared';

export const revalidate = false;

function resolveLocale(request: NextRequest): Locale {
  const locale = request.cookies.get(LOCALE_COOKIE)?.value;
  return isLocale(locale) ? locale : DEFAULT_LOCALE;
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug?: string[] }> },
) {
  const locale = resolveLocale(req);
  const localeSource = getSource(locale);
  const { slug } = await params;
  const page = localeSource.getPage(slug) ?? source.getPage(slug);
  if (!page) notFound();

  return new NextResponse(await getLLMText(page));
}

export function generateStaticParams() {
  const unique = new Map<string, { slug?: string[] }>();

  for (const item of [
    ...source.generateParams(),
    ...sourceZh.generateParams(),
  ]) {
    const key = item.slug?.join('/') ?? '';
    unique.set(key, item);
  }

  return [...unique.values()];
}
