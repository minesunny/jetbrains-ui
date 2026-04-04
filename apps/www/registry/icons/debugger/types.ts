import type React from 'react';
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type IconMode = 'light' | 'dark';


export type SvgProps = React.ComponentProps<'svg'> & {
  size?: IconSize;
  mode?: IconMode;
};

export const sizeMap: Record<IconSize, number> = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
};

export const iconNames = [
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

export type IconName = (typeof iconNames)[number];
