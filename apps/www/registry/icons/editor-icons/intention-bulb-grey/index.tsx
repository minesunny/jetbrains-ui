/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type IntentionBulbGreyProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const IntentionBulbGreyLight: FC<
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
    <path fill="#6C707E" d="M5.701 12H10.300999999999998V13H5.701z" />
    <path d="M6 14h4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1" fill="#6C707E" />
    <mask id="a" fill="#fff">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.87 9.147a4.8 4.8 0 1 0-5.741 0L5.5 11h5z"
      />
    </mask>
    <path
      d="m10.87 9.147-.598-.8-.307.229-.075.375zm-5.74 0 .98-.196-.075-.375-.307-.23zM5.5 11l-.98.196.16.804h.82zm5 0v1h.82l.16-.804zm1.3-5.7a3.8 3.8 0 0 1-1.528 3.046l1.197 1.603A5.8 5.8 0 0 0 13.8 5.3zM8 1.5a3.8 3.8 0 0 1 3.8 3.8h2A5.8 5.8 0 0 0 8-.5zM4.2 5.3A3.8 3.8 0 0 1 8 1.5v-2a5.8 5.8 0 0 0-5.8 5.8zm1.528 3.046A3.8 3.8 0 0 1 4.2 5.3h-2c0 1.903.918 3.593 2.33 4.648zm.753 2.458L6.11 8.95l-1.961.393.37 1.852zM10.5 10h-5v2h5zm-.61-1.049-.37 1.853 1.96.392.371-1.852z"
      fill="#6C707E"
      mask="url(#a)"
    />
  </svg>
);

const IntentionBulbGreyDark: FC<
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
    <path fill="#CED0D6" d="M5.701 12H10.300999999999998V13H5.701z" />
    <path d="M6 14h4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1" fill="#CED0D6" />
    <mask id="a" fill="#fff">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.87 9.147a4.8 4.8 0 1 0-5.741 0L5.5 11h5z"
      />
    </mask>
    <path
      d="m10.87 9.147-.598-.8-.307.229-.075.375zm-5.74 0 .98-.196-.075-.375-.307-.23zM5.5 11l-.98.196.16.804h.82zm5 0v1h.82l.16-.804zm1.3-5.7a3.8 3.8 0 0 1-1.528 3.046l1.197 1.603A5.8 5.8 0 0 0 13.8 5.3zM8 1.5a3.8 3.8 0 0 1 3.8 3.8h2A5.8 5.8 0 0 0 8-.5zM4.2 5.3A3.8 3.8 0 0 1 8 1.5v-2a5.8 5.8 0 0 0-5.8 5.8zm1.528 3.046A3.8 3.8 0 0 1 4.2 5.3h-2c0 1.903.918 3.593 2.33 4.648zm.753 2.458L6.11 8.95l-1.961.393.37 1.852zM10.5 10h-5v2h5zm-.61-1.049-.37 1.853 1.96.392.371-1.852z"
      fill="#CED0D6"
      mask="url(#a)"
    />
  </svg>
);

export const IntentionBulbGrey: FC<IntentionBulbGreyProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? IntentionBulbGreyLight : IntentionBulbGreyDark;

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

export default IntentionBulbGrey;
