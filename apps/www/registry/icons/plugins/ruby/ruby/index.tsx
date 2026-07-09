/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Ruby = ({
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
      d="m.25 5.827 7.353 9.651a.5.5 0 0 0 .796 0l7.353-9.65a.5.5 0 0 0-.024-.636L12.3 1.336A1 1 0 0 0 11.552 1H4.45a1 1 0 0 0-.747.336L.275 5.192a.5.5 0 0 0-.024.635"
      className="fill-[#FFF7F7] dark:fill-[#402929]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m.25 5.827 7.353 9.651a.5.5 0 0 0 .796 0l7.353-9.65a.5.5 0 0 0-.024-.636L12.3 1.336A1 1 0 0 0 11.552 1H4.45a1 1 0 0 0-.747.336L.275 5.192a.5.5 0 0 0-.024.635m8.997 6.888L14.363 6h-2.996zM14.219 5l-2.667-3H9.81l1.5 3zM8.692 2H7.31l-1.5 3h4.382zm-2.5 0H4.45L1.784 5h2.908zM1.639 6l5.116 6.714L4.635 6zm6.362 7.34L5.683 6h4.636z"
      className="fill-[#DB3B4B] dark:fill-[#DB5C5C]"
    />
  </svg>
);

export default Ruby;
