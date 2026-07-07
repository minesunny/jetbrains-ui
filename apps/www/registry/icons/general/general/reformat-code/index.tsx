/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type ReformatCodeProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const ReformatCodeLight: FC<
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
    <rect x={2} y={12} width={12} height={1} rx={0.5} fill="#6C707E" />
    <rect x={6} y={6} width={8} height={1} rx={0.5} fill="#6C707E" />
    <rect x={6} y={9} width={8} height={1} rx={0.5} fill="#6C707E" />
    <rect x={2} y={3} width={12} height={1} rx={0.5} fill="#6C707E" />
    <path
      d="M2.8 6.1a.5.5 0 0 0-.8.4v3a.5.5 0 0 0 .8.4l2-1.5a.5.5 0 0 0 0-.8z"
      fill="#4682FA"
    />
  </svg>
);

const ReformatCodeDark: FC<
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
    <rect x={2} y={12} width={12} height={1} rx={0.5} fill="#CED0D6" />
    <rect x={6} y={6} width={8} height={1} rx={0.5} fill="#CED0D6" />
    <rect x={6} y={9} width={8} height={1} rx={0.5} fill="#CED0D6" />
    <rect x={2} y={3} width={12} height={1} rx={0.5} fill="#CED0D6" />
    <path
      d="M2.8 6.1a.5.5 0 0 0-.8.4v3a.5.5 0 0 0 .8.4l2-1.5a.5.5 0 0 0 0-.8z"
      fill="#548AF7"
    />
  </svg>
);

export const ReformatCode: FC<ReformatCodeProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ReformatCodeLight : ReformatCodeDark;

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

export default ReformatCode;
