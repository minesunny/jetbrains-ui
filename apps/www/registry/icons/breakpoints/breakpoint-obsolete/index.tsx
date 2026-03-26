import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type BreakpointObsoleteProps = IconProps;

const BreakpointObsoleteLight: FC<SvgProps> = ({
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
      d="M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14m.9-10.5a.9.9 0 0 0-1.8 0V7a.9.9 0 1 0 1.8 0zM7 11.2A1.1 1.1 0 1 0 7 9a1.1 1.1 0 0 0 0 2.2"
      fill="#E55765"
    />
  </svg>
);

const BreakpointObsoleteDark: FC<SvgProps> = ({
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
      d="M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14m.9-10.5a.9.9 0 0 0-1.8 0V7a.9.9 0 1 0 1.8 0zM7 11.2A1.1 1.1 0 1 0 7 9a1.1 1.1 0 0 0 0 2.2"
      fill="#E55765"
    />
  </svg>
);

export const BreakpointObsolete: FC<BreakpointObsoleteProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? BreakpointObsoleteLight : BreakpointObsoleteDark;

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
