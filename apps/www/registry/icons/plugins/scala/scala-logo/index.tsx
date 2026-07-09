/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ScalaLogo = ({
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
      d="M13 9.542V2.105a1 1 0 0 0-1.1-.995l-8 .8a1 1 0 0 0-.9.995v10.99a1 1 0 0 0 1.1.995l8-.8a1 1 0 0 0 .9-.995V9.542M4 2.905v2.992l8-.8V2.105zm8 3.197-8 .8v2.995l8-.8zm0 4-8 .8v2.993l8-.8z"
      className="fill-[#DB3B4B] dark:fill-[#DB5C5C]"
    />
    <path
      d="M4 5.898V2.905l8-.8v2.993zM4 6.902l8-.8v2.996l-8 .8zM4 10.903l8-.8v2.992l-8 .8z"
      className="fill-[#FFF7F7] dark:fill-[#402929]"
    />
  </svg>
);

export default ScalaLogo;
