/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Android = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.934 1.252a.5.5 0 0 0-.868.496l1.08 1.892A8 8 0 0 0 .224 8.118 8 8 0 0 0 0 10h16c0-.69-.088-1.36-.252-2a8 8 0 0 0-2.895-4.36l1.081-1.892a.5.5 0 0 0-.868-.496l-1.046 1.83A7.96 7.96 0 0 0 8 2a7.96 7.96 0 0 0-4.02 1.082zM11 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      className="fill-[#55A76A] dark:fill-[#57965C]"
    />
  </svg>
);

export default Android;
