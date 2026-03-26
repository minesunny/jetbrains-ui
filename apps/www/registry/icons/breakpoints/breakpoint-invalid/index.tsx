import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type BreakpointInvalidProps = IconProps;

const BreakpointInvalidLight: FC<SvgProps> = ({
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
      d="M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0m-1.5 0a5.5 5.5 0 0 1-8.823 4.383l7.706-7.706A5.48 5.48 0 0 1 12.5 7m-9.883 3.323 7.706-7.706a5.5 5.5 0 0 0-7.706 7.706"
      fill="#6C707E"
    />
  </svg>
);

const BreakpointInvalidDark: FC<SvgProps> = ({
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
      d="M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0m-1.5 0a5.5 5.5 0 0 1-8.823 4.383l7.706-7.706A5.48 5.48 0 0 1 12.5 7m-9.883 3.323 7.706-7.706a5.5 5.5 0 0 0-7.706 7.706"
      fill="#CED0D6"
    />
  </svg>
);

export const BreakpointInvalid: FC<BreakpointInvalidProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? BreakpointInvalidLight : BreakpointInvalidDark;

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
