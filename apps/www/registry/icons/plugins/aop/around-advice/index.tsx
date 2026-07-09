/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const AroundAdvice = ({
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
      d="M12.95 3.05a7 7 0 1 1-9.898 9.9 7 7 0 0 1 9.899-9.9"
      className="fill-[#FFF7F7] dark:fill-[#402929]"
    />
    <path
      d="M10.066 5.246c-.812 0-1.43.401-1.77 1.07-.292-.673-.89-1.07-1.689-1.07-.758 0-1.326.363-1.645 1.003v-.877H4v5.382h.999V7.59c0-.91.515-1.482 1.33-1.482.746 0 1.177.51 1.177 1.33v3.316h.988V7.59c0-.91.526-1.482 1.33-1.482.752 0 1.177.51 1.177 1.33v3.316H12V7.36c0-1.288-.783-2.113-1.934-2.113"
      className="fill-[#DB3B4B] dark:fill-[#DB5C5C]"
    />
    <path
      d="M13.917 9A6.002 6.002 0 0 1 2.081 9H1.07A7.002 7.002 0 0 0 14.93 9zM2.082 7a6.002 6.002 0 0 1 11.834 0h1.012A7.001 7.001 0 0 0 1.07 7z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default AroundAdvice;
