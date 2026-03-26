import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type BreakpointExceptionProps = IconProps;

const BreakpointExceptionLight: FC<SvgProps> = ({
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
      d="M8.626.514c.066-.45-.523-.7-.821-.348L1.106 8.062c-.249.293-.032.734.36.734H6.07l-.695 4.69c-.066.45.523.7.821.348l6.699-7.896c.248-.293.032-.734-.36-.734H7.93z"
      fill="#E55765"
    />
  </svg>
);

const BreakpointExceptionDark: FC<SvgProps> = ({
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
      d="M8.626.514c.066-.45-.523-.7-.821-.348L1.106 8.062c-.249.293-.032.734.36.734H6.07l-.695 4.69c-.066.45.523.7.821.348l6.699-7.896c.248-.293.032-.734-.36-.734H7.93z"
      fill="#DB5C5C"
    />
  </svg>
);

export const BreakpointException: FC<BreakpointExceptionProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? BreakpointExceptionLight : BreakpointExceptionDark;

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
