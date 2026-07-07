/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type LambdaProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const LambdaLight: FC<
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
      d="M5.637 4h.821c.977 0 1.465.577 1.774 1.363L10.845 12h-1.13L8.06 7.531 6.274 12h-1.12l2.4-5.792-.37-.768c-.136-.297-.41-.523-.773-.523h-.774z"
      fill="#DB3B4B"
    />
  </svg>
);

const LambdaDark: FC<
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
      d="M5.637 4h.821c.977 0 1.465.577 1.774 1.363L10.845 12h-1.13L8.06 7.531 6.274 12h-1.12l2.4-5.792-.37-.768c-.136-.297-.41-.523-.773-.523h-.774z"
      fill="#DB5C5C"
    />
  </svg>
);

export const Lambda: FC<LambdaProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? LambdaLight : LambdaDark;

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

export default Lambda;
