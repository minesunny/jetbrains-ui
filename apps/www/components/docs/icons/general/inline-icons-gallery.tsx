'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';

const icons = [
  'general/inline/filter',
  'general/inline/filterdups',
  'general/inline/statisticsPanel',
] as const;

export function InlineIconsGallery() {
  return <SvgIconsGallery icons={icons.map((name) => ({ name }))} />;
}
