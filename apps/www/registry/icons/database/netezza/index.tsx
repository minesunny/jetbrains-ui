/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type NetezzaProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Netezza = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: NetezzaProps) => (
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
      d="M8 14.214A6.214 6.214 0 1 0 8 1.785a6.214 6.214 0 0 0 0 12.428M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14"
      className="fill-[#B7C003]"
    />
    <path
      d="M7.049 4.459H4.815v7.076H6.87V7.69l2.206 3.844h2.11V4.459h-2.04v3.814z"
      className="fill-[#166671] dark:fill-[#248996]"
    />
  </svg>
);

export default Netezza;
