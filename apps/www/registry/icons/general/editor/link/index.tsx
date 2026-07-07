/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type LinkProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const LinkLight: FC<Omit<ComponentProps<'svg'>, 'size'> & { size: number }> = ({
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
      d="M7.097 3.197a4.036 4.036 0 0 1 5.707 5.707l-.951.95a.5.5 0 0 1-.707-.707l.95-.95a3.035 3.035 0 0 0-4.292-4.293l-.951.95a.5.5 0 1 1-.707-.707zM4.853 6.147a.5.5 0 0 1 0 .707l-.95.95a3.036 3.036 0 1 0 4.294 4.292l.95-.95a.5.5 0 1 1 .707.708l-.95.95a4.036 4.036 0 1 1-5.707-5.708l.949-.949a.5.5 0 0 1 .707 0"
      fill="#6C707E"
    />
    <path
      d="M10.354 6.354a.5.5 0 0 0-.708-.708l-4 4a.5.5 0 0 0 .708.708z"
      fill="#6C707E"
    />
  </svg>
);

const LinkDark: FC<Omit<ComponentProps<'svg'>, 'size'> & { size: number }> = ({
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
      d="M7.097 3.197a4.036 4.036 0 0 1 5.707 5.707l-.951.95a.5.5 0 0 1-.707-.707l.95-.95a3.035 3.035 0 0 0-4.292-4.293l-.951.95a.5.5 0 1 1-.707-.707zM4.853 6.147a.5.5 0 0 1 0 .707l-.95.95a3.036 3.036 0 1 0 4.294 4.292l.95-.95a.5.5 0 1 1 .707.708l-.95.95a4.036 4.036 0 1 1-5.707-5.708l.949-.949a.5.5 0 0 1 .707 0"
      fill="#CED0D6"
    />
    <path
      d="M10.354 6.354a.5.5 0 0 0-.708-.708l-4 4a.5.5 0 0 0 .708.708z"
      fill="#CED0D6"
    />
  </svg>
);

export const Link: FC<LinkProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? LinkLight : LinkDark;

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

export default Link;
