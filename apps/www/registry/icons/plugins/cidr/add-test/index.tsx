/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const AddTest = ({
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
      d="M13.83 9.424Q13.998 8.737 14 8a6 6 0 1 0-6.117 5.999l-.488.975a7 7 0 1 1 7.069-4.283z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="m9.458 10.85-.326.65H8.46c-.85 0-1.473-.59-1.473-1.386L6.981 6.82H5.9l.005-.906h.704a.444.444 0 0 0 .463-.464V4.5h.944v1.413h1.446l-.005.906h-1.44v3.202a.56.56 0 0 0 .572.573h.868z"
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

export default AddTest;
