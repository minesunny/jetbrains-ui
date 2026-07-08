/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type SendToTheLeftProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const SendToTheLeft = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: SendToTheLeftProps) => (
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
      d="M8.855 3.147a.5.5 0 0 1 0 .707L5.708 7h7.794a.5.5 0 1 1 0 1H5.708l3.147 3.147a.5.5 0 0 1-.708.707l-4-4a.5.5 0 0 1 0-.707l4-4a.5.5 0 0 1 .708 0"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M2.499 11.5v-8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default SendToTheLeft;
