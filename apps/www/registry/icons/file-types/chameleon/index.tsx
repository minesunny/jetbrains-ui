/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type ChameleonProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Chameleon = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: ChameleonProps) => (
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
      d="M8.133 11.5c1.489 0 2.765-.9 3.08-2.175h-1.016c-.314.73-1.092 1.252-2.064 1.252-1.34 0-2.306-1.074-2.306-2.577s.967-2.577 2.306-2.577c.972 0 1.75.522 2.064 1.252h1.015C10.898 5.4 9.622 4.5 8.132 4.5 6.215 4.5 4.789 5.994 4.789 8s1.426 3.5 3.345 3.5"
      className="fill-[#208A3C] dark:fill-[#57965C]"
    />
  </svg>
);

export default Chameleon;
