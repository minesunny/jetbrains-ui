/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../utils';

export type ZoomOutProps = SvgProps;

const ZoomOutLight: FC<SvgProps> = ({
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

const ZoomOutDark: FC<SvgProps> = ({
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

export const ZoomOut: FC<ZoomOutProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ZoomOutLight : ZoomOutDark;

  return (
    <SvgComponent
      size={sizeMap[size]}
      className={cn('inline-block flex-shrink-0', className)}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};

export default ZoomOut;
