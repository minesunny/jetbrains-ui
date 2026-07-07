/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

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
      d="M5 5V3H6V5H5Z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 5V3H11V5H10Z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 6H2V5H14V6Z"
      fill="#6C707E"
    />
    <path
      d="M3 3H13C13.5523 3 14 3.44772 14 4V6H15V4C15 2.89543 14.1046 2 13 2H3C1.89543 2 1 2.89543 1 4V6H2V4C2 3.44772 2.44772 3 3 3Z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 8V6H6V8H5Z"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 12V9H6V12H5Z"
      fill="#3574F0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 14V12H6V14H5Z"
      fill="#3574F0"
    />
    <rect x={10} y={6} width={1} height={2} fill="#6C707E" />
    <rect x={10} y={9} width={1} height={2} fill="#3574F0" />
    <rect x={10} y={11} width={1} height={3} fill="#3574F0" />
    <rect x={14} y={6} width={1} height={2} fill="#6C707E" />
    <rect x={14} y={9} width={1} height={3} fill="#3574F0" />
    <path
      d="M2 12H1C1 13.1046 1.89543 14 3 14V13C2.44772 13 2 12.5523 2 12Z"
      fill="#3574F0"
    />
    <path
      d="M13 13L13 14C14.1046 14 15 13.1046 15 12L14 12C14 12.5523 13.5523 13 13 13Z"
      fill="#3574F0"
    />
    <rect x={1} y={6} width={1} height={2} fill="#6C707E" />
    <rect x={1} y={9} width={1} height={3} fill="#3574F0" />
    <rect x={3} y={13} width={2} height={1} fill="#3574F0" />
    <rect x={11} y={13} width={2} height={1} fill="#3574F0" />
    <rect x={6} y={13} width={4} height={1} fill="#3574F0" />
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
      d="M5 5V3H6V5H5Z"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 5V3H11V5H10Z"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 6H2V5H14V6Z"
      fill="#CED0D6"
    />
    <path
      d="M3 3H13C13.5523 3 14 3.44772 14 4V6H15V4C15 2.89543 14.1046 2 13 2H3C1.89543 2 1 2.89543 1 4V6H2V4C2 3.44772 2.44772 3 3 3Z"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 8V6H6V8H5Z"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 12V9H6V12H5Z"
      fill="#548AF7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 14V12H6V14H5Z"
      fill="#548AF7"
    />
    <rect x={10} y={6} width={1} height={2} fill="#CED0D6" />
    <rect x={10} y={9} width={1} height={2} fill="#548AF7" />
    <rect x={10} y={11} width={1} height={3} fill="#548AF7" />
    <rect x={14} y={6} width={1} height={2} fill="#CED0D6" />
    <rect x={14} y={9} width={1} height={3} fill="#548AF7" />
    <path
      d="M2 12H1C1 13.1046 1.89543 14 3 14V13C2.44772 13 2 12.5523 2 12Z"
      fill="#548AF7"
    />
    <path
      d="M13 13L13 14C14.1046 14 15 13.1046 15 12L14 12C14 12.5523 13.5523 13 13 13Z"
      fill="#548AF7"
    />
    <rect x={1} y={6} width={1} height={2} fill="#CED0D6" />
    <rect x={1} y={9} width={1} height={3} fill="#548AF7" />
    <rect x={3} y={13} width={2} height={1} fill="#548AF7" />
    <rect x={11} y={13} width={2} height={1} fill="#548AF7" />
    <rect x={6} y={13} width={4} height={1} fill="#548AF7" />
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
