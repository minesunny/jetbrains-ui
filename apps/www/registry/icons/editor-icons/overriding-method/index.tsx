/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const OverridingMethod = ({
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
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('inline-block shrink-0', className)}
    role={ariaLabel ? 'img' : 'presentation'}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    {...props}
  >
    <path
      d="M10 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"
      className="fill-[#EDF3FF] dark:fill-[#25324D]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.492 10C3.73 10 2.5 8.65 2.5 7.017V7c0-1.633 1.246-3 3.008-3S8.5 5.35 8.5 6.983V7c0 1.633-1.246 3-3.008 3m.016-.945c1.14 0 1.935-.911 1.935-2.038V7c0-1.127-.812-2.055-1.951-2.055s-1.935.911-1.935 2.038V7c0 1.127.812 2.055 1.951 2.055"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5 8a.5.5 0 0 1-.5-.5V1.707L9.854 2.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L12 1.707V7.5a.5.5 0 0 1-.5.5"
      className="fill-[#DB3B4B] dark:fill-[#DB5C5C]"
    />
    <path
      d="M10 7a4.5 4.5 0 1 1-1.578-3.422l.017-.017a1.5 1.5 0 0 1-.391-1.437 5.5 5.5 0 1 0 2.66 6.65A1.5 1.5 0 0 1 10 7.5z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default OverridingMethod;
