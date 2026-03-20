import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type AccessProtectedProps = IconProps;

const AccessProtectedLight: FC<SvgProps> = ({
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
    viewBox="0 0 16 16"
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
      d="M8.95 8a2.5 2.5 0 1 1 0-1h2.55a.5.5 0 0 1 0 1H11v1.5a.5.5 0 0 1-1 0V8zM6.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      fill="#E66D17"
    />
  </svg>
);

const AccessProtectedDark: FC<SvgProps> = ({
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
    viewBox="0 0 16 16"
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
      d="M8.95 8a2.5 2.5 0 1 1 0-1h2.55a.5.5 0 0 1 0 1H11v1.5a.5.5 0 0 1-1 0V8zM6.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      fill="#F2C55C"
    />
  </svg>
);

export const AccessProtected: FC<AccessProtectedProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? AccessProtectedLight : AccessProtectedDark;

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
