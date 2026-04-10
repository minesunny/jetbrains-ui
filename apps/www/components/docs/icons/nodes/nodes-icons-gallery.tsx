'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';

const icons = [
  'nodes/addAny',
  'nodes/config',
  'nodes/copyOfFolder',
  'nodes/dataTables',
  'nodes/ideaProject',
  'nodes/include',
  'nodes/localScope',
  'nodes/nodes/abstractException',
  'nodes/nodes/alias',
  'nodes/nodes/annotation',
  'nodes/nodes/annotationFolder',
  'nodes/nodes/class',
  'nodes/nodes/classAbstract',
  'nodes/nodes/classAnonymous',
  'nodes/nodes/classInitializer',
  'nodes/nodes/constant',
  'nodes/nodes/controller',
  'nodes/nodes/dataColumn',
  'nodes/nodes/desktop',
  'nodes/nodes/editFolder',
  'nodes/nodes/enum',
  'nodes/nodes/errorIntroduction',
  'nodes/nodes/exception',
  'nodes/nodes/excludeRoot',
  'nodes/nodes/excludedGenerated',
  'nodes/nodes/favorites',
  'nodes/nodes/field',
  'nodes/nodes/folder',
  'nodes/nodes/function',
  'nodes/nodes/generated',
  'nodes/nodes/generatedSource',
  'nodes/nodes/generatedTestRoot',
  'nodes/nodes/gvariable',
  'nodes/nodes/homeFolder',
  'nodes/nodes/interface',
  'nodes/nodes/jdk',
  'nodes/nodes/lambda',
  'nodes/ppWeb',
  'nodes/server',
  'nodes/sharedScope',
  'nodes/template',
  'nodes/testGroup',
  'nodes/textArea',
  'nodes/webResources',
] as const;

export function NodesIconsGallery() {
  return <SvgIconsGallery icons={icons.map((name) => ({ name }))} />;
}
