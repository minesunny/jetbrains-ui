/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type AddSdkProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const AddSdk = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: AddSdkProps) => (
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
      d="M9.05 12a2.5 2.5 0 0 1 2.45-2h2a.5.5 0 0 1 .5.5v.5h1.5a.5.5 0 0 1 0 1H14v2h1.5a.5.5 0 0 1 0 1H14v.5a.5.5 0 0 1-.5.5h-2a2.5 2.5 0 0 1-2.45-2H8.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm.95 1.5v-1a1.5 1.5 0 0 1 1.5-1.5H13v4h-1.5a1.5 1.5 0 0 1-1.5-1.5"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M8 1.5a.5.5 0 0 0-1 0V7H1.5a.5.5 0 0 0 0 1H7v4.5a1.5 1.5 0 0 1 1-1.415V8h5.5a.5.5 0 0 0 0-1H8z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default AddSdk;
