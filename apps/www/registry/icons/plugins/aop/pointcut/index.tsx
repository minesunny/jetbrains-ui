import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type PointcutProps = IconProps;

const PointcutLight: React.FC<SvgProps> = ({
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
      d="M2.1 3.375C2.035 3.57 2 3.782 2 4v8a2 2 0 0 0 2 2h8c.311 0 .606-.071.868-.198l-6.815-3.408a1 1 0 0 1-.435-.423z"
      fill="#4682FA"
    />
    <path
      d="M13.996 12.13Q14 12.066 14 12V4a2 2 0 0 0-2-2H4q-.18 0-.35.03l3.582 6.718z"
      fill="#4682FA"
    />
  </svg>
);

const PointcutDark: React.FC<SvgProps> = ({
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
      d="M2.1 3.375C2.035 3.57 2 3.782 2 4v8a2 2 0 0 0 2 2h8c.311 0 .606-.071.868-.198l-6.815-3.408a1 1 0 0 1-.435-.423z"
      fill="#548AF7"
    />
    <path
      d="M13.996 12.13Q14 12.066 14 12V4a2 2 0 0 0-2-2H4q-.18 0-.35.03l3.582 6.718z"
      fill="#548AF7"
    />
  </svg>
);

export const Pointcut: React.FC<PointcutProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? PointcutLight : PointcutDark;

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
