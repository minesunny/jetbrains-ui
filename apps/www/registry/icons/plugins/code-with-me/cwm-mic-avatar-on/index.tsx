/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const CwmMicAvatarOn = ({
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
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('inline-block shrink-0', className)}
    role={ariaLabel ? 'img' : 'presentation'}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    {...props}
  >
    <circle
      cx="6.5"
      cy="6.5"
      r="6.5"
      className="fill-[#F7F8FA] dark:fill-[#2B2D30]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 3.5a1.5 1.5 0 1 1 3 0v3a1.5 1.5 0 1 1-3 0zm2 0v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 1 0"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M3.5 6a.5.5 0 0 1 .5.5 2.5 2.5 0 0 0 5 0 .5.5 0 0 1 1 0 3.5 3.5 0 0 1-3 3.465v.535a.5.5 0 0 1-1 0v-.535A3.5 3.5 0 0 1 3 6.5a.5.5 0 0 1 .5-.5"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M7 6.5v-3a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
  </svg>
);

export default CwmMicAvatarOn;
