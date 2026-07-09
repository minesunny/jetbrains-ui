/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const AddChangeset = ({
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
      d="M12.5 9a.5.5 0 0 1 .5.5V12h2.5a.5.5 0 0 1 0 1H13v2.5a.5.5 0 0 1-1 0V13H9.5a.5.5 0 0 1 0-1H12V9.5a.5.5 0 0 1 .5-.5"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M4.5 13a.5.5 0 0 1 0 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h.5a.5.5 0 0 1 0 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zM11.5 3h.5a1 1 0 0 1 1 1v4h1V4a2 2 0 0 0-2-2h-.5a.5.5 0 0 0 0 1"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M11 8a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5A.5.5 0 0 0 11 8M11 10.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5M5 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default AddChangeset;
