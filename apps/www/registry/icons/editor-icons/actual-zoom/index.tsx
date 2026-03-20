import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type ActualZoomProps = IconProps;

const ActualZoomLight: FC<SvgProps> = ({
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
      d="M3.34 6.096H1.366V4.872h1.11q.372 0 .648-.156.282-.156.426-.444.15-.288.15-.672h1.11V12H3.34zm5.272 3.282v1.602H7.016V9.378zm0-4.74V6.24H7.016V4.638zm3.274 1.458H9.912V4.872h1.11q.372 0 .648-.156.282-.156.426-.444.15-.288.15-.672h1.11V12h-1.47z"
      fill="#6C707E"
    />
  </svg>
);

const ActualZoomDark: FC<SvgProps> = ({
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
      d="M3.34 6.096H1.366V4.872h1.11q.372 0 .648-.156.282-.156.426-.444.15-.288.15-.672h1.11V12H3.34zm5.272 3.282v1.602H7.016V9.378zm0-4.74V6.24H7.016V4.638zm3.274 1.458H9.912V4.872h1.11q.372 0 .648-.156.282-.156.426-.444.15-.288.15-.672h1.11V12h-1.47z"
      fill="#CED0D6"
    />
  </svg>
);

export const ActualZoom: FC<ActualZoomProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ActualZoomLight : ActualZoomDark;

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
