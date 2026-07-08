/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const FlattenModules = ({
  size = 16,
  className,
  'aria-label': ariaLabel,
  ...props
}: Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
}) => (
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
      x={11}
      y={5}
      width={3}
      height={3}
      rx={1}
      className="fill-[#4682FA] dark:fill-[#548AF7]"
    />
    <path
      d="M11 14a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"
      className="fill-[#4682FA] dark:fill-[#548AF7]"
    />
    <path
      d="M5 14v-4a1 1 0 0 1 1-1h2.5l1 1H12a1 1 0 0 1 1 1v1h-1a2 2 0 0 0-2 2v1H6a1 1 0 0 1-1-1M5 6V2a1 1 0 0 1 1-1h2.5l1 1H12a1 1 0 0 1 1 1v1h-1a2 2 0 0 0-2 2v1H6a1 1 0 0 1-1-1"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      d="M3 1.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0V12h2v2a1 1 0 0 0 1 1h4v-1H6v-4h2.086l1 1H12v1h1v-1a1 1 0 0 0-1-1H9.5l-1-1H6a1 1 0 0 0-1 1v1H3V4h2v2a1 1 0 0 0 1 1h4V6H6V2h2.086l1 1H12v1h1V3a1 1 0 0 0-1-1H9.5l-1-1H6a1 1 0 0 0-1 1v1H3z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default FlattenModules;
