/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Regexp = ({
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
    <rect
      x={2.5}
      y={2.5}
      width={11}
      height={11}
      rx={1.5}
      className="fill-[#EBECF0] stroke-[#6C707E] dark:hidden"
    />
    <path
      d="M4 10.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"
      className="fill-[#6C707E] dark:hidden"
    />
    <path
      d="M9.5 4.5V7m0 0 1.47 2.023M9.5 7 8.03 9.023M9.5 7l-2.378-.773M9.5 7l2.377-.773"
      strokeLinecap="round"
      className="stroke-[#6C707E] dark:hidden"
    />
    <rect
      x={2.5}
      y={2.5}
      width={11}
      height={11}
      rx={1.5}
      className="fill-[#43454A] stroke-[#CED0D6] hidden dark:block"
    />
    <path
      d="M5.5 10.5v1h-1v-1z"
      className="fill-[#CED0D6] stroke-[#CED0D6] hidden dark:block"
    />
    <path
      d="M9.5 4.5V7m0 0 1.47 2.023M9.5 7 8.03 9.023M9.5 7l-2.378-.773M9.5 7l2.377-.773"
      strokeLinecap="round"
      className="stroke-[#CED0D6] hidden dark:block"
    />
  </svg>
);

export default Regexp;
