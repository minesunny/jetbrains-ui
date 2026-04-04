import type React from 'react';

export type SvgSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SvgMode = 'light' | 'dark';

export type SvgProps = Omit<React.ComponentProps<'svg'>, 'size'> & {
  size?: SvgSize | number;
  mode?: SvgMode;
};

export const sizeMap: Record<SvgSize | number, number> = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
};

export const svgNames = [
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

export type SvgName = (typeof svgNames)[number];
