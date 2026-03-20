import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type MultipleBreakpointsDisabledProps = IconProps;

const MultipleBreakpointsDisabledLight: FC<SvgProps> = ({
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
      d="M9.5 0a4.5 4.5 0 0 0-4.475 4.025c.517.049 1.013.169 1.478.35a3 3 0 1 1 3.121 3.122c.182.466.302.961.351 1.478A4.5 4.5 0 0 0 9.5 0"
      fill="#E55765"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 9.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-1.5 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
      fill="#E55765"
    />
  </svg>
);

const MultipleBreakpointsDisabledDark: FC<SvgProps> = ({
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
      d="M9.5 0a4.5 4.5 0 0 0-4.475 4.025c.517.049 1.013.169 1.478.35a3 3 0 1 1 3.121 3.122c.182.466.302.961.351 1.478A4.5 4.5 0 0 0 9.5 0"
      fill="#DB5C5C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 9.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-1.5 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
      fill="#DB5C5C"
    />
  </svg>
);

export const MultipleBreakpointsDisabled: FC<
  MultipleBreakpointsDisabledProps
> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light'
      ? MultipleBreakpointsDisabledLight
      : MultipleBreakpointsDisabledDark;

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
