/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const CwmIconModificator = ({
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
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('inline-block shrink-0', className)}
    role={ariaLabel ? 'img' : 'presentation'}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    {...props}
  >
    <path
      d="M4.5 8.5a4 4 0 0 1 3.873 3H11.5a1 1 0 1 1 0 2v1a1 1 0 1 1-2 0v-1H8.373a4 4 0 1 1-3.873-5Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
      strokeLinecap="round"
      className="fill-[#6C707E] dark:fill-[#CED0D6] stroke-[#fff] dark:stroke-[#27282E]"
    />
  </svg>
);

export default CwmIconModificator;
