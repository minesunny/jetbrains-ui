/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const AddLibrary = ({
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
      d="M14.464 10.692a7 7 0 1 0-7.069 4.283L12 5.763z"
      className="fill-[#EDF3FF] dark:fill-[#25324D]"
    />
    <path
      d="m9.487 10.79-.105.21h-.688c-.576 0-1.067-.139-1.318-.416Q7 10.167 7 9.199V5.993L6 6V5h2v4.2c0 .8.5.801 1.033.801h.454z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M13.83 9.424Q13.998 8.737 14 8a6 6 0 1 0-6.117 5.999l-.488.975a7 7 0 1 1 7.069-4.283z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="m12 8 .416 4.08-1.777 1.578-.006-.003L8 16z"
      className="fill-[url(#a)]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.633 13.655 16 16H8z"
      className="fill-[url(#b)]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m12 8 4 8-3.333-1.46z"
      className="fill-[url(#c)]"
    />
  </svg>
);

export default AddLibrary;
