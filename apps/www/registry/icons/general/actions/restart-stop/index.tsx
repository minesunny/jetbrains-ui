/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type RestartStopProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const RestartStopLight: FC<
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
    <rect
      x={9.5}
      y={9.5}
      width={6}
      height={6}
      rx={1.5}
      fill="#FFF7F7"
      stroke="#DB3B4B"
    />
    <path
      d="M14 1.5a.5.5 0 0 0-1 0v3.182A6 6 0 1 0 8 14v-1a5 5 0 1 1 4-8H9.5a.5.5 0 0 0 0 1H14z"
      fill="#6C707E"
    />
  </svg>
);

const RestartStopDark: FC<
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
    <rect
      x={9.5}
      y={9.5}
      width={6}
      height={6}
      rx={1.5}
      fill="#402929"
      stroke="#DB5C5C"
    />
    <path
      d="M14 1.5a.5.5 0 0 0-1 0v3.182A6 6 0 1 0 8 14v-1a5 5 0 1 1 4-8H9.5a.5.5 0 0 0 0 1H14z"
      fill="#CED0D6"
    />
  </svg>
);

export const RestartStop: FC<RestartStopProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? RestartStopLight : RestartStopDark;

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

export default RestartStop;
