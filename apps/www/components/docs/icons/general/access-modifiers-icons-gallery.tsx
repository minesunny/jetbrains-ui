'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';

const icons = [
  'general/accessModifiers/public',
  'general/accessModifiers/private',
  'general/accessModifiers/protected',
  'general/accessModifiers/package',
  'general/accessModifiers/publicStatic',
  'general/accessModifiers/privateStatic',
  'general/accessModifiers/protectedStatic',
  'general/accessModifiers/packageStatic',
] as const;

export function AccessModifiersIconsGallery() {
  return <SvgIconsGallery icons={icons.map((name) => ({ name }))} />;
}
