/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type ApiProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Api = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: ApiProps) => (
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
      d="m2.25 13 1.561-8.995h1.53L6.933 13H5.745L4.66 5.933l-.083-.598-.084.598L3.471 13zm.9-2.345v-.99h2.782v.99zM8 12.995V4h1.774q.762 0 1.252.29.497.288.735.873.24.585.239 1.471 0 .894-.245 1.478-.24.585-.748.88-.504.29-1.284.29h-.555v3.713zm1.761-4.774q.535 0 .768-.379.24-.386.239-1.208 0-.81-.239-1.188-.232-.386-.768-.386h-.593v3.161zM13 13V4.005h1V13z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default Api;
