/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Projection = ({
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
      d="M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5v-1H6V6h4v2h1V6h3v2h1V4a2 2 0 0 0-2-2zm7 1H6v2h4zM3 3h2v2H2V4a1 1 0 0 1 1-1m-1 9V6h3v7H3a1 1 0 0 1-1-1m12-8v1h-3V3h2a1 1 0 0 1 1 1"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 9h1v1H9zm3 1h-1V9h1zm2 0h-1V9h1zm1 0V9h1v1zm-5 1v1H9v-1zm5 1v-1h1v1zm-5 1v1H9v-1zm5 1v-1h1v1zm-6 1h1v1H9zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default Projection;
