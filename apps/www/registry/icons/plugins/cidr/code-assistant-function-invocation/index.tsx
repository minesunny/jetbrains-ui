/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const CodeAssistantFunctionInvocation = ({
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
      d="M11.146 8.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L13.293 12H7.5a.5.5 0 0 1 0-1h5.793l-2.147-2.146a.5.5 0 0 1 0-.708"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4.879l-1.44-1.44a1.5 1.5 0 0 0-2.12 2.122l.439.439H7.5A1.5 1.5 0 0 0 6 11.5V14H4a2 2 0 0 1-2-2z"
      className="fill-[#FFF7F7] dark:fill-[#402929]"
    />
    <path
      d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4.879l-1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2v1H4a2 2 0 0 1-2-2z"
      className="fill-[#DB3B4B] dark:fill-[#DB5C5C]"
    />
    <path
      d="M8.275 7.327V10H7.5q-.123 0-.242.02V7.326H6.121V6.43h1.137V5.406C7.258 4.57 7.875 4 8.778 4h1.103v.874H8.875c-.354 0-.6.246-.6.606v.95H9.83v.897z"
      className="fill-[#DB3B4B] dark:fill-[#DB5C5C]"
    />
  </svg>
);

export default CodeAssistantFunctionInvocation;
