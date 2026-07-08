'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';
import { domainIconNames } from '@/components/docs/icons/icon-list';

const icons = domainIconNames('general/progress-bar');

export function ProgressBarIconsGallery() {
  return <SvgIconsGallery icons={icons.map((name) => ({ name }))} />;
}
