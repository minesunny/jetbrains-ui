import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type BreakpointFieldDisabledProps = IconProps;

const BreakpointFieldDisabledLight: FC<SvgProps> = ({
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
      d="M0 7c.75-2.672 3.64-5 7-5s6.25 2.328 7 5c-.75 2.672-3.64 5-7 5S.75 9.672 0 7m7 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
      fill="#E55765"
    />
  </svg>
);

const BreakpointFieldDisabledDark: FC<SvgProps> = ({
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
      d="M0 7c.75-2.672 3.64-5 7-5s6.25 2.328 7 5c-.75 2.672-3.64 5-7 5S.75 9.672 0 7m7 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
      fill="#DB5C5C"
    />
  </svg>
);

export const BreakpointFieldDisabled: FC<BreakpointFieldDisabledProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light'
      ? BreakpointFieldDisabledLight
      : BreakpointFieldDisabledDark;

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
