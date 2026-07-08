/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type ThreadGroupCurrentProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const ThreadGroupCurrent = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: ThreadGroupCurrentProps) => (
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
      d="M15.827 11.176a.6.6 0 0 1 0 .848l-3.797 3.797a.6.6 0 0 1-.848 0l-2.006-2.006a.6.6 0 1 1 .848-.848l1.582 1.581 3.373-3.372a.6.6 0 0 1 .848 0"
      className="fill-[#E66D17] dark:fill-[#C77D55]"
    />
    <path
      d="M12.596 12.144 11.5 10.5v-5l2-3h-11l2 3v5l-2 3h5.504a1.6 1.6 0 0 1 2.728-1.24l.874.874z"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.957 11.783 12 10.35V5.65l1.916-2.874A.5.5 0 0 0 13.5 2h-11a.5.5 0 0 0-.416.777L4 5.651v4.698l-1.916 2.874A.5.5 0 0 0 2.5 14h5.62a1.6 1.6 0 0 1-.072-1H3.434l1.334-2h6.464l1.003 1.505zM11 6v4H5V6zm.232-1H4.768L3.434 3h9.132z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default ThreadGroupCurrent;
