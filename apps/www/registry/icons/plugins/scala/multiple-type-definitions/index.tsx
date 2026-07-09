/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const MultipleTypeDefinitions = ({
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
      cx="5"
      cy="11"
      r="4.5"
      className="fill-[#EDF3FF] dark:fill-[#25324D] stroke-[#3574F0] dark:stroke-[#548AF7]"
    />
    <path
      d="M10.905 12.07A5 5 0 1 0 3.93 5.095a6 6 0 0 1 6.975 6.975"
      className="fill-[#FFF4EB] dark:fill-[#3D3223]"
    />
    <path
      d="M10.99 10.657A4 4 0 0 0 5.343 5.01a6 6 0 0 0-1.413.085 5 5 0 1 1 6.975 6.975 6 6 0 0 0 .085-1.413"
      className="fill-[#E66D17] dark:fill-[#C77D55]"
    />
    <path
      d="M13.905 9.07A5 5 0 1 0 6.93 2.095a6 6 0 0 1 6.975 6.975"
      className="fill-[#F2FCF3] dark:fill-[#253627]"
    />
    <path
      d="M13.99 7.657A4 4 0 0 0 8.343 2.01a6 6 0 0 0-1.413.085 5 5 0 1 1 6.975 6.975 6 6 0 0 0 .085-1.413"
      className="fill-[#208A3C] dark:fill-[#57965C]"
    />
  </svg>
);

export default MultipleTypeDefinitions;
