/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Target = ({
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
      d="M14 .5a.5.5 0 0 0-.854-.354l-2 2A.5.5 0 0 0 11 2.5v1.793L9.016 6.277a2 2 0 1 0 .707.707L11.707 5H13.5a.5.5 0 0 0 .354-.146l2-2A.5.5 0 0 0 15.5 2H14zM13.293 4H12V2.707l1-1V2.5a.5.5 0 0 0 .5.5h.793zM9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M10.008 2.344a6 6 0 1 0 3.648 3.648 1.5 1.5 0 0 0 .905-.431l.002-.002a7 7 0 1 1-4.121-4.121l-.003.001a1.5 1.5 0 0 0-.43.905"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default Target;
