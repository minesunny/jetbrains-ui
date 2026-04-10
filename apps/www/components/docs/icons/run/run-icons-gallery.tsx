'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';

const icons = [
  'run/failedInProgress',
  'run/rerunAutomatically',
  'run/run',
  'run/runWithCoverage',
  'run/testRunnerWatch',
  'run/watch',
] as const;

export function RunIconsGallery() {
  return <SvgIconsGallery icons={icons.map((name) => ({ name }))} />;
}
