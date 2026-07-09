/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const EdgeMod = ({
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
      d="M12.5 10.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM2.5 1.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M11 12.5H9.5a2 2 0 0 1-2-2v-5a2 2 0 0 0-2-2H4"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default EdgeMod;
