/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const MessageBean = ({
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
      d="M14.64 11H9.36L12 12.886zM9 11.972l2.71 1.935a.5.5 0 0 0 .58 0L15 11.972V15H9zM8 15v-4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M15 9c-.012-1.905-.968-3.845-2.579-5.457C9.556.678 5.603-.034 2.77 2.8s-2.02 6.936.72 9.675C4.517 13.504 5.731 14.272 7 14.677V11a2 2 0 0 1 2-2z"
      className="fill-[#FFF4EB] dark:fill-[#45322B]"
    />
    <path
      d="M15 9c-.012-1.905-.968-3.845-2.579-5.457C9.556.678 5.603-.034 2.77 2.8s-2.02 6.936.72 9.675C4.517 13.504 5.731 14.272 7 14.677v-1.06c-.99-.372-1.956-1.004-2.802-1.85-1.236-1.235-2-2.743-2.163-4.205-.144-1.29.174-2.574 1.104-3.684l5.225 5.225Q8.665 9.001 9 9h.678L3.846 3.169c1.115-.943 2.372-1.273 3.63-1.138 1.429.153 2.93.915 4.237 2.22 1.312 1.313 2.09 2.807 2.253 4.228q.03.26.032.521z"
      className="fill-[#E66D17] dark:fill-[#C77D55]"
    />
  </svg>
);

export default MessageBean;
