/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type AmperProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const AmperLight: FC<
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
      d="M2 14h12V2h-3zm5-3h4V7h-1z"
      fill="url(#a)"
    />
    <defs>
      <linearGradient
        id="a"
        x1={4.748}
        y1={4.751}
        x2={14.516}
        y2={14.514}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.212} stopColor="#3BEA62" />
        <stop offset={0.753} stopColor="#087CFA" />
      </linearGradient>
    </defs>
  </svg>
);

const AmperDark: FC<Omit<ComponentProps<'svg'>, 'size'> & { size: number }> = ({
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
      d="M2 14h12V2h-3zm5-3h4V7h-1z"
      fill="url(#a)"
    />
    <defs>
      <linearGradient
        id="a"
        x1={4.748}
        y1={4.751}
        x2={14.516}
        y2={14.514}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.212} stopColor="#3BEA62" />
        <stop offset={0.753} stopColor="#087CFA" />
      </linearGradient>
    </defs>
  </svg>
);

export const Amper: FC<AmperProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? AmperLight : AmperDark;

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

export default Amper;
