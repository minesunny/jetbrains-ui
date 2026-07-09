/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ServiceAccount = ({
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
      d="M14 3.5 8 1 2 3.5v5.679c0 1.766.892 3.057 2.032 4.079.839.751 1.86 1.395 2.797 1.987l.206.13A2 2 0 0 1 7 15c0-1.83 1.23-3.374 2.909-3.85A3 3 0 0 1 14 6.764z"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      d="M13 6.17V4.168L8 2.083 3 4.167v5.012c0 1.377.679 2.419 1.7 3.334.688.617 1.523 1.164 2.376 1.705A4 4 0 0 0 7 15q0 .193.035.375l-.206-.13c-.937-.592-1.958-1.236-2.797-1.987C2.892 12.236 2 10.945 2 9.178V3.5L8 1l6 2.5v3.264a3 3 0 0 0-1-.593"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default ServiceAccount;
