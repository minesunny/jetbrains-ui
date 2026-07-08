/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Schema = ({
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
      d="M1.5 13V8C1.5 7.72386 1.72386 7.5 2 7.5H7C7.27614 7.5 7.5 7.72386 7.5 8V13C7.5 13.2761 7.27614 13.5 7 13.5H2C1.72386 13.5 1.5 13.2761 1.5 13Z"
      strokeLinejoin="round"
      className="fill-[#EBECF0] dark:fill-[#43454A] stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M14 13.5H11C10.7239 13.5 10.5 13.2761 10.5 13V10C10.5 9.72386 10.7239 9.5 11 9.5H14C14.2761 9.5 14.5 9.72386 14.5 10V13C14.5 13.2761 14.2761 13.5 14 13.5Z"
      strokeLinejoin="round"
      className="fill-[#EBECF0] dark:fill-[#43454A] stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M14 6.5H11C10.7239 6.5 10.5 6.27614 10.5 6V3C10.5 2.72386 10.7239 2.5 11 2.5H14C14.2761 2.5 14.5 2.72386 14.5 3V6C14.5 6.27614 14.2761 6.5 14 6.5Z"
      strokeLinejoin="round"
      className="fill-[#EBECF0] dark:fill-[#43454A] stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path d="M8 11.5H10" className="stroke-[#6C707E] dark:stroke-[#CED0D6]" />
    <path
      d="M4.5 7V5C4.5 4.72386 4.72386 4.5 5 4.5H10"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default Schema;
