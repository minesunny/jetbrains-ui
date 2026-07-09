/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const CodeAssistantFieldOptional = ({
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
      x="1.5"
      y="1.5"
      width="13"
      height="13"
      rx="6.5"
      className="fill-[#FAF5FF] dark:fill-[#2F2936] stroke-[#834DF0] dark:stroke-[#B589EC]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 5v6h1V9.04h2.495v-1H7V6h3V5z"
      className="fill-[#834DF0] dark:fill-[#B589EC]"
    />
  </svg>
);

export default CodeAssistantFieldOptional;
