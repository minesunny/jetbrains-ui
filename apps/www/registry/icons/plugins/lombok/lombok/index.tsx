/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Lombok = ({
  size = 16,
  className,
  'aria-label': ariaLabel,
  ...props
}: Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
}) => (
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
      d="M3 8v-.5a2.5 2.5 0 0 1 5 0V8a6 6 0 0 0 5.627 5.989A7 7 0 0 1 3 8"
      className="fill-[#E55765] dark:fill-[#DB5C5C]"
    />
    <path
      d="M7.275 1.916a.5.5 0 0 0-.555-.832 3.87 3.87 0 0 0-1.722 3.219v.747a2.5 2.5 0 0 0-.748.283 1.5 1.5 0 0 0 2.495 0 2.5 2.5 0 0 0-.747-.283v-.747c0-.96.479-1.855 1.277-2.387"
      className="fill-[#55A76A] dark:fill-[#57965C]"
    />
  </svg>
);

export default Lombok;
