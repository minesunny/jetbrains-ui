/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const KillProcess = ({
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
      d="M14.5 11.087 11.087 14.5H4.913L1.5 11.087V4.913L4.913 1.5h6.174L14.5 4.913z"
      className="stroke-[#DB3B4B] dark:stroke-[#DB5C5C]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.172 5.172a.5.5 0 0 0 0 .707L7.293 8l-2.121 2.121a.5.5 0 1 0 .707.707L8 8.708l2.121 2.12a.5.5 0 1 0 .707-.707L8.709 8l2.12-2.121a.5.5 0 1 0-.707-.707l-2.12 2.12-2.122-2.12a.5.5 0 0 0-.707 0"
      className="fill-[#DB3B4B] dark:fill-[#DB5C5C]"
    />
  </svg>
);

export default KillProcess;
