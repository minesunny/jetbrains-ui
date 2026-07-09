/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const CTest = ({
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
      d="m8 .52.768 7.385-3.281 2.856-.01-.004L.615 15z"
      className="fill-[url(#a)]"
    />
    <path
      d="M12.326 9.004 8 .52l.987 9.493.642-.617c.562-.54 1.359-.488 1.87-.066a1.44 1.44 0 0 1 .827-.326"
      className="fill-[url(#b)]"
    />
    <path
      d="m7.96 15.001-1.03-.992a1.4 1.4 0 0 1 0-2.018l.44-.423-1.893-.811L.615 15z"
      className="fill-[url(#c)]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.38 12.712a.4.4 0 0 1 0 .576l-2.703 2.6a.4.4 0 0 1-.677-.289v-5.195a.4.4 0 0 1 .677-.289z"
      className="fill-[#55A76A] dark:fill-[#57965C]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.623 13.288a.4.4 0 0 1 0-.576l2.699-2.596a.4.4 0 0 1 .677.289v5.194a.4.4 0 0 1-.678.288z"
      className="fill-[#E55765] dark:fill-[#DB5C5C]"
    />
  </svg>
);

export default CTest;
