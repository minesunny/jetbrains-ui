export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type IconMode = 'light' | 'dark';

export interface IconProps {
  size?: IconSize;
  mode?: IconMode;
  className?: string;
  /** Accessible label for the icon */
  'aria-label'?: string;
  /** Title element for the icon tooltip */
  title?: string;
  [key: string]: any;
}

export interface SvgProps {
  size: number;
  className?: string;
  title?: string;
  role?: string;
  'aria-label'?: string;
  'aria-hidden'?: boolean;
}

export const sizeMap: Record<IconSize, number> = {
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
