/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type PinSelectedProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const PinSelected = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: PinSelectedProps) => (
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
      d="M5 2.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5.996.996 0 0 0-.985 1.137l.212 1.492c.047.323.245.584.496.736 1.019.617 1.455 1.564 1.643 2.277a.24.24 0 0 1-.053.232.42.42 0 0 1-.313.126H4a.42.42 0 0 1-.312-.126.24.24 0 0 1-.054-.232c.188-.713.624-1.66 1.643-2.277.251-.152.45-.412.495-.735l.213-1.493A.996.996 0 0 0 5 4.5a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5Z"
      className="stroke-[#3574F0] dark:stroke-[#548AF7]"
    />
    <path
      d="M7.5 11h1v3.5a.5.5 0 0 1-1 0z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default PinSelected;
