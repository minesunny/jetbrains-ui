/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type ReplaceProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const ReplaceLight: FC<
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
      d="M10.164 10.872a5.015 5.015 0 0 1-4.341.989l-.46-1.21A4 4 0 1 0 3.126 8H2.1a5 5 0 1 1 8.771 2.165l2.982 2.976a.5.5 0 0 1-.707.708z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.665 9H2.57L0 16h1.075l.595-1.78h2.965l.64 1.78h1.05zm-.44 1.33 1.11 3.055H1.95L3 10.33l.11-.43z"
      fill="#6C707E"
    />
  </svg>
);

const ReplaceDark: FC<
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
      d="M10.164 10.872a5.015 5.015 0 0 1-4.341.989l-.46-1.21A4 4 0 1 0 3.126 8H2.1a5 5 0 1 1 8.771 2.165l2.982 2.976a.5.5 0 0 1-.707.708z"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.665 9H2.57L0 16h1.075l.595-1.78h2.965l.64 1.78h1.05zm-.44 1.33 1.11 3.055H1.95L3 10.33l.11-.43z"
      fill="#CED0D6"
    />
  </svg>
);

export const Replace: FC<ReplaceProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ReplaceLight : ReplaceDark;

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

export default Replace;
