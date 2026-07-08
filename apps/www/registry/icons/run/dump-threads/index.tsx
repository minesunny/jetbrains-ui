/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type DumpThreadsProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const DumpThreads = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: DumpThreadsProps) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="m11.123 5-.8-2H5.677l-.8 2H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zM4.2 4H3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.2l-.549-1.371A1 1 0 0 0 10.323 2H5.677a1 1 0 0 0-.928.629z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <circle
      cx={8}
      cy={8.75}
      r={2.5}
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path d="M12 6H13V7H12z" className="fill-[#6C707E] dark:fill-[#CED0D6]" />
  </svg>
);

export default DumpThreads;
