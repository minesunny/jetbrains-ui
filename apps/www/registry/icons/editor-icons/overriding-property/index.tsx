/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type OverridingPropertyProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const OverridingPropertyLight: FC<
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
    <path d="M10 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0" fill="#F2FCF3" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5 8a.5.5 0 0 1-.5-.5V1.707L9.854 2.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L12 1.707V7.5a.5.5 0 0 1-.5.5"
      fill="#DB3B4B"
    />
    <path
      d="M10 7a4.5 4.5 0 1 1-1.578-3.422l.017-.017a1.5 1.5 0 0 1-.391-1.437 5.5 5.5 0 1 0 2.66 6.65A1.5 1.5 0 0 1 10 7.5z"
      fill="#208A3C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.5 4.635C4.837 4.232 5.342 4 5.96 4c1.25 0 2.123.956 2.123 2.35 0 1.396-.873 2.352-2.123 2.352-.618 0-1.123-.232-1.46-.635V10h-1V4h1zm0 2.45V5.617a1.35 1.35 0 0 1 1.28-.845c.834 0 1.408.645 1.408 1.579S6.614 7.93 5.78 7.93c-.593 0-1.06-.324-1.28-.845"
      fill="#208A3C"
    />
  </svg>
);

const OverridingPropertyDark: FC<
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
    <path d="M10 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0" fill="#253627" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5 8a.5.5 0 0 1-.5-.5V1.707L9.854 2.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L12 1.707V7.5a.5.5 0 0 1-.5.5"
      fill="#DB5C5C"
    />
    <path
      d="M10 7a4.5 4.5 0 1 1-1.578-3.422l.017-.017a1.5 1.5 0 0 1-.391-1.437 5.5 5.5 0 1 0 2.66 6.65A1.5 1.5 0 0 1 10 7.5z"
      fill="#57965C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.5 4.635C4.837 4.232 5.342 4 5.96 4c1.25 0 2.123.956 2.123 2.35 0 1.396-.873 2.352-2.123 2.352-.618 0-1.123-.232-1.46-.635V10h-1V4h1zm0 2.45V5.617a1.35 1.35 0 0 1 1.28-.845c.834 0 1.408.645 1.408 1.579S6.614 7.93 5.78 7.93c-.593 0-1.06-.324-1.28-.845"
      fill="#57965C"
    />
  </svg>
);

export const OverridingProperty: FC<OverridingPropertyProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? OverridingPropertyLight : OverridingPropertyDark;

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

export default OverridingProperty;
