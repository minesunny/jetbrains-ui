/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const CodeAssistantPropertyOptional = ({
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
    <rect
      x="2.5"
      y="2.5"
      width="11"
      height="11"
      rx="5.5"
      className="fill-[#FFF7F7] dark:fill-[#402929] stroke-[#DB3B4B] dark:stroke-[#DB5C5C]"
    />
    <path
      d="M6 4.98h2.52q.61 0 1.07.223.465.223.714.634.255.412.254.952 0 .544-.258.955-.255.412-.722.639a2.5 2.5 0 0 1-1.093.227H6.98v2.37H6zm2.477 2.786q.318 0 .559-.116a.87.87 0 0 0 .37-.339q.129-.222.129-.518a1 1 0 0 0-.13-.514.84.84 0 0 0-.37-.335q-.24-.12-.558-.12H6.98v1.942z"
      className="fill-[#DB3B4B] dark:fill-[#DB5C5C]"
    />
  </svg>
);

export default CodeAssistantPropertyOptional;
