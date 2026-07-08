/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ChevronDownHovered = ({
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
      opacity={0.1}
      cx={8}
      cy={8}
      r={8}
      className="fill-[#313547] dark:hidden"
    />
    <path
      d="M11.5 6.25 8 9.75l-3.5-3.5"
      strokeLinecap="round"
      className="stroke-[#818594] dark:hidden"
    />
    <circle
      opacity={0.13}
      cx={8}
      cy={8}
      r={8}
      className="fill-[#F0F1F2] hidden dark:block"
    />
    <path
      d="M11.5 6.25 8 9.75l-3.5-3.5"
      strokeLinecap="round"
      className="stroke-[#868A91] hidden dark:block"
    />
  </svg>
);

export default ChevronDownHovered;
