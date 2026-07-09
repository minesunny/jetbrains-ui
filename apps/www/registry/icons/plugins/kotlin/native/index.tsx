/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Native = ({
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
      d="M4 3.99v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 3.99v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2h2.5a.5.5 0 0 0 0-1H12v-2.5h2.5a.5.5 0 0 0 0-1H12v-2.5h2.5a.5.5 0 0 0 0-1H12a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2m2 9a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M1.5 3.99a.5.5 0 0 0 0 1H4v-1zM1.5 7.49a.5.5 0 0 0 0 1H4v-1zM1.5 10.99a.5.5 0 1 0 0 1H4v-1z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default Native;
