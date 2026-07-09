/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const RemoteFileSystems = ({
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
      d="M8.5 13v2.5m0 0h4m-4 0h-5"
      strokeLinecap="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M6.414 1.586 3.586 4.414A2 2 0 0 0 3 5.828V11a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H7.828a2 2 0 0 0-1.414.586"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      d="M7.828 1.5H11A1.5 1.5 0 0 1 12.5 3v8a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5.828c0-.398.158-.78.44-1.06l2.828-2.829a1.5 1.5 0 0 1 .912-.431z"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default RemoteFileSystems;
