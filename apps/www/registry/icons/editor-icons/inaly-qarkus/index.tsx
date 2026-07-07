/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type InalyQarkusProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const InalyQarkusLight: FC<
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
    viewBox="0 0 12 12"
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
      d="M6 2.667 9 1v3.333L12 6 9 7.667V4.902L6.5 6.29v2.765L9 7.666V11L6 9.334 3 11V7.667l2.5 1.388V6.291L3 4.902v2.765L0 6l3-1.666V1zm0 0L3.518 4.046 6 5.425l2.481-1.38h.001z"
      fill="#6C707E"
    />
  </svg>
);

const InalyQarkusDark: FC<
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
    viewBox="0 0 12 12"
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
      d="M6 2.667 9 1v3.333L12 6 9 7.667V4.902L6.5 6.29v2.765L9 7.666V11L6 9.334 3 11V7.667l2.5 1.388V6.291L3 4.902v2.765L0 6l3-1.666V1zm0 0L3.518 4.046 6 5.425l2.481-1.38h.001z"
      fill="#CED0D6"
    />
  </svg>
);

export const InalyQarkus: FC<InalyQarkusProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? InalyQarkusLight : InalyQarkusDark;

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

export default InalyQarkus;
