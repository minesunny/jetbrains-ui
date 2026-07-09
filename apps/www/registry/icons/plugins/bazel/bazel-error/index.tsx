/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const BazelError = ({
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
    <path d="M4.5 1 8 4.5 4.5 8 1 4.5z" className="fill-[#76D275]" />
    <path d="M1 4.5V8l3.5 3.5V8z" className="fill-[#43A047]" />
    <path d="M11.5 1 15 4.5 11.5 8 8 4.5z" className="fill-[#76D275]" />
    <path d="M8 11.5V15l-3.5-3.5V8z" className="fill-[#00701A]" />
    <circle
      cx="12.5"
      cy="12.5"
      r="3.5"
      className="fill-[#E55765] dark:fill-[#DB5C5C]"
    />
    <path
      d="M12.5 10a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5M12.5 15a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
      className="fill-[#fff]"
    />
    <path
      d="M11.352 8.148q.073-.02.147-.036V8zM15 8V4.5L11.5 8v.112a4.5 4.5 0 0 1 3.021.367z"
      className="fill-[#43A047]"
    />
    <path
      d="M11.5 8 8 4.5 4.5 8 8 11.5l.148-.148a4.51 4.51 0 0 1 3.204-3.204z"
      className="fill-[#43A047]"
    />
  </svg>
);

export default BazelError;
