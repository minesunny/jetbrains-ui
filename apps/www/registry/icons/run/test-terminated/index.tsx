/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type TestTerminatedProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const TestTerminatedLight: FC<
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
      d="M13.137 11.864a.9.9 0 1 1-1.273 1.272L8 9.272l-3.864 3.864a.9.9 0 1 1-1.273-1.272L6.727 8 2.864 4.136a.9.9 0 1 1 1.273-1.272L8 6.727l3.863-3.863a.9.9 0 0 1 1.273 1.272L9.273 8z"
      fill="#818594"
    />
  </svg>
);

const TestTerminatedDark: FC<
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
      d="M13.137 11.864a.9.9 0 1 1-1.273 1.272L8 9.272l-3.864 3.864a.9.9 0 1 1-1.273-1.272L6.727 8 2.864 4.136a.9.9 0 1 1 1.273-1.272L8 6.727l3.863-3.863a.9.9 0 0 1 1.273 1.272L9.273 8z"
      fill="#CED0D6"
    />
  </svg>
);

export const TestTerminated: FC<TestTerminatedProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? TestTerminatedLight : TestTerminatedDark;

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

export default TestTerminated;
