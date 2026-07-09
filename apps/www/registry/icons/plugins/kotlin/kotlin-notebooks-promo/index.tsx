/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const KotlinNotebooksPromo = ({
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
      d="M13.558 2.746A2 2 0 0 0 12 2H4a2 2 0 0 0-2 2v7.428l4.42-5.403a.75.75 0 0 1 1.204.06L9.062 8.24z"
      className="fill-[url(#a)]"
    />
    <path
      d="M2.443 13.255C2.809 13.71 3.37 14 4 14h8a2 2 0 0 0 2-2V4.574L9.58 9.975a.75.75 0 0 1-1.204-.059L6.94 7.76z"
      className="fill-[url(#b)]"
    />
  </svg>
);

export default KotlinNotebooksPromo;
