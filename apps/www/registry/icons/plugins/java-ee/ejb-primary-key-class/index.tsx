/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const EjbPrimaryKeyClass = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 11.95a2.5 2.5 0 1 0-1 0V16h1v-1h2v-1h-2zm1-2.45a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M14.777 6.24A3.5 3.5 0 0 0 12 12.663v1.082a7 7 0 1 1 2.777-7.505"
      className="fill-[#EDF3FF] dark:fill-[#25324D]"
    />
    <path
      d="M8 1a7 7 0 0 1 6.777 5.24 3.5 3.5 0 0 0-1.117-.236 6 6 0 1 0-1.799 6.59q.069.035.139.069v1.082A7 7 0 1 1 8 1"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M8.133 10.577c.81 0 1.487-.364 1.871-.908.019.395.103.773.242 1.123a3.4 3.4 0 0 1-2.113.708 3.4 3.4 0 0 1-1.332-.265C5.59 10.721 4.788 9.505 4.788 8c0-2.006 1.426-3.5 3.345-3.5.458 0 .896.085 1.291.24.62.242 1.137.656 1.468 1.183l-.782.577a2.1 2.1 0 0 0-1.183-.951 2.5 2.5 0 0 0-.794-.126c-1.34 0-2.306 1.074-2.306 2.577 0 1.093.511 1.959 1.305 2.35a2.25 2.25 0 0 0 1.001.227"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default EjbPrimaryKeyClass;
