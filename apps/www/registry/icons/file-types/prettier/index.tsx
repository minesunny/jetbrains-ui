/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type PrettierProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const PrettierLight: FC<
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
    <rect x={3} y={2} width={8} height={1} rx={0.5} fill="#588CF3" />
    <rect x={3} y={4} width={5} height={1} rx={0.5} fill="#588CF3" />
    <rect x={3} y={6} width={3} height={1} rx={0.5} fill="#834DF0" />
    <rect x={9} y={4} width={4} height={1} rx={0.5} fill="#834DF0" />
    <rect x={10} y={6} width={4} height={1} rx={0.5} fill="#C27D04" />
    <rect x={9} y={8} width={4} height={1} rx={0.5} fill="#588CF3" />
    <rect x={3} y={8} width={3} height={1} rx={0.5} fill="#DB3B4B" />
    <rect x={7} y={8} width={1} height={1} rx={0.5} fill="#C27D04" />
    <rect x={3} y={12} width={2} height={1} rx={0.5} fill="#588CF3" />
    <rect x={6} y={12} width={1} height={1} rx={0.5} fill="#834DF0" />
    <rect x={3} y={14} width={4} height={1} rx={0.5} fill="#DB3B4B" />
    <rect x={5} y={10} width={6} height={1} rx={0.5} fill="#C27D04" />
    <rect x={3} y={10} width={1} height={1} rx={0.5} fill="#834DF0" />
  </svg>
);

const PrettierDark: FC<
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
    <rect x={3} y={2} width={8} height={1} rx={0.5} fill="#548AF7" />
    <rect x={3} y={4} width={5} height={1} rx={0.5} fill="#548AF7" />
    <rect x={3} y={6} width={3} height={1} rx={0.5} fill="#A571E6" />
    <rect x={9} y={4} width={4} height={1} rx={0.5} fill="#A571E6" />
    <rect x={10} y={6} width={4} height={1} rx={0.5} fill="#D6AE58" />
    <rect x={9} y={8} width={4} height={1} rx={0.5} fill="#548AF7" />
    <rect x={3} y={8} width={3} height={1} rx={0.5} fill="#DB5C5C" />
    <rect x={7} y={8} width={1} height={1} rx={0.5} fill="#D6AE58" />
    <rect x={3} y={12} width={2} height={1} rx={0.5} fill="#548AF7" />
    <rect x={6} y={12} width={1} height={1} rx={0.5} fill="#A571E6" />
    <rect x={3} y={14} width={4} height={1} rx={0.5} fill="#DB5C5C" />
    <rect x={5} y={10} width={6} height={1} rx={0.5} fill="#D6AE58" />
    <rect x={3} y={10} width={1} height={1} rx={0.5} fill="#A571E6" />
  </svg>
);

export const Prettier: FC<PrettierProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? PrettierLight : PrettierDark;

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

export default Prettier;
