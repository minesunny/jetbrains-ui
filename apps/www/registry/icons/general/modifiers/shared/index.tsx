/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Shared = ({
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
      d="M14.5 11a1.5 1.5 0 1 0-1.489-1.315l-2.47 1.235a1.5 1.5 0 1 0 0 2.16l2.47 1.235q-.01.09-.011.185a1.5 1.5 0 1 0 .459-1.08l-2.47-1.235a1.5 1.5 0 0 0 0-.37l2.47-1.235c.27.26.636.42 1.041.42M10 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m5-2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
      className="fill-[#3574F0]"
    />
  </svg>
);

export default Shared;
