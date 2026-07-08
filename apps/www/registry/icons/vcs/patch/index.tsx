/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Patch = ({
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
      d="M8 1a.5.5 0 0 0-.5.5v4h-4a.5.5 0 0 0 0 1h4v4a.5.5 0 0 0 1 0v-4h4a.5.5 0 0 0 0-1h-4v-4A.5.5 0 0 0 8 1"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <rect
      x={13}
      y={13}
      width={1}
      height={10}
      rx={0.5}
      transform="rotate(90 13 13)"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default Patch;
