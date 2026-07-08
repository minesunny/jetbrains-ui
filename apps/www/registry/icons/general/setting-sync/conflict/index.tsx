/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Conflict = ({
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
      cx={7.5}
      cy={7.5}
      r={7.5}
      className="fill-[#F7F8FA] dark:fill-[#2B2D30]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.846 10.102a.526.526 0 1 1-.744.744L7.5 8.244l-2.602 2.602a.526.526 0 0 1-.744-.744L6.756 7.5 4.154 4.897a.526.526 0 0 1 .744-.743L7.5 6.756l2.602-2.602a.526.526 0 0 1 .744.743L8.244 7.5z"
      className="fill-[#6C707E] dark:fill-[#6F737A]"
    />
  </svg>
);

export default Conflict;
