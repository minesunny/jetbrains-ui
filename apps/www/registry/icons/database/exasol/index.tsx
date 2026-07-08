/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Exasol = ({
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
      d="m10.5 9.15-2 2.6L11 15h4zM10.5 7.85l-2-2.6L11 2h4z"
      className="fill-[#6E6E6E] dark:fill-[#CED0D6]"
    />
    <path
      d="M5 2H1l5 6.5L1 15h4l5-6.5z"
      className="fill-[#59A869] dark:fill-[#499C54]"
    />
  </svg>
);

export default Exasol;
