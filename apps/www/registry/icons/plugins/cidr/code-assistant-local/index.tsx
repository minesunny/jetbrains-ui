/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const CodeAssistantLocal = ({
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
      x="2.5"
      y="2.5"
      width="11"
      height="11"
      rx="1.5"
      className="fill-[#FFF4EB] dark:fill-[#45322B] stroke-[#E66D17] dark:stroke-[#C77D55]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 9.2V5.992L6 6V5h2v4.2c0 .8.5.801 1.033.801h.454V11h-.793c-.576 0-1.067-.139-1.318-.416Q7 10.167 7 9.199"
      className="fill-[#E66D17] dark:fill-[#C77D55]"
    />
  </svg>
);

export default CodeAssistantLocal;
