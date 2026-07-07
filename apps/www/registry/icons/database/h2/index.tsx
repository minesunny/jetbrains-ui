/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type H2Props = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const H2Light: FC<Omit<ComponentProps<'svg'>, 'size'> & { size: number }> = ({
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
    <path fill="#0600FF" d="M1 3H15V13H1z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.002 11.065v.947h-3.273s1.61-3.187 1.786-3.539q.264-.527.264-.822 0-.226-.08-.339c-.053-.074-.134-.092-.242-.092-.11 0-.19.022-.243.104q-.08.125-.08.492v.528h-1.283v-.202q0-.468.05-.737.05-.27.244-.53.196-.261.507-.395a1.9 1.9 0 0 1 .748-.134q.854 0 1.292.41.437.41.437 1.039 0 .477-.246 1.01-.246.532-1.451 2.26z"
      fill="#fff"
    />
    <path
      d="M6.009 6.617h1.2v2.192H8.8V6.617H10v5.4H8.8v-2.008H7.21v2.008h-1.2z"
      fill="#fff"
    />
  </svg>
);

const H2Dark: FC<Omit<ComponentProps<'svg'>, 'size'> & { size: number }> = ({
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
    <path fill="#1F58FF" d="M1 3H15V13H1z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.002 11.065v.947h-3.273s1.61-3.187 1.786-3.539q.264-.527.264-.822 0-.226-.08-.339c-.053-.074-.134-.092-.242-.092-.11 0-.19.022-.243.104q-.08.125-.08.492v.528h-1.283v-.202q0-.468.05-.737.05-.27.244-.53.196-.261.507-.395a1.9 1.9 0 0 1 .748-.134q.854 0 1.292.41.437.41.437 1.039 0 .477-.246 1.01-.246.532-1.451 2.26z"
      fill="#fff"
    />
    <path
      d="M6.009 6.617h1.2v2.192H8.8V6.617H10v5.4H8.8v-2.008H7.21v2.008h-1.2z"
      fill="#fff"
    />
  </svg>
);

export const H2: FC<H2Props> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? H2Light : H2Dark;

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

export default H2;
