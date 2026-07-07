/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type WarehouseProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const WarehouseLight: FC<
  Omit<ComponentProps<'svg'>, 'size'> & { size: number }
> = ({
  size,
  className,
  role,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.268 1.078a.5.5 0 0 0-.536 0l-5.5 3.5A.5.5 0 0 0 2 5v9h1V5.274l5-3.181 5 3.181V14h1V5a.5.5 0 0 0-.232-.422zM7 8V6h2v2zm0 3V9h2v2zm-1 1H4v2h2zm1 2v-2h2v2zm3-2h2v2h-2zM6 9H4v2h2z"
      fill="#6C707E"
    />
  </svg>
);

const WarehouseDark: FC<
  Omit<ComponentProps<'svg'>, 'size'> & { size: number }
> = ({
  size,
  className,
  role,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.268 1.078a.5.5 0 0 0-.536 0l-5.5 3.5A.5.5 0 0 0 2 5v9h1V5.274l5-3.181 5 3.181V14h1V5a.5.5 0 0 0-.232-.422zM7 8V6h2v2zm0 3V9h2v2zm-1 1H4v2h2zm1 2v-2h2v2zm3-2h2v2h-2zM6 9H4v2h2z"
      fill="#CED0D6"
    />
  </svg>
);

export const Warehouse: FC<WarehouseProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? WarehouseLight : WarehouseDark;

  return (
    <SvgComponent
      size={size}
      className={cn('inline-block shrink-0', className)}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};

export default Warehouse;
