/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type AddRowAboveProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const AddRowAboveLight: FC<
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
      d="M8 1.5a.5.5 0 0 0-1 0V3H5.5a.5.5 0 0 0 0 1H7v1.5a.5.5 0 0 0 1 0V4h1.5a.5.5 0 0 0 0-1H8z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 13a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zm1-3v3a1 1 0 0 0 1 1h3V9H4a1 1 0 0 0-1 1m9 3a1 1 0 0 1-1 1H8V9h3a1 1 0 0 1 1 1z"
      fill="#6C707E"
    />
  </svg>
);

const AddRowAboveDark: FC<
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
      d="M8 1.5a.5.5 0 0 0-1 0V3H5.5a.5.5 0 0 0 0 1H7v1.5a.5.5 0 0 0 1 0V4h1.5a.5.5 0 0 0 0-1H8z"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 13a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zm1-3v3a1 1 0 0 0 1 1h3V9H4a1 1 0 0 0-1 1m9 3a1 1 0 0 1-1 1H8V9h3a1 1 0 0 1 1 1z"
      fill="#CED0D6"
    />
  </svg>
);

export const AddRowAbove: FC<AddRowAboveProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? AddRowAboveLight : AddRowAboveDark;

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

export default AddRowAbove;
