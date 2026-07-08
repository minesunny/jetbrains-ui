/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type ImageProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Image = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: ImageProps) => (
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
      className="fill-[#EDF3FF] dark:fill-[#25324D] stroke-[#3574F0] dark:stroke-[#548AF7]"
    />
    <path
      d="m2.5 9.336 1.682-1.667A1 1 0 0 1 5.56 7.64l6.426 5.86"
      className="stroke-[#3574F0] dark:stroke-[#548AF7]"
    />
    <circle
      cx={10}
      cy={6}
      r={1.5}
      className="stroke-[#3574F0] dark:stroke-[#548AF7]"
    />
  </svg>
);

export default Image;
