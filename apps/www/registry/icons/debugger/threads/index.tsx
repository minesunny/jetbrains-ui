/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type ThreadsProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Threads = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: ThreadsProps) => (
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
      d="m11.5 10.5 2 3h-11l2-3v-5l-2-3h11l-2 3z"
      strokeLinejoin="round"
      className="fill-[#EBECF0] dark:fill-[#43454A] stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M4.5 5.5h7m-7 5h7"
      strokeLinejoin="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default Threads;
