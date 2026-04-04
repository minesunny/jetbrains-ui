import type React from 'react';


export type SvgProps = React.ComponentProps<'svg'> & {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  mode?: 'light' | 'dark';
};

export const sizeMap: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number> = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
};

export const iconNames = [
  'application',
  'application-remote',
  'compound',
  'ignored-test',
  'invalid-configuration-layer',
  'java-scratch',
  'java-script-debug-configuration',
  'java-script-remote',
  'junit',
  'junit-test-mark',
  'php-local',
  'php-remote',
  'php-web',
  'run-http-request',
  'web-app',
] as const;

export type IconName = (typeof iconNames)[number];
