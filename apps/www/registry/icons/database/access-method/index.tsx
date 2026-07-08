/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type AccessMethodProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const AccessMethod = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: AccessMethodProps) => (
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
      d="M7.43 4.98H8.49L10.758 11H9.756l-.53-1.484H6.75L6.26 11H5.236zm1.522 3.75-.903-2.507-.095-.374-.095.374-.855 2.507z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 10h1.5a.5.5 0 0 1 .5.5V15h-1v-4h-1zM15.5 16h-4v-1h4z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M12.5 7.5H14V9h-1.5z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.811 6.5a6 6 0 1 0-3.311 6.956v1.084a7 7 0 1 1 4.339-8.04zM14 8v-.5h-.02q.02.248.02.5"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default AccessMethod;
