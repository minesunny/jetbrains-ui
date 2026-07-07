/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type WindowsMenuProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const WindowsMenuLight: FC<
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
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <rect x={2} y={2.5} width={16} height={1.5} rx={0.75} fill="#6C707E" />
    <rect x={2} y={7} width={16} height={1.5} rx={0.75} fill="#6C707E" />
    <rect x={2} y={11.5} width={16} height={1.5} rx={0.75} fill="#6C707E" />
    <rect x={2} y={16} width={16} height={1.5} rx={0.75} fill="#6C707E" />
  </svg>
);

const WindowsMenuDark: FC<
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
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    <rect x={2} y={2.5} width={16} height={1.5} rx={0.75} fill="#CED0D6" />
    <rect x={2} y={7} width={16} height={1.5} rx={0.75} fill="#CED0D6" />
    <rect x={2} y={11.5} width={16} height={1.5} rx={0.75} fill="#CED0D6" />
    <rect x={2} y={16} width={16} height={1.5} rx={0.75} fill="#CED0D6" />
  </svg>
);

export const WindowsMenu: FC<WindowsMenuProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? WindowsMenuLight : WindowsMenuDark;

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

export default WindowsMenu;
