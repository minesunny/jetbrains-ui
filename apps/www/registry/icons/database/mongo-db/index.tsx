/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type MongoDbProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const MongoDb = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: MongoDbProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('inline-block shrink-0', className)}
    role={ariaLabel ? 'img' : 'presentation'}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    {...props}
  >
    <path
      d="M10.283 7c0 4.375-2.844 5.25-2.844 5.25S7 11.813 7 10.5V0s3.282 2.625 3.282 7"
      className="fill-[#12924F]"
    />
    <path
      d="M3.72 7c0 4.375 2.844 5.25 2.844 5.25S7 11.813 7 10.5V0S3.72 2.625 3.72 7"
      className="fill-[#10AA50]"
    />
    <path
      d="M6.564 12.25 6.782 14h.438l.219-1.75S7 11.813 7 10.5c0 1.313-.437 1.75-.437 1.75"
      className="fill-[#B8C4C2]"
    />
  </svg>
);

export default MongoDb;
