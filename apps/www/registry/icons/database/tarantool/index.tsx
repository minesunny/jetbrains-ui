/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Tarantool = ({
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
      d="M7.583 9.824a2.556 2.556 0 0 1 0-3.614L9.11 4.683a2.556 2.556 0 0 1 3.614 0l1.527 1.527a2.556 2.556 0 0 1 0 3.614l-1.527 1.528a2.556 2.556 0 0 1-3.614 0z"
      className="fill-[url(#a)]"
    />
    <path
      d="M1.922 10.224a3.15 3.15 0 0 1 0-4.453l1.979-1.979a3.15 3.15 0 0 1 4.453 0l1.979 1.98a3.15 3.15 0 0 1 0 4.452l-1.979 1.979a3.15 3.15 0 0 1-4.453 0z"
      className="fill-[url(#b)]"
    />
    <path
      d="m9.178 4.62 1.155 1.154a3.15 3.15 0 0 1 0 4.453L9.158 11.4l-.048-.047-1.528-1.527a2.556 2.556 0 0 1 0-3.614L9.11 4.685z"
      className="fill-[#FF0D2A]"
    />
  </svg>
);

export default Tarantool;
