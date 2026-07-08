/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const MoveToButton = ({
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
      d="M11 3a1 1 0 0 1 1-1h2.5a.5.5 0 0 1 0 1H12v10h2.5a.5.5 0 0 1 0 1H12a1 1 0 0 1-1-1zM6.646 5.146a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L8.293 8.5H1.5a.5.5 0 0 1 0-1h6.793L6.646 5.854a.5.5 0 0 1 0-.708"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default MoveToButton;
