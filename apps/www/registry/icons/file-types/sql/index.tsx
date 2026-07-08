/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type SqlProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const Sql = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: SqlProps) => (
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
      d="M8 1.5c-3.038 0-5.5.941-5.5 2.103v8.831c0 1.162 2.462 2.103 5.5 2.103s5.5-.941 5.5-2.103V3.603C13.5 2.44 11.038 1.5 8 1.5"
      className="fill-[#FAF5FF] dark:fill-[#2F2936]"
    />
    <ellipse
      cx={8}
      cy={3.603}
      rx={5.5}
      ry={2.103}
      className="stroke-[#834DF0] dark:stroke-[#B589EC]"
    />
    <path
      d="M13.5 12.434c0 1.162-2.462 2.103-5.5 2.103s-5.5-.941-5.5-2.103M13.5 9.49c0 1.162-2.462 2.103-5.5 2.103s-5.5-.941-5.5-2.103M13.5 6.547c0 1.16-2.462 2.102-5.5 2.102s-5.5-.941-5.5-2.102M13.5 3.392v9.126M2.5 3.392v9.126"
      className="stroke-[#834DF0] dark:stroke-[#B589EC]"
    />
  </svg>
);

export default Sql;
