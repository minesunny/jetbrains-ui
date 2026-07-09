/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Remote = ({
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
      d="M14.9 9.19q.099-.58.1-1.19a7 7 0 1 0-5 6.71V9h3.622c.437 0 .87.062 1.277.19"
      className="fill-[#F2FCF3] dark:fill-[#253627]"
    />
    <path
      d="M10 4.5v1H8.5v5H10v1H6v-1h1.5v-5H6v-1z"
      className="fill-[#208A3C] dark:fill-[#57965C]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 13v-2h1.537c.766 0 1.463.313 1.463.954S14.285 13 13.547 13zm2.36.828c.815-.238 1.64-.718 1.64-1.915S14.949 10 13.622 10H11v6h1v-2h1.328l1.445 2H16z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M10 13.659a6 6 0 1 1 3.915-4.65c.337.022.669.082.984.182Q15 8.61 15 8a7 7 0 1 0-5 6.71z"
      className="fill-[#208A3C] dark:fill-[#57965C]"
    />
  </svg>
);

export default Remote;
