/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Build = ({
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
    <path d="M3.6 1.5h-2v3.2h2l.8-.4h1.2l1 .8h2.2l1.6-1.2c1.2 0 2 0 4 1.4-1.2-3.8-3.6-3.8-4.8-3.8h-3l-1 .4H4.4z" strokeLinejoin="round" className="stroke-[#6C707E] dark:stroke-[#CED0D6]" />
    <path d="M6 14.5h3.4V9.426a5 5 0 0 0-.404-1.97L8.8 7V5H6.6v2l-.196.457A5 5 0 0 0 6 9.427z" strokeLinejoin="round" className="stroke-[#6C707E] dark:stroke-[#CED0D6]" />
  </svg>
);

export default Build;
