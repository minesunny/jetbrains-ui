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
