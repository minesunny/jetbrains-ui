/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type ColorPickerProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const ColorPicker = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: ColorPickerProps) => (
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
      d="m11.95 7.801 2.092-2.094a1.035 1.035 0 0 0 .006-1.474l-1.72-1.72c-.41-.41-1.033-.473-1.442-.056L8.74 4.591m3.21 3.21-3.21-3.21m3.21 3.21L6.8 12.94 3.047 14.08a.5.5 0 0 1-.623-.625L3.56 9.759l5.18-5.168"
      strokeMiterlimit={10}
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <rect
      x={7.531}
      y={2.617}
      width={9.014}
      height={1}
      rx={0.5}
      transform="rotate(45 7.531 2.617)"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default ColorPicker;
