'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';

const icons = [
  'general/settingSync/Conflict',
  'general/settingSync/LocalChanges',
  'general/settingSync/RemoteChanges',
  'general/settingSync/statusDisabled',
  'general/settingSync/statusEnabled',
  'general/settingSync/status',
] as const;

export function SettingSyncIconsGallery() {
  return <SvgIconsGallery icons={icons.map((name) => ({ name }))} />;
}
