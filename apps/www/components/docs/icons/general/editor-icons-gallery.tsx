'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';

const icons = [
  'general/editor/addRectangularSelection',
  'general/editor/columnSelection',
  'general/editor/contextMenus',
  'general/editor/copyReference',
  'general/editor/diff',
  'general/editor/enter',
  'general/editor/escape',
  'general/editor/mirrorCursor',
  'general/editor/move',
  'general/editor/rectangularSelection',
  'general/editor/selectAll',
  'general/editor/subwordCompletion',
  'general/editor/switch',
  'general/editor/tablet',
  'general/editor/toggle',
] as const;

export function EditorIconsGallery() {
  return <SvgIconsGallery icons={icons.map((name) => ({ name }))} />;
}
