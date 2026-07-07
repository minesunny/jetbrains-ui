/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type DataStructureProps = SvgProps;

const DataStructureLight: FC<SvgProps> = ({
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
      d="M1.5 10.5V14.5H6.5V10.5H1.5Z"
      stroke="#6C707E"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 10.5V14.5H14.5V10.5H9.5Z"
      stroke="#6C707E"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.5 4.5V0.5H10.5V4.5H5.5Z"
      stroke="#6C707E"
      strokeLinejoin="round"
    />
    <path d="M8 5V7" stroke="#6C707E" strokeLinejoin="round" />
    <path d="M4.5 10V7.5H8H11.5V10" stroke="#6C707E" strokeLinejoin="round" />
    <rect x={2} y={11} width={4} height={3} fill="#EBECF0" />
    <rect x={10} y={11} width={4} height={3} fill="#EBECF0" />
    <rect x={6} y={1} width={4} height={3} fill="#EBECF0" />
  </svg>
);

const DataStructureDark: FC<SvgProps> = ({
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
      d="M1.5 10.5V14.5H6.5V10.5H1.5Z"
      stroke="#CED0D6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 10.5V14.5H14.5V10.5H9.5Z"
      stroke="#CED0D6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.5 4.5V0.5H10.5V4.5H5.5Z"
      stroke="#CED0D6"
      strokeLinejoin="round"
    />
    <path d="M8 5V7" stroke="#CED0D6" strokeLinejoin="round" />
    <path d="M4.5 10V7.5H8H11.5V10" stroke="#CED0D6" strokeLinejoin="round" />
    <rect x={2} y={11} width={4} height={3} fill="#43454A" />
    <rect x={10} y={11} width={4} height={3} fill="#43454A" />
    <rect x={6} y={1} width={4} height={3} fill="#43454A" />
  </svg>
);

export const DataStructure: FC<DataStructureProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? DataStructureLight : DataStructureDark;

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

export default DataStructure;
