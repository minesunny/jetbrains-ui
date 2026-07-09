/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const RenameColumn = ({
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
      d="M2 4a1 1 0 0 1 1-1h2v10H3a1 1 0 0 1-1-1z"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.412 8.295a1 1 0 0 0-1.414 0l-1.351 1.351L8 13.293V16h2.707l4.998-4.998a1 1 0 0 0 0-1.414zM14 11.293l.998-.998-1.293-1.293-.998.998zm-2-.586L13.293 12l-3 3H9v-1.293z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4v-1H6V3h7a1 1 0 0 1 1 1v3.024c.36.053.707.204 1 .454V4a2 2 0 0 0-2-2zm2 1H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default RenameColumn;
