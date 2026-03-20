import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ModuleProps = IconProps;

const ModuleLight: React.FC<SvgProps> = ({
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
    <rect
      x="1.5"
      y="1.5"
      width="13"
      height="13"
      rx="6.5"
      fill="#F2FCF3"
      stroke="#208A3C"
    />
    <path
      d="M4.258 4.5h1.29l2.34 5.355.125.37.12-.37L10.428 4.5h1.31v7h-1.01V6.225l.005-.195-2.335 5.47h-.795L5.258 6.065l.005.16V11.5H4.258z"
      fill="#208A3C"
    />
  </svg>
);

const ModuleDark: React.FC<SvgProps> = ({
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
    <rect
      x="1.5"
      y="1.5"
      width="13"
      height="13"
      rx="6.5"
      fill="#253627"
      stroke="#57965C"
    />
    <path
      d="M4.258 4.5h1.29l2.34 5.355.125.37.12-.37L10.428 4.5h1.31v7h-1.01V6.225l.005-.195-2.335 5.47h-.795L5.258 6.065l.005.16V11.5H4.258z"
      fill="#57965C"
    />
  </svg>
);

export const Module: React.FC<ModuleProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ModuleLight : ModuleDark;

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
