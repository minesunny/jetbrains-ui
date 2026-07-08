/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type IgnoredTestProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const IgnoredTest = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: IgnoredTestProps) => (
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
      d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1 0a2.5 2.5 0 0 1-3.879 2.086l3.465-3.465c.262.396.414.87.414 1.379m-4.586 1.379 3.465-3.465a2.5 2.5 0 0 0-3.465 3.465"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M14.962 8.733Q15 8.37 15 8a7 7 0 1 0-6.267 6.962 4.5 4.5 0 0 1 6.23-6.23"
      className="fill-[#FFF7F7] dark:fill-[#402929]"
    />
    <path
      d="M14.962 8.733Q15 8.37 15 8a7 7 0 1 0-6.267 6.962 4.5 4.5 0 0 1-.479-.967 6 6 0 1 1 5.74-5.74c.344.12.669.282.968.478"
      className="fill-[#DB3B4B] dark:fill-[#DB5C5C]"
    />
    <path
      d="M8.494 10.448V7.59c0-.91.526-1.482 1.33-1.482.752 0 1.177.51 1.177 1.33v.818q.479-.17.999-.229V7.36c0-1.288-.783-2.113-1.934-2.113-.812 0-1.43.401-1.77 1.07-.292-.674-.89-1.07-1.689-1.07-.758 0-1.326.363-1.645 1.002v-.876H4v5.382h.999V7.59c0-.91.515-1.482 1.33-1.482.746 0 1.177.51 1.177 1.33v3.316h.845q.066-.156.143-.306"
      className="fill-[#DB3B4B] dark:fill-[#DB5C5C]"
    />
  </svg>
);

export default IgnoredTest;
