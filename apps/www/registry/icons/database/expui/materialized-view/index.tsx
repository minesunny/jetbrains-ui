/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type MaterializedViewProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const MaterializedView = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: MaterializedViewProps) => (
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
    <path d="M5.5 3V9" className="stroke-[#6C707E] dark:stroke-[#CED0D6]" />
    <path d="M10.5 3V9" className="stroke-[#6C707E] dark:stroke-[#CED0D6]" />
    <path d="M2 5.5H14" className="stroke-[#6C707E] dark:stroke-[#CED0D6]" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.50013 10C6.70459 10 6.88844 10.1245 6.96437 10.3143L8.50013 14.1537L10.0359 10.3143C10.1118 10.1245 10.2957 10 10.5001 10C10.7046 10 10.8884 10.1245 10.9644 10.3143L12.5001 14.1537L14.0359 10.3143C14.1118 10.1245 14.2957 10 14.5001 10C14.7046 10 14.8884 10.1245 14.9644 10.3143L15.9644 12.8143C16.0669 13.0707 15.9422 13.3617 15.6858 13.4642C15.4294 13.5668 15.1385 13.4421 15.0359 13.1857L14.5001 11.8463L12.9644 15.6857C12.8884 15.8755 12.7046 16 12.5001 16C12.2957 16 12.1118 15.8755 12.0359 15.6857L10.5001 11.8463L8.96437 15.6857C8.88844 15.8755 8.70459 16 8.50013 16C8.29568 16 8.11183 15.8755 8.03589 15.6857L6.50013 11.8463L5.96437 13.1857C5.86181 13.4421 5.57083 13.5668 5.31444 13.4642C5.05805 13.3617 4.93334 13.0707 5.03589 12.8143L6.03589 10.3143C6.11183 10.1245 6.29568 10 6.50013 10Z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 3H13C13.5523 3 14 3.44772 14 4V9H15V4C15 2.89543 14.1046 2 13 2H3C1.89543 2 1 2.89543 1 4V12C1 13.1046 1.89543 14 3 14H4V13H3C2.44772 13 2 12.5523 2 12V4C2 3.44772 2.44772 3 3 3Z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default MaterializedView;
