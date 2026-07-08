/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const QuickfixOffBulb = ({
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
      d="M5.701 12H10.300999999999998V13H5.701z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M6 14h4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.87 9.147a4.8 4.8 0 1 0-5.741 0L5.5 11h5z"
      className="fill-[#4682FA] dark:fill-[#3574F0]"
    />
  </svg>
);

export default QuickfixOffBulb;
