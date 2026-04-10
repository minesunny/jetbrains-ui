'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';

const icons = [
  'runConfigurations/application',
  'runConfigurations/applicationRemote',
  'runConfigurations/compound',
  'runConfigurations/ignoredTest',
  'runConfigurations/invalidConfigurationLayer',
  'runConfigurations/javaScratch',
  'runConfigurations/javaScriptDebugConfiguration',
  'runConfigurations/javaScriptRemote',
  'runConfigurations/junit',
  'runConfigurations/junitTestMark',
  'runConfigurations/phpLocal',
  'runConfigurations/phpRemote',
  'runConfigurations/phpWeb',
  'runConfigurations/runHttpRequest',
  'runConfigurations/webApp',
] as const;

export function RunConfigurationsIconsGallery() {
  return <SvgIconsGallery icons={icons.map((name) => ({ name }))} />;
}
