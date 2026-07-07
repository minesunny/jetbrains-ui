/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type CoffeescriptProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const CoffeescriptLight: FC<
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
      d="M6 1a2 2 0 1 0 0 4h.243c.966 0 1.823-.618 2.129-1.534l.205-.616c.17-.508.644-.85 1.18-.85H10a1 1 0 1 1 0 2 .5.5 0 0 0 0 1 2 2 0 1 0 0-4h-.243c-.966 0-1.823.618-2.129 1.534l-.205.616c-.17.508-.644.85-1.18.85H6a1 1 0 0 1 0-2 .5.5 0 0 0 0-1"
      fill="#C27D04"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.032 3.324a.5.5 0 0 1 .936.352l-2.635 7.026A2 2 0 0 1 9.461 12H6.54a2 2 0 0 1-1.873-1.298L4.404 10H3a2 2 0 0 1-.096-3.998l-.872-2.326a.5.5 0 0 1 .936-.352l2.635 7.027A1 1 0 0 0 6.54 11h2.92a1 1 0 0 0 .937-.649zM3 7h.279l.75 2H3a1 1 0 0 1 0-2"
      fill="#C27D04"
    />
    <path d="M2.5 13a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z" fill="#C27D04" />
    <path
      d="m3.972 6 1.631 4.351A1 1 0 0 0 6.54 11h2.92a1 1 0 0 0 .937-.649L12.029 6z"
      fill="#FFFAEB"
    />
  </svg>
);

const CoffeescriptDark: FC<
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
      d="M6 1a2 2 0 1 0 0 4h.243c.966 0 1.823-.618 2.129-1.534l.205-.616c.17-.508.644-.85 1.18-.85H10a1 1 0 1 1 0 2 .5.5 0 0 0 0 1 2 2 0 1 0 0-4h-.243c-.966 0-1.823.618-2.129 1.534l-.205.616c-.17.508-.644.85-1.18.85H6a1 1 0 0 1 0-2 .5.5 0 0 0 0-1"
      fill="#D6AE58"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.032 3.324a.5.5 0 0 1 .936.352l-2.635 7.026A2 2 0 0 1 9.461 12H6.54a2 2 0 0 1-1.873-1.298L4.404 10H3a2 2 0 0 1-.096-3.998l-.872-2.326a.5.5 0 0 1 .936-.352l2.635 7.027A1 1 0 0 0 6.54 11h2.92a1 1 0 0 0 .937-.649zM3 7h.279l.75 2H3a1 1 0 0 1 0-2"
      fill="#D6AE58"
    />
    <path d="M2.5 13a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z" fill="#D6AE58" />
    <path
      d="m3.972 6 1.631 4.351A1 1 0 0 0 6.54 11h2.92a1 1 0 0 0 .937-.649L12.029 6z"
      fill="#3D3223"
    />
  </svg>
);

export const Coffeescript: FC<CoffeescriptProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? CoffeescriptLight : CoffeescriptDark;

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

export default Coffeescript;
