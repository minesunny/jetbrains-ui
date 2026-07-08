/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const TestResourcesRoot = ({
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
      d="M2.75 2C1.784 2 1 2.836 1 3.867v7.095l1.628-1.566c.562-.54 1.36-.488 1.871-.066.511-.423 1.31-.476 1.871.064l1.705 1.638A1.5 1.5 0 0 1 9.5 10H15V6a2 2 0 0 0-2-2H8.5L6.736 2.283A1 1 0 0 0 6.038 2z"
      className="fill-[#F2FCF3] dark:fill-[#253627]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.38 12.712a.4.4 0 0 1 0 .576l-2.703 2.6A.4.4 0 0 1 5 15.599v-5.195a.4.4 0 0 1 .677-.289z"
      className="fill-[#55A76A] dark:fill-[#57965C]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.623 13.288a.4.4 0 0 1 0-.576l2.699-2.596a.4.4 0 0 1 .677.289v5.194a.4.4 0 0 1-.678.288z"
      className="fill-[#E55765] dark:fill-[#DB5C5C]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 11.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"
      className="fill-[#E66D17] dark:fill-[#F2C55C]"
    />
    <path
      d="M8.094 5H13a1 1 0 0 1 1 1v4h1V6a2 2 0 0 0-2-2H8.5L6.736 2.283A1 1 0 0 0 6.038 2H2.75C1.784 2 1 2.836 1 3.867v7.095L2 10V3.867c0-.54.396-.867.75-.867h3.288z"
      className="fill-[#208A3C] dark:fill-[#57965C]"
    />
  </svg>
);

export default TestResourcesRoot;
