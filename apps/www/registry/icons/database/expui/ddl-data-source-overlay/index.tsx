/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type DdlDataSourceOverlayProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const DdlDataSourceOverlayLight: FC<
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
      d="M0 10C0 9.44772 0.447715 9 1 9H15C15.5523 9 16 9.44772 16 10V15C16 15.5523 15.5523 16 15 16H1C0.447715 16 0 15.5523 0 15V10Z"
      fill="#6C707E"
    />
    <path
      d="M2.5 10.5V14.5H4C4.82843 14.5 5.5 13.8284 5.5 13V12C5.5 11.1716 4.82843 10.5 4 10.5H2.5Z"
      stroke="#F7F8FA"
    />
    <path
      d="M7.5 10.5V14.5H9C9.82843 14.5 10.5 13.8284 10.5 13V12C10.5 11.1716 9.82843 10.5 9 10.5H7.5Z"
      stroke="#F7F8FA"
    />
    <path d="M12.5 10V14.5H15" stroke="#F7F8FA" />
  </svg>
);

const DdlDataSourceOverlayDark: FC<
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
      d="M0 10C0 9.44772 0.447715 9 1 9H15C15.5523 9 16 9.44772 16 10V15C16 15.5523 15.5523 16 15 16H1C0.447715 16 0 15.5523 0 15V10Z"
      fill="#CED0D6"
    />
    <path
      d="M2.5 10.5V14.5H4C4.82843 14.5 5.5 13.8284 5.5 13V12C5.5 11.1716 4.82843 10.5 4 10.5H2.5Z"
      stroke="#2B2D30"
    />
    <path
      d="M7.5 10.5V14.5H9C9.82843 14.5 10.5 13.8284 10.5 13V12C10.5 11.1716 9.82843 10.5 9 10.5H7.5Z"
      stroke="#2B2D30"
    />
    <path d="M12.5 10V14.5H15" stroke="#2B2D30" />
  </svg>
);

export const DdlDataSourceOverlay: FC<DdlDataSourceOverlayProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? DdlDataSourceOverlayLight : DdlDataSourceOverlayDark;

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

export default DdlDataSourceOverlay;
