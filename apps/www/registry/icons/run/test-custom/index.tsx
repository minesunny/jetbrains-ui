/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type TestCustomProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const TestCustom = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: TestCustomProps) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.11 1.607a.9.9 0 0 1 .776.732l1.485 8.17 1.31-2.881a.9.9 0 0 1 .82-.528h3a.9.9 0 1 1 0 1.8H12.08l-2.26 4.972a.9.9 0 0 1-1.705-.211l-1.486-8.17-1.31 2.881A.9.9 0 0 1 4.5 8.9h-3a.9.9 0 0 1 0-1.8h2.42l2.26-4.972a.9.9 0 0 1 .93-.521"
      className="fill-[#834DF0] dark:fill-[#A571E6]"
    />
  </svg>
);

export default TestCustom;
