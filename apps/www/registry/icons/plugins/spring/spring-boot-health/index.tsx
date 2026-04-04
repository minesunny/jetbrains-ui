import React from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../types';

export type SpringBootHealthProps = SvgProps;

const SpringBootHealthLight: React.FC<SvgProps> = ({
  size,
  className,
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
    <path
      d="M1.5 8h3L7 2.5l2 11L11.5 8h3"
      stroke="#E66D17"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SpringBootHealthDark: React.FC<SvgProps> = ({
  size,
  className,
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
    <path
      d="M1.5 8h3L7 2.5l2 11L11.5 8h3"
      stroke="#C77D55"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SpringBootHealth: React.FC<SpringBootHealthProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? SpringBootHealthLight : SpringBootHealthDark;

  return (
    <SvgComponent
      size={sizeMap[size]}
      className={cn('inline-block flex-shrink-0', className)}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};
