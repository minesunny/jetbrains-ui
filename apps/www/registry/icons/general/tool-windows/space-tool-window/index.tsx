/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const SpaceToolWindow = ({
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
      d="M2.783 1.552c2.607-.29 8.43.521 11.558 5.388M2.783 1.552c1.738.58 4.953 2.78 6.691 5.388M2.783 1.552C.784 5.636 1.653 11.719 3.826 14.5M14.34 6.94c-1.825 5.214-7.474 7.56-10.515 7.56M14.34 6.94H9.474M3.826 14.5c2.462-1.303 5.214-4.519 5.648-7.56"
      strokeLinejoin="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default SpaceToolWindow;
