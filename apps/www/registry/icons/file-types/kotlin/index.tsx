/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type KotlinProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const KotlinLight: FC<
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
      d="M13.053 12.631a.5.5 0 0 1-.338.869H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h9.715a.5.5 0 0 1 .338.869L8.403 7.63a.5.5 0 0 0 0 .738z"
      fill="#FAF5FF"
      stroke="#834DF0"
    />
  </svg>
);

const KotlinDark: FC<
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
      d="M13.053 12.631a.5.5 0 0 1-.338.869H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h9.715a.5.5 0 0 1 .338.869L8.403 7.63a.5.5 0 0 0 0 .738z"
      fill="#2F2936"
      stroke="#A571E6"
    />
  </svg>
);

export const Kotlin: FC<KotlinProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? KotlinLight : KotlinDark;

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

export default Kotlin;
