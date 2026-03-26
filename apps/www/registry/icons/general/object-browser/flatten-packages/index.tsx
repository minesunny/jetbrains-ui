import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type FlattenPackagesProps = IconProps;

const FlattenPackagesLight: FC<SvgProps> = ({
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
      d="M5 2v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H9.5l-1-1H6a1 1 0 0 0-1 1M5 10v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H9.5l-1-1H6a1 1 0 0 0-1 1"
      fill="#EBECF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 1.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0V12h2v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H9.5l-1-1H6a1 1 0 0 0-1 1v1H3V4h2v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H9.5l-1-1H6a1 1 0 0 0-1 1v1H3zM6 2h2.086l1 1H12v3H6zm2.086 8H6v4h6v-3H9.086z"
      fill="#6C707E"
    />
  </svg>
);

const FlattenPackagesDark: FC<SvgProps> = ({
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
      d="M5 2v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H9.5l-1-1H6a1 1 0 0 0-1 1M5 10v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H9.5l-1-1H6a1 1 0 0 0-1 1"
      fill="#43454A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 1.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0V12h2v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H9.5l-1-1H6a1 1 0 0 0-1 1v1H3V4h2v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H9.5l-1-1H6a1 1 0 0 0-1 1v1H3zM6 2h2.086l1 1H12v3H6zm2.086 8H6v4h6v-3H9.086z"
      fill="#CED0D6"
    />
  </svg>
);

export const FlattenPackages: FC<FlattenPackagesProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? FlattenPackagesLight : FlattenPackagesDark;

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
