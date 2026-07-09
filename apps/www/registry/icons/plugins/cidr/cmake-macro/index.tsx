/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const CmakeMacro = ({
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
      d="m11.757 6.249-.756 1.512v-.32c0-.82-.425-1.329-1.177-1.329-.804 0-1.33.573-1.33 1.482v3.164h-.988V7.443c0-.82-.431-1.33-1.177-1.33-.815 0-1.33.573-1.33 1.482v3.164H4V5.377h.962v.877c.32-.64.887-1.003 1.645-1.003.799 0 1.397.397 1.689 1.07.34-.668.958-1.07 1.77-1.07.77 0 1.375.37 1.691.999"
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

export default CmakeMacro;
