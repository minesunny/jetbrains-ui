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
  'breakpoint',
  'breakpoint-dependent',
  'breakpoint-disabled',
  'breakpoint-exception',
  'breakpoint-exception-disabled',
  'breakpoint-field',
  'breakpoint-field-dependent',
  'breakpoint-field-disabled',
  'breakpoint-field-muted',
  'breakpoint-field-muted-dependent',
  'breakpoint-field-muted-disabled',
  'breakpoint-field-unsuspendent',
  'breakpoint-field-unsuspendent-disabled',
  'breakpoint-field-unsuspendent-valid',
  'breakpoint-field-valid',
  'breakpoint-invalid',
  'breakpoint-lambda',
  'breakpoint-method',
  'breakpoint-method-dependent',
  'breakpoint-method-disabled',
  'breakpoint-method-muted',
  'breakpoint-method-muted-dependent',
  'breakpoint-method-muted-disabled',
  'breakpoint-method-unsuspendent',
  'breakpoint-method-unsuspendent-disabled',
  'breakpoint-method-unsuspendent-valid',
  'breakpoint-method-valid',
  'breakpoint-muted',
  'breakpoint-muted-dependent',
  'breakpoint-muted-disabled',
  'breakpoint-obsolete',
  'breakpoint-unsuspendent',
  'breakpoint-unsuspendent-disabled',
  'breakpoint-unsuspendent-valid',
  'breakpoint-valid',
  'multiple-breakpoints',
  'multiple-breakpoints-disabled',
  'multiple-breakpoints-muted',
  'question-badge',
] as const;

export type IconName = (typeof iconNames)[number];
