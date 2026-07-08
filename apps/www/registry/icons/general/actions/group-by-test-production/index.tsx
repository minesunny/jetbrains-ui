/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type GroupByTestProductionProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const GroupByTestProduction = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: GroupByTestProductionProps) => (
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
      strokeLinecap="round"
      d="M3.5 13.5h-1a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h1M12.5 13.5h1a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-1"
      className="stroke-[#6C707E] dark:stroke-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.135 11.847 3.261 8.685a1.007 1.007 0 0 1 0-1.354l2.875-3.156A.497.497 0 0 1 7 4.513v6.996a.497.497 0 0 1-.865.338"
      className="fill-[#E55765]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m9.865 4.175 2.874 3.162c.348.383.348.97 0 1.354l-2.875 3.157A.497.497 0 0 1 9 11.509V4.513c0-.457.558-.675.865-.338"
      className="fill-[#55A76A]"
    />
  </svg>
);

export default GroupByTestProduction;
