/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const SpringCloudFileSet = ({
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
      d="M3 11V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 7.828 1H10a2 2 0 0 1 2 2v6.032a3.806 3.806 0 0 0-3.616 1.586A3.25 3.25 0 0 0 6.087 13H5a2 2 0 0 1-2-2"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 5.828V11a2 2 0 0 0 2 2h1.087c.085-.36.23-.697.424-1H5a1 1 0 0 1-1-1V6h2.5A1.5 1.5 0 0 0 8 4.5V2h2a1 1 0 0 1 1 1v6.033a3.8 3.8 0 0 1 1 0V3a2 2 0 0 0-2-2H7.828a2 2 0 0 0-1.414.586L3.586 4.414A2 2 0 0 0 3 5.828m4-3.414L4.414 5H6.5a.5.5 0 0 0 .5-.5z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M14 9.935a3.8 3.8 0 0 0-1-.629V4.5a.5.5 0 0 1 1 0z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="m13.275 12.458.148.752.764.053c.461.031.813.408.813.862a.876.876 0 0 1-.875.875H9.25a1.248 1.248 0 0 1-.138-2.49l.533-.057.248-.476a1.811 1.811 0 0 1 3.382.481"
      className="fill-[#EDF3FF] dark:fill-[#25324D]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m13.423 13.21-.148-.752a1.809 1.809 0 0 0-3.382-.481l-.248.476-.533.056A1.248 1.248 0 0 0 9.25 15h4.875a.876.876 0 0 0 .875-.875.866.866 0 0 0-.813-.862zM11.5 10c1.365 0 2.501.971 2.756 2.265.975.067 1.744.87 1.744 1.86C16 15.16 15.16 16 14.125 16H9.25a2.248 2.248 0 0 1-.244-4.485A2.81 2.81 0 0 1 11.5 10"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default SpringCloudFileSet;
