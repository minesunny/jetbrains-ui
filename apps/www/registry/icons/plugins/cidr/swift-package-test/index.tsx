/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const SwiftPackageTest = ({
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
      d="m8 1.5 6.5 3v5.98l-1.13-1.086c-.562-.54-1.36-.487-1.87-.064-.512-.422-1.31-.474-1.87.066l-2.7 2.595a1.4 1.4 0 0 0 0 2.018l.001.001L1.5 11.52V4.5z"
      className="fill-[#FFF4EB] dark:fill-[#45322B]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.623 13.288a.4.4 0 0 1 0-.576l2.699-2.596a.4.4 0 0 1 .677.289v5.194a.4.4 0 0 1-.678.288z"
      className="fill-[#E55765] dark:fill-[#DB5C5C]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.38 12.712a.4.4 0 0 1 0 .576l-2.703 2.6a.4.4 0 0 1-.677-.289v-5.195a.4.4 0 0 1 .677-.289z"
      className="fill-[#55A76A] dark:fill-[#57965C]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.21 1.046a.5.5 0 0 0-.42 0l-6.5 3A.5.5 0 0 0 1 4.5v7.02a.5.5 0 0 0 .292.454l6.5 2.98a.5.5 0 0 0 .166.044l-1.028-.99a1.4 1.4 0 0 1-.402-.733L2 11.2V5.281L7.5 7.82v3.623l1-.961V7.82L14 5.28V10l1 .96V4.5a.5.5 0 0 0-.29-.454zM2.693 4.5 8 2.05l5.307 2.45L8 6.95z"
      className="fill-[#E66D17] dark:fill-[#C77D55]"
    />
  </svg>
);

export default SwiftPackageTest;
