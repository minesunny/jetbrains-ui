/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ResetMcu = ({
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
      d="M8.203 10.553H9.42L12.179 15h-1.273zM5 5h3.983q.95 0 1.673.357a2.6 2.6 0 0 1 1.115 1.016c.262.434.393.929.393 1.506q0 .864-.4 1.523a2.66 2.66 0 0 1-1.13 1.015q-.729.357-1.702.357H6.08V15H5zm3.983 4.766q.615 0 1.072-.229.457-.236.708-.665.258-.429.257-.993c0-.377-.085-.696-.257-.977a1.66 1.66 0 0 0-.708-.658 2.4 2.4 0 0 0-1.072-.229H6.08v3.751z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M4.5 2.5h8"
      strokeLinecap="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default ResetMcu;
