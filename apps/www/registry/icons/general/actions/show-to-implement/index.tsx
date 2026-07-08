/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type ShowToImplementProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const ShowToImplement = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: ShowToImplementProps) => (
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
      d="m11 4.121-.44.44a1.5 1.5 0 0 1-2.12-2.122l1.237-1.237A7 7 0 1 0 14.929 9H12.5A1.5 1.5 0 0 1 11 7.5z"
      className="fill-[#F2FCF3] dark:fill-[#253627]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L13 1.707V7.5a.5.5 0 0 1-1 0V1.707L9.854 3.854a.5.5 0 1 1-.708-.708z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="m9.677 1.202-.854.854A6 6 0 1 0 13.917 9h1.012A7.001 7.001 0 0 1 1 8a7 7 0 0 1 8.677-6.798"
      className="fill-[#208A3C] dark:fill-[#57965C]"
    />
    <path
      d="M10 5.5v-1H6v1h1.5v5H6v1h4v-1H8.5v-5z"
      className="fill-[#208A3C] dark:fill-[#57965C]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L13 1.707V7.5a.5.5 0 0 1-1 0V1.707L9.854 3.854a.5.5 0 1 1-.708-.708z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default ShowToImplement;
