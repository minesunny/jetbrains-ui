import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type BreakpointMethodValidProps = IconProps;

const BreakpointMethodValidLight: FC<SvgProps> = ({
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
      d="M6.472 3.524A1.6 1.6 0 0 1 7.805.805L7.707.707a1 1 0 0 0-1.414 0L.707 6.293a1 1 0 0 0 0 1.414l5.586 5.586a1 1 0 0 0 1.414 0l5.586-5.586a1 1 0 0 0 0-1.414l-1.658-1.658-.894.895a1.6 1.6 0 0 1-2.263 0z"
      fill="#E55765"
    />
  </svg>
);

const BreakpointMethodValidDark: FC<SvgProps> = ({
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
      d="M6.472 3.524A1.6 1.6 0 0 1 7.805.805L7.707.707a1 1 0 0 0-1.414 0L.707 6.293a1 1 0 0 0 0 1.414l5.586 5.586a1 1 0 0 0 1.414 0l5.586-5.586a1 1 0 0 0 0-1.414l-1.658-1.658-.894.895a1.6 1.6 0 0 1-2.263 0z"
      fill="#DB5C5C"
    />
  </svg>
);

export const BreakpointMethodValid: FC<BreakpointMethodValidProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? BreakpointMethodValidLight : BreakpointMethodValidDark;

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
