/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Like = ({
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
      d="M1.5 7A1.5 1.5 0 0 1 3 5.5h1.5v8H3A1.5 1.5 0 0 1 1.5 12zM9.5 5.5H13A1.5 1.5 0 0 1 14.5 7v3.308c0 .426-.181.832-.498 1.116l-1.887 1.693a1.5 1.5 0 0 1-1.002.384H4.5V5.208l3.465-3.446A.9.9 0 0 1 9.5 2.4z"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default Like;
