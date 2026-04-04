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
  'build',
  'dependency-analyzer',
  'gradle',
  'gradle-load-changes',
  'gradle-navigate',
  'gradle-subproject',
  'maven-bind',
  'maven-bind-checksum',
  'maven-checksum',
  'maven-children-projects',
  'maven-flex',
  'maven-load-changes',
  'maven-module',
  'maven-parent-projects',
  'maven-plugin',
  'maven-plugin-goal',
  'maven-profiles',
  'maven-project',
  'task',
  'task-group',
  'toggle-offline-mode',
  'toggle-skip-tests-mode',
  'update-folders',
] as const;

export type SvgName = (typeof svgNames)[number];
