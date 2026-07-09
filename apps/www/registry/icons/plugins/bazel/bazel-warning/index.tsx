/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const BazelWarning = ({
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
    <path d="M4.5 1 8 4.5 4.5 8 1 4.5z" className="fill-[#76D275]" />
    <path d="M1 4.5V8l3.5 3.5V8z" className="fill-[#43A047]" />
    <path d="M11.5 1 15 4.5 11.5 8 8 4.5z" className="fill-[#76D275]" />
    <path d="M8 4.5 11.5 8 8 11.5 4.5 8z" className="fill-[#43A047]" />
    <path d="M8 11.5V15l-3.5-3.5V8z" className="fill-[#00701A]" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m15.861 14.546-2.4-4.002a1.12 1.12 0 0 0-1.922 0l-2.4 4.002A.96.96 0 0 0 9.96 16h5.077a.96.96 0 0 0 .823-1.454"
      className="fill-[#FFAF0F] dark:fill-[#F2C55C]"
    />
    <path
      d="M13 11.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zM12.5 15a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
      className="fill-[#fff] dark:fill-[#5E4D33]"
    />
    <path
      d="M15 8V4.5L11.5 8v1.247a2.14 2.14 0 0 1 2.159.094z"
      className="fill-[#43A047]"
    />
    <path
      d="M11.5 8 8 11.5v3.45c.014-.31.103-.623.28-.919l2.402-4.002a2.1 2.1 0 0 1 .818-.782z"
      className="fill-[#004300]"
    />
  </svg>
);

export default BazelWarning;
