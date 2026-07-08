/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type PnpmProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Pnpm = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: PnpmProps) => (
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
    <path d="M2 2H5V5H2z" className="fill-[#FFAF0F] dark:fill-[#F2C55C]" />
    <path d="M6 2H9V5H6z" className="fill-[#FFAF0F] dark:fill-[#F2C55C]" />
    <path d="M10 2H13V5H10z" className="fill-[#FFAF0F] dark:fill-[#F2C55C]" />
    <path d="M10 6H13V9H10z" className="fill-[#FFAF0F] dark:fill-[#F2C55C]" />
    <path d="M6 6H9V9H6z" className="fill-[#6C707E] dark:fill-[#CED0D6]" />
    <path d="M6 10H9V13H6z" className="fill-[#6C707E] dark:fill-[#CED0D6]" />
    <path d="M10 10H13V13H10z" className="fill-[#6C707E] dark:fill-[#CED0D6]" />
    <path d="M2 10H5V13H2z" className="fill-[#6C707E] dark:fill-[#CED0D6]" />
  </svg>
);

export default Pnpm;
