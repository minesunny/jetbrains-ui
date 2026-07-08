/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Upload = ({
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
      d="M10.854 4.646a.5.5 0 1 1-.707.707L8.5 3.707v6.807a.5.5 0 0 1-1 0V3.707L5.854 5.354a.5.5 0 0 1-.707-.708l2.5-2.5a.5.5 0 0 1 .707 0z"
      className="fill-[#6C707E] dark:hidden"
    />
    <rect
      width={12}
      height={1}
      rx={0.5}
      transform="matrix(1 0 0 -1 2 14)"
      className="fill-[#6C707E] dark:hidden"
    />
    <rect
      x={2}
      y={10}
      width={1}
      height={4}
      rx={0.5}
      className="fill-[#6C707E] dark:hidden"
    />
    <rect
      x={13}
      y={10}
      width={1}
      height={4}
      rx={0.5}
      className="fill-[#6C707E] dark:hidden"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.854 4.646a.5.5 0 1 1-.707.707L8.5 3.707v6.807a.5.5 0 0 1-1 0V3.707L5.853 5.354a.5.5 0 0 1-.707-.708l2.5-2.5a.5.5 0 0 1 .708 0z"
      className="fill-[#CED0D6] hidden dark:block"
    />
    <rect
      width={12}
      height={1}
      rx={0.5}
      transform="matrix(1 0 0 -1 2 14)"
      className="fill-[#CED0D6] hidden dark:block"
    />
    <rect
      x={2}
      y={10}
      width={1}
      height={4}
      rx={0.5}
      className="fill-[#CED0D6] hidden dark:block"
    />
    <rect
      x={13}
      y={10}
      width={1}
      height={4}
      rx={0.5}
      className="fill-[#CED0D6] hidden dark:block"
    />
  </svg>
);

export default Upload;
