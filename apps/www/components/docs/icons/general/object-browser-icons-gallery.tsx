'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';

const icons = [
  'general/objectBrowser/abbreviatePackageNames',
  'general/objectBrowser/compactEmptyPackages',
  'general/objectBrowser/flattenModules',
  'general/objectBrowser/flattenPackages',
  'general/objectBrowser/showLibraryContents',
  'general/objectBrowser/showMembers',
  'general/objectBrowser/sortAlphabetically',
  'general/objectBrowser/sortByType',
  'general/objectBrowser/sortByUsage',
  'general/objectBrowser/sortByVisibility',
] as const;

export function ObjectBrowserIconsGallery() {
  return <SvgIconsGallery icons={icons.map((name) => ({ name }))} />;
}
