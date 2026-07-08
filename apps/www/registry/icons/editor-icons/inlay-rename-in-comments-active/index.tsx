/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type InlayRenameInCommentsActiveProps = Omit<
  ComponentProps<'svg'>,
  'size'
> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const InlayRenameInCommentsActive = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: InlayRenameInCommentsActiveProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('inline-block shrink-0', className)}
    role={ariaLabel ? 'img' : 'presentation'}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    {...props}
  >
    <path
      d="m10.4 2-5 8M6.6 2l-5 8"
      strokeWidth={1.5}
      strokeLinecap="round"
      className="stroke-[#3574F0] dark:stroke-[#548AF7]"
    />
  </svg>
);

export default InlayRenameInCommentsActive;
