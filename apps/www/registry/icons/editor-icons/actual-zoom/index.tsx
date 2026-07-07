/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type ActualZoomProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const ActualZoomLight: FC<
  Omit<ComponentProps<'svg'>, 'size'> & { size: number }
> = ({
  size,
  className,
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
    <path
      d="M3.34 6.096H1.366V4.872h1.11q.372 0 .648-.156.282-.156.426-.444.15-.288.15-.672h1.11V12H3.34zm5.272 3.282v1.602H7.016V9.378zm0-4.74V6.24H7.016V4.638zm3.274 1.458H9.912V4.872h1.11q.372 0 .648-.156.282-.156.426-.444.15-.288.15-.672h1.11V12h-1.47z"
      fill="#6C707E"
    />
  </svg>
);

const ActualZoomDark: FC<
  Omit<ComponentProps<'svg'>, 'size'> & { size: number }
> = ({
  size,
  className,
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
    <path
      d="M3.34 6.096H1.366V4.872h1.11q.372 0 .648-.156.282-.156.426-.444.15-.288.15-.672h1.11V12H3.34zm5.272 3.282v1.602H7.016V9.378zm0-4.74V6.24H7.016V4.638zm3.274 1.458H9.912V4.872h1.11q.372 0 .648-.156.282-.156.426-.444.15-.288.15-.672h1.11V12h-1.47z"
      fill="#CED0D6"
    />
  </svg>
);

export const ActualZoom: FC<ActualZoomProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ActualZoomLight : ActualZoomDark;

  return (
    <SvgComponent
      size={size}
      className={cn('inline-block shrink-0', className)}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};

export default ActualZoom;
