/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type DislikeSelectedProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const DislikeSelected = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: DislikeSelectedProps) => (
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
      d="M14.5 9a1.5 1.5 0 0 1-1.5 1.5h-1.5v-8H13A1.5 1.5 0 0 1 14.5 4zM6.5 10.5H3A1.5 1.5 0 0 1 1.5 9V5.692c0-.426.181-.832.498-1.116l1.887-1.693a1.5 1.5 0 0 1 1.002-.384H11.5v8.293l-3.465 3.446A.9.9 0 0 1 6.5 13.6z"
      className="fill-[#FFF7F7] dark:fill-[#402929]"
    />
    <path
      d="M14.5 9a1.5 1.5 0 0 1-1.5 1.5h-1.5v-8H13A1.5 1.5 0 0 1 14.5 4zM6.5 10.5H3A1.5 1.5 0 0 1 1.5 9V5.692c0-.426.181-.832.498-1.116l1.887-1.693a1.5 1.5 0 0 1 1.002-.384H11.5v8.293l-3.465 3.446A.9.9 0 0 1 6.5 13.6z"
      className="stroke-[#DB3B4B] dark:stroke-[#DB5C5C]"
    />
  </svg>
);

export default DislikeSelected;
