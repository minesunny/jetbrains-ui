/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Sql = ({
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
      d="M8 1.5C4.96243 1.5 2.5 2.44143 2.5 3.60275V12.4343C2.5 13.5956 4.96243 14.537 8 14.537C11.0376 14.537 13.5 13.5956 13.5 12.4343V3.60275C13.5 2.44143 11.0376 1.5 8 1.5Z"
      className="fill-[#FAF5FF] dark:fill-[#2F2936]"
    />
    <ellipse
      cx={8}
      cy={3.60275}
      rx={5.5}
      ry={2.10275}
      className="stroke-[#834DF0] dark:stroke-[#B589EC]"
    />
    <path
      d="M13.5 12.4343C13.5 13.5956 11.0376 14.537 8 14.537C4.96243 14.537 2.5 13.5956 2.5 12.4343"
      className="stroke-[#834DF0] dark:stroke-[#B589EC]"
    />
    <path
      d="M13.5 9.49045C13.5 10.6518 11.0376 11.5932 8 11.5932C4.96243 11.5932 2.5 10.6518 2.5 9.49045"
      className="stroke-[#834DF0] dark:stroke-[#B589EC]"
    />
    <path
      d="M13.5 6.5466C13.5 7.70792 11.0376 8.64935 8 8.64935C4.96243 8.64935 2.5 7.70792 2.5 6.5466"
      className="stroke-[#834DF0] dark:stroke-[#B589EC]"
    />
    <path
      d="M13.5 3.39249V12.5184"
      className="stroke-[#834DF0] dark:stroke-[#B589EC]"
    />
    <path
      d="M2.5 3.39249V12.5184"
      className="stroke-[#834DF0] dark:stroke-[#B589EC]"
    />
  </svg>
);

export default Sql;
