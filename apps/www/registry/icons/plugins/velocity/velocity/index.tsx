import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type VelocityProps = IconProps;

const VelocityLight: React.FC<SvgProps> = ({
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
    {title && <title>{title}</title>}
    <path
      d="M3.5 8V1.5m0 6.5A4.5 4.5 0 0 0 8 12.5M3.5 8A4.5 4.5 0 0 1 8 3.5m0 0h6.5M8 3.5A4.5 4.5 0 0 1 12.5 8m0 0v6.5m0-6.5A4.5 4.5 0 0 1 8 12.5m0 0H1.5"
      stroke="#6C707E"
      strokeLinecap="round"
    />
  </svg>
);

const VelocityDark: React.FC<SvgProps> = ({
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
    {title && <title>{title}</title>}
    <path
      d="M3.5 8V1.5m0 6.5A4.5 4.5 0 0 0 8 12.5M3.5 8A4.5 4.5 0 0 1 8 3.5m0 0h6.5M8 3.5A4.5 4.5 0 0 1 12.5 8m0 0v6.5m0-6.5A4.5 4.5 0 0 1 8 12.5m0 0H1.5"
      stroke="#CED0D6"
      strokeLinecap="round"
    />
  </svg>
);

export const Velocity: React.FC<VelocityProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? VelocityLight : VelocityDark;

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
