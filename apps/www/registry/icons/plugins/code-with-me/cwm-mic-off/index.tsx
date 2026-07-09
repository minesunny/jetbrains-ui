/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const CwmMicOff = ({
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
      d="M10.898 8.777Q11 8.404 11 8V4a3 3 0 0 0-5.842-.963l.845.845A2 2 0 0 1 10 4v3.879z"
      className="fill-[#DB3B4B] dark:fill-[#DB5C5C]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.738 10.445A3 3 0 0 1 5 8V5.707L2.146 2.854a.5.5 0 1 1 .708-.708l11 11a.5.5 0 0 1-.708.708l-1.982-1.983a5 5 0 0 1-1.164.713v.916A1.5 1.5 0 0 1 8.5 15h-1A1.5 1.5 0 0 1 6 13.5v-.916A5 5 0 0 1 3 8a.5.5 0 0 1 1 0 4.002 4.002 0 0 0 5.333 3.773 4 4 0 0 0 1.12-.613zm-.722-.722A2 2 0 0 1 6 8V6.707zM7 13.5v-.6a5 5 0 0 0 2 0v.6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5"
      className="fill-[#DB3B4B] dark:fill-[#DB5C5C]"
    />
    <path
      d="M12.434 10.313A5 5 0 0 0 13 8a.5.5 0 0 0-1 0c0 .554-.113 1.082-.316 1.562z"
      className="fill-[#DB3B4B] dark:fill-[#DB5C5C]"
    />
    <path
      d="M6.003 3.882 10 7.879V4a2 2 0 0 0-3.997-.118M9.016 9.723A2 2 0 0 1 6 8V6.707zM7 13.5v-.6a5 5 0 0 0 2 0v.6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5"
      className="fill-[#FFF7F7] dark:fill-[#402929]"
    />
  </svg>
);

export default CwmMicOff;
