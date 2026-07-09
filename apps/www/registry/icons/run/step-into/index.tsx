/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const StepInto = ({
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
    <rect
      x={2}
      y={14}
      width={12}
      height={1}
      rx={0.5}
      className="fill-[#6C707E] dark:hidden"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.354 7.654a.5.5 0 0 0-.707-.708L8.5 10.093V2a.5.5 0 0 0-1 0v8.093L4.354 6.946a.5.5 0 1 0-.708.708l4 4 .354.353.354-.354z"
      className="fill-[#6C707E] dark:hidden"
    />
    <rect
      x={2}
      y={14}
      width={12}
      height={1}
      rx={0.5}
      className="fill-[#CED0D6] hidden dark:block"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.354 7.654a.5.5 0 0 0-.708-.708L8.5 10.093V2a.5.5 0 0 0-1 0v8.093L4.354 6.946a.5.5 0 1 0-.708.708l4 4 .354.353.354-.354z"
      className="fill-[#CED0D6] hidden dark:block"
    />
  </svg>
);

export default StepInto;
