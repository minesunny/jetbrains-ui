/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Mm = ({
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
      d="M1 13V2.99h2.016l1.051 6.7.079 1.365.086-1.365.972-6.7h2.052V13h-1.23V4.935l.036-1.308L4.611 13h-.958L2.187 3.677l.036 1.258V13zM8.75 13V2.99h2.017l1.05 6.7.08 1.365.085-1.365.973-6.7h2.052V13h-1.23V4.935l.036-1.308L12.36 13h-.958L9.937 3.677l.036 1.258V13z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default Mm;
