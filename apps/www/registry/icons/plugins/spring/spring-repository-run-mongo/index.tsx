/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const SpringRepositoryRunMongo = ({
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
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('inline-block shrink-0', className)}
    role={ariaLabel ? 'img' : 'presentation'}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    {...props}
  >
    <path
      d="M6.95 8.327a.2.2 0 0 1 0 .346l-3.15 1.82a.2.2 0 0 1-.3-.175V6.682a.2.2 0 0 1 .3-.174z"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M13.463 9c0 3.125-2.133 3.75-2.133 3.75s-.328-.312-.328-1.25V4s2.46 1.875 2.46 5"
      className="fill-[#12924F]"
    />
    <path
      d="M8.541 9c0 3.125 2.133 3.75 2.133 3.75s.328-.312.328-1.25V4S8.541 5.875 8.541 9"
      className="fill-[#10AA50]"
    />
    <path
      d="m10.674 12.75.164 1.25h.328l.164-1.25s-.328-.312-.328-1.25c0 .938-.328 1.25-.328 1.25"
      className="fill-[#B8C4C2]"
    />
    <path
      d="M0 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3.51a7.9 7.9 0 0 0-1-1.827V3a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v1h8.56a8.5 8.5 0 0 0-.776 1H1v6a1 1 0 0 0 1 1h6.31a4.3 4.3 0 0 0 .853 1H2a2 2 0 0 1-2-2z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default SpringRepositoryRunMongo;
