/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Kafka = ({
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
      d="M8.25 2.75A1.75 1.75 0 0 1 7 4.428v1.03c.638.11 1.196.455 1.581.942l1.195-.597a1.75 1.75 0 1 1 .447.894l-1.185.593a2.6 2.6 0 0 1 0 1.42l1.185.593a1.75 1.75 0 1 1-.447.894L8.581 9.6A2.58 2.58 0 0 1 7 10.54v1.031a1.75 1.75 0 1 1-.994-.001V10.52a2.58 2.58 0 0 1 0-5.04V4.43A1.75 1.75 0 1 1 8.25 2.75M6.5 3.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m.058 6.017a1.517 1.517 0 1 0 0-3.034 1.517 1.517 0 0 0 0 3.034m.692 3.733a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m5-7.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.75 5.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default Kafka;
