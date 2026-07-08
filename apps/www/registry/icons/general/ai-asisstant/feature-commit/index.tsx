/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type FeatureCommitProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const FeatureCommit = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: FeatureCommitProps) => (
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
      d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
      className="fill-[#EDF3FF] dark:fill-[#25324D]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.041 8.5a3 3 0 0 0 5.918 0H15.5a.5.5 0 0 0 0-1h-4.541a3 3 0 0 0-5.918 0H.5a.5.5 0 0 0 0 1zM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default FeatureCommit;
