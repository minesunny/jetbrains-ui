/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type WindowsMenuProps = SvgProps;

const WindowsMenuLight: FC<SvgProps> = ({
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

const WindowsMenuDark: FC<SvgProps> = ({
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
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? WindowsMenuLight : WindowsMenuDark;

  return (
    <SvgComponent
      size={sizeMap[size]}
      className={cn('inline-block flex-shrink-0', className)}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};

export default WindowsMenu;
