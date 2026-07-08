/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Include = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 9a.5.5 0 0 1 .5.5V12h2.5a.5.5 0 0 1 0 1H13v2.5a.5.5 0 0 1-1 0V13H9.5a.5.5 0 0 1 0-1H12V9.5a.5.5 0 0 1 .5-.5"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M15 8h-2.5A1.5 1.5 0 0 0 11 9.5V11H9.5A1.5 1.5 0 0 0 8 12.5V15a7 7 0 1 1 7-7"
      className="fill-[#EDF3FF] dark:fill-[#25324D]"
    />
    <path
      d="M8 14a6 6 0 1 1 6-6h1a7 7 0 1 0-7 7z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default Include;
