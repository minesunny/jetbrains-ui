/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type MicrosoftProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const MicrosoftLight: FC<
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
    <path fill="#F25326" d="M1 1H7.5V7.5H1z" />
    <path fill="#81BC0A" d="M8.5 1H15V7.5H8.5z" />
    <path fill="#07A6F0" d="M1 8.5H7.5V15H1z" />
    <path fill="#FFBA0F" d="M8.5 8.5H15V15H8.5z" />
  </svg>
);

const MicrosoftDark: FC<
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
    <path fill="#F25326" d="M1 1H7.5V7.5H1z" />
    <path fill="#81BC0A" d="M8.5 1H15V7.5H8.5z" />
    <path fill="#07A6F0" d="M1 8.5H7.5V15H1z" />
    <path fill="#FFBA0F" d="M8.5 8.5H15V15H8.5z" />
  </svg>
);

export const Microsoft: FC<MicrosoftProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? MicrosoftLight : MicrosoftDark;

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

export default Microsoft;
