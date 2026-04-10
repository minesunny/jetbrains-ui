'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';

const icons = [
  'general/bookmarks/bookmarks',
  'general/bookmarks/sendToTheLeft',
  'general/bookmarks/sendToTheLeftGrayed',
  'general/bookmarks/sendToTheRight',
  'general/bookmarks/sendToTheRightGrayed',
] as const;

export function BookmarksIconsGallery() {
  return <SvgIconsGallery icons={icons.map((name) => ({ name }))} />;
}
