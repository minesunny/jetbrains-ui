'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';
import { domainIconNames } from '@/components/docs/icons/icon-list';

const icons = domainIconNames('plugins/uml');

export function UmlIconsGallery() {
  return <SvgIconsGallery icons={icons.map((name) => ({ name }))} />;
}
