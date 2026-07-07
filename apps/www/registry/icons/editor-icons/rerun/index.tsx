/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type RerunProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const RerunLight: FC<
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
    <path
      d="M8.356 6.26a1 1 0 0 1 0 1.512L3.158 12.27a1 1 0 0 1-1.655-.756V2.516a1 1 0 0 1 1.655-.756z"
      fill="#F2FCF3"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.684 5.881a1.5 1.5 0 0 1 0 2.269l-5.2 4.499c-.97.84-2.48.15-2.48-1.134V2.516c0-1.285 1.51-1.975 2.48-1.134zm-.655 1.513a.5.5 0 0 0 0-.757L2.83 2.138a.5.5 0 0 0-.827.378v8.999a.5.5 0 0 0 .827.378z"
      fill="#208A3C"
    />
    <path
      d="m6.857 1.5 5.5 4.76a1 1 0 0 1 0 1.512L6.892 12.5"
      stroke="#208A3C"
      strokeLinecap="round"
    />
  </svg>
);

const RerunDark: FC<Omit<ComponentProps<'svg'>, 'size'> & { size: number }> = ({
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
    <path
      d="M8.356 6.26a1 1 0 0 1 0 1.512L3.158 12.27a1 1 0 0 1-1.655-.756V2.516a1 1 0 0 1 1.655-.756z"
      fill="#253627"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.684 5.881a1.5 1.5 0 0 1 0 2.269l-5.2 4.499c-.97.84-2.48.15-2.48-1.134V2.516c0-1.285 1.51-1.975 2.48-1.134zm-.655 1.513a.5.5 0 0 0 0-.757L2.83 2.138a.5.5 0 0 0-.827.378v8.999a.5.5 0 0 0 .827.378z"
      fill="#57965C"
    />
    <path
      d="m6.857 1.5 5.5 4.76a1 1 0 0 1 0 1.512L6.892 12.5"
      stroke="#57965C"
      strokeLinecap="round"
    />
  </svg>
);

export const Rerun: FC<RerunProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? RerunLight : RerunDark;

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

export default Rerun;
