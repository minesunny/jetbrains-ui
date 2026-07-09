/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const BazelTarget = ({
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
      d="m10.75 9 1.75 1.75L14.25 9 16 10.75v1.75L12.5 16 9 12.5v-1.75z"
      className="fill-[#F2FCF3] dark:fill-[#253627]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 12.5v-1.75L10.75 9l1.75 1.75L14.25 9 16 10.75v1.75L12.5 16zm3.5-.336-1.21 1.211 1.21 1.21 1.21-1.21zm1.918.504-1.21-1.21 1.042-1.044.75.75v.922zm-2.625-1.21-1.043-1.044-.75.75v.922l.582.582z"
      className="fill-[#208A3C] dark:fill-[#57965C]"
    />
    <path
      d="M1 3.867C1 2.836 1.731 2 2.633 2h3.489a1 1 0 0 1 .721.308L8.467 4H13a2 2 0 0 1 2 2v2.336l-.75-.75-1.75 1.75-1.75-1.75L8 10.336v2.578L9.086 14H2.633C1.731 14 1 13.164 1 12.133z"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      d="M2.633 3h3.489L8.04 5H13a1 1 0 0 1 1 1v1.836l.25-.25.75.75V6a2 2 0 0 0-2-2H8.467L6.843 2.308A1 1 0 0 0 6.122 2H2.633C1.731 2 1 2.836 1 3.867v8.266C1 13.164 1.731 14 2.633 14h6.453l-1-1H2.633C2.405 13 2 12.742 2 12.133V3.867C2 3.258 2.405 3 2.633 3"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default BazelTarget;
