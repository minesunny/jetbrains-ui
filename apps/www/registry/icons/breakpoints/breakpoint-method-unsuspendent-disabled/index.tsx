import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../types';

export type BreakpointMethodUnsuspendentDisabledProps = SvgProps;

const BreakpointMethodUnsuspendentDisabledLight: FC<SvgProps> = ({
  size,
  className,
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
    <path
      d="M6.823 1.237a.25.25 0 0 1 .354 0l5.586 5.586a.25.25 0 0 1 0 .354l-5.586 5.586a.25.25 0 0 1-.354 0L1.237 7.177a.25.25 0 0 1 0-.354z"
      stroke="#FFAF0F"
      strokeWidth="1.5"
    />
  </svg>
);

const BreakpointMethodUnsuspendentDisabledDark: FC<SvgProps> = ({
  size,
  className,
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
    <path
      d="M6.823 1.237a.25.25 0 0 1 .354 0l5.586 5.586a.25.25 0 0 1 0 .354l-5.586 5.586a.25.25 0 0 1-.354 0L1.237 7.177a.25.25 0 0 1 0-.354z"
      stroke="#F2C55C"
      strokeWidth="1.5"
    />
  </svg>
);

export const BreakpointMethodUnsuspendentDisabled: FC<
  BreakpointMethodUnsuspendentDisabledProps
> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light'
      ? BreakpointMethodUnsuspendentDisabledLight
      : BreakpointMethodUnsuspendentDisabledDark;

  return (
    <SvgComponent
      size={sizeMap[size]}
      className={cn('inline-block flex-shrink-0', className)}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};
