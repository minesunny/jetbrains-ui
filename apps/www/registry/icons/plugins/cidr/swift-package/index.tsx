import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type SwiftPackageProps = IconProps;

const SwiftPackageLight: React.FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="m8 7.5 6.5-3v7.02L8 14.5zM8 7.5l-6.5-3v7.02L8 14.5z"
      fill="#FFF4EB"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5 4.5 8 1.5l-6.5 3 6.5 3z"
      fill="#FFF4EB"
    />
    <path
      d="m8 7.5 6.5-3M8 7.5v7m0-7-6.5-3m13 0v7.02L8 14.5m6.5-10L8 1.5l-6.5 3m6.5 10-6.5-2.98V4.5"
      stroke="#E66D17"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SwiftPackageDark: React.FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="m8 7.5 6.5-3v7.02L8 14.5zM8 7.5l-6.5-3v7.02L8 14.5z"
      fill="#45322B"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5 4.5 8 1.5l-6.5 3 6.5 3z"
      fill="#45322B"
    />
    <path
      d="m8 7.5 6.5-3M8 7.5v7m0-7-6.5-3m13 0v7.02L8 14.5m6.5-10L8 1.5l-6.5 3m6.5 10-6.5-2.98V4.5"
      stroke="#C77D55"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SwiftPackage: React.FC<SwiftPackageProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? SwiftPackageLight : SwiftPackageDark;

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
