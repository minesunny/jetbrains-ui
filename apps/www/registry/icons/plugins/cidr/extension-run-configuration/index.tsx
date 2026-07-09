/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ExtensionRunConfiguration = ({
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
      x="1.5"
      y="1.5"
      width="13"
      height="13"
      rx="6.5"
      className="fill-[#FFF4EB] dark:fill-[#45322B] stroke-[#E66D17] dark:stroke-[#C77D55]"
    />
    <path
      d="M5.5 11.5h5v-1h-4v-2H10v-1H6.5v-2h4v-1h-5z"
      className="fill-[#E66D17] dark:fill-[#C77D55]"
    />
  </svg>
);

export default ExtensionRunConfiguration;
