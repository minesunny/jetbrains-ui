/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Bazel = ({
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
    <path
      d="M15 4.5V8l-3.5 3.5V8zM8 4.5 11.5 8 8 11.5 4.5 8z"
      className="fill-[#43A047]"
    />
    <path d="M8 11.5V15l-3.5-3.5V8z" className="fill-[#00701A]" />
    <path d="M8 11.5 11.5 8v3.5L8 15z" className="fill-[#004300]" />
  </svg>
);

export default Bazel;
