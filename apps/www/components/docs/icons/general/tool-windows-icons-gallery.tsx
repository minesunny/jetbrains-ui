'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';

const icons = [
  'general/toolWindows/CMakeToolWindow',
  'general/toolWindows/ConcurrencyDiagramToolwindow',
  'general/toolWindows/aiAssistantToolWindow',
  'general/toolWindows/amazonEMR',
  'general/toolWindows/appEngineToolWindow',
  'general/toolWindows/awsGlueToolWindow',
  'general/toolWindows/buildServerProtocol',
  'general/toolWindows/cdiToolWindow',
  'general/toolWindows/cwmAccess',
  'general/toolWindows/cwmUsers',
  'general/toolWindows/dataprocToolWindow',
  'general/toolWindows/donate',
  'general/toolWindows/exceptionAnalyzer',
  'general/toolWindows/feedback',
  'general/toolWindows/gitLabToolWindow',
] as const;

export function ToolWindowsIconsGallery() {
  return <SvgIconsGallery icons={icons.map((name) => ({ name }))} />;
}
