/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Diagram = ({
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
      d="M1.5 13.5h13M1.5 2.5h13"
      strokeLinecap="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.146 6.354a.5.5 0 1 0 .708.707L4 5.914v5.793a.5.5 0 0 0 1 0V5.914l1.146 1.147a.5.5 0 1 0 .708-.707l-2-2L4.5 4l-.354.354zM9.146 6.354a.5.5 0 1 0 .708.707L11 5.914v.89h1v-.89l1.146 1.147a.5.5 0 0 0 .708-.707l-2-2L11.5 4l-.354.354zM11 11.216v.491a.5.5 0 1 0 1 0v-.991h-1zm0-1.965v.5h1V7.769h-1V9.25"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default Diagram;
