/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const TraceStream = ({
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
      x={2}
      y={3}
      width={4}
      height={1}
      rx={0.5}
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <rect
      x={10}
      y={7.5}
      width={4}
      height={1}
      rx={0.5}
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <rect
      x={10}
      y={12}
      width={4}
      height={1}
      rx={0.5}
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.18 3.115A.5.5 0 0 1 10.5 3h3a.5.5 0 0 1 0 1h-2.706l-4.852 8.734A.5.5 0 0 1 5.5 13h-3a.5.5 0 0 1 0-1h2.706l2.04-3.672L10 4 7 7l-.002.012-1.679 1.373A.5.5 0 0 1 5 8.5H2.5a.5.5 0 0 1 0-1h2.322z"
      className="fill-[#3574F0]"
    />
  </svg>
);

export default TraceStream;
