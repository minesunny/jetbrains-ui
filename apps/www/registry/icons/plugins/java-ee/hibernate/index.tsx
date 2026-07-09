/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Hibernate = ({
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
      d="m3.962 1 2.693 4.664-2.694 4.67-2.691-4.67z"
      className="fill-[#59666C]"
    />
    <path d="M9.348 1H3.963l2.693 4.664h5.386z" className="fill-[#BCAE79]" />
    <path
      d="m12.039 15-2.693-4.664 2.694-4.67 2.69 4.67z"
      className="fill-[#59666C]"
    />
    <path d="M6.653 15h5.386l-2.69-4.664h-5.39z" className="fill-[#BCAE79]" />
  </svg>
);

export default Hibernate;
