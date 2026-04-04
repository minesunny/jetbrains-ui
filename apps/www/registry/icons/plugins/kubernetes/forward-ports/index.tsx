import React from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../types';

export type ForwardPortsProps = SvgProps;

const ForwardPortsLight: React.FC<SvgProps> = ({
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
    <rect
      x="11.5"
      y="6.5"
      width="3"
      height="3"
      rx=".5"
      fill="#EBECF0"
      stroke="#6C707E"
    />
    <path
      d="M9.5 8h-8m8 0L6 4.5M9.5 8 6 11.5"
      stroke="#6C707E"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ForwardPortsDark: React.FC<SvgProps> = ({
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
    <rect
      x="11.5"
      y="6.5"
      width="3"
      height="3"
      rx=".5"
      fill="#43454A"
      stroke="#CED0D6"
    />
    <path
      d="M9.5 8h-8m8 0L6 4.5M9.5 8 6 11.5"
      stroke="#CED0D6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ForwardPorts: React.FC<ForwardPortsProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ForwardPortsLight : ForwardPortsDark;

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
