/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const KotlinModifier = ({
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
    viewBox="0 0 7 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('inline-block shrink-0', className)}
    role={ariaLabel ? 'img' : 'presentation'}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    {...props}
  >
    <path
      d="M1 1h4.644l-1.97 1.97a.75.75 0 0 0 0 1.06L5.645 6H1z"
      className="fill-[#FAF5FF] dark:fill-[#2F2936]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 1a1 1 0 0 1 1-1h5.248a.75.75 0 0 1 .53 1.28L4.558 3.5l2.22 2.22A.75.75 0 0 1 6.248 7H1a1 1 0 0 1-1-1zm5.644 0H1v5h4.644l-1.97-1.97a.75.75 0 0 1 0-1.06z"
      className="fill-[#834DF0] dark:fill-[#A571E6]"
    />
  </svg>
);

export default KotlinModifier;
