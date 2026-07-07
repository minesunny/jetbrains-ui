/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type VariablesProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const VariablesLight: FC<
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
    <rect x={2.5} y={1.5} width={11} height={13} rx={1.5} stroke="#A8ADBD" />
    <rect x={5} y={5} width={6} height={1} rx={0.5} fill="#A8ADBD" />
    <rect x={5} y={7.5} width={6} height={1} rx={0.5} fill="#A8ADBD" />
    <rect x={5} y={10} width={6} height={1} rx={0.5} fill="#A8ADBD" />
  </svg>
);

const VariablesDark: FC<
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
    <rect x={2.5} y={1.5} width={11} height={13} rx={1.5} stroke="#868A91" />
    <rect x={5} y={5} width={6} height={1} rx={0.5} fill="#868A91" />
    <rect x={5} y={7.5} width={6} height={1} rx={0.5} fill="#868A91" />
    <rect x={5} y={10} width={6} height={1} rx={0.5} fill="#868A91" />
  </svg>
);

export const Variables: FC<VariablesProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? VariablesLight : VariablesDark;

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

export default Variables;
