/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const LibraryFolder = ({
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
      d="M1 3.867C1 2.836 1.784 2 2.75 2h3.288a1 1 0 0 1 .698.283L8.5 4H13a2 2 0 0 1 2 2v3.268a2 2 0 0 0-.177-.091A2 2 0 0 0 13 8h-1a2 2 0 0 0-1.732 1H10a2 2 0 0 0-2 2v3H2.75C1.784 14 1 13.164 1 12.133z"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      d="M12 10h1v5h-1zM10 11h1v4h-1zM15 12h-1v3h1z"
      className="fill-[#EDF3FF] dark:fill-[#25324D]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm1 0h1v5h-1zm-1 1h-1v4h1zm3 4h1v-3h-1z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M8.094 5H13a1 1 0 0 1 1 1v2.268A2 2 0 0 1 15 10V6a2 2 0 0 0-2-2H8.5L6.736 2.283A1 1 0 0 0 6.038 2H2.75C1.784 2 1 2.836 1 3.867v8.266C1 13.164 1.784 14 2.75 14H8v-1H2.75c-.354 0-.75-.326-.75-.867V3.867c0-.54.396-.867.75-.867h3.288z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default LibraryFolder;
