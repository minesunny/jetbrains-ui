/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type AddColumnLeftProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const AddColumnLeft = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: AddColumnLeftProps) => (
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
      d="M10 2a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm3 1h-3a1 1 0 0 0-1 1v3h5V4a1 1 0 0 0-1-1m-3 9a1 1 0 0 1-1-1V8h5v3a1 1 0 0 1-1 1z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M4 5.5a.5.5 0 0 0-1 0V7H1.5a.5.5 0 0 0 0 1H3v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H4z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default AddColumnLeft;
