/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Download = ({
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
      d="M10.854 8.354a.5.5 0 1 0-.707-.707L8.5 9.293V2.5a.5.5 0 0 0-1 0v6.793L5.853 7.646a.5.5 0 0 0-.707.708l2.5 2.5a.5.5 0 0 0 .708 0z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <rect
      width={12}
      height={1}
      rx={0.5}
      transform="matrix(1 0 0 -1 2 14)"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <rect
      x={2}
      y={10}
      width={1}
      height={4}
      rx={0.5}
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <rect
      x={13}
      y={10}
      width={1}
      height={4}
      rx={0.5}
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default Download;
