'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';

const icons = [
  'debugger/addToWatch',
  'debugger/classLevelWatch',
  'debugger/dbArray',
  'debugger/dbPrimitive',
  'debugger/evaluationResult',
  'debugger/frame',
  'debugger/promptInput',
  'debugger/promptInputHistory',
  'debugger/selfReference',
  'debugger/threadAtBreakpoint',
  'debugger/threadCurrent',
  'debugger/threadFrozen',
  'debugger/threadGroupCurrent',
  'debugger/threadRunning',
  'debugger/threads',
  'debugger/value',
  'debugger/variablesTab',
  'debugger/watchLastReturnValue',
] as const;

export function DebuggerIconsGallery() {
  return <SvgIconsGallery icons={icons.map((name) => ({ name }))} />;
}
