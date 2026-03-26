import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type PandasProps = IconProps;

const PandasLight: FC<SvgProps> = ({
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
    <rect x="11" y="1" width="2" height="10" rx=".5" fill="#130754" />
    <rect x="2" y="5" width="2" height="10" rx=".5" fill="#130754" />
    <rect x="5" y="1" width="2" height="4" rx=".5" fill="#130754" />
    <rect x="5" y="9" width="2" height="4" rx=".5" fill="#130754" />
    <rect x="5" y="6" width="2" height="2" rx=".5" fill="#FFCA00" />
    <rect x="8" y="3" width="2" height="4" rx=".5" fill="#130754" />
    <rect x="8" y="8" width="2" height="2" rx=".5" fill="#E70488" />
    <rect x="8" y="11" width="2" height="4" rx=".5" fill="#130754" />
  </svg>
);

const PandasDark: FC<SvgProps> = ({
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
    <rect x="11" y="1" width="2" height="10" rx=".5" fill="#fff" />
    <rect x="2" y="5" width="2" height="10" rx=".5" fill="#fff" />
    <rect x="5" y="1" width="2" height="4" rx=".5" fill="#fff" />
    <rect x="5" y="9" width="2" height="4" rx=".5" fill="#fff" />
    <rect x="5" y="6" width="2" height="2" rx=".5" fill="#FFCA00" />
    <rect x="8" y="3" width="2" height="4" rx=".5" fill="#fff" />
    <rect x="8" y="8" width="2" height="2" rx=".5" fill="#E70488" />
    <rect x="8" y="11" width="2" height="4" rx=".5" fill="#fff" />
  </svg>
);

export const Pandas: FC<PandasProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? PandasLight : PandasDark;

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
