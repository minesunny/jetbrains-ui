/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type BranchProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const BranchLight: FC<
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
      d="M7.707 2.293 1.295 8.705a1 1 0 0 0 0 1.414l4.586 4.586a1 1 0 0 0 1.414 0l6.412-6.412A1 1 0 0 0 14 7.586V3a1 1 0 0 0-1-1H8.414a1 1 0 0 0-.707.293m-5.705 7.12L8.414 3H13v4.586l-6.412 6.412z"
      fill="#6C707E"
    />
    <circle cx={10} cy={6} r={1.5} stroke="#6C707E" />
  </svg>
);

const BranchDark: FC<
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
      d="M7.707 2.293 1.295 8.705a1 1 0 0 0 0 1.414l4.586 4.586a1 1 0 0 0 1.414 0l6.412-6.412A1 1 0 0 0 14 7.586V3a1 1 0 0 0-1-1H8.414a1 1 0 0 0-.707.293m-5.705 7.12L8.414 3H13v4.586l-6.412 6.412z"
      fill="#CED0D6"
    />
    <circle cx={10} cy={6} r={1.5} stroke="#CED0D6" />
  </svg>
);

export const Branch: FC<BranchProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? BranchLight : BranchDark;

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

export default Branch;
