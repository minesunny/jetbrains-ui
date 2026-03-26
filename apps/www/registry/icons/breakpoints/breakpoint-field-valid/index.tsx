import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type BreakpointFieldValidProps = IconProps;

const BreakpointFieldValidLight: FC<SvgProps> = ({
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
      d="M13.827.176a.6.6 0 0 1 0 .848L10.03 4.821a.6.6 0 0 1-.848 0L7.176 2.815a.6.6 0 1 1 .848-.848l1.582 1.581L12.979.176a.6.6 0 0 1 .848 0"
      fill="#6C707E"
    />
    <path
      d="M6.037 2.064C3.1 2.454.677 4.587 0 7c.75 2.672 3.64 5 7 5s6.25-2.328 7-5c-.3-1.068-.941-2.08-1.818-2.912L10.741 5.53c-.131.13-.28.234-.438.31a3.5 3.5 0 1 1-3.818-2.303l-.013-.013a1.6 1.6 0 0 1-.435-1.46"
      fill="#E55765"
    />
    <path d="M9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0" fill="#E55765" />
  </svg>
);

const BreakpointFieldValidDark: FC<SvgProps> = ({
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
      d="M13.827.176a.6.6 0 0 1 0 .848L10.03 4.821a.6.6 0 0 1-.848 0L7.176 2.815a.6.6 0 1 1 .848-.848l1.582 1.581L12.979.176a.6.6 0 0 1 .848 0"
      fill="#CED0D6"
    />
    <path
      d="M6.037 2.064C3.1 2.454.677 4.587 0 7c.75 2.672 3.64 5 7 5s6.25-2.328 7-5c-.3-1.068-.941-2.08-1.818-2.912L10.741 5.53c-.131.13-.28.234-.438.31a3.5 3.5 0 1 1-3.818-2.303l-.013-.013a1.6 1.6 0 0 1-.435-1.46"
      fill="#DB5C5C"
    />
    <path d="M9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0" fill="#DB5C5C" />
  </svg>
);

export const BreakpointFieldValid: FC<BreakpointFieldValidProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? BreakpointFieldValidLight : BreakpointFieldValidDark;

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
