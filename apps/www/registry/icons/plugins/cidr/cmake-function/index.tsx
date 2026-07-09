/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const CmakeFunction = ({
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
      className="fill-[#FFF7F7] dark:fill-[#402929]"
    />
    <path
      d="M7.258 12h1.017V7.327H9.83V6.43H8.275v-.95c0-.36.246-.606.6-.606h1.006V4H8.778c-.903 0-1.52.571-1.52 1.406V6.43H6.121v.897h1.137z"
      className="fill-[#DB3B4B] dark:fill-[#DB5C5C]"
    />
    <path
      d="M13.83 9.424Q13.998 8.737 14 8a6 6 0 1 0-6.117 5.999l-.488.975a7 7 0 1 1 7.069-4.283z"
      className="fill-[#DB3B4B] dark:fill-[#DB5C5C]"
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

export default CmakeFunction;
