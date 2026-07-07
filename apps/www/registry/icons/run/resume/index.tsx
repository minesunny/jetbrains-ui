/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type ResumeProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const ResumeLight: FC<
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
    <rect
      x={1.5}
      y={2.5}
      width={3}
      height={11}
      rx={0.5}
      fill="#F2FCF3"
      stroke="#208A3C"
    />
    <path
      d="M14.356 7.26a1 1 0 0 1 0 1.512L9.158 13.27a1 1 0 0 1-1.655-.756V3.516a1 1 0 0 1 1.655-.756z"
      fill="#F2FCF3"
      stroke="#208A3C"
    />
  </svg>
);

const ResumeDark: FC<
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
    <rect
      x={1.5}
      y={2.5}
      width={3}
      height={11}
      rx={0.5}
      fill="#253627"
      stroke="#57965C"
    />
    <path
      d="M14.356 7.26a1 1 0 0 1 0 1.512L9.158 13.27a1 1 0 0 1-1.655-.756V3.516a1 1 0 0 1 1.655-.756z"
      fill="#253627"
      stroke="#57965C"
    />
  </svg>
);

export const Resume: FC<ResumeProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ResumeLight : ResumeDark;

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

export default Resume;
