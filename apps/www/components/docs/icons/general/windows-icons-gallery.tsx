'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';

const icons = [
  'general/windows/close',
  'general/windows/closeHovered',
  'general/windows/closeTab',
  'general/windows/ideScale',
  'general/windows/maximize',
  'general/windows/maximizeHovered',
  'general/windows/minimize',
  'general/windows/minimizeHovered',
  'general/windows/move',
  'general/windows/restore',
  'general/windows/restoreHovered',
  'general/windows/showNone',
  'general/windows/showOption',
  'general/windows/showOptionsHovered',
  'general/windows/snap',
] as const;

export function WindowsIconsGallery() {
  return <SvgIconsGallery icons={icons.map((name) => ({ name }))} />;
}
