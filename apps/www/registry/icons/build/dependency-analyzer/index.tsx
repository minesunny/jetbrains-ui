/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../utils';

export type DependencyAnalyzerProps = SvgProps;

const DependencyAnalyzerLight: FC<SvgProps> = ({
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
      d="M3.5 15a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-.5.5M5.5 15a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5M1 14.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-1 0z"
      fill="#3574F0"
    />
    <path
      d="M10.164 10.872A4.98 4.98 0 0 1 7 12v-1a4 4 0 1 0-3.862-2.956c-.355.088-.66.302-.864.592a5 5 0 1 1 8.598 1.529l2.98 2.977a.5.5 0 0 1-.706.708z"
      fill="#6C707E"
    />
  </svg>
);

const DependencyAnalyzerDark: FC<SvgProps> = ({
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
      d="M3.5 15a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-.5.5M5.5 15a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5M1 14.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-1 0z"
      fill="#548AF7"
    />
    <path
      d="M10.164 10.872A4.98 4.98 0 0 1 7 12v-1a4 4 0 1 0-3.862-2.956c-.355.088-.66.302-.864.592a5 5 0 1 1 8.598 1.529l2.98 2.977a.5.5 0 0 1-.706.708z"
      fill="#CED0D6"
    />
  </svg>
);

export const DependencyAnalyzer: FC<DependencyAnalyzerProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? DependencyAnalyzerLight : DependencyAnalyzerDark;

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

export default DependencyAnalyzer;
