import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type CwmPermissionViewProps = IconProps;

const CwmPermissionViewLight: React.FC<SvgProps> = ({
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
      d="M8 2.5C4.5 2.5 1 5 0 8c1 3 4.5 5.5 8 5.5S15 11 16 8c-1-3-4.5-5.5-8-5.5"
      fill="#F2FCF3"
    />
    <path
      d="M8 3c1.634 0 3.286.585 4.652 1.535 1.315.915 2.331 2.147 2.816 3.465-.485 1.318-1.5 2.55-2.816 3.465C11.286 12.415 9.634 13 8 13s-3.286-.585-4.652-1.535C2.033 10.55 1.016 9.318.53 8c.485-1.318 1.502-2.55 2.817-3.465C4.714 3.585 6.366 3 8 3Z"
      stroke="#208A3C"
    />
    <circle cx="8" cy="8" r="2.5" stroke="#208A3C" />
  </svg>
);

const CwmPermissionViewDark: React.FC<SvgProps> = ({
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
      d="M8 2.5C4.5 2.5 1 5 0 8c1 3 4.5 5.5 8 5.5S15 11 16 8c-1-3-4.5-5.5-8-5.5"
      fill="#253627"
    />
    <path
      d="M8 3c1.634 0 3.286.585 4.652 1.535 1.315.915 2.331 2.147 2.816 3.465-.485 1.318-1.5 2.55-2.816 3.465C11.286 12.415 9.634 13 8 13s-3.286-.585-4.652-1.535C2.033 10.55 1.016 9.318.53 8c.485-1.318 1.502-2.55 2.817-3.465C4.714 3.585 6.366 3 8 3Z"
      stroke="#57965C"
    />
    <circle cx="8" cy="8" r="2.5" stroke="#57965C" />
  </svg>
);

export const CwmPermissionView: React.FC<CwmPermissionViewProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? CwmPermissionViewLight : CwmPermissionViewDark;

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
