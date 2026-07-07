/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../utils';

export type PartionTableProps = SvgProps;

const PartionTableLight: FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 6h3v2h1V4a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v4h1V6h3v2h1V6h4v2h1zM3 3h2v2H2V4a1 1 0 0 1 1-1m7 2H6V3h4zm4 0h-3V3h2a1 1 0 0 1 1 1z"
      fill="#6C707E"
    />
    <path
      d="M5 9h1v4h4V9h1v4h2a1 1 0 0 0 1-1V9h1v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9h1v3a1 1 0 0 0 1 1h2z"
      fill="#3574F0"
    />
  </svg>
);

const PartionTableDark: FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 6h3v2h1V4a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v4h1V6h3v2h1V6h4v2h1zM3 3h2v2H2V4a1 1 0 0 1 1-1m7 2H6V3h4zm4 0h-3V3h2a1 1 0 0 1 1 1z"
      fill="#CED0D6"
    />
    <path
      d="M5 9h1v4h4V9h1v4h2a1 1 0 0 0 1-1V9h1v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9h1v3a1 1 0 0 0 1 1h2z"
      fill="#548AF7"
    />
  </svg>
);

export const PartionTable: FC<PartionTableProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? PartionTableLight : PartionTableDark;

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

export default PartionTable;
