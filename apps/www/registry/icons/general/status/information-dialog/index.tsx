/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type InformationDialogProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const InformationDialog = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: InformationDialogProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('inline-block shrink-0', className)}
    role={ariaLabel ? 'img' : 'presentation'}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    {...props}
  >
    <circle
      cx={14}
      cy={14}
      r={12}
      className="fill-[#4682FA] dark:fill-[#548AF7]"
    />
    <path
      d="M13 20a1 1 0 1 0 2 0v-6a1 1 0 1 0-2 0zM14 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
      className="fill-[#fff]"
    />
  </svg>
);

export default InformationDialog;
