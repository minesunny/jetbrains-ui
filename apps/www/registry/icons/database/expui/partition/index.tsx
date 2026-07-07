/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type PartitionProps = SvgProps;

const PartitionLight: FC<SvgProps> = ({
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
      d="M7.5 13.4776C4.69675 13.225 2.5 10.869 2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C10.869 2.5 13.225 4.69675 13.4776 7.5H8H7.5V8V13.4776Z"
      stroke="#3574F0"
    />
    <mask id="path-2-inside-1_2617_35180" fill="white">
      <path d="M15 9C15 12.3137 12.3137 15 9 15L9.00001 9H15Z" />
    </mask>
    <path
      d="M15 9H16V8H15V9ZM9 15L8 15L8 16H9V15ZM9.00001 9V8H8.00002L8.00001 9L9.00001 9ZM14 9C14 11.7614 11.7614 14 9 14V16C12.866 16 16 12.866 16 9H14ZM10 15L10 9L8.00001 9L8 15L10 15ZM9.00001 10H15V8H9.00001V10Z"
      fill="#3574F0"
      mask="url(#path-2-inside-1_2617_35180)"
    />
  </svg>
);

const PartitionDark: FC<SvgProps> = ({
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
      d="M7.5 13.4776C4.69675 13.225 2.5 10.869 2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C10.869 2.5 13.225 4.69675 13.4776 7.5H8H7.5V8V13.4776Z"
      stroke="#548AF7"
    />
    <mask id="path-2-inside-1_2624_35456" fill="white">
      <path d="M15 9C15 12.3137 12.3137 15 9 15L9.00001 9H15Z" />
    </mask>
    <path
      d="M15 9H16V8H15V9ZM9 15L8 15L8 16H9V15ZM9.00001 9V8H8.00002L8.00001 9L9.00001 9ZM14 9C14 11.7614 11.7614 14 9 14V16C12.866 16 16 12.866 16 9H14ZM10 15L10 9L8.00001 9L8 15L10 15ZM9.00001 10H15V8H9.00001V10Z"
      fill="#548AF7"
      mask="url(#path-2-inside-1_2624_35456)"
    />
  </svg>
);

export const Partition: FC<PartitionProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? PartitionLight : PartitionDark;

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

export default Partition;
