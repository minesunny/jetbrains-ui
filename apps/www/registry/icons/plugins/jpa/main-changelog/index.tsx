/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const MainChangelog = ({
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
      d="M16 13.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
      className="fill-[#4682FA] dark:fill-[#548AF7]"
    />
    <path
      d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6.035a3.5 3.5 0 0 1 0-1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6.035a3.5 3.5 0 0 1 1 0V4a2 2 0 0 0-2-2z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M5 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5M5.5 7.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5.5 10a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default MainChangelog;
