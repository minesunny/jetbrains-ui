/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type ServicesProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Services = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: ServicesProps) => (
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
      d="M15.212 7.5a1 1 0 0 1 0 1L12.039 14a1 1 0 0 1-.867.5H4.828a1 1 0 0 1-.867-.5L.788 8.5a1 1 0 0 1 0-1L3.961 2a1 1 0 0 1 .867-.5h6.344a1 1 0 0 1 .867.5z"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="M10.5 7.567a.5.5 0 0 1 0 .866l-3.75 2.165a.5.5 0 0 1-.75-.433v-4.33a.5.5 0 0 1 .75-.433z"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default Services;
