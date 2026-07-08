/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type MetadataProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Metadata = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: MetadataProps) => (
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
      d="M10 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"
      className="fill-[#FAF5FF] dark:fill-[#2F2936]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5 6a.5.5 0 0 1 .5.5v5.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L11 12.293V6.5a.5.5 0 0 1 .5-.5"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M10.708 5.226a5.5 5.5 0 1 0-2.66 6.65 1.5 1.5 0 0 1 .391-1.437l-.017-.017A4.5 4.5 0 1 1 10 7v-.5c0-.538.283-1.01.708-1.274"
      className="fill-[#834DF0] dark:fill-[#A571E6]"
    />
    <path
      d="M3 7v2H2V5h1v.268a1.995 1.995 0 0 1 2.5.41A2 2 0 0 1 9 7v1.999H8V7a1 1 0 0 0-2 0v2H5V7a1 1 0 0 0-2 0"
      className="fill-[#834DF0] dark:fill-[#A571E6]"
    />
  </svg>
);

export default Metadata;
