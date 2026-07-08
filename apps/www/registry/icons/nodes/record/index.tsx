/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type RecordProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Record = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: RecordProps) => (
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
    <circle
      cx={8}
      cy={8}
      r={6.5}
      className="fill-[#EDF3FF] dark:fill-[#25324D] stroke-[#3574F0] dark:stroke-[#548AF7]"
    />
    <path
      d="M7.93 8.405h1.095l1.9 3.095h-1.15zM5.7 4.5h2.885q.696 0 1.215.26.525.255.81.725.285.465.285 1.09 0 .62-.29 1.095a1.93 1.93 0 0 1-.82.735q-.53.255-1.24.255H6.7v2.84h-1zm2.86 3.27q.39 0 .68-.145t.45-.415.16-.635q0-.36-.16-.625a1.06 1.06 0 0 0-.45-.415 1.5 1.5 0 0 0-.68-.145H6.7v2.38z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default Record;
