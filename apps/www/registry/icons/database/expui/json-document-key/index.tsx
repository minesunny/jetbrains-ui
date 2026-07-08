/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const JsonDocumentKey = ({
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
      d="M12 3C12 2.44772 11.5523 2 11 2H8V4C8 5.10457 7.10457 6 6 6H4V13C4 13.5523 4.44772 14 5 14H7.03544C7.01209 13.8367 7 13.6698 7 13.5C7 11.567 8.567 10 10.5 10C11.0368 10 11.5454 10.1208 12 10.3368V3Z"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      d="M7 2.41421L4.41421 5H6C6.55228 5 7 4.55228 7 4V2.41421Z"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 13V5.41421C3 5.149 3.10536 4.89464 3.29289 4.70711L6.70711 1.29289C6.89464 1.10536 7.149 1 7.41421 1H11C12.1046 1 13 1.89543 13 3V11.0505C12.7129 10.7576 12.3748 10.5149 12 10.3368V3C12 2.44772 11.5523 2 11 2L8 2V4C8 5.10457 7.10457 6 6 6H4L4 13C4 13.5523 4.44772 14 5 14H7.03544C7.08595 14.3531 7.18915 14.6891 7.33682 15H5C3.89543 15 3 14.1046 3 13ZM4.41421 5L7 2.41421V4C7 4.55228 6.55228 5 6 5H4.41421Z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.95 14C12.7184 15.1411 11.7095 16 10.5 16C9.11929 16 8 14.8807 8 13.5C8 12.1193 9.11929 11 10.5 11C11.7095 11 12.7184 11.8589 12.95 13L16 13L16 14L15 14L15 16L14 16L14 14L12.95 14ZM10.5 15C11.3284 15 12 14.3284 12 13.5C12 12.6716 11.3284 12 10.5 12C9.67157 12 9 12.6716 9 13.5C9 14.3284 9.67157 15 10.5 15Z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default JsonDocumentKey;
