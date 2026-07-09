/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const RestartFailedTests = ({
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
    <circle
      cx={12.5}
      cy={11.5}
      r={3.5}
      className="fill-[#E55765] dark:fill-[#DB5C5C]"
    />
    <path
      d="M12.5 9a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5M12.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
      className="fill-[#fff]"
    />
    <path
      d="M14 1.5a.5.5 0 0 0-1 0v3.182a6 6 0 1 0-4.271 9.274 4.5 4.5 0 0 1-.475-.962A5 5 0 1 1 12 5H9.5a.5.5 0 0 0 0 1H14z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default RestartFailedTests;
