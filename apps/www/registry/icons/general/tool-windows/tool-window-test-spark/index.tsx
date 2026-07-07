/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type ToolWindowTestSparkProps = SvgProps;

const ToolWindowTestSparkLight: FC<SvgProps> = ({
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
      d="m8.322 4.475.177.513.498-.218 4.009-1.767-1.72 4.01-.212.494.506.177 1.728.603-1.671 3.49-.149.312.239.249 1.106 1.162H2.5V3.166l1.162 1.107.25.239.31-.149 3.487-1.67z"
      stroke="#6C707E"
    />
  </svg>
);

const ToolWindowTestSparkDark: FC<SvgProps> = ({
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
      d="m8.322 4.475.177.513.498-.218 4.009-1.767-1.72 4.01-.212.494.506.177 1.728.603-1.671 3.49-.149.312.239.249 1.106 1.162H2.5V3.166l1.162 1.107.25.239.31-.149 3.487-1.67z"
      stroke="#CED0D6"
    />
  </svg>
);

export const ToolWindowTestSpark: FC<ToolWindowTestSparkProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ToolWindowTestSparkLight : ToolWindowTestSparkDark;

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

export default ToolWindowTestSpark;
