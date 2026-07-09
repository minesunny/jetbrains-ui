/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ScheduledEvent = ({
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
    <circle cx={8} cy={8} r={6.5} className="stroke-[#6C707E] dark:hidden" />
    <path
      d="M13 8.00006C13 10.7615 10.7614 13.0001 8 13.0001L8 8L13 8.00006Z"
      className="dark:hidden"
    />
    <path
      d="M13 8.00006H14V7.00007L13 7.00006L13 8.00006ZM8 13.0001L7 13.0001L7 14.0001H8V13.0001ZM8 8L8.00002 7L7 6.99999L7 8L8 8ZM12 8.00006C12 10.2092 10.2091 12.0001 8 12.0001V14.0001C11.3137 14.0001 14 11.3138 14 8.00006H12ZM9 13.0001L9 8L7 8L7 13.0001L9 13.0001ZM7.99999 9L13 9.00006L13 7.00006L8.00002 7L7.99999 9Z"
      mask="url(#path-2-inside-1_2624_35656)"
      className="fill-[#6C707E] dark:hidden"
    />
    <circle
      cx={8}
      cy={8}
      r={6.5}
      className="stroke-[#CED0D6] hidden dark:block"
    />
    <path
      d="M13 8.00006C13 10.7615 10.7614 13.0001 8 13.0001L8 8L13 8.00006Z"
      className="hidden dark:block"
    />
    <path
      d="M13 8.00006H14V7.00007L13 7.00006L13 8.00006ZM8 13.0001L7 13.0001L7 14.0001H8V13.0001ZM8 8L8.00002 7L7 6.99999L7 8L8 8ZM12 8.00006C12 10.2092 10.2091 12.0001 8 12.0001V14.0001C11.3137 14.0001 14 11.3138 14 8.00006H12ZM9 13.0001L9 8L7 8L7 13.0001L9 13.0001ZM7.99999 9L13 9.00006L13 7.00006L8.00002 7L7.99999 9Z"
      mask="url(#path-2-inside-1_2624_35758)"
      className="fill-[#CED0D6] hidden dark:block"
    />
  </svg>
);

export default ScheduledEvent;
