/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const BlazePersistenceEntityView = ({
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
      cx="8"
      cy="8"
      r="6.5"
      className="fill-[#EDF3FF] dark:fill-[#25324D] stroke-[#3574F0] dark:stroke-[#548AF7]"
    />
    <path
      d="M6.002 4.5H7v7h-.998zm2.79 7.12q-.65 0-1.145-.285a2.06 2.06 0 0 1-.77-.805 2.6 2.6 0 0 1-.285-1.205h.345v-.77h-.345q.01-.686.285-1.2.28-.52.77-.805.495-.29 1.145-.29.705 0 1.255.34.55.335.855.945.31.61.31 1.395 0 .784-.31 1.395a2.3 2.3 0 0 1-.855.95 2.37 2.37 0 0 1-1.255.335m-.205-.88q.47 0 .835-.225.365-.23.565-.635.205-.41.205-.94t-.205-.935a1.5 1.5 0 0 0-.565-.635 1.53 1.53 0 0 0-.835-.23q-.475 0-.845.23a1.53 1.53 0 0 0-.57.635q-.205.405-.205.935t.205.94q.205.405.57.635.37.225.845.225"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default BlazePersistenceEntityView;
