/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type WindowsMenuProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const WindowsMenu = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: WindowsMenuProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('inline-block shrink-0', className)}
    role={ariaLabel ? 'img' : 'presentation'}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    {...props}
  >
    <rect
      x={2}
      y={2.5}
      width={16}
      height={1.5}
      rx={0.75}
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <rect
      x={2}
      y={7}
      width={16}
      height={1.5}
      rx={0.75}
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <rect
      x={2}
      y={11.5}
      width={16}
      height={1.5}
      rx={0.75}
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <rect
      x={2}
      y={16}
      width={16}
      height={1.5}
      rx={0.75}
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default WindowsMenu;
