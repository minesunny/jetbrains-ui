/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type SendToTheRightProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const SendToTheRight = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: SendToTheRightProps) => (
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
      d="M7.146 3.147a.5.5 0 0 0 0 .707L10.293 7H2.499a.5.5 0 0 0 0 1h7.794l-3.147 3.147a.5.5 0 1 0 .708.707l4-4a.5.5 0 0 0 0-.707l-4-4a.5.5 0 0 0-.708 0"
      className="fill-[#369650] dark:fill-[#57965C]"
    />
    <path
      d="M13.5 11.5v-8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default SendToTheRight;
