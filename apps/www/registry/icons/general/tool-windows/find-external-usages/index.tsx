/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const FindExternalUsages = ({
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
      d="M2.5 14a.5.5 0 0 1-.5-.5V9.707L.854 10.854a.5.5 0 0 1-.708-.708L2.5 7.793l2.354 2.353a.5.5 0 0 1-.708.708L3 9.707V13.5a.5.5 0 0 1-.5.5"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M7 12a4.98 4.98 0 0 0 3.164-1.128l2.982 2.978a.5.5 0 0 0 .707-.708l-2.982-2.977A5 5 0 1 0 2 7h1a4 4 0 1 1 3 3.874V11.9q.486.1 1 .1"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default FindExternalUsages;
