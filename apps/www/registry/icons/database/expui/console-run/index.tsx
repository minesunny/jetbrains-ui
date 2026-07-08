/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type ConsoleRunProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const ConsoleRun = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: ConsoleRunProps) => (
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
    <rect
      x={1.5}
      y={2.5}
      width={13}
      height={11}
      rx={1.5}
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M7.95 9.3268C8.08333 9.40377 8.08333 9.59622 7.95 9.67321L4.8 11.4919C4.66667 11.5688 4.5 11.4726 4.5 11.3187L4.5 7.68135C4.5 7.52739 4.66667 7.43116 4.8 7.50814L7.95 9.3268Z"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <rect
      x={1.25}
      y={5.25}
      width={13.5}
      height={0.5}
      strokeWidth={0.5}
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default ConsoleRun;
