/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type ToolWindowTypeTraceViewProps = Omit<
  ComponentProps<'svg'>,
  'size'
> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const ToolWindowTypeTraceView = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: ToolWindowTypeTraceViewProps) => (
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
    <circle
      cx={8}
      cy={8}
      r={6.5}
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 5.5H5v-1h6v1H8.5v6h-1z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default ToolWindowTypeTraceView;
