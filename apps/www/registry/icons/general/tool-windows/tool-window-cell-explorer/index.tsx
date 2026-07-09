/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const ToolWindowCellExplorer = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.738 14.445a3 3 0 1 1 .707-.707l1.409 1.408a.5.5 0 0 1-.708.708zM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
    <path
      d="M5 2.5a.5.5 0 0 0-1 0V4H2.5a.5.5 0 0 0 0 1H4v6H2.5a.5.5 0 0 0 0 1H4v1.5a.5.5 0 0 0 1 0V12h3q.002-.519.126-1H5V5h6v3.126q.481-.124 1-.126V5h1.5a.5.5 0 0 0 0-1H12V2.5a.5.5 0 0 0-1 0V4H5z"
      className="fill-[#6C707E] dark:fill-[#CED0D6]"
    />
  </svg>
);

export default ToolWindowCellExplorer;
