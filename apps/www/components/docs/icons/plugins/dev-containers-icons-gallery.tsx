'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';
import { domainIconNames } from '@/components/docs/icons/icon-list';

const icons = domainIconNames('plugins/dev-containers');

export function DevContainersIconsGallery() {
  return <SvgIconsGallery icons={icons.map((name) => ({ name }))} />;
}
