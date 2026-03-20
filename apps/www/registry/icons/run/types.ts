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
  'attach-to-process',
  'debug',
  'dump-threads',
  'evaluate-expression',
  'failed-in-progress',
  'force-run-to-cursor',
  'force-step-into',
  'force-step-over',
  'kill-process',
  'mute-breakpoints',
  'pause',
  'profile',
  'rerun',
  'rerun-automatically',
  'restart',
  'restart-debug',
  'restart-failed-tests',
  'restart-frame',
  'resume',
  'run',
  'run-to-cursor',
  'run-with-coverage',
  'show-current-frame',
  'show-ignored',
  'show-passed',
  'smart-step-into',
  'step-into',
  'step-out',
  'step-out-code-block',
  'step-over',
  'stop',
  'test-custom',
  'test-error',
  'test-failed',
  'test-ignored',
  'test-not-run-yet',
  'test-passed',
  'test-passed-ignored',
  'test-paused',
  'test-runner-watch',
  'test-skipped',
  'test-terminated',
  'test-unknown',
  'trace-stream',
  'view-breakpoints',
  'watch',
] as const;

export type IconName = (typeof iconNames)[number];
