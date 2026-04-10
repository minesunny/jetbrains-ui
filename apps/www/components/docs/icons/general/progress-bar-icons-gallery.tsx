'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';

const icons = [
  'general/progressBar/finalMark',
  'general/progressBar/junitTestMark',
  'general/progressBar/locked',
  'general/progressBar/processMark',
  'general/progressBar/runnableMark',
  'general/progressBar/shared',
  'general/progressBar/staticMark',
  'general/progressBar/symlink',
  'general/progressBar/tabAlert',
] as const;

export function ProgressBarIconsGallery() {
  return <SvgIconsGallery icons={icons.map((name) => ({ name }))} />;
}
