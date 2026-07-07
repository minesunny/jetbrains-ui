/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type JsonDocumentProps = SvgProps;

const JsonDocumentLight: FC<SvgProps> = ({
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
      d="M3 5.41421V13C3 14.1046 3.89543 15 5 15H11C12.1046 15 13 14.1046 13 13V3C13 1.89543 12.1046 1 11 1H7.41421C7.149 1 6.89464 1.10536 6.70711 1.29289L3.29289 4.70711C3.10536 4.89464 3 5.149 3 5.41421ZM12 3C12 2.44772 11.5523 2 11 2L8 2V4C8 5.10457 7.10457 6 6 6H4L4 13C4 13.5523 4.44772 14 5 14H11C11.5523 14 12 13.5523 12 13V3ZM7 2.41421L4.41421 5H6C6.55228 5 7 4.55228 7 4V2.41421Z"
      fill="#6C707E"
    />
    <path
      d="M11 2C11.5523 2 12 2.44772 12 3V13C12 13.5523 11.5523 14 11 14H5C4.44772 14 4 13.5523 4 13V6H6C7.10457 6 8 5.10457 8 4V2H11Z"
      fill="#EBECF0"
    />
    <path
      d="M4.41421 5L7 2.41421V4C7 4.06904 6.993 4.13644 6.97968 4.20154C6.88644 4.65722 6.48325 5 6 5H4.41421Z"
      fill="#EBECF0"
    />
  </svg>
);

const JsonDocumentDark: FC<SvgProps> = ({
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
      d="M3 5.41421V13C3 14.1046 3.89543 15 5 15H11C12.1046 15 13 14.1046 13 13V3C13 1.89543 12.1046 1 11 1H7.41421C7.149 1 6.89464 1.10536 6.70711 1.29289L3.29289 4.70711C3.10536 4.89464 3 5.149 3 5.41421ZM12 3C12 2.44772 11.5523 2 11 2L8 2V4C8 5.10457 7.10457 6 6 6H4L4 13C4 13.5523 4.44772 14 5 14H11C11.5523 14 12 13.5523 12 13V3ZM7 2.41421L4.41421 5H6C6.55228 5 7 4.55228 7 4V2.41421Z"
      fill="#CED0D6"
    />
    <path
      d="M11 2C11.5523 2 12 2.44772 12 3V13C12 13.5523 11.5523 14 11 14H5C4.44772 14 4 13.5523 4 13V6H6C7.10457 6 8 5.10457 8 4V2H11Z"
      fill="#43454A"
    />
    <path
      d="M4.41421 5L7 2.41421V4C7 4.06904 6.993 4.13644 6.97968 4.20154C6.88644 4.65722 6.48325 5 6 5H4.41421Z"
      fill="#43454A"
    />
  </svg>
);

export const JsonDocument: FC<JsonDocumentProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? JsonDocumentLight : JsonDocumentDark;

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

export default JsonDocument;
