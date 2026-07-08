/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type ToolWindowDartProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const ToolWindowDart = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: ToolWindowDartProps) => (
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
      strokeLinecap="round"
      d="M7.985 1.865a1.5 1.5 0 0 1 1.536.363l4.833 4.833a.5.5 0 0 1 .146.353V11a.5.5 0 0 1-.5.5h-2.5V14a.5.5 0 0 1-.5.5H7.414a.5.5 0 0 1-.353-.146L2.228 9.52a1.5 1.5 0 0 1-.363-1.536l1.293-3.879a1.5 1.5 0 0 1 .948-.948z"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      strokeLinecap="round"
      d="M3.5 10.5v-6a1 1 0 0 1 1-1h6"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default ToolWindowDart;
