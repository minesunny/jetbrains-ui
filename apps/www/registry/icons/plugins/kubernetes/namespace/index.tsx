/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Namespace = ({
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
      d="M3 4a1 1 0 0 1 1-1h2a.5.5 0 0 0 0-1H4a2 2 0 0 0-2 2v1.5a.5.5 0 0 0 1 0zM13 4v1.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2h-1.5a.5.5 0 0 0 0 1H12a1 1 0 0 1 1 1M10.5 13H12a1 1 0 0 0 1-1v-1.5a.5.5 0 0 1 1 0V12a2 2 0 0 1-2 2h-1.5a.5.5 0 0 1 0-1M4 13a1 1 0 0 1-1-1v-1.5a.5.5 0 0 0-1 0V12a2 2 0 0 0 2 2h1.5a.5.5 0 0 0 0-1z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default Namespace;
