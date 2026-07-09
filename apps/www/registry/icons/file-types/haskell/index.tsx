/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Haskell = ({
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
      d="M9.91 5.5H15V8h-3.818zM12.455 9.25H15v2.5h-1.273zM1 3h2.545l2.546 5H3.545zM6.09 8H3.546L1 13h2.545z"
      className="fill-[#F07B3E]"
    />
    <path
      d="M4.818 3h2.546l2.545 5H7.364zM7.364 8h2.545l2.546 5H9.909z"
      className="fill-[#90623E]"
    />
    <path d="M9.91 8H7.363l-2.546 5h2.546z" className="fill-[#90623E]" />
  </svg>
);

export default Haskell;
