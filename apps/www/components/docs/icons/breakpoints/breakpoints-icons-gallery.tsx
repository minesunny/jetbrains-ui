'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';
import { iconCategories } from '@/components/docs/icons/icon-data';

export function BreakpointsIconsGallery() {
  return (
    <SvgIconsGallery
      icons={iconCategories.breakpoints.icons.map((name) => ({
        name,
      }))}
    />
  );
}
