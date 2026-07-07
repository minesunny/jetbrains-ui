/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type PluginProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const PluginLight: FC<
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
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 4V3a1 1 0 0 0-1-1H6a4 4 0 0 0-3.874 3H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1.126c.444 1.725 2.01 3 3.874 3h3a1 1 0 0 0 1-1v-1h3.5a.5.5 0 0 0 0-1H10V5h3.5a.5.5 0 0 0 0-1zM9 3H6a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h3zM2 6v2H1V6z"
      fill="#6C707E"
    />
  </svg>
);

const PluginDark: FC<
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
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 4V3a1 1 0 0 0-1-1H6a4 4 0 0 0-3.874 3H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1.126c.444 1.725 2.01 3 3.874 3h3a1 1 0 0 0 1-1v-1h3.5a.5.5 0 0 0 0-1H10V5h3.5a.5.5 0 0 0 0-1zM9 3H6a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h3zM2 6v2H1V6z"
      fill="#CED0D6"
    />
  </svg>
);

export const Plugin: FC<PluginProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? PluginLight : PluginDark;

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

export default Plugin;
