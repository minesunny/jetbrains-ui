/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type StreamProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Stream = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: StreamProps) => (
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
      d="M1.12372 4.17075C1.30556 3.96294 1.62144 3.94188 1.82926 4.12372L6.2593 8.00001L1.82926 11.8763C1.62144 12.0581 1.30556 12.0371 1.12372 11.8293C0.941877 11.6214 0.962936 11.3056 1.17075 11.1237L4.74071 8.00001L1.17075 4.8763C0.962936 4.69445 0.941877 4.37857 1.12372 4.17075Z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M5.62372 4.17075C5.80556 3.96294 6.12144 3.94188 6.32926 4.12372L10.7593 8.00001L6.32926 11.8763C6.12144 12.0581 5.80556 12.0371 5.62372 11.8293C5.44188 11.6214 5.46294 11.3056 5.67075 11.1237L9.24071 8.00001L5.67075 4.8763C5.46294 4.69445 5.44188 4.37857 5.62372 4.17075Z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M10.8293 4.12372C10.6214 3.94188 10.3056 3.96294 10.1237 4.17075C9.94188 4.37857 9.96294 4.69445 10.1708 4.8763L13.7407 8.00001L10.1708 11.1237C9.96294 11.3056 9.94188 11.6214 10.1237 11.8293C10.3056 12.0371 10.6214 12.0581 10.8293 11.8763L15.2593 8.00001L10.8293 4.12372Z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default Stream;
