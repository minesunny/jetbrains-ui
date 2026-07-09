/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const SbtIcon = ({
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
      d="M8.683 2.55c.518-.138 1.07.01 1.45.39l2.928 2.927c.379.38.527.932.388 1.45l-1.072 3.998a1.5 1.5 0 0 1-1.062 1.062l-3.998 1.072a1.5 1.5 0 0 1-1.45-.389L2.94 10.134a1.5 1.5 0 0 1-.388-1.45l1.072-3.998a1.5 1.5 0 0 1 1.062-1.062z"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default SbtIcon;
