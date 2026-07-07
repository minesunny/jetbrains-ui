/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type VirtualForeignKeyProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const VirtualForeignKeyLight: FC<
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
      d="M11 5C11 6.933 9.433 8.5 7.5 8.5C5.567 8.5 4 6.933 4 5C4 3.067 5.567 1.5 7.5 1.5C9.433 1.5 11 3.067 11 5Z"
      stroke="#955AE0"
    />
    <path d="M7.5 8.5L7.5 14.5" stroke="#955AE0" strokeLinecap="round" />
    <path d="M8 13.5H10.5" stroke="#955AE0" strokeLinecap="round" />
    <path d="M8 11.5H10.5" stroke="#955AE0" strokeLinecap="round" />
  </svg>
);

const VirtualForeignKeyDark: FC<
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
      d="M11 5C11 6.933 9.433 8.5 7.5 8.5C5.567 8.5 4 6.933 4 5C4 3.067 5.567 1.5 7.5 1.5C9.433 1.5 11 3.067 11 5Z"
      stroke="#B589EC"
    />
    <path d="M7.5 8.5L7.5 14.5" stroke="#B589EC" strokeLinecap="round" />
    <path d="M8 13.5H10.5" stroke="#B589EC" strokeLinecap="round" />
    <path d="M8 11.5H10.5" stroke="#B589EC" strokeLinecap="round" />
  </svg>
);

export const VirtualForeignKey: FC<VirtualForeignKeyProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? VirtualForeignKeyLight : VirtualForeignKeyDark;

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

export default VirtualForeignKey;
