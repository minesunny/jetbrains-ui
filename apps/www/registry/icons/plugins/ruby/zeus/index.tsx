/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Zeus = ({
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
    <path d="M6 4H4v1h2z" className="fill-[#6C707E] dark:fill-[#CED0D6]" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 6V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1m1-3v3h10V3z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path d="M6 11H4v1h2z" className="fill-[#6C707E] dark:fill-[#CED0D6]" />
    <path
      d="M2 13v-3a1 1 0 0 1 1-1h8.92l-.8 1H3v3h5.72l-.8 1H3a1 1 0 0 1-1-1"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="m10 13 4-5-.5 3H16l-4 5 .5-3z"
      className="fill-[#E66D17] dark:fill-[#F2C55C]"
    />
  </svg>
);

export default Zeus;
