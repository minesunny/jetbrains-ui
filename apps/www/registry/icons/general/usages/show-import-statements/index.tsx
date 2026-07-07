/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type ShowImportStatementsProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const ShowImportStatementsLight: FC<
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
    <rect x={7} y={2} width={2} height={2} rx={1} fill="#6C707E" />
    <rect x={8} y={6} width={1} height={8} rx={0.5} fill="#6C707E" />
    <rect x={5} y={6} width={4} height={1} rx={0.5} fill="#6C707E" />
    <rect x={4} y={13} width={8} height={1} rx={0.5} fill="#6C707E" />
  </svg>
);

const ShowImportStatementsDark: FC<
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
    <rect x={7} y={2} width={2} height={2} rx={1} fill="#CED0D6" />
    <rect x={8} y={6} width={1} height={8} rx={0.5} fill="#CED0D6" />
    <rect x={5} y={6} width={4} height={1} rx={0.5} fill="#CED0D6" />
    <rect x={4} y={13} width={8} height={1} rx={0.5} fill="#CED0D6" />
  </svg>
);

export const ShowImportStatements: FC<ShowImportStatementsProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ShowImportStatementsLight : ShowImportStatementsDark;

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

export default ShowImportStatements;
