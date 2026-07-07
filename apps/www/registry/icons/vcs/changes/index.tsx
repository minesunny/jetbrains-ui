/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type ChangesProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const ChangesLight: FC<
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
    <rect x={2} y={5} width={7} height={1} rx={0.5} fill="#6C707E" />
    <rect x={2} y={8} width={5} height={1} rx={0.5} fill="#6C707E" />
    <rect x={2} y={2} width={12} height={1} rx={0.5} fill="#6C707E" />
    <path
      d="m8.5 14.5 2-2-2-2m-3 2H10m2.5-2-2-2 2-2m3 2H11"
      stroke="#3574F0"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChangesDark: FC<
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
    <rect x={2} y={5} width={7} height={1} rx={0.5} fill="#CED0D6" />
    <rect x={2} y={8} width={5} height={1} rx={0.5} fill="#CED0D6" />
    <rect x={2} y={2} width={12} height={1} rx={0.5} fill="#CED0D6" />
    <path
      d="m8.5 14.5 2-2-2-2m-3 2H10m2.5-2-2-2 2-2m3 2H11"
      stroke="#548AF7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Changes: FC<ChangesProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ChangesLight : ChangesDark;

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

export default Changes;
