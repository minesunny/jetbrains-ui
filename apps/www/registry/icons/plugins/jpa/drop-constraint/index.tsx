/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const DropConstraint = ({
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
      d="M10.146 10.146a.5.5 0 0 1 .708 0L13 12.293l2.146-2.147a.5.5 0 0 1 .708.708L13.707 13l2.147 2.146a.5.5 0 0 1-.708.708L13 13.707l-2.146 2.147a.5.5 0 0 1-.708-.708L12.293 13l-2.147-2.146a.5.5 0 0 1 0-.708"
      className="fill-[#DB3B4B] dark:fill-[#DB5C5C]"
    />
    <path
      d="M14.91 9.12Q15 8.572 15 8a7 7 0 1 0-5.88 6.91c.073-.17.18-.33.32-.47l.921-.922a6 6 0 1 1 3.156-3.156l.922-.923c.14-.14.3-.246.472-.319"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 9.085V8a1 1 0 0 0-1-1V6a2 2 0 1 0-4 0v1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3.879l-.44-.44a1.5 1.5 0 0 1-.354-.56H6V8h4v1.085a1.5 1.5 0 0 1 1 0M7 6a1 1 0 0 1 2 0v1H7z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default DropConstraint;
