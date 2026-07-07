/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type AutoscrollFromSourceProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const AutoscrollFromSourceLight: FC<
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
      d="M14 5.5a.5.5 0 0 1-1 0V3H3v2.5a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5z"
      fill="#6C707E"
    />
    <path
      d="M5.146 11.354a.5.5 0 0 1 .707-.707L7.5 12.293V5.5a.5.5 0 1 1 1 0v6.793l1.646-1.647a.5.5 0 1 1 .707.707l-2.5 2.5a.5.5 0 0 1-.707 0z"
      fill="#6C707E"
    />
  </svg>
);

const AutoscrollFromSourceDark: FC<
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
      d="M14 5.5a.5.5 0 0 1-1 0V3H3v2.5a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5z"
      fill="#CED0D6"
    />
    <path
      d="M5.146 11.354a.5.5 0 0 1 .707-.707L7.5 12.293V5.5a.5.5 0 1 1 1 0v6.793l1.646-1.647a.5.5 0 1 1 .707.707l-2.5 2.5a.5.5 0 0 1-.707 0z"
      fill="#CED0D6"
    />
  </svg>
);

export const AutoscrollFromSource: FC<AutoscrollFromSourceProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? AutoscrollFromSourceLight : AutoscrollFromSourceDark;

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

export default AutoscrollFromSource;
