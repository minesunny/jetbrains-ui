/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ValueMuted = ({
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
      d="M1.146 1.146a.5.5 0 0 1 .708 0l13 13a.5.5 0 0 1-.708.708l-13-13a.5.5 0 0 1 0-.708"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M14 11.879V3a2 2 0 0 0-2-2H4c-.26 0-.51.05-.738.14l.86.86H12a1 1 0 0 1 1 1v7.879z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M10.61 8.488a.5.5 0 0 0-.11-.988h-.879zM8.121 6H10.5a.5.5 0 0 0 0-1H7.121zM3 5.121l-1-1V13a2 2 0 0 0 2 2h8c.26 0 .51-.05.738-.14l-.86-.86H4a1 1 0 0 1-1-1z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="m7.879 10 1 1H5.5a.5.5 0 0 1 0-1zM6.379 8.5l-.988-.988A.5.5 0 0 0 5.5 8.5z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default ValueMuted;
