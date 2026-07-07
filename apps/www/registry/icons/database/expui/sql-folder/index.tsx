/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type SqlFolderProps = SvgProps;

const SqlFolderLight: FC<SvgProps> = ({
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
      d="M2.63333 2C1.73127 2 1 2.83574 1 3.86667V12.1333C1 13.1643 1.73127 14 2.63333 14H9V10C9 8.89543 9.89543 8 11 8H15V6C15 4.89543 14.1046 4 13 4L8.46667 4L6.84336 2.30775C6.65477 2.11115 6.39413 2 6.1217 2H2.63333Z"
      fill="#EBECF0"
    />
    <path
      d="M6.1217 3L2.63333 3C2.40481 3 2 3.25841 2 3.86667V12.1333C2 12.7416 2.40481 13 2.63333 13H9V14H2.63333C1.73127 14 1 13.1643 1 12.1333V3.86667C1 2.83574 1.73127 2 2.63333 2H6.1217C6.39413 2 6.65477 2.11115 6.84336 2.30775L8.46667 4L13 4C14.1046 4 15 4.89543 15 6V8H14V6C14 5.44771 13.5523 5 13 5H8.04022L6.1217 3Z"
      fill="#6C707E"
    />
    <path d="M12 12H14V11H12V12Z" fill="#3574F0" />
    <path d="M12 14H14V13H12V14Z" fill="#3574F0" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 9C10.4477 9 10 9.44772 10 10V15C10 15.5523 10.4477 16 11 16H15C15.5523 16 16 15.5523 16 15V10C16 9.44772 15.5523 9 15 9H11ZM15 10H11V15H15V10Z"
      fill="#3574F0"
    />
  </svg>
);

const SqlFolderDark: FC<SvgProps> = ({
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
      d="M2.63333 2C1.73127 2 1 2.83574 1 3.86667V12.1333C1 13.1643 1.73127 14 2.63333 14H9V10C9 8.89543 9.89543 8 11 8H15V6C15 4.89543 14.1046 4 13 4L8.46667 4L6.84336 2.30775C6.65477 2.11115 6.39413 2 6.1217 2H2.63333Z"
      fill="#43454A"
    />
    <path
      d="M6.1217 3L2.63333 3C2.40481 3 2 3.25841 2 3.86667V12.1333C2 12.7416 2.40481 13 2.63333 13H9V14H2.63333C1.73127 14 1 13.1643 1 12.1333V3.86667C1 2.83574 1.73127 2 2.63333 2H6.1217C6.39413 2 6.65477 2.11115 6.84336 2.30775L8.46667 4L13 4C14.1046 4 15 4.89543 15 6V8H14V6C14 5.44771 13.5523 5 13 5H8.04022L6.1217 3Z"
      fill="#CED0D6"
    />
    <path d="M12 12H14V11H12V12Z" fill="#548AF7" />
    <path d="M12 14H14V13H12V14Z" fill="#548AF7" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 9C10.4477 9 10 9.44772 10 10V15C10 15.5523 10.4477 16 11 16H15C15.5523 16 16 15.5523 16 15V10C16 9.44772 15.5523 9 15 9H11ZM15 10H11V15H15V10Z"
      fill="#548AF7"
    />
  </svg>
);

export const SqlFolder: FC<SqlFolderProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? SqlFolderLight : SqlFolderDark;

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

export default SqlFolder;
