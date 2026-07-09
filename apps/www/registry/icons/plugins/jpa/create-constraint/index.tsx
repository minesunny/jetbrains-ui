/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const CreateConstraint = ({
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
      d="M15 8a7 7 0 1 0-7 7v-1a6 6 0 1 1 6-6z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 11h-1V8H6v3h3.5a1.5 1.5 0 0 0-1.415 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1V6a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1zM7 6a1 1 0 0 1 2 0v1H7z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default CreateConstraint;
