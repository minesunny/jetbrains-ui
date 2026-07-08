/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type RunAllProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const RunAll = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: RunAllProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('inline-block shrink-0', className)}
    role={ariaLabel ? 'img' : 'presentation'}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    {...props}
  >
    <path
      d="M9.356 7.26a1 1 0 0 1 0 1.512l-5.2 4.499a1 1 0 0 1-1.654-.756V3.516a1 1 0 0 1 1.655-.756z"
      className="fill-[#F2FCF3] dark:fill-[#253627]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.683 6.881a1.5 1.5 0 0 1 0 2.269l-5.199 4.499c-.972.84-2.482.15-2.482-1.134V3.516c0-1.285 1.51-1.975 2.482-1.134zm-.655 1.512a.5.5 0 0 0 0-.756L3.83 3.138a.5.5 0 0 0-.828.378v8.999a.5.5 0 0 0 .828.378z"
      className="fill-[#208A3C] dark:fill-[#57965C]"
    />
    <path
      strokeLinecap="round"
      d="m7.858 2.5 5.499 4.76a1 1 0 0 1 0 1.512L7.893 13.5"
      className="stroke-[#208A3C] dark:stroke-[#57965C]"
    />
  </svg>
);

export default RunAll;
