'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';

const icons = [
  'terminal/command',
  'terminal/fileFormat',
  'terminal/option',
  'terminal/other',
] as const;

export function TerminalIconsGallery() {
  return <SvgIconsGallery icons={icons.map((name) => ({ name }))} />;
}
