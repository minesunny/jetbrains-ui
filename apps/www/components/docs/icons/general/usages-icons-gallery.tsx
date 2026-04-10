'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';

const icons = [
  'general/usages/showImportStatements',
  'general/usages/showReadAccess',
  'general/usages/showWriteAccess',
] as const;

export function UsagesIconsGallery() {
  return <SvgIconsGallery icons={icons.map((name) => ({ name }))} />;
}
