/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const InitScripts = ({
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
      d="M4.5 4.5V4A1.5 1.5 0 0 0 3 2.5m1.5 2V12A1.5 1.5 0 0 0 6 13.5h2m-3.5-9h-3V4A1.5 1.5 0 0 1 3 2.5m0 0h7.5a2 2 0 0 1 2 2V8"
      strokeLinejoin="round"
      className="stroke-[#3574F0] dark:stroke-[#548AF7]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 9a.5.5 0 0 1 .5.5V12h2.5a.5.5 0 0 1 0 1H13v2.5a.5.5 0 0 1-1 0V13H9.5a.5.5 0 0 1 0-1H12V9.5a.5.5 0 0 1 .5-.5"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default InitScripts;
