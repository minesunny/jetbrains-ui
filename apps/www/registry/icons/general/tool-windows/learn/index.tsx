/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type LearnProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Learn = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: LearnProps) => (
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
      d="M3.5 7.778v3.972a.5.5 0 0 0 .276.447l4 2a.5.5 0 0 0 .448 0l4-2a.5.5 0 0 0 .276-.447V7.778l-1 .555v3.108L8 13.191l-3.5-1.75V8.333z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M15 6.389 8 2.5 1 6.389l7 3.889zm0 0v3.889"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default Learn;
