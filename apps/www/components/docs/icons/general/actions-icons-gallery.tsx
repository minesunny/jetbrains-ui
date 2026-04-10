'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';

const icons = [
  'general/actions/addFile',
  'general/actions/buildAutoReloadChanges',
  'general/actions/checked',
  'general/actions/deploy',
  'general/actions/diagramDiff',
  'general/actions/diffWithClipboard',
  'general/actions/gift',
  'general/actions/GroupByModule',
  'general/actions/groupByClass',
  'general/actions/groupByFile',
  'general/actions/groupByMethod',
  'general/actions/groupByPackage',
  'general/actions/groupByTestProduction',
  'general/actions/inSelection',
  'general/actions/lightning',
  'general/actions/moveToButton',
  'general/actions/openApi',
  'general/actions/playBack',
  'general/actions/playFirst',
  'general/actions/playForward',
  'general/actions/playLast',
  'general/actions/preview',
  'general/actions/profileCPU',
  'general/actions/profileMemory',
  'general/actions/profileRed',
  'general/actions/projectDirectory',
  'general/actions/replace',
  'general/actions/report',
  'general/actions/restartStop',
  'general/actions/runAll',
  'general/actions/selectAll',
  'general/actions/shortcutFilter',
  'general/actions/showToImplement',
  'general/actions/split',
  'general/actions/startMemoryProfile',
  'general/actions/suggestedRefactoringBulb',
  'general/actions/swapPanels',
  'general/actions/synchronizeScrolling',
  'general/actions/toggleVisibility',
  'general/actions/unselectAll',
  'general/actions/writeReview',
] as const;

export function ActionsIconsGallery() {
  return <SvgIconsGallery icons={icons.map((name) => ({ name }))} />;
}
