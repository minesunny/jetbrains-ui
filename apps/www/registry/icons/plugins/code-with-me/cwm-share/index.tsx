import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CwmShareProps = IconProps;

const CwmShareLight: React.FC<SvgProps> = ({
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
      d="M14 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M3.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M14 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      fill="#EBECF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 3.5a2.5 2.5 0 0 1-4.431 1.588L5.956 7.53a2.5 2.5 0 0 1 0 .94l4.613 2.442a2.5 2.5 0 1 1-.468.884L5.573 9.398a2.5 2.5 0 1 1 0-2.797L10.1 4.205A2.5 2.5 0 1 1 15 3.5M4.68 7.074a1.5 1.5 0 1 0-2.36 1.852 1.5 1.5 0 0 0 2.36-1.852M14 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      fill="#6C707E"
    />
  </svg>
);

const CwmShareDark: React.FC<SvgProps> = ({
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
      d="M14 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M3.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M14 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      fill="#43454A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 3.5a2.5 2.5 0 0 1-4.431 1.588L5.956 7.53a2.5 2.5 0 0 1 0 .94l4.613 2.442a2.5 2.5 0 1 1-.468.884L5.573 9.398a2.5 2.5 0 1 1 0-2.797L10.1 4.205A2.5 2.5 0 1 1 15 3.5M4.68 7.074a1.5 1.5 0 1 0-2.36 1.852 1.5 1.5 0 0 0 2.36-1.852M14 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      fill="#CED0D6"
    />
  </svg>
);

export const CwmShare: React.FC<CwmShareProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? CwmShareLight : CwmShareDark;

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
