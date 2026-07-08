/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ConsoleShowPlan = ({
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
      d="M5.5 0a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h2v2h-3a.5.5 0 0 0-.5.5V10H1.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5H5V8h6v2H9.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5H12V7.5a.5.5 0 0 0-.5-.5h-3V5h2a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5zM6 4V1h4v3zm-4 7v3h4v-3zm8 0v3h4v-3z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default ConsoleShowPlan;
