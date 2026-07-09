/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const RestoreFromIgnore = ({
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
      d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1 0a2.5 2.5 0 0 1-3.879 2.086l3.465-3.465c.262.396.414.87.414 1.379m-4.586 1.379 3.465-3.465a2.5 2.5 0 0 0-3.465 3.465"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M3 4v3.878l-1 1V4a2 2 0 0 1 2-2h.5a.5.5 0 0 1 0 1H4a1 1 0 0 0-1 1M7.555 11l-.055-.001H5.468A.5.5 0 0 1 5.5 10h3.258a4.5 4.5 0 0 0-.502 1zM11.5 3h.5a1 1 0 0 1 1 1v4.027q.522.06 1 .23V4a2 2 0 0 0-2-2h-.5a.5.5 0 0 0 0 1M10.907 8.29a5 5 0 0 0-.47.21H5.5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .407.79M5.5 5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.854 9.146a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L1.707 13H7.5a.5.5 0 0 0 0-1H1.707l2.147-2.146a.5.5 0 0 0 0-.708"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default RestoreFromIgnore;
