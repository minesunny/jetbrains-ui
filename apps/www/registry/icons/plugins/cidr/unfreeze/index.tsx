/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Unfreeze = ({
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
      d="M8 14.5A4.5 4.5 0 0 1 3.5 10c0-1.83 1.162-3.966 2.407-5.709a27 27 0 0 1 1.687-2.116c.154-.175.293-.323.406-.446.113.123.252.271.406.446.461.522 1.074 1.259 1.687 2.116C11.338 6.034 12.5 8.171 12.5 10A4.5 4.5 0 0 1 8 14.5Z"
      className="fill-[#F2FCF3] dark:fill-[#253627] stroke-[#208A3C] dark:stroke-[#57965C]"
    />
  </svg>
);

export default Unfreeze;
