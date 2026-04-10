'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';
import { iconCategories } from '@/components/docs/icons/icon-data';

export function SpinnerIconsGallery() {
  return (
    <SvgIconsGallery
      icons={iconCategories.spinner.icons.map((name) => ({
        name,
      }))}
    />
  );
}
