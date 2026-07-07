/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type LockedProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const LockedLight: FC<
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
    <rect x={1} y={12} width={4} height={3} fill="#EBECF0" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 11V10C5 8.89543 4.10457 8 3 8C1.89543 8 1 8.89543 1 10V11C0.447715 11 0 11.4477 0 12V15C0 15.5523 0.447715 16 1 16H5C5.55228 16 6 15.5523 6 15V12C6 11.4477 5.55228 11 5 11ZM2 10C2 9.44772 2.44772 9 3 9C3.55228 9 4 9.44772 4 10V11H2V10ZM1 15L1 12H5V15H1Z"
      fill="#6C707E"
    />
  </svg>
);

const LockedDark: FC<
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
    <rect x={1} y={12} width={4} height={3} fill="#43454A" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 11V10C5 8.89543 4.10457 8 3 8C1.89543 8 1 8.89543 1 10V11C0.447715 11 0 11.4477 0 12V15C0 15.5523 0.447715 16 1 16H5C5.55228 16 6 15.5523 6 15V12C6 11.4477 5.55228 11 5 11ZM2 10C2 9.44772 2.44772 9 3 9C3.55228 9 4 9.44772 4 10V11H2V10ZM1 15L1 12H5V15H1Z"
      fill="#CED0D6"
    />
  </svg>
);

export const Locked: FC<LockedProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? LockedLight : LockedDark;

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

export default Locked;
