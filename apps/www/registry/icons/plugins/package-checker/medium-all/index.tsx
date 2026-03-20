import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type MediumAllProps = IconProps;

const MediumAllLight: React.FC<SvgProps> = ({
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
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title && <title>{title}</title>}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 4.818 12 1 3 4.818v7.95c0 2.649 1.339 4.586 3.049 6.118 1.257 1.128 2.789 2.094 4.194 2.98.467.296.92.581 1.344.861L12 23l.413-.273c.424-.28.877-.565 1.344-.86 1.405-.887 2.937-1.854 4.194-2.98 1.71-1.533 3.049-3.47 3.049-6.119zM9.525 7H7.5v9H9v-6l2.25 6h1.637L15 10v6h1.5V7h-2.025L12 13.9z"
      fill="#FFAF0F"
    />
  </svg>
);

const MediumAllDark: React.FC<SvgProps> = ({
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
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title && <title>{title}</title>}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 4.818 12 1 3 4.818v7.95c0 2.649 1.339 4.586 3.049 6.118 1.257 1.128 2.789 2.094 4.194 2.98.467.296.92.581 1.344.861L12 23l.413-.273c.424-.28.877-.565 1.344-.86 1.405-.887 2.937-1.854 4.194-2.98 1.71-1.533 3.049-3.47 3.049-6.119zM9.525 7H7.5v9H9v-6l2.25 6h1.637L15 10v6h1.5V7h-2.025L12 13.9z"
      fill="#F2C55C"
    />
  </svg>
);

export const MediumAll: React.FC<MediumAllProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? MediumAllLight : MediumAllDark;

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
