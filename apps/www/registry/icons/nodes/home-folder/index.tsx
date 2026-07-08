/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type HomeFolderProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const HomeFolder = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: HomeFolderProps) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.668 2.632a.5.5 0 0 1 .664 0l5 4.443a.5.5 0 0 1 .168.374V13a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-2a1.5 1.5 0 0 0-3 0v2a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V7.45a.5.5 0 0 1 .168-.375z"
      className="fill-[#EBECF0] dark:fill-[#43454A] stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default HomeFolder;
