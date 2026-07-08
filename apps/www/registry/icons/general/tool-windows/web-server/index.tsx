/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const WebServer = ({
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
    <path d="M4 4h2v1H4z" className="fill-[#6C707E] dark:fill-[#CED0D6]" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 3v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1m1 3V3h10v3z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path d="M6 11H4v1h2z" className="fill-[#6C707E] dark:fill-[#CED0D6]" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 10v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1m1 3v-3h10v3z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default WebServer;
