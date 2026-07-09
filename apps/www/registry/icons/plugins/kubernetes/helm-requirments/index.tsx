/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const HelmRequirments = ({
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
      d="M11.708 9.586a.5.5 0 0 1 0-.707l1.343-1.344a3.243 3.243 0 0 0-4.586-4.586L7.122 4.293a.5.5 0 0 1-.707-.707l1.343-1.344a4.243 4.243 0 0 1 6 6l-1.343 1.344a.5.5 0 0 1-.707 0"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M10.647 4.646a.5.5 0 1 1 .707.707l-6 6a.5.5 0 1 1-.707-.707z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M4.293 6.414a.5.5 0 0 1 0 .707l-1.34 1.34a3.243 3.243 0 0 0 4.586 4.586l1.34-1.34a.5.5 0 0 1 .707.707l-1.34 1.34a4.243 4.243 0 0 1-6-6l1.34-1.34a.5.5 0 0 1 .707 0"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default HelmRequirments;
