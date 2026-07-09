/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const RenameIndex = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.5 5A4 4 0 0 0 7 8.969V11H5.5a.5.5 0 0 0 0 1H7v1l1-1V8.969A4 4 0 1 0 3.5 5m4 3a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
      className="fill-[#E66D17] dark:fill-[#D6AE58]"
    />
    <path
      d="M7 14v-1H5.5a.5.5 0 0 0 0 1z"
      className="fill-[#E66D17] dark:fill-[#D6AE58]"
    />
  </svg>
);

export default RenameIndex;
