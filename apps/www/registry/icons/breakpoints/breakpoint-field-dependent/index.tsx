import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type BreakpointFieldDependentProps = IconProps;

const BreakpointFieldDependentLight: FC<SvgProps> = ({
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
      d="M3.718 5.782C3.338 5.923 2.928 6 2.5 6c-.67 0-1.295-.188-1.827-.514A6 6 0 0 0 0 7c.75 2.672 3.64 5 7 5s6.25-2.328 7-5c-.75-2.672-3.64-5-7-5q-.522 0-1.026.073a3.54 3.54 0 0 1-.192 1.645 3.5 3.5 0 1 1-2.065 2.065"
      fill="#E55765"
    />
  </svg>
);

const BreakpointFieldDependentDark: FC<SvgProps> = ({
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
      d="M3.718 5.782C3.338 5.923 2.928 6 2.5 6c-.67 0-1.295-.188-1.827-.514A6 6 0 0 0 0 7c.75 2.672 3.64 5 7 5s6.25-2.328 7-5c-.75-2.672-3.64-5-7-5q-.522 0-1.026.073a3.54 3.54 0 0 1-.192 1.645 3.5 3.5 0 1 1-2.065 2.065"
      fill="#DB5C5C"
    />
  </svg>
);

export const BreakpointFieldDependent: FC<BreakpointFieldDependentProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light'
      ? BreakpointFieldDependentLight
      : BreakpointFieldDependentDark;

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
