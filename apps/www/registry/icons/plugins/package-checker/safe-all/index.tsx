/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const SafeAll = ({
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
    viewBox="0 0 24 24"
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
      d="M21 4.818 12 1 3 4.818v7.95c0 2.649 1.339 4.586 3.049 6.118 1.257 1.128 2.789 2.094 4.194 2.98.467.296.92.581 1.344.861L12 23l.413-.273c.424-.28.877-.565 1.344-.86 1.405-.887 2.937-1.854 4.194-2.98 1.71-1.533 3.049-3.47 3.049-6.119zM11 15.061 17.06 9 16 7.938l-5 5-2.5-2.5L7.44 11.5z"
      className="fill-[#55A76A] dark:fill-[#57965C]"
    />
  </svg>
);

export default SafeAll;
