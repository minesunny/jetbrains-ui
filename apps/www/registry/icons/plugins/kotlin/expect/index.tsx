import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ExpectProps = IconProps;

const ExpectLight: React.FC<SvgProps> = ({
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
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title && <title>{title}</title>}
    <rect
      x=".293"
      y="8.071"
      width="11"
      height="11"
      rx=".5"
      transform="rotate(-45 .293 8.071)"
      fill="#FFF4EB"
      stroke="#E66D17"
    />
    <path
      d="M5.67 11.414h4.8v-.875H6.617V8.484h3.432v-.88H6.617V5.596h3.757v-.875H5.67z"
      fill="#E66D17"
    />
  </svg>
);

const ExpectDark: React.FC<SvgProps> = ({
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
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title && <title>{title}</title>}
    <rect
      x=".293"
      y="8.071"
      width="11"
      height="11"
      rx=".5"
      transform="rotate(-45 .293 8.071)"
      fill="#45322B"
      stroke="#C77D55"
    />
    <path
      d="M5.67 11.414h4.8v-.875H6.617V8.484h3.432v-.88H6.617V5.596h3.757v-.875H5.67z"
      fill="#E08855"
    />
  </svg>
);

export const Expect: React.FC<ExpectProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ExpectLight : ExpectDark;

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
