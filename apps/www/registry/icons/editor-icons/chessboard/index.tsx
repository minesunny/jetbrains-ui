/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type ChessboardProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const ChessboardLight: FC<
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
    <path stroke="#6C707E" d="M2.5 2.5H5.5V5.5H2.5z" />
    <path stroke="#6C707E" d="M2.5 10.5H5.5V13.5H2.5z" />
    <path stroke="#6C707E" d="M6.5 6.5H9.5V9.5H6.5z" />
    <path stroke="#6C707E" d="M10.5 2.5H13.5V5.5H10.5z" />
    <path stroke="#6C707E" d="M10.5 10.5H13.5V13.5H10.5z" />
  </svg>
);

const ChessboardDark: FC<
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
    <path stroke="#CED0D6" d="M2.5 2.5H5.5V5.5H2.5z" />
    <path stroke="#CED0D6" d="M2.5 10.5H5.5V13.5H2.5z" />
    <path stroke="#CED0D6" d="M6.5 6.5H9.5V9.5H6.5z" />
    <path stroke="#CED0D6" d="M10.5 2.5H13.5V5.5H10.5z" />
    <path stroke="#CED0D6" d="M10.5 10.5H13.5V13.5H10.5z" />
  </svg>
);

export const Chessboard: FC<ChessboardProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ChessboardLight : ChessboardDark;

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

export default Chessboard;
