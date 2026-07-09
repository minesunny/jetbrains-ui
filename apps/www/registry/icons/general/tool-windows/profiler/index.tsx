/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Profiler = ({
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
      d="M12.157 7.202a.6.6 0 1 0-.751-.935l-2.478 1.99a1.8 1.8 0 1 0 .764.926zM8.8 9.8a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 3.5A6.5 6.5 0 0 0 1.5 10c0 .89.27 2.087.64 3h11.72c.37-.913.64-2.11.64-3A6.5 6.5 0 0 0 8 3.5M.5 10a7.5 7.5 0 1 1 15 0c0 1.16-.377 2.68-.866 3.73a.48.48 0 0 1-.435.27H1.8a.48.48 0 0 1-.435-.27C.877 12.68.5 11.16.5 10"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default Profiler;
