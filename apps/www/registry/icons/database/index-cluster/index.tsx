/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type IndexClusterProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const IndexCluster = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: IndexClusterProps) => (
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
      d="M3.5 9.5v-6h4v6z"
      strokeLinejoin="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M4 5.5h3M4 7.5h3"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M2 3.5A1.5 1.5 0 0 1 3.5 2h9A1.5 1.5 0 0 1 14 3.5v3h1v-3A2.5 2.5 0 0 0 12.5 1h-9A2.5 2.5 0 0 0 1 3.5v9A2.5 2.5 0 0 0 3.5 15h7v-1h-7A1.5 1.5 0 0 1 2 12.5z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 10h1.5a.5.5 0 0 1 .5.5V15h-1v-4h-1zM15.5 16h-4v-1h4z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M12.5 7.5H14V9h-1.5z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default IndexCluster;
