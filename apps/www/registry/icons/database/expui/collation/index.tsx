/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Collation = ({
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
      d="M7.85355 10.8536C8.04882 10.6583 8.04882 10.3417 7.85355 10.1464C7.65829 9.95119 7.34171 9.95119 7.14645 10.1464L5 12.2929L4.99999 2.5C4.99999 2.22386 4.77614 2 4.49999 2C4.22385 2 3.99999 2.22386 3.99999 2.5L3.99999 12.2929L1.85355 10.1464C1.65829 9.95118 1.34171 9.95118 1.14645 10.1464C0.951184 10.3417 0.951184 10.6583 1.14645 10.8536L4.14645 13.8536C4.34171 14.0488 4.65829 14.0488 4.85355 13.8536L7.85355 10.8536Z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M11 2.5H14C14.2761 2.5 14.5 2.72386 14.5 3V5C14.5 5.27614 14.2761 5.5 14 5.5H11C10.7239 5.5 10.5 5.27614 10.5 5V3C10.5 2.72386 10.7239 2.5 11 2.5Z"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M11 7.5H14C14.2761 7.5 14.5 7.72386 14.5 8V10C14.5 10.2761 14.2761 10.5 14 10.5H11C10.7239 10.5 10.5 10.2761 10.5 10V8C10.5 7.72386 10.7239 7.5 11 7.5Z"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default Collation;
