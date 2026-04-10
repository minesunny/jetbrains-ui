'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';

// Plugin icons are not yet available in the registry
const icons = [] as const;

export function LinuxIconsGallery() {
  return <SvgIconsGallery icons={icons.map((name) => ({ name }))} />;
}
