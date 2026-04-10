'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';

const icons = [
  'general/newUi/advancedSettings',
  'general/newUi/appearance',
  'general/newUi/behavior',
  'general/newUi/editorTabs',
  'general/newUi/externalAppearance',
  'general/newUi/layout',
  'general/newUi/mainMenu',
  'general/newUi/navigationBar',
  'general/newUi/presentationMode',
  'general/newUi/registry',
  'general/newUi/skin',
  'general/newUi/toolbar',
  'general/newUi/transparency',
] as const;

export function NewUiIconsGallery() {
  return <SvgIconsGallery icons={icons.map((name) => ({ name }))} />;
}
