/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type DataFileProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const DataFileLight: FC<
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 9C9.44772 9 9 9.44772 9 10L9 15C9 15.5523 9.44772 16 10 16L15 16C15.5523 16 16 15.5523 16 15L16 10C16 9.44772 15.5523 9.00001 15 9.00001L10 9ZM10 11L10 10H12L12 11H10ZM10 12L10 15H12L12 12H10ZM13 15H15L15 12H13L13 15ZM15 11L15 10H13L13 11H15Z"
      fill="#3574F0"
    />
    <path
      d="M3 13V5.41421C3 5.149 3.10536 4.89464 3.29289 4.70711L6.70711 1.29289C6.89464 1.10536 7.149 1 7.41421 1H11C12.1046 1 13 1.89543 13 3V8H10C8.89543 8 8 8.89543 8 10V15H5C3.89543 15 3 14.1046 3 13Z"
      fill="#EBECF0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 13V5.41421C3 5.149 3.10536 4.89464 3.29289 4.70711L6.70711 1.29289C6.89464 1.10536 7.149 1 7.41421 1H11C12.1046 1 13 1.89543 13 3V8H12V3C12 2.44772 11.5523 2 11 2L8 2V4C8 5.10457 7.10457 6 6 6H4L4 13C4 13.5523 4.44772 14 5 14H8V15H5C3.89543 15 3 14.1046 3 13ZM4.41421 5L7 2.41421V4C7 4.55228 6.55228 5 6 5H4.41421Z"
      fill="#6C707E"
    />
  </svg>
);

const DataFileDark: FC<
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 9C9.44772 9 9 9.44772 9 10L9 15C9 15.5523 9.44772 16 10 16L15 16C15.5523 16 16 15.5523 16 15L16 10C16 9.44772 15.5523 9.00001 15 9.00001L10 9ZM10 11L10 10H12L12 11H10ZM10 12L10 15H12L12 12H10ZM13 15H15L15 12H13L13 15ZM15 11L15 10H13L13 11H15Z"
      fill="#548AF7"
    />
    <path
      d="M3 13V5.41421C3 5.149 3.10536 4.89464 3.29289 4.70711L6.70711 1.29289C6.89464 1.10536 7.149 1 7.41421 1H11C12.1046 1 13 1.89543 13 3V8H10C8.89543 8 8 8.89543 8 10V15H5C3.89543 15 3 14.1046 3 13Z"
      fill="#43454A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 13V5.41421C3 5.149 3.10536 4.89464 3.29289 4.70711L6.70711 1.29289C6.89464 1.10536 7.149 1 7.41421 1H11C12.1046 1 13 1.89543 13 3V8H12V3C12 2.44772 11.5523 2 11 2L8 2V4C8 5.10457 7.10457 6 6 6H4L4 13C4 13.5523 4.44772 14 5 14H8V15H5C3.89543 15 3 14.1046 3 13ZM4.41421 5L7 2.41421V4C7 4.55228 6.55228 5 6 5H4.41421Z"
      fill="#CED0D6"
    />
  </svg>
);

export const DataFile: FC<DataFileProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? DataFileLight : DataFileDark;

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

export default DataFile;
