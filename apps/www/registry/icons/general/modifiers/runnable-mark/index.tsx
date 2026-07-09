/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const RunnableMark = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 1.502A1.5 1.5 0 0 1 11.294.23l4.002 2.497a1.5 1.5 0 0 1 0 2.545L11.294 7.77A1.5 1.5 0 0 1 9 6.498zm1.765-.424a.5.5 0 0 0-.765.424v4.996a.5.5 0 0 0 .765.424l4.002-2.498a.5.5 0 0 0 0-.848z"
      className="fill-[#208A3C] dark:fill-[#57965C]"
    />
    <path
      d="M10 1.502a.5.5 0 0 1 .765-.424l4.002 2.498a.5.5 0 0 1 0 .848l-4.002 2.498A.5.5 0 0 1 10 6.498z"
      className="fill-[#F2FCF3] dark:fill-[#253627]"
    />
  </svg>
);

export default RunnableMark;
