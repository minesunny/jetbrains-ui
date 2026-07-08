/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type YamlProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Yaml = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: YamlProps) => (
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
      x={2.5}
      y={2.5}
      width={11}
      height={11}
      rx={1.5}
      className="fill-[#FFF7F7] dark:fill-[#402929] stroke-[#DB3B4B] dark:stroke-[#DB5C5C]"
    />
    <path
      d="M8.593 11.5H7.45V8.845L5 4.5h1.258l1.58 2.88.19.395.19-.405L9.756 4.5H11L8.593 8.835z"
      className="fill-[#DB3B4B] dark:fill-[#DB5C5C]"
    />
  </svg>
);

export default Yaml;
