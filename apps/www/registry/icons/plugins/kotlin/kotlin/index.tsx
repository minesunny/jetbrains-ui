/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Kotlin = ({
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
      d="M13.334 12.631a.5.5 0 0 1-.338.869H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h9.996a.5.5 0 0 1 .338.869L8.684 7.63a.5.5 0 0 0 0 .738z"
      className="fill-[#FAF5FF] dark:fill-[#2F2936]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 3a1 1 0 0 1 1-1h9.996c.912 0 1.348 1.12.676 1.737L9.022 8l4.65 4.263c.672.616.236 1.737-.676 1.737H3a1 1 0 0 1-1-1zm10.996 0H3v10h9.996l-4.65-4.263a1 1 0 0 1 0-1.474z"
      className="fill-[#834DF0] dark:fill-[#A571E6]"
    />
  </svg>
);

export default Kotlin;
