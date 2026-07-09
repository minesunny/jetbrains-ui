/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Pandas = ({
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
    <rect
      x={11}
      y={1}
      width={2}
      height={10}
      rx={0.5}
      className="fill-[#130754] dark:fill-[#fff]"
    />
    <rect
      x={2}
      y={5}
      width={2}
      height={10}
      rx={0.5}
      className="fill-[#130754] dark:fill-[#fff]"
    />
    <rect
      x={5}
      y={1}
      width={2}
      height={4}
      rx={0.5}
      className="fill-[#130754] dark:fill-[#fff]"
    />
    <rect
      x={5}
      y={9}
      width={2}
      height={4}
      rx={0.5}
      className="fill-[#130754] dark:fill-[#fff]"
    />
    <rect
      x={5}
      y={6}
      width={2}
      height={2}
      rx={0.5}
      className="fill-[#FFCA00]"
    />
    <rect
      x={8}
      y={3}
      width={2}
      height={4}
      rx={0.5}
      className="fill-[#130754] dark:fill-[#fff]"
    />
    <rect
      x={8}
      y={8}
      width={2}
      height={2}
      rx={0.5}
      className="fill-[#E70488]"
    />
    <rect
      x={8}
      y={11}
      width={2}
      height={4}
      rx={0.5}
      className="fill-[#130754] dark:fill-[#fff]"
    />
  </svg>
);

export default Pandas;
