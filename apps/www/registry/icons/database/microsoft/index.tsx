/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type MicrosoftProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Microsoft = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: MicrosoftProps) => (
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
    <path d="M1 1H7.5V7.5H1z" className="fill-[#F25326]" />
    <path d="M8.5 1H15V7.5H8.5z" className="fill-[#81BC0A]" />
    <path d="M1 8.5H7.5V15H1z" className="fill-[#07A6F0]" />
    <path d="M8.5 8.5H15V15H8.5z" className="fill-[#FFBA0F]" />
  </svg>
);

export default Microsoft;
