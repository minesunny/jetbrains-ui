'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';
import { iconCategories } from '@/components/docs/icons/icon-data';

export function BuildIconsGallery() {
  return (
    <SvgIconsGallery
      icons={iconCategories.build.icons.map((name) => ({
        name,
      }))}
    />
  );
}
