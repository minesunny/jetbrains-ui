'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';
import { iconCategories } from '@/components/docs/icons/icon-data';

export function JetBrainsIconsGallery() {
  return (
    <SvgIconsGallery
      icons={iconCategories.general.icons.map((name) => ({
        name,
      }))}
    />
  );
}
