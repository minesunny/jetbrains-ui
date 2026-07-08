/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type WarningDialogProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

export const WarningDialog = ({
  size = 16,
  mode: _mode,
  className,
  'aria-label': ariaLabel,
  ...props
}: WarningDialogProps) => (
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
    <path
      d="M12.72 2.742a1.475 1.475 0 0 1 2.56 0L26.8 22.774c.569.99-.142 2.226-1.28 2.226H2.48c-1.138 0-1.849-1.237-1.28-2.226z"
      className="fill-[#FFAF0F] dark:fill-[#F2C55C]"
    />
    <path
      d="M15 9a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zM14 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      className="fill-[#fff] dark:fill-[#2B2D30]"
    />
  </svg>
);

export default WarningDialog;
