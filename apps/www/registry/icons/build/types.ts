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

export type IconName = (typeof iconNames)[number];
