import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type BreakpointUnsuspendentDisabledProps = IconProps;

const BreakpointUnsuspendentDisabledLight: FC<SvgProps> = ({
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
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title ? <title>{title}</title> : null}
    <path
      d="M7 .75a6.25 6.25 0 1 1 0 12.5A6.25 6.25 0 0 1 7 .75Z"
      stroke="#FFAF0F"
      strokeWidth="1.5"
    />
  </svg>
);

const BreakpointUnsuspendentDisabledDark: FC<SvgProps> = ({
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
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title ? <title>{title}</title> : null}
    <path
      d="M7 .75a6.25 6.25 0 1 1 0 12.5A6.25 6.25 0 0 1 7 .75Z"
      stroke="#F2C55C"
      strokeWidth="1.5"
    />
  </svg>
);

export const BreakpointUnsuspendentDisabled: FC<
  BreakpointUnsuspendentDisabledProps
> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light'
      ? BreakpointUnsuspendentDisabledLight
      : BreakpointUnsuspendentDisabledDark;

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
