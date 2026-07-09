/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const CodeAssistantActorExtension = ({
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
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6V8h4V4a2 2 0 0 0-2-2z"
      className="fill-[#EDF3FF] dark:fill-[#25324D]"
    />
    <path
      d="M4 3h8a1 1 0 0 1 1 1v4h1V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6v-1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.532 4.98H7.47L5.277 11h1.024l.49-1.484h2.477L9.797 11H10V8.877zM8.09 6.223l.903 2.507H7.045L7.9 6.223l.095-.374z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default CodeAssistantActorExtension;
