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
      d="M3.5 9.5V3.5H7.5V9.5H3.5Z"
      strokeLinejoin="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path d="M4 5.5H7" className="stroke-[#6C707E] dark:stroke-[#CED0D6]" />
    <path d="M4 7.5H7" className="stroke-[#6C707E] dark:stroke-[#CED0D6]" />
    <path
      d="M2 3.5C2 2.67157 2.67157 2 3.5 2H12.5C13.3284 2 14 2.67157 14 3.5V6.5H15V3.5C15 2.11929 13.8807 1 12.5 1H3.5C2.11929 1 1 2.11929 1 3.5V12.5C1 13.8807 2.11929 15 3.5 15H10.5V14H3.5C2.67157 14 2 13.3284 2 12.5V3.5Z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 10H13.5C13.7761 10 14 10.2239 14 10.5V15H13V11H12V10Z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.5 16H11.5V15H15.5V16Z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M12.5 7.5H14V9H12.5V7.5Z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default IndexCluster;
