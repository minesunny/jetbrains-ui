import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type GridProps = IconProps;

const GridLight: FC<SvgProps> = ({
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
    <rect x="11" y="2" width="1" height="12" rx=".5" fill="#6C707E" />
    <rect
      x="14"
      y="11"
      width="1"
      height="12"
      rx=".5"
      transform="rotate(90 14 11)"
      fill="#6C707E"
    />
    <rect x="4" y="2" width="1" height="12" rx=".5" fill="#6C707E" />
    <rect
      x="14"
      y="4"
      width="1"
      height="12"
      rx=".5"
      transform="rotate(90 14 4)"
      fill="#6C707E"
    />
  </svg>
);

const GridDark: FC<SvgProps> = ({
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
    <rect x="11" y="2" width="1" height="12" rx=".5" fill="#CED0D6" />
    <rect
      x="14"
      y="11"
      width="1"
      height="12"
      rx=".5"
      transform="rotate(90 14 11)"
      fill="#CED0D6"
    />
    <rect x="4" y="2" width="1" height="12" rx=".5" fill="#CED0D6" />
    <rect
      x="14"
      y="4"
      width="1"
      height="12"
      rx=".5"
      transform="rotate(90 14 4)"
      fill="#CED0D6"
    />
  </svg>
);

export const Grid: FC<GridProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? GridLight : GridDark;

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
