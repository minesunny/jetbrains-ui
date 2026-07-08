/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type InspectionsTyposProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const InspectionsTypos = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: InspectionsTyposProps) => (
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
      d="m2.5 14.5 2-2 2 2 2-2 2 2 2-2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-[#55A76A] dark:stroke-[#57965C]"
    />
    <path
      d="m3 7 3 3 6.5-6.5"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-[#55A76A] dark:stroke-[#57965C]"
    />
  </svg>
);

export default InspectionsTypos;
