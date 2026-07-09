/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const MuteBreakpoints = ({
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
      d="M10.403 3.051a5.5 5.5 0 0 0-7.352 7.352zM5.597 12.95a5.5 5.5 0 0 0 7.352-7.352z"
      className="fill-[#FFF7F7] dark:fill-[#402929]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.403 3.051a5.5 5.5 0 0 0-7.352 7.352l.759-.758A4.5 4.5 0 0 1 9.645 3.81zm-4.048 9.14a4.5 4.5 0 0 0 5.834-5.834l.76-.76c.353.726.55 1.541.55 2.403a5.5 5.5 0 0 1-7.902 4.949z"
      className="fill-[#DB3B4B] dark:fill-[#DB5C5C]"
    />
    <rect
      x={13.657}
      y={1.636}
      width={1}
      height={17}
      rx={0.5}
      transform="rotate(45 13.657 1.636)"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default MuteBreakpoints;
