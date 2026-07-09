/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const OcdRunConfiguration = ({
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
      d="M4 4v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2"
      className="fill-[#F2FCF3] dark:fill-[#253627]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 4v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1m-1 8V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2"
      className="fill-[#208A3C] dark:fill-[#57965C]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 4.5a.5.5 0 0 1 .5-.5H4v1H1.5a.5.5 0 0 1-.5-.5M12 4h2.5a.5.5 0 0 1 0 1H12zM1 8a.5.5 0 0 1 .5-.5H4v1H1.5A.5.5 0 0 1 1 8m11-.5h2.5a.5.5 0 0 1 0 1H12zm-11 4a.5.5 0 0 1 .5-.5H4v1H1.5a.5.5 0 0 1-.5-.5m11-.5h2.5a.5.5 0 0 1 0 1H12z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default OcdRunConfiguration;
