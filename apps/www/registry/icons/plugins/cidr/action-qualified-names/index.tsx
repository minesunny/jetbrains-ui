/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ActionQualifiedNames = ({
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
      d="M3.5 13.5h-1a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h1M12.5 13.5h1a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-1"
      strokeLinecap="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M3.205 4.5H4.25l3.565 5.435V4.5h.98v7h-1.05l-3.56-5.435V11.5h-.98z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path d="M10 8H11V9H10z" className="fill-[#6C707E] dark:fill-[#CED0D6]" />
    <path d="M12 8H13V9H12z" className="fill-[#6C707E] dark:fill-[#CED0D6]" />
    <path d="M12 10H13V11H12z" className="fill-[#6C707E] dark:fill-[#CED0D6]" />
    <path d="M10 10H11V11H10z" className="fill-[#6C707E] dark:fill-[#CED0D6]" />
  </svg>
);

export default ActionQualifiedNames;
