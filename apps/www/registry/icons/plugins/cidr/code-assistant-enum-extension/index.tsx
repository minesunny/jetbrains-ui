/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const CodeAssistantEnumExtension = ({
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
      d="M11 16h5v-1h-4v-2h3.5v-1h-3.51v-2H16V9h-5z"
      className="fill-[#834DF0] dark:fill-[#B589EC]"
    />
    <path
      d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6V8h4V4a2 2 0 0 0-2-2z"
      className="fill-[#FAF5FF] dark:fill-[#2F2936]"
    />
    <path
      d="M4 3h8a1 1 0 0 1 1 1v4h1V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6v-1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"
      className="fill-[#834DF0] dark:fill-[#B589EC]"
    />
  </svg>
);

export default CodeAssistantEnumExtension;
