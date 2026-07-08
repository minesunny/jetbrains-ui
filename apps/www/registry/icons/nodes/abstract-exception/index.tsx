/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const AbstractException = ({
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
      d="M12.95 3.05a7 7 0 1 1-9.9 9.9 7 7 0 0 1 9.9-9.9"
      className="fill-[#FFFAEB] dark:fill-[#3D3223]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m14.914 6.905-.987.155a5.97 5.97 0 0 0-1.684-3.303A5.97 5.97 0 0 0 8.94 2.074l.155-.988A6.97 6.97 0 0 1 12.95 3.05a6.97 6.97 0 0 1 1.964 3.855m-8.01-5.82.157.989c-1.21.19-2.37.75-3.304 1.683A5.97 5.97 0 0 0 2.074 7.06l-.988-.155A6.97 6.97 0 0 1 3.05 3.05a6.97 6.97 0 0 1 3.855-1.964m-5.818 8.01A6.97 6.97 0 0 0 3.05 12.95a6.97 6.97 0 0 0 3.855 1.964l.156-.987a5.97 5.97 0 0 1-3.304-1.684A5.97 5.97 0 0 1 2.074 8.94zm8.01 5.82-.156-.988a5.97 5.97 0 0 0 3.303-1.684 5.97 5.97 0 0 0 1.684-3.303l.987.155a6.97 6.97 0 0 1-1.964 3.855 6.97 6.97 0 0 1-3.855 1.964"
      className="fill-[#C27D04] dark:fill-[#D6AE58]"
    />
    <path
      d="M9 4.5 6 8h4l-3 3.5"
      strokeLinecap="round"
      className="stroke-[#C27D04] dark:stroke-[#D6AE58]"
    />
  </svg>
);

export default AbstractException;
