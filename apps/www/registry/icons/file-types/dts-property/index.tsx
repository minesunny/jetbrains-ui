import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type DtsPropertyProps = IconProps;

const DtsPropertyLight: FC<SvgProps> = ({
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
    {title ? <title>{title}</title> : null}
    <circle cx="8" cy="8" r="6.5" fill="#F2FCF3" stroke="#208A3C" />
    <path
      d="M8.57 5c-.843 0-1.507.371-1.887.998v-.875H5.7V12h1.003V9.52c.384.607 1.039.965 1.868.965 1.458 0 2.476-1.115 2.476-2.742S10.03 5 8.571 5m-.209 4.585c-.977 0-1.658-.752-1.658-1.842S7.383 5.9 8.361 5.9c.972 0 1.643.752 1.643 1.842s-.67 1.842-1.643 1.842"
      fill="#208A3C"
    />
  </svg>
);

const DtsPropertyDark: FC<SvgProps> = ({
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
    {title ? <title>{title}</title> : null}
    <circle cx="8" cy="8" r="6.5" fill="#253627" stroke="#57965C" />
    <path
      d="M8.57 5c-.843 0-1.507.371-1.887.998v-.875H5.7V12h1.003V9.52c.384.607 1.039.965 1.868.965 1.458 0 2.476-1.115 2.476-2.742S10.03 5 8.571 5m-.209 4.585c-.977 0-1.658-.752-1.658-1.842S7.383 5.9 8.361 5.9c.972 0 1.643.752 1.643 1.842s-.67 1.842-1.643 1.842"
      fill="#57965C"
    />
  </svg>
);

export const DtsProperty: FC<DtsPropertyProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? DtsPropertyLight : DtsPropertyDark;

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
