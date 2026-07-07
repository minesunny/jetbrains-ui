/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type FeatureContextProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const FeatureContextLight: FC<
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
    <circle cx={8} cy={9} r={5.042} stroke="#3574F0" strokeWidth={0.917} />
    <circle cx={8} cy={3.5} r={2} fill="#EDF3FF" stroke="#3574F0" />
    <circle cx={3.5} cy={11.5} r={2} fill="#EDF3FF" stroke="#3574F0" />
    <circle cx={12.5} cy={11.5} r={2} fill="#EDF3FF" stroke="#3574F0" />
  </svg>
);

const FeatureContextDark: FC<
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
    <circle cx={8} cy={9} r={5.042} stroke="#548AF7" strokeWidth={0.917} />
    <circle cx={8} cy={3.5} r={2} fill="#25324D" stroke="#548AF7" />
    <circle cx={3.5} cy={11.5} r={2} fill="#25324D" stroke="#548AF7" />
    <circle cx={12.5} cy={11.5} r={2} fill="#25324D" stroke="#548AF7" />
  </svg>
);

export const FeatureContext: FC<FeatureContextProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? FeatureContextLight : FeatureContextDark;

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

export default FeatureContext;
