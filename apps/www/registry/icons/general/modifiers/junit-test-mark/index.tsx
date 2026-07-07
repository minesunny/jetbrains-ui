/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type JunitTestMarkProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const JunitTestMarkLight: FC<
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.38 2.712a.4.4 0 0 1 0 .576l-2.703 2.6A.4.4 0 0 1 12 5.599V.404a.4.4 0 0 1 .677-.289z"
      fill="#55A76A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.623 3.288a.4.4 0 0 1 0-.576L10.322.116a.4.4 0 0 1 .677.289v5.194a.4.4 0 0 1-.678.288z"
      fill="#E55765"
    />
  </svg>
);

const JunitTestMarkDark: FC<
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.38 2.712a.4.4 0 0 1 0 .576l-2.703 2.6A.4.4 0 0 1 12 5.599V.404a.4.4 0 0 1 .677-.289z"
      fill="#57965C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.623 3.288a.4.4 0 0 1 0-.576L10.322.116a.4.4 0 0 1 .677.289v5.194a.4.4 0 0 1-.678.288z"
      fill="#DB5C5C"
    />
  </svg>
);

export const JunitTestMark: FC<JunitTestMarkProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? JunitTestMarkLight : JunitTestMarkDark;

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

export default JunitTestMark;
