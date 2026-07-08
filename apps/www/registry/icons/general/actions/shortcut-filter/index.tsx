/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type ShortcutFilterProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const ShortcutFilter = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: ShortcutFilterProps) => (
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
      x={0.5}
      y={13.5}
      width={2}
      height={2}
      rx={0.5}
      className="fill-[#EDF3FF] dark:fill-[#25324D] stroke-[#3574F0] dark:stroke-[#548AF7]"
    />
    <rect
      x={4.5}
      y={13.5}
      width={2}
      height={2}
      rx={0.5}
      className="fill-[#EDF3FF] dark:fill-[#25324D] stroke-[#3574F0] dark:stroke-[#548AF7]"
    />
    <rect
      x={2.5}
      y={9.5}
      width={2}
      height={2}
      rx={0.5}
      className="fill-[#EDF3FF] dark:fill-[#25324D] stroke-[#3574F0] dark:stroke-[#548AF7]"
    />
    <path
      d="M7 12a4.98 4.98 0 0 0 3.164-1.128l2.982 2.978a.5.5 0 0 0 .707-.708l-2.982-2.977a5 5 0 1 0-8.728-1.972C2.403 8.068 2.693 8 3 8h.126A4 4 0 1 1 6 10.874V11c0 .307-.069.597-.192.857Q6.382 11.998 7 12"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default ShortcutFilter;
