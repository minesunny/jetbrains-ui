/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Assets = ({
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
      d="M1 3.867C1 2.836 1.784 2 2.75 2h3.288a1 1 0 0 1 .698.283L8.5 4H13a2 2 0 0 1 2 2v2h-4a2 2 0 0 0-2 2v4H2.75C1.784 14 1 13.164 1 12.133z"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      d="m6.038 3 2.056 2H13a1 1 0 0 1 1 1v2h1V6a2 2 0 0 0-2-2H8.5L6.736 2.283A1 1 0 0 0 6.038 2H2.75C1.784 2 1 2.836 1 3.867v8.266C1 13.164 1.784 14 2.75 14H9v-1H2.75c-.354 0-.75-.326-.75-.867V3.867c0-.54.396-.867.75-.867z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M12 12h2v-1h-2zM12 14h2v-1h-2z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 9a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm4 1h-4v5h4z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default Assets;
