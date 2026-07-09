/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const EjbFinderMethod = ({
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
    <circle
      cx="12"
      cy="12"
      r="2"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.738 14.445a3 3 0 1 1 .707-.707l1.409 1.408a.5.5 0 0 1-.708.708zM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M14.891 9.236Q15 8.634 15 8a7 7 0 1 0-5.764 6.891 4 4 0 1 1 5.655-5.655"
      className="fill-[#FFF7F7] dark:fill-[#402929]"
    />
    <path
      d="M8.522 13.978a6 6 0 1 1 5.455-5.455c.34.192.647.433.914.713Q15 8.634 15 8a7 7 0 1 0-5.764 6.891 4 4 0 0 1-.714-.913"
      className="fill-[#DB3B4B] dark:fill-[#DB5C5C]"
    />
  </svg>
);

export default EjbFinderMethod;
