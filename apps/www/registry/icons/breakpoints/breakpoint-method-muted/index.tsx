import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type BreakpointMethodMutedProps = IconProps;

const BreakpointMethodMutedLight: FC<SvgProps> = ({
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
      d="M6.293.707a1 1 0 0 1 1.414 0l5.586 5.586a1 1 0 0 1 0 1.414l-5.586 5.586a1 1 0 0 1-1.414 0L.707 7.707a1 1 0 0 1 0-1.414z"
      fill="#6C707E"
    />
  </svg>
);

const BreakpointMethodMutedDark: FC<SvgProps> = ({
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
      d="M6.293.707a1 1 0 0 1 1.414 0l5.586 5.586a1 1 0 0 1 0 1.414l-5.586 5.586a1 1 0 0 1-1.414 0L.707 7.707a1 1 0 0 1 0-1.414z"
      fill="#CED0D6"
    />
  </svg>
);

export const BreakpointMethodMuted: FC<BreakpointMethodMutedProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? BreakpointMethodMutedLight : BreakpointMethodMutedDark;

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
