/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type VirtualViewProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const VirtualView = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: VirtualViewProps) => (
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
      d="M2 12V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4.354A4 4 0 0 0 7.535 13H3a1 1 0 0 1-1-1"
      className="fill-[#EEE0FF] dark:fill-[#2F2936]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7c0-1.014-.378-1.94-1-2.646V6h-3v1q-.519.001-1 .126V6H6v7h1.535c.218.376.495.714.82 1H3a2 2 0 0 1-2-2zm5-1h4v2H6zM5 3H3a1 1 0 0 0-1 1v1h3zM2 6v6a1 1 0 0 0 1 1h2V6zm12-1V4a1 1 0 0 0-1-1h-2v2z"
      className="fill-[#955AE0]"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.738 13.445a3 3 0 1 1 .707-.707l1.409 1.408a.5.5 0 0 1-.708.708zM13 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      className="fill-[#3574F0] dark:fill-[#548AF7]"
    />
  </svg>
);

export default VirtualView;
