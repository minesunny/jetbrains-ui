/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type AddToWatchProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const AddToWatchLight: FC<
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
      d="M7.5 16a2.5 2.5 0 0 0 2.45-3h1.1q-.05.243-.05.5a2.5 2.5 0 1 0 .5-1.5h-2a2.5 2.5 0 1 0-2 4m0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m6 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      fill="#3574F0"
    />
    <path
      d="M8 1.5a.5.5 0 0 0-1 0V7H1.5a.5.5 0 0 0 0 1H7v2.035a3.5 3.5 0 0 1 1 0V8h5.5a.5.5 0 0 0 0-1H8z"
      fill="#6C707E"
    />
  </svg>
);

const AddToWatchDark: FC<
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
      d="M7.5 16a2.5 2.5 0 0 0 2.45-3h1.1q-.05.243-.05.5a2.5 2.5 0 1 0 .5-1.5h-2a2.5 2.5 0 1 0-2 4m0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m6 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      fill="#548AF7"
    />
    <path
      d="M8 1.5a.5.5 0 0 0-1 0V7H1.5a.5.5 0 0 0 0 1H7v2.035a3.5 3.5 0 0 1 1 0V8h5.5a.5.5 0 0 0 0-1H8z"
      fill="#CED0D6"
    />
  </svg>
);

export const AddToWatch: FC<AddToWatchProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? AddToWatchLight : AddToWatchDark;

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

export default AddToWatch;
