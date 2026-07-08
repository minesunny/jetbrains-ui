/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type GroupByClassProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const GroupByClass = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: GroupByClassProps) => (
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
      d="M3.5 13.5h-1a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h1M12.5 13.5h1a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-1"
      strokeLinecap="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <circle
      cx={8}
      cy={8}
      r={4.5}
      className="fill-[#EDF3FF] dark:fill-[#25324D] stroke-[#3574F0] dark:stroke-[#548AF7]"
    />
    <path
      d="M6.5 8a1.5 1.5 0 0 1 2.618-1h1.174a2.5 2.5 0 1 0 0 2H9.118A1.5 1.5 0 0 1 6.5 8"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default GroupByClass;
