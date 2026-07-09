/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const WebServiceClient = ({
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
      d="M14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 12h-2a3 3 0 0 0-3 3 1 1 0 0 0 1 1h6a1 1 0 0 0 1-1 3 3 0 0 0-3-3m-4 3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2z"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
    <path
      d="M12 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2M11 13a2 2 0 0 0-2 2h6a2 2 0 0 0-2-2z"
      className="fill-[#EDF3FF] dark:fill-[#25324D]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 1a7 7 0 0 1 6.974 7.605c-.105-.8-.525-1.5-1.13-1.972A6 6 0 0 0 13.659 6h-2.783l.025.208a3 3 0 0 0-.947.598A14 14 0 0 0 9.867 6H6.133A15 15 0 0 0 6 8c0 .705.047 1.376.133 2H9.17c.131.373.335.711.593 1H6.31c.13.586.296 1.11.487 1.556.164.382.337.684.506.913A4 4 0 0 0 7 14.929 7.002 7.002 0 0 1 8 1m-2.876 9H2.341A6 6 0 0 1 2 8c0-.701.12-1.374.341-2h2.783C5.044 6.634 5 7.305 5 8s.043 1.366.124 2m-2.321 1h2.486c.226 1.11.573 2.058 1.001 2.753A6.02 6.02 0 0 1 2.803 11M6.31 5H9.69a9 9 0 0 0-.487-1.556c-.24-.56-.5-.948-.737-1.182C8.232 2.032 8.076 2 8 2s-.232.032-.465.262c-.238.234-.497.623-.737 1.182A9 9 0 0 0 6.31 5m4.4 0h2.486A6.02 6.02 0 0 0 9.71 2.247c.428.695.775 1.644 1.001 2.753m-4.42-2.753C5.86 2.942 5.514 3.891 5.288 5H2.803A6.02 6.02 0 0 1 6.29 2.247"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default WebServiceClient;
