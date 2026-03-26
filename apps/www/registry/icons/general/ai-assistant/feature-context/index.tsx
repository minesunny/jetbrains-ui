import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type FeatureContextProps = IconProps;

const FeatureContextLight: FC<SvgProps> = ({
  size,
  className,
  title,
  role,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title ? <title>{title}</title> : null}
    <circle cx="8" cy="9" r="5.042" stroke="#3574F0" strokeWidth=".917" />
    <circle cx="8" cy="3.5" r="2" fill="#EDF3FF" stroke="#3574F0" />
    <circle cx="3.5" cy="11.5" r="2" fill="#EDF3FF" stroke="#3574F0" />
    <circle cx="12.5" cy="11.5" r="2" fill="#EDF3FF" stroke="#3574F0" />
  </svg>
);

const FeatureContextDark: FC<SvgProps> = ({
  size,
  className,
  title,
  role,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title ? <title>{title}</title> : null}
    <circle cx="8" cy="9" r="5.042" stroke="#548AF7" strokeWidth=".917" />
    <circle cx="8" cy="3.5" r="2" fill="#25324D" stroke="#548AF7" />
    <circle cx="3.5" cy="11.5" r="2" fill="#25324D" stroke="#548AF7" />
    <circle cx="12.5" cy="11.5" r="2" fill="#25324D" stroke="#548AF7" />
  </svg>
);

export const FeatureContext: FC<FeatureContextProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? FeatureContextLight : FeatureContextDark;

  return (
    <SvgComponent
      size={sizeMap[size]}
      className={cn('inline-block flex-shrink-0', className)}
      title={title}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};
