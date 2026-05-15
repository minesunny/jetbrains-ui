import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../types';

export type BreakpointFieldMutedDisabledProps = SvgProps;

const BreakpointFieldMutedDisabledLight: FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 7c.75-2.672 3.64-5 7-5s6.25 2.328 7 5c-.75 2.672-3.64 5-7 5S.75 9.672 0 7m7 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
      fill="#6C707E"
    />
  </svg>
);

const BreakpointFieldMutedDisabledDark: FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 7c.75-2.672 3.64-5 7-5s6.25 2.328 7 5c-.75 2.672-3.64 5-7 5S.75 9.672 0 7m7 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
      fill="#CED0D6"
    />
  </svg>
);

export const BreakpointFieldMutedDisabled: FC<
  BreakpointFieldMutedDisabledProps
> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light'
      ? BreakpointFieldMutedDisabledLight
      : BreakpointFieldMutedDisabledDark;

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
