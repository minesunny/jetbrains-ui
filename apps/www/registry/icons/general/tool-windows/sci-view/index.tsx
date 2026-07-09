/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const SciView = ({
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
      d="M4 11.5a.5.5 0 0 1 1 0v3a.5.5 0 0 1-1 0zM11 8.5a.5.5 0 0 1 1 0v6a.5.5 0 0 1-1 0zM7.5 7.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="m2 8 5.571-5.143L11 5l3-3"
      strokeLinecap="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default SciView;
