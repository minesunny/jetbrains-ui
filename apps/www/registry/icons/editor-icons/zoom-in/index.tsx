/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type ZoomInProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const ZoomInLight: FC<
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
    <rect x={7.5} y={4} width={1} height={8} rx={0.5} fill="#6C707E" />
    <rect
      x={12}
      y={7.5}
      width={1}
      height={8}
      rx={0.5}
      transform="rotate(90 12 7.5)"
      fill="#6C707E"
    />
    <circle cx={8} cy={8} r={6.5} stroke="#6C707E" />
  </svg>
);

const ZoomInDark: FC<
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
    <rect x={7.5} y={4} width={1} height={8} rx={0.5} fill="#CED0D6" />
    <rect
      x={12}
      y={7.5}
      width={1}
      height={8}
      rx={0.5}
      transform="rotate(90 12 7.5)"
      fill="#CED0D6"
    />
    <circle cx={8} cy={8} r={6.5} stroke="#CED0D6" />
  </svg>
);

export const ZoomIn: FC<ZoomInProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ZoomInLight : ZoomInDark;

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

export default ZoomIn;
