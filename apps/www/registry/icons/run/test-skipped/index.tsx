/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type TestSkippedProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const TestSkippedLight: FC<
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
      d="M7.646 1.99 1.99 7.646a.5.5 0 0 0 0 .708l5.656 5.656a.5.5 0 0 0 .707 0l5.657-5.656a.5.5 0 0 0 0-.708L8.353 1.99a.5.5 0 0 0-.707 0M.93 6.586a2 2 0 0 0 0 2.828l5.657 5.657a2 2 0 0 0 2.828 0l5.657-5.657a2 2 0 0 0 0-2.828L9.414.929a2 2 0 0 0-2.828 0z"
      fill="#FFAF0F"
    />
    <path d="M6 8h4" stroke="#FFAF0F" strokeWidth={2} strokeLinecap="round" />
  </svg>
);

const TestSkippedDark: FC<
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
      d="M7.646 1.99 1.99 7.646a.5.5 0 0 0 0 .708l5.656 5.656a.5.5 0 0 0 .707 0l5.657-5.656a.5.5 0 0 0 0-.708L8.353 1.99a.5.5 0 0 0-.707 0M.93 6.586a2 2 0 0 0 0 2.828l5.657 5.657a2 2 0 0 0 2.828 0l5.657-5.657a2 2 0 0 0 0-2.828L9.414.929a2 2 0 0 0-2.828 0z"
      fill="#F2C55C"
    />
    <path d="M6 8h4" stroke="#F2C55C" strokeWidth={2} strokeLinecap="round" />
  </svg>
);

export const TestSkipped: FC<TestSkippedProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? TestSkippedLight : TestSkippedDark;

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

export default TestSkipped;
