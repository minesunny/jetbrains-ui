/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type ForceRunToCursorProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const ForceRunToCursor = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: ForceRunToCursorProps) => (
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
    <rect
      x={13}
      y={14}
      width={2}
      height={1}
      rx={0.5}
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <rect
      x={10}
      y={14}
      width={2}
      height={1}
      rx={0.5}
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <rect
      x={13}
      y={7}
      width={2}
      height={1}
      rx={0.5}
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <rect
      x={10}
      y={7}
      width={2}
      height={1}
      rx={0.5}
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 8.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.146 2.146a.5.5 0 0 1 .708 0L7 5.293V3.5a.5.5 0 0 1 1 0V9H2.5a.5.5 0 0 1 0-1h1.793L1.146 4.854a.5.5 0 1 1 .708-.708L5.707 8H7V6.707L3.146 2.854a.5.5 0 0 1 0-.708"
      className="fill-[#DB3B4B] dark:fill-[#DB5C5C]"
    />
  </svg>
);

export default ForceRunToCursor;
