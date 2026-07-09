/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const KotlinActivity = ({
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
      d="M10 10h4.645l-1.97 1.97a.75.75 0 0 0 0 1.06l1.97 1.97H10z"
      className="fill-[#FAF5FF] dark:fill-[#2F2936]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 10a1 1 0 0 1 1-1h5.248a.75.75 0 0 1 .53 1.28l-2.22 2.22 2.22 2.22a.75.75 0 0 1-.53 1.28H10a1 1 0 0 1-1-1zm5.645 0H10v5h4.645l-1.97-1.97a.75.75 0 0 1 0-1.06z"
      className="fill-[#834DF0] dark:fill-[#A571E6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.252 1.066a.5.5 0 0 1 .682.186l1.046 1.83A7.96 7.96 0 0 1 8 2c1.466 0 2.839.394 4.02 1.082l1.046-1.83a.5.5 0 1 1 .868.496l-1.08 1.892A8 8 0 0 1 15.747 8H11a1 1 0 1 0 0-2 1 1 0 0 0 0 2h-1a2 2 0 0 0-2 2H0a7.99 7.99 0 0 1 3.147-6.36L2.066 1.748a.5.5 0 0 1 .186-.682M6 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      className="fill-[#55A76A] dark:fill-[#57965C]"
    />
  </svg>
);

export default KotlinActivity;
