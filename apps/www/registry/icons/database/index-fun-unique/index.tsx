/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type IndexFunUniqueProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const IndexFunUnique = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: IndexFunUniqueProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('inline-block shrink-0', className)}
    role={ariaLabel ? 'img' : 'presentation'}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    {...props}
  >
    <path
      d="M13.225 16.12q-.825 0-1.465-.35a2.5 2.5 0 0 1-.995-.99 2.9 2.9 0 0 1-.355-1.45V9h1.015v4.325q0 .55.225.98t.63.665q.41.235.945.235.525 0 .92-.235.4-.24.62-.665a2.1 2.1 0 0 0 .22-.98V9H16v4.33a2.9 2.9 0 0 1-.355 1.45 2.5 2.5 0 0 1-.98.99q-.625.35-1.44.35"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M6.5 2.5A.5.5 0 0 1 7 2h1a.5.5 0 0 1 .5.5v.974a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5zM5 6a.5.5 0 0 0 0 1h2v7H4.5a.5.5 0 0 0 0 1h5.256a3.8 3.8 0 0 1-.296-1H8V6.5a.5.5 0 0 0-.5-.5z"
      className="fill-[#834DF0] dark:fill-[#A571E6]"
    />
  </svg>
);

export default IndexFunUnique;
