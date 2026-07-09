/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const InlayRenameInNoCodeFiles = ({
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
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('inline-block shrink-0', className)}
    role={ariaLabel ? 'img' : 'presentation'}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    {...props}
  >
    <rect
      x={1}
      y={5}
      width={10}
      height={1.5}
      rx={0.75}
      className="fill-[#818594] dark:fill-[#9DA0A8]"
    />
    <rect
      x={1}
      y={9}
      width={6}
      height={1.5}
      rx={0.75}
      className="fill-[#818594] dark:fill-[#9DA0A8]"
    />
    <rect
      x={1}
      y={1}
      width={10}
      height={1.5}
      rx={0.75}
      className="fill-[#818594] dark:fill-[#9DA0A8]"
    />
  </svg>
);

export default InlayRenameInNoCodeFiles;
