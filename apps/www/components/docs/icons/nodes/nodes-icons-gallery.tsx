'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';
import { domainIconNames } from '@/components/docs/icons/icon-list';

// Derive the live icon list from the manifest so it never goes stale.
const icons = domainIconNames('nodes');

export function NodesIconsGallery() {
  return <SvgIconsGallery icons={icons.map((name) => ({ name }))} />;
}
