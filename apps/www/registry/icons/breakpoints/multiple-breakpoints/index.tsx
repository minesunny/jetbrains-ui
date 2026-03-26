import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type MultipleBreakpointsProps = IconProps;

const MultipleBreakpointsLight: FC<SvgProps> = ({
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
      d="M9.975 8.975a5.5 5.5 0 0 0-4.95-4.95 4.5 4.5 0 1 1 4.95 4.95"
      fill="#E55765"
    />
    <path d="M9 9.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0" fill="#E55765" />
  </svg>
);

const MultipleBreakpointsDark: FC<SvgProps> = ({
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
      d="M9.975 8.975a5.5 5.5 0 0 0-4.95-4.95 4.5 4.5 0 1 1 4.95 4.95"
      fill="#DB5C5C"
    />
    <path d="M9 9.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0" fill="#DB5C5C" />
  </svg>
);

export const MultipleBreakpoints: FC<MultipleBreakpointsProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? MultipleBreakpointsLight : MultipleBreakpointsDark;

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
