/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type EditorOutputProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const EditorOutput = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: EditorOutputProps) => (
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
      d="M2.5 2.5H13.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M2.5 13.5H13.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M2.5 10V6C2.5 5.17157 3.17157 4.5 4 4.5H12C12.8284 4.5 13.5 5.17157 13.5 6V10C13.5 10.8284 12.8284 11.5 12 11.5H4C3.17157 11.5 2.5 10.8284 2.5 10Z"
      strokeLinejoin="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path d="M5.5 5V11" className="stroke-[#6C707E] dark:stroke-[#CED0D6]" />
  </svg>
);

export default EditorOutput;
