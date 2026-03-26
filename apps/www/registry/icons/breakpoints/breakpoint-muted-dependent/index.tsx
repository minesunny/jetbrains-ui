import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type BreakpointMutedDependentProps = IconProps;

const BreakpointMutedDependentLight: FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
      fill="#6C707E"
    />
    <path
      d="M5.173.24c.332.393.58.86.714 1.373Q6.427 1.5 7 1.5a5.5 5.5 0 1 1-5.387 4.387A3.5 3.5 0 0 1 .24 5.173 7 7 0 1 0 5.174.24"
      fill="#6C707E"
    />
  </svg>
);

const BreakpointMutedDependentDark: FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
      fill="#CED0D6"
    />
    <path
      d="M5.173.24c.332.393.58.86.714 1.373Q6.427 1.5 7 1.5a5.5 5.5 0 1 1-5.387 4.387A3.5 3.5 0 0 1 .24 5.173 7 7 0 1 0 5.174.24"
      fill="#CED0D6"
    />
  </svg>
);

export const BreakpointMutedDependent: FC<BreakpointMutedDependentProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light'
      ? BreakpointMutedDependentLight
      : BreakpointMutedDependentDark;

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
