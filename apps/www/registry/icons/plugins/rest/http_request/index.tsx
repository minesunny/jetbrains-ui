/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const HttpRequest = ({
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
      d="M2.387 13 3.79 3.9h1.482l1.43 9.1H5.59l-.975-7.189-.078-.611-.078.611L3.537 13zm.793-2.411v-.943H5.8v.942zM7.558 13V3.9h1.56q.748 0 1.216.286.474.285.695.871.228.585.228 1.482 0 .91-.228 1.502-.228.585-.715.87-.48.287-1.248.287h-.422V13zm1.56-4.816q.527 0 .754-.39.228-.397.228-1.255 0-.838-.228-1.228-.227-.397-.754-.397h-.474v3.27zM12.065 13V3.9h1.085V13z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default HttpRequest;
