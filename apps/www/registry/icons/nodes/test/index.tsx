/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type TestProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Test = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: TestProps) => (
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
      className="fill-[#FFF7F7] dark:fill-[#402929] stroke-[#DB3B4B] dark:stroke-[#DB5C5C]"
    />
    <path
      d="M8.462 11.5h.999v-.906h-.868a.56.56 0 0 1-.573-.573V6.82h1.44l.006-.906H8.02V4.5h-.944v.95a.444.444 0 0 1-.463.463h-.704l-.006.906h1.08l.006 3.295c0 .797.622 1.386 1.473 1.386"
      className="fill-[#DB3B4B] dark:fill-[#DB5C5C]"
    />
  </svg>
);

export default Test;
