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
  'add-to-watch',
  'class-level-watch',
  'db-array',
  'db-primitive',
  'evaluation-result',
  'frame',
  'prompt-input',
  'prompt-input-history',
  'self-reference',
  'thread-at-breakpoint',
  'thread-current',
  'thread-frozen',
  'thread-group-current',
  'thread-running',
  'threads',
  'value',
  'variables-tab',
  'watch-last-return-value',
] as const;

export type SvgName = (typeof svgNames)[number];
