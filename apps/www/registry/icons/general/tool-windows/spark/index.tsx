/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type SparkProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Spark = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: SparkProps) => (
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
      d="M5.842 1.682a.202.202 0 0 1 .333-.131l3.071 2.676.19.166.247-.055 4.05-.899a.2.2 0 0 1 .227.28l-1.73 3.69-.116.25.147.23 2.207 3.48a.2.2 0 0 1-.194.304l-4.221-.48-.258-.029-.172.192-2.746 3.077a.201.201 0 0 1-.347-.093l-.814-4.007-.053-.259-.242-.102-3.799-1.607a.199.199 0 0 1-.018-.357l3.602-1.984.231-.127.026-.262z"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default Spark;
