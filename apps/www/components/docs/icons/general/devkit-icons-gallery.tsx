'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';

const icons = [
  'general/devkit/addSDK',
  'general/devkit/descriptionFile',
  'general/devkit/diff',
  'general/devkit/plugin',
  'general/devkit/pluginV2',
  'general/devkit/properties',
  'general/devkit/sdkClosed',
] as const;

export function DevkitIconsGallery() {
  return <SvgIconsGallery icons={icons.map((name) => ({ name }))} />;
}
