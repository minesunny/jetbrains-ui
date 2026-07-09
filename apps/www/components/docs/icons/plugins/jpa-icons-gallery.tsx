'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';
import { domainIconNames } from '@/components/docs/icons/icon-list';

const icons = domainIconNames('plugins/jpa');

export function JpaIconsGallery() {
  return <SvgIconsGallery icons={icons.map((name) => ({ name }))} />;
}
