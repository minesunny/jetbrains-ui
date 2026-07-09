/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ComponentVendor = ({
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
      d="M2.913 3.5h3.174a.5.5 0 0 1 .498.455l.818 9a.5.5 0 0 1-.498.545h-4.81a.5.5 0 0 1-.498-.545l.818-9a.5.5 0 0 1 .498-.455M10.867 7.5h2.266a.5.5 0 0 1 .495.43l.714 5a.5.5 0 0 1-.495.57h-3.694a.5.5 0 0 1-.495-.57l.714-5a.5.5 0 0 1 .495-.43"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="fill-[#EBECF0] dark:fill-[#43454A] stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="m12 5.5.293-.293a1 1 0 0 0 0-1.414l-.586-.586a1 1 0 0 1 0-1.414L12 1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default ComponentVendor;
