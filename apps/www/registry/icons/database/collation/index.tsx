/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Collation = ({
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
      d="M9.5 3.5h5M9.5 8h5M9.5 12.5h5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-[#6C707E] dark:hidden"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.854 9.854a.5.5 0 1 0-.708-.708L5 11.293V3.5a.5.5 0 1 0-1 0v7.793L1.854 9.146a.5.5 0 1 0-.708.708l3 3 .354.353.353-.353m3-3-2.999 2.999z"
      className="fill-[#6C707E] dark:hidden"
    />
    <path
      d="M9.5 3.5h5M9.5 8h5M9.5 12.5h5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-[#CED0D6] hidden dark:block"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.854 9.854a.5.5 0 1 0-.708-.708L5 11.293V3.5a.5.5 0 0 0-1 0v7.793L1.854 9.146a.5.5 0 1 0-.708.708l3 3 .354.353.353-.353m3-3-2.999 2.999z"
      className="fill-[#CED0D6] hidden dark:block"
    />
  </svg>
);

export default Collation;
