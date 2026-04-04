import React from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../types';

export type ValidatorProps = SvgProps;

const ValidatorLight: React.FC<SvgProps> = ({
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
      d="M11.5 3.5h3M8.5 8h6M5.5 12.5h9"
      stroke="#6C707E"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 4.5 4 9 1.5 6.5"
      stroke="#208A3C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ValidatorDark: React.FC<SvgProps> = ({
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
      d="M11.5 3.5h3M8.5 8h6M5.5 12.5h9"
      stroke="#CED0D6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 4.5 4 9 1.5 6.5"
      stroke="#57965C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Validator: React.FC<ValidatorProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ValidatorLight : ValidatorDark;

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
