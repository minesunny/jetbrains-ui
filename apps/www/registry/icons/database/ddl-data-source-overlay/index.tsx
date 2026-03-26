import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type DdlDataSourceOverlayProps = IconProps;

const DdlDataSourceOverlayLight: FC<SvgProps> = ({
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
      d="M0 10a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1z"
      fill="#6C707E"
    />
    <path
      d="M2.5 10.5v4H4A1.5 1.5 0 0 0 5.5 13v-1A1.5 1.5 0 0 0 4 10.5zM7.5 10.5v4H9a1.5 1.5 0 0 0 1.5-1.5v-1A1.5 1.5 0 0 0 9 10.5zM12.5 10v4.5H15"
      stroke="#F7F8FA"
    />
  </svg>
);

const DdlDataSourceOverlayDark: FC<SvgProps> = ({
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
      d="M0 10a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1z"
      fill="#CED0D6"
    />
    <path
      d="M2.5 10.5v4H4A1.5 1.5 0 0 0 5.5 13v-1A1.5 1.5 0 0 0 4 10.5zM7.5 10.5v4H9a1.5 1.5 0 0 0 1.5-1.5v-1A1.5 1.5 0 0 0 9 10.5zM12.5 10v4.5H15"
      stroke="#2B2D30"
    />
  </svg>
);

export const DdlDataSourceOverlay: FC<DdlDataSourceOverlayProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? DdlDataSourceOverlayLight : DdlDataSourceOverlayDark;

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
