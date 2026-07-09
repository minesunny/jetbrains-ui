/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const AddExecutable = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="m10.039 9.685-.83 1.66a4 4 0 0 1-1.145.155q-.94 0-1.691-.45a3.15 3.15 0 0 1-1.176-1.248Q4.78 9 4.78 7.987q0-.986.425-1.783A3.2 3.2 0 0 1 8.064 4.5q.947 0 1.658.45.72.45 1.104 1.248.27.551.355 1.203l-.427.854h-4.91q.05.586.287 1.07.3.595.823.928t1.175.333q.438 0 .81-.105.378-.11.653-.313.28-.21.43-.483zM5.87 7.393h4.262a3 3 0 0 0-.202-.751 1.96 1.96 0 0 0-.718-.901q-.47-.32-1.136-.32t-1.175.313q-.51.307-.79.882a2.7 2.7 0 0 0-.24.777"
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

export default AddExecutable;
