/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type RefreshProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const RefreshLight: FC<
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
      d="M2.5 9V8A5.5 5.5 0 0 1 11 3.39M5 12.61A5.5 5.5 0 0 0 13.5 8V7"
      stroke="#6C707E"
      strokeLinecap="round"
    />
    <path
      d="m.5 7.5 2 2 2-2M11.5 8.5l2-2 2 2"
      stroke="#6C707E"
      strokeLinecap="round"
    />
  </svg>
);

const RefreshDark: FC<
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
      d="M2.5 9V8A5.5 5.5 0 0 1 11 3.39M5 12.61A5.5 5.5 0 0 0 13.5 8V7"
      stroke="#CED0D6"
      strokeLinecap="round"
    />
    <path
      d="m.5 7.5 2 2 2-2M11.5 8.5l2-2 2 2"
      stroke="#CED0D6"
      strokeLinecap="round"
    />
  </svg>
);

export const Refresh: FC<RefreshProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? RefreshLight : RefreshDark;

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

export default Refresh;
