/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type SqlSelectStatementProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const SqlSelectStatementLight: FC<
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
      d="M1.56 7.646a.5.5 0 0 0 0 .708l5.94 5.939V10.5H14a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5H7.5V1.707z"
      fill="#EBECF0"
      stroke="#6C707E"
      strokeLinecap="round"
    />
  </svg>
);

const SqlSelectStatementDark: FC<
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
      d="M1.56 7.646a.5.5 0 0 0 0 .708l5.94 5.939V10.5H14a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5H7.5V1.707z"
      fill="#43454A"
      stroke="#CED0D6"
      strokeLinecap="round"
    />
  </svg>
);

export const SqlSelectStatement: FC<SqlSelectStatementProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? SqlSelectStatementLight : SqlSelectStatementDark;

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

export default SqlSelectStatement;
