/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const RenameConstraint = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.412 8.295a1 1 0 0 0-1.414 0l-1.351 1.351L8 13.293V16h2.707l4.998-4.998a1 1 0 0 0 0-1.414zM14 11.293l.998-.998-1.293-1.293-.998.998zm-2-.586L13.293 12l-3 3H9v-1.293z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M14.98 7.46A7 7 0 1 0 7 14.93v-1.013A6.002 6.002 0 0 1 8 2a6 6 0 0 1 5.92 5.013c.379.041.749.19 1.06.447"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 8.879V8a1 1 0 0 0-1-1V6a2 2 0 1 0-4 0v1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1.879l1-1H6V8h4v1.879zM7 6a1 1 0 0 1 2 0v1H7z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default RenameConstraint;
