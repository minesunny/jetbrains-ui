import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type UtPLSQLProps = IconProps;

const UtPLSQLLight: FC<SvgProps> = ({
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
      d="M4 1a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h6.28l1.22 1H15l-1.879-1.879A3 3 0 0 0 14 11V4a3 3 0 0 0-3-3zm3.5 6C4 7 3 6 3 6v1s1 1 4.5 1S12 7 12 7V6s-1 1-4.5 1m0-1C9.985 6 12 5.328 12 4.5S9.985 3 7.5 3 3 3.672 3 4.5 5.015 6 7.5 6m0 3C4 9 3 8 3 8v1s1 1 4.5 1S12 9 12 9V8s-1 1-4.5 1M3 10s1 1 4.5 1 4.5-1 4.5-1v1s-1 1-4.5 1S3 11 3 11z"
      fill="#3574F0"
    />
  </svg>
);

const UtPLSQLDark: FC<SvgProps> = ({
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
      d="M4 1a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h6.28l1.22 1H15l-1.879-1.879A3 3 0 0 0 14 11V4a3 3 0 0 0-3-3zm3.5 6C4 7 3 6 3 6v1s1 1 4.5 1S12 7 12 7V6s-1 1-4.5 1m0-1C9.985 6 12 5.328 12 4.5S9.985 3 7.5 3 3 3.672 3 4.5 5.015 6 7.5 6m0 3C4 9 3 8 3 8v1s1 1 4.5 1S12 9 12 9V8s-1 1-4.5 1M3 10s1 1 4.5 1 4.5-1 4.5-1v1s-1 1-4.5 1S3 11 3 11z"
      fill="#548AF7"
    />
  </svg>
);

export const UtPLSQL: FC<UtPLSQLProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? UtPLSQLLight : UtPLSQLDark;

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
