/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const DataSchema = ({
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
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('inline-block shrink-0', className)}
    role={ariaLabel ? 'img' : 'presentation'}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7c0-1.014-.378-1.94-1-2.646V5h-3v1q-.519.001-1 .126V5H5v7h1.535c.218.376.495.714.82 1H2a2 2 0 0 1-2-2zm5-1h4v2H5zM4 2H2a1 1 0 0 0-1 1v1h3zM1 5v6a1 1 0 0 0 1 1h2V5zm12-1V3a1 1 0 0 0-1-1h-2v2z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <circle
      cx={10}
      cy={10}
      r={2}
      className="fill-[#EDF3FF] dark:fill-[#25324D]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.738 12.445a3 3 0 1 1 .707-.707l1.409 1.408a.5.5 0 0 1-.708.708zM12 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default DataSchema;
