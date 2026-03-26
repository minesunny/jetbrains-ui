import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type SymbolProps = IconProps;

const SymbolLight: React.FC<SvgProps> = ({
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
    <path d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8" fill="#F2FCF3" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8m6-7a7 7 0 1 0 0 14A7 7 0 0 0 8 1"
      fill="#208A3C"
    />
    <circle cx="8" cy="6" r="1" fill="#208A3C" />
    <circle cx="8" cy="10" r="1" fill="#208A3C" />
  </svg>
);

const SymbolDark: React.FC<SvgProps> = ({
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
    <path d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8" fill="#253627" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8m6-7a7 7 0 1 0 0 14A7 7 0 0 0 8 1"
      fill="#57965C"
    />
    <circle cx="8" cy="6" r="1" fill="#57965C" />
    <circle cx="8" cy="10" r="1" fill="#57965C" />
  </svg>
);

export const Symbol: React.FC<SymbolProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? SymbolLight : SymbolDark;

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
