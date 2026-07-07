/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type ScrollUpProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const ScrollUpLight: FC<
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
      d="M1.5 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zM1.5 7.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM1.5 12a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM11 12.5a.5.5 0 0 0 1 0V6.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.707 0l-3 3a.5.5 0 0 0 .707.708L11 6.707z"
      fill="#6C707E"
    />
  </svg>
);

const ScrollUpDark: FC<
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
      d="M1.5 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zM1.5 7.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM1.5 12a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM11 12.5a.5.5 0 0 0 1 0V6.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.707 0l-3 3a.5.5 0 0 0 .707.708L11 6.707z"
      fill="#CED0D6"
    />
  </svg>
);

export const ScrollUp: FC<ScrollUpProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ScrollUpLight : ScrollUpDark;

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

export default ScrollUp;
