/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type ArgumentProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Argument = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: ArgumentProps) => (
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
      d="M11.593 10.961 10.477 8l1.024-2.961h-.96l-.602 1.797C9.658 5.66 8.763 4.9 7.556 4.9 5.908 4.9 4.77 6.16 4.77 8s1.139 3.1 2.787 3.1c1.218 0 2.118-.773 2.39-1.968l.635 1.83zm-3.886-.734C6.56 10.227 5.78 9.319 5.78 8s.78-2.227 1.926-2.227c1.093 0 1.839.908 1.839 2.227s-.746 2.227-1.84 2.227"
      className="fill-[#E66D17] dark:fill-[#C77D55]"
    />
  </svg>
);

export default Argument;
