/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const InterceptorClass = ({
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
      d="M14.65 10.193a7 7 0 1 0-4.456 4.456 3.5 3.5 0 0 1 4.456-4.456"
      className="fill-[#EDF3FF] dark:fill-[#25324D]"
    />
    <path
      d="M8.132 11.5c1.49 0 2.766-.9 3.08-2.175h-1.015c-.315.73-1.093 1.252-2.065 1.252-1.339 0-2.306-1.074-2.306-2.577s.967-2.577 2.306-2.577c.972 0 1.75.522 2.065 1.252h1.015C10.898 5.4 9.622 4.5 8.132 4.5 6.213 4.5 4.787 5.994 4.787 8s1.426 3.5 3.345 3.5"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M16 13.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
      className="fill-[#55A76A] dark:fill-[#57965C]"
    />
    <path
      d="M10.004 13.657a6 6 0 1 1 3.654-3.654q.52.025.992.19a7 7 0 1 0-4.456 4.456 3.5 3.5 0 0 1-.19-.992"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default InterceptorClass;
