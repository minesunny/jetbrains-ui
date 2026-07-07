/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type SqlProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const SqlLight: FC<Omit<ComponentProps<'svg'>, 'size'> & { size: number }> = ({
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
      d="M8 1.5c-3.038 0-5.5.941-5.5 2.103v8.831c0 1.162 2.462 2.103 5.5 2.103s5.5-.941 5.5-2.103V3.603C13.5 2.44 11.038 1.5 8 1.5"
      fill="#FAF5FF"
    />
    <ellipse cx={8} cy={3.603} rx={5.5} ry={2.103} stroke="#834DF0" />
    <path
      d="M13.5 12.434c0 1.162-2.462 2.103-5.5 2.103s-5.5-.941-5.5-2.103M13.5 9.49c0 1.162-2.462 2.103-5.5 2.103s-5.5-.941-5.5-2.103M13.5 6.547c0 1.16-2.462 2.102-5.5 2.102s-5.5-.941-5.5-2.102M13.5 3.392v9.126M2.5 3.392v9.126"
      stroke="#834DF0"
    />
  </svg>
);

const SqlDark: FC<Omit<ComponentProps<'svg'>, 'size'> & { size: number }> = ({
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
      d="M8 1.5c-3.038 0-5.5.941-5.5 2.103v8.831c0 1.162 2.462 2.103 5.5 2.103s5.5-.941 5.5-2.103V3.603C13.5 2.44 11.038 1.5 8 1.5"
      fill="#2F2936"
    />
    <ellipse cx={8} cy={3.603} rx={5.5} ry={2.103} stroke="#B589EC" />
    <path
      d="M13.5 12.434c0 1.162-2.462 2.103-5.5 2.103s-5.5-.941-5.5-2.103M13.5 9.49c0 1.162-2.462 2.103-5.5 2.103s-5.5-.941-5.5-2.103M13.5 6.547c0 1.16-2.462 2.102-5.5 2.102s-5.5-.941-5.5-2.102M13.5 3.392v9.126M2.5 3.392v9.126"
      stroke="#B589EC"
    />
  </svg>
);

export const Sql: FC<SqlProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? SqlLight : SqlDark;

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

export default Sql;
