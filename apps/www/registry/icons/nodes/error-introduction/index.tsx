/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type ErrorIntroductionProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const ErrorIntroductionLight: FC<
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
    <circle cx={8} cy={8} r={6.5} fill="#FFF7F7" stroke="#DB3B4B" />
    <path
      d="M8 4.5v4"
      stroke="#DB3B4B"
      strokeWidth={1.2}
      strokeLinecap="round"
    />
    <circle
      cx={8}
      cy={10.8}
      r={0.5}
      fill="#DB3B4B"
      stroke="#DB3B4B"
      strokeWidth={0.6}
    />
  </svg>
);

const ErrorIntroductionDark: FC<
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
    <circle cx={8} cy={8} r={6.5} fill="#402929" stroke="#DB5C5C" />
    <path
      d="M8 4.5v4"
      stroke="#DB5C5C"
      strokeWidth={1.2}
      strokeLinecap="round"
    />
    <circle
      cx={8}
      cy={10.8}
      r={0.5}
      fill="#DB5C5C"
      stroke="#DB5C5C"
      strokeWidth={0.6}
    />
  </svg>
);

export const ErrorIntroduction: FC<ErrorIntroductionProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ErrorIntroductionLight : ErrorIntroductionDark;

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

export default ErrorIntroduction;
