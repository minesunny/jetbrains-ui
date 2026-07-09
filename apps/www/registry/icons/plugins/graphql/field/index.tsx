/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const GraphqlField = ({
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
    <rect
      x="2.5"
      y="2.5"
      width="11"
      height="11"
      rx="1.5"
      className="fill-[#FAF5FF] dark:fill-[#2F2936] stroke-[#834DF0] dark:stroke-[#A571E6]"
    />
    <path
      d="M7.258 12h1.017V7.327H9.83V6.43H8.275v-.95c0-.36.246-.606.6-.606h1.006V4H8.778c-.903 0-1.52.571-1.52 1.406V6.43H6.121v.897h1.137z"
      className="fill-[#834DF0] dark:fill-[#A571E6]"
    />
  </svg>
);

export default GraphqlField;
