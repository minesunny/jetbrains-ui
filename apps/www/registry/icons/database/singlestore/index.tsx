/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Singlestore = ({
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
      d="M8.317 1c1.5.417 2.866 1.468 3.433 2.753.867 2.086.666 4.722-.283 6.291-.8 1.285-2.034 1.969-3.45 1.952-2.2-.016-3.983-1.769-4-3.971 0-2.203 1.733-4.021 4-4.021.367 0 .895.05 1.495.3 0 0-.431-.255-1.539-.426-3.183-.418-6.939 1.994-6.072 7.55C3.1 13.566 5.4 15.018 8.017 15c3.85-.017 7-3.17 6.983-7.042C15 4.254 11.983 1.1 8.317 1"
      className="fill-[url(#a)]"
    />
    <path
      d="M10.933 3.954C10.4 2.836 9.3 1.95 7.95 1.6a4.4 4.4 0 0 0-.966-.134c-.517 0-1.017.067-1.534.2a6.06 6.06 0 0 0-2.716 1.72c-.683.783-1.133 1.601-1.4 2.419 0 .016-.017.033-.017.066-.016.067-.083.267-.083.318-.017.033-.017.083-.033.116l-.05.2c0 .017 0 .034-.017.05-.433 2.153.287 4.085.72 4.802.108.18.197.33.287.467-.984-5.34 1.843-7.888 5.06-7.955 1.683-.033 3.366.65 4.182 2.02-.05-.752-.1-1.169-.45-1.936"
      className="fill-[url(#b)]"
    />
  </svg>
);

export default Singlestore;
