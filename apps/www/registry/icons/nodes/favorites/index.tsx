/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Favorites = ({
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
      d="M8 2.073a.5.5 0 0 1 .461.308l1.47 3.534 3.815.306a.5.5 0 0 1 .285.878l-2.906 2.49.888 3.722a.5.5 0 0 1-.747.543L8 11.859l-3.266 1.995a.5.5 0 0 1-.747-.543l.888-3.723-2.907-2.49a.5.5 0 0 1 .286-.877l3.814-.306 1.47-3.534A.5.5 0 0 1 8 2.073"
      className="fill-[#EBECF0] dark:fill-[#43454A]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 2.073a.5.5 0 0 1 .461.308l1.47 3.534 3.815.306a.5.5 0 0 1 .285.878l-2.906 2.49.888 3.722a.5.5 0 0 1-.747.543L8 11.859l-3.266 1.995a.5.5 0 0 1-.747-.543l.888-3.723-2.907-2.49a.5.5 0 0 1 .286-.877l3.814-.306 1.47-3.534A.5.5 0 0 1 8 2.073m0 1.802L6.874 6.581a.5.5 0 0 1-.421.306l-2.921.234 2.225 1.907a.5.5 0 0 1 .161.495l-.68 2.85 2.501-1.527a.5.5 0 0 1 .521 0l2.501 1.528-.68-2.85a.5.5 0 0 1 .161-.496l2.226-1.907-2.921-.234a.5.5 0 0 1-.422-.306z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default Favorites;
