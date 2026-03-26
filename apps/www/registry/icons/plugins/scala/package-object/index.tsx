import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type PackageObjectProps = IconProps;

const PackageObjectLight: React.FC<SvgProps> = ({
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
      d="M15 8q0 .51-.07 1h-2.016l-.707-.707A1 1 0 0 0 11.5 8H9a2 2 0 0 0-2 2v4.929A7.002 7.002 0 0 1 8 1a7 7 0 0 1 7 7"
      fill="#FFF4EB"
    />
    <path
      d="M2 8a6 6 0 0 0 5 5.917v1.012A7.002 7.002 0 0 1 8 1a7 7 0 0 1 6.93 8h-1.013Q14 8.511 14 8A6 6 0 0 0 2 8"
      fill="#E66D17"
    />
    <path
      d="M8 10v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2.5l-1-1H9a1 1 0 0 0-1 1"
      fill="#EBECF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m12.5 10-1-1H9a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm-1.414 0H9v5h6v-4h-2.5a1 1 0 0 1-.707-.293z"
      fill="#6C707E"
    />
  </svg>
);

const PackageObjectDark: React.FC<SvgProps> = ({
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
      d="M15 8q0 .51-.07 1h-2.016l-.707-.707A1 1 0 0 0 11.5 8H9a2 2 0 0 0-2 2v4.929A7.002 7.002 0 0 1 8 1a7 7 0 0 1 7 7"
      fill="#45322B"
    />
    <path
      d="M2 8a6 6 0 0 0 5 5.917v1.012A7.002 7.002 0 0 1 8 1a7 7 0 0 1 6.93 8h-1.013Q14 8.511 14 8A6 6 0 0 0 2 8"
      fill="#C77D55"
    />
    <path
      d="M8 10v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2.5l-1-1H9a1 1 0 0 0-1 1"
      fill="#43454A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m12.5 10-1-1H9a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm-1.414 0H9v5h6v-4h-2.5a1 1 0 0 1-.707-.293z"
      fill="#CED0D6"
    />
  </svg>
);

export const PackageObject: React.FC<PackageObjectProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? PackageObjectLight : PackageObjectDark;

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
