/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type MoveUpProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const MoveUp = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: MoveUpProps) => (
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
      d="M11.854 5.854a.5.5 0 0 1-.708.707L8.5 3.914v7.593a.5.5 0 0 1-1 0V3.914L4.854 6.561a.5.5 0 1 1-.708-.707l3.5-3.5L8 2l.354.354z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <rect
      x={2}
      y={13.007}
      width={12}
      height={1}
      rx={0.5}
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default MoveUp;
