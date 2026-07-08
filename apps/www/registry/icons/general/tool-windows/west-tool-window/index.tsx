/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type WestToolWindowProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const WestToolWindow = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: WestToolWindowProps) => (
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
      d="M14 9.18a1 1 0 0 1-.804.98L4 12l1.84-9.196A1 1 0 0 1 6.82 2H13a1 1 0 0 1 1 1zm-1-5.473v4.294l-1.84-2.454zm-2.554 2.555 2.236 2.982-6.523 1.304zM12.293 3l-1.84 1.84L8 3zM5.452 9.841l1.304-6.524L9.74 5.554z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M1.361 12.767 3.998 12l-.765 2.638a.5.5 0 0 1-.832.216l-1.253-1.248a.503.503 0 0 1 .213-.84"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default WestToolWindow;
