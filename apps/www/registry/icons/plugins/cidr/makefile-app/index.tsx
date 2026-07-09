/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const MakefileApp = ({
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
      d="M10 10h1.46L13 12.5l1.5-2.5H16v6h-1v-4.625l-1.59 2.621h-.719L11 11.377V16h-1z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6V9h3.16l.84 1.961L13.84 9H15V4a2 2 0 0 0-2-2z"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      d="M3 3h10a1 1 0 0 1 1 1v5h1V4a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6v-1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M3.5 5.5A.5.5 0 0 1 4 5h1a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5M7 5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default MakefileApp;
