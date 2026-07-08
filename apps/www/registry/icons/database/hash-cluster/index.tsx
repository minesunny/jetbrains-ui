/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const HashCluster = ({
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
    <path
      d="M3.5 9.5v-6h4v6z"
      strokeLinejoin="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M4 5.5h3M4 7.5h3"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M10 7.6h1v4.896h-.368q0-.846.288-1.476.294-.63.834-.966.546-.342 1.278-.342.66 0 1.17.282t.798.834q.288.546.288 1.314V16h-1.032v-3.744q0-.522-.186-.888a1.26 1.26 0 0 0-.522-.558 1.6 1.6 0 0 0-.798-.192q-.504 0-.888.222-.384.216-.6.618c-.14.268-.262.577-.262.917V16h-1z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M2 13V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5.84a3.2 3.2 0 0 1 1 .48V3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6v-1H3a1 1 0 0 1-1-1"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default HashCluster;
