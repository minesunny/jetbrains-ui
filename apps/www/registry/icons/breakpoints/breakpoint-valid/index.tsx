import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type BreakpointValidProps = IconProps;

const BreakpointValidLight: FC<SvgProps> = ({
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
      d="M6.472 1.261a1.6 1.6 0 0 0 0 2.263L8.478 5.53a1.6 1.6 0 0 0 2.263 0l2.213-2.213a7 7 0 1 1-2.26-2.265L9.608 2.136l-.874-.875a1.6 1.6 0 0 0-2.263 0"
      fill="#E55765"
    />
  </svg>
);

const BreakpointValidDark: FC<SvgProps> = ({
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
      d="M6.472 1.261a1.6 1.6 0 0 0 0 2.263L8.478 5.53a1.6 1.6 0 0 0 2.263 0l2.213-2.213a7 7 0 1 1-2.26-2.265L9.608 2.136l-.874-.875a1.6 1.6 0 0 0-2.263 0"
      fill="#E55765"
    />
  </svg>
);

export const BreakpointValid: FC<BreakpointValidProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? BreakpointValidLight : BreakpointValidDark;

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
