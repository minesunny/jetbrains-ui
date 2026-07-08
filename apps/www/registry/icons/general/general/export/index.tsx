/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Export = ({
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
      d="M13.962 2.309a.5.5 0 0 0-.106-.16l-.005-.005A.5.5 0 0 0 13.5 2h-4a.5.5 0 0 0 0 1h2.793L7.146 8.146a.5.5 0 1 0 .708.708L13 3.707V6.5a.5.5 0 0 0 1 0V2.497a.5.5 0 0 0-.038-.188"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M2.5 4.5V12A1.5 1.5 0 0 0 4 13.5h7.5"
      strokeLinecap="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default Export;
