/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type TriggerProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const TriggerLight: FC<
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
      d="M12.5 13.5h2v-11h-2zM6.37 13.088l1.932.518 2.33-8.694-1.933-.517z"
      stroke="#6C707E"
      strokeLinejoin="round"
    />
    <path
      d="m1 12.63 1.732 1L5.982 8 4.25 7z"
      stroke="#3574F0"
      strokeLinejoin="round"
    />
  </svg>
);

const TriggerDark: FC<
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
      d="M12.5 13.5h2v-11h-2zM6.37 13.088l1.932.518 2.33-8.694-1.933-.517z"
      stroke="#CED0D6"
      strokeLinejoin="round"
    />
    <path
      d="m1 12.63 1.732 1L5.982 8 4.25 7z"
      stroke="#548AF7"
      strokeLinejoin="round"
    />
  </svg>
);

export const Trigger: FC<TriggerProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? TriggerLight : TriggerDark;

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

export default Trigger;
