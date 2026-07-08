/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type PyTorchProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const PyTorch = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: PyTorchProps) => (
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
      d="m11.323 5.497 1.089-1.09c2.437 2.386 2.437 6.328-.052 8.765a6.166 6.166 0 0 1-8.764 0 6.165 6.165 0 0 1 0-8.764L8.004 0v2.178l-.363.415-2.904 2.904a4.664 4.664 0 0 0 0 6.586 4.664 4.664 0 0 0 6.586 0 4.664 4.664 0 0 0 0-6.586"
      className="fill-[#EE4C2C]"
    />
    <path
      d="M11.063 3.267a.83.83 0 1 1-1.66 0 .83.83 0 0 1 1.66 0"
      className="fill-[#EE4C2C]"
    />
  </svg>
);

export default PyTorch;
