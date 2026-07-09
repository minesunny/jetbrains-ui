/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Embedded = ({
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
      d="M7.668 12.99a5 5 0 1 1 5.321-5.322c-.308.145-.64.247-.99.297A4 4 0 1 0 7.966 12c-.05.349-.152.681-.297.99"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <circle
      cx="11.5"
      cy="4.5"
      r="3"
      className="fill-[#FFF4EB] dark:fill-[#45322B] stroke-[#E66D17] dark:stroke-[#C77D55]"
    />
    <circle
      cx="4.5"
      cy="11.5"
      r="3"
      className="fill-[#FFF4EB] dark:fill-[#45322B] stroke-[#E66D17] dark:stroke-[#C77D55]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 10a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm1 5v-5h5v5z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path d="M11 11H14V14H11z" className="fill-[#55A76A] dark:fill-[#57965C]" />
  </svg>
);

export default Embedded;
