/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Protobuf = ({
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
      d="m12.512 12.247 1.363-1.84L12.091 8l-3.147 4.247z"
      className="fill-[#FFC107]"
    />
    <path
      d="M15.363 8.398a.65.65 0 0 0 0-.796l-2.852-3.849H8.944l4.931 6.655z"
      className="fill-[#0F9D58]"
    />
    <path
      d="m3.488 3.753-1.363 1.84L3.909 8l3.147-4.247z"
      className="fill-[#DB4437]"
    />
    <path
      d="M.637 7.602a.65.65 0 0 0 0 .796l2.852 3.849h3.567L2.125 5.592z"
      className="fill-[#4285F4]"
    />
  </svg>
);

export default Protobuf;
