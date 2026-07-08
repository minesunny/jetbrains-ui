/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type AspectJProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const AspectJ = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: AspectJProps) => (
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
      d="m3.603 13 1.92-10.5h1.815L9.295 13H7.863L6.528 4.773l-.098-.698-.097.697L5.073 13zm1.11-2.722V9.1h3.36v1.178z"
      className="fill-[#E66D17] dark:fill-[#E08855]"
    />
    <path
      d="M8.805 13v-1.305h.757q.405 0 .608-.33.21-.338.21-1.005V2.5h1.41v7.95q0 .848-.24 1.418-.24.561-.713.847-.465.285-1.162.285z"
      className="fill-[#E66D17] dark:fill-[#E08855]"
    />
  </svg>
);

export default AspectJ;
