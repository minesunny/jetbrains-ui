import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type BundleRunAnythingProps = IconProps;

const BundleRunAnythingLight: React.FC<SvgProps> = ({
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
      d="m8 1.5 6.5 3v3.707A2 2 0 0 0 13.613 8h-3.226c-.502 0-.986.189-1.356.53L7.484 9.952a1.5 1.5 0 0 0-.162 2.033l1.635 2.075L8 14.5l-6.5-2.98V4.5z"
      fill="#EBECF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.21 1.046a.5.5 0 0 0-.42 0l-6.5 3A.5.5 0 0 0 1 4.5v7.02a.5.5 0 0 0 .292.454l6.5 2.98a.5.5 0 0 0 .416 0l1.067-.489-.637-.808-.138.064v-.24l-1-1.269v1.509L2 11.199V5.281L7.5 7.82v2.119l1-.92v-1.2L14 5.282v2.757c.36.07.695.24.969.491l.031.029V4.5a.5.5 0 0 0-.29-.454zM2.693 4.5 8 2.05l5.307 2.45L8 6.95z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m15.893 11.367-3.5 4.442a.5.5 0 0 1-.787 0l-3.499-4.442a.5.5 0 0 1 .055-.678l1.547-1.424c.185-.17.427-.265.678-.265h3.226c.251 0 .493.095.678.265l1.547 1.424a.5.5 0 0 1 .055.678"
      fill="#FFF7F7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m12 14.69 2.819-3.578-1.206-1.11h-3.226l-1.206 1.11zm3.893-3.323-3.5 4.442a.5.5 0 0 1-.787 0l-3.499-4.442a.5.5 0 0 1 .055-.678l1.547-1.424c.185-.17.427-.265.678-.265h3.226c.251 0 .493.095.678.265l1.547 1.424a.5.5 0 0 1 .055.678"
      fill="#DB3B4B"
    />
  </svg>
);

const BundleRunAnythingDark: React.FC<SvgProps> = ({
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
      d="m8 1.5 6.5 3v3.707A2 2 0 0 0 13.613 8h-3.226c-.502 0-.986.189-1.356.53L7.484 9.952a1.5 1.5 0 0 0-.162 2.033l1.635 2.075L8 14.5l-6.5-2.98V4.5z"
      fill="#43454A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.21 1.046a.5.5 0 0 0-.42 0l-6.5 3A.5.5 0 0 0 1 4.5v7.02a.5.5 0 0 0 .292.454l6.5 2.98a.5.5 0 0 0 .416 0l1.067-.489-.637-.808-.138.064v-.24l-1-1.269v1.509L2 11.199V5.281L7.5 7.82v2.119l1-.92v-1.2L14 5.282v2.757c.36.07.695.24.969.491l.031.029V4.5a.5.5 0 0 0-.29-.454zM2.693 4.5 8 2.05l5.307 2.45L8 6.95z"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m15.893 11.367-3.5 4.442a.5.5 0 0 1-.787 0l-3.499-4.442a.5.5 0 0 1 .055-.678l1.547-1.424c.185-.17.427-.265.678-.265h3.226c.251 0 .493.095.678.265l1.547 1.424a.5.5 0 0 1 .055.678"
      fill="#402929"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m12 14.69 2.819-3.578-1.206-1.11h-3.226l-1.206 1.11zm3.893-3.323-3.5 4.442a.5.5 0 0 1-.787 0l-3.499-4.442a.5.5 0 0 1 .055-.678l1.547-1.424c.185-.17.427-.265.678-.265h3.226c.251 0 .493.095.678.265l1.547 1.424a.5.5 0 0 1 .055.678"
      fill="#DB5C5C"
    />
  </svg>
);

export const BundleRunAnything: React.FC<BundleRunAnythingProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? BundleRunAnythingLight : BundleRunAnythingDark;

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
