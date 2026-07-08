/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type DependenciesProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Dependencies = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: DependenciesProps) => (
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
      d="M13.83 4.64a.5.5 0 0 1 0 .9L8.22 8.28a.5.5 0 0 1-.44 0L2.17 5.54a.5.5 0 0 1 0-.9l5.61-2.741a.5.5 0 0 1 .44 0z"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      d="m14.276 8.317-5.84 2.836a1 1 0 0 1-.873 0L1.724 8.317M14.276 11.544l-5.84 2.836a1 1 0 0 1-.873 0l-5.839-2.836"
      strokeLinecap="round"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
  </svg>
);

export default Dependencies;
