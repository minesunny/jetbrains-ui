/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const MoreHorizontal = ({
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
    <circle
      cx={3}
      cy={8}
      r={1}
      transform="rotate(-90 3 8)"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <circle
      cx={8}
      cy={8}
      r={1}
      transform="rotate(-90 8 8)"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <circle
      cx={13}
      cy={8}
      r={1}
      transform="rotate(-90 13 8)"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default MoreHorizontal;
