'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';

const icons = [
  'general/status/progress',
  'general/status/successLogin',
] as const;

export function StatusIconsGallery() {
  return <SvgIconsGallery icons={icons.map((name) => ({ name }))} />;
}
