'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';

const icons = [
  'general/duplicates/editor',
  'general/duplicates/inalyQarkus',
  'general/duplicates/inlayMicronaut',
  'general/duplicates/inlaySpring',
  'general/duplicates/inlayWebInspector',
] as const;

export function DuplicatesIconsGallery() {
  return <SvgIconsGallery icons={icons.map((name) => ({ name }))} />;
}
