/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const JavaeeAppModule = ({
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
      d="M11 9H7v7h4v-1H8v-2h2.5v-1H8v-2h3zM16 9h-4v7h4v-1h-3v-2h2.5v-1H13v-2h3z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2V8h8V4a2 2 0 0 0-2-2z"
      className="fill-[#EDF3FF] dark:fill-[#25324D]"
    />
    <path
      d="M2 4a2 2 0 0 1 2-2h8q.208 0 .403.04A2 2 0 0 1 14 4v4h-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2v1H4q-.103 0-.204-.01A2 2 0 0 1 2 12z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default JavaeeAppModule;
