'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';

const icons = [
  'general/modifiers/accessLocal',
  'general/modifiers/accessPrivate',
  'general/modifiers/accessProtected',
  'general/modifiers/accessPublic',
] as const;

export function ModifiersIconsGallery() {
  return <SvgIconsGallery icons={icons.map((name) => ({ name }))} />;
}
