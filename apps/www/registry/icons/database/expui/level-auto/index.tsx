/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type LevelAutoProps = SvgProps;

const LevelAutoLight: FC<SvgProps> = ({
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
      d="M8 4C8 3.44772 8.44772 3 9 3H11C11.5523 3 12 3.44772 12 4V12C12 12.5523 11.5523 13 11 13H9C8.44772 13 8 12.5523 8 12V4Z"
      fill="#EBECF0"
    />
    <circle cx={10} cy={11} r={1} fill="#6C707E" />
    <circle cx={10} cy={5} r={1} fill="#6C707E" />
    <path
      d="M11 8C11 8.55228 10.5523 9 10 9C9.44772 9 9 8.55228 9 8C9 7.44772 9.44772 7 10 7C10.5523 7 11 7.44772 11 8Z"
      fill="#6C707E"
    />
    <path
      d="M9 2.5H11C11.8284 2.5 12.5 3.17157 12.5 4V12C12.5 12.8284 11.8284 13.5 11 13.5H9C8.17157 13.5 7.5 12.8284 7.5 12V4C7.5 3.17157 8.17157 2.5 9 2.5Z"
      stroke="#6C707E"
    />
  </svg>
);

const LevelAutoDark: FC<SvgProps> = ({
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
      d="M8 4C8 3.44772 8.44772 3 9 3H11C11.5523 3 12 3.44772 12 4V12C12 12.5523 11.5523 13 11 13H9C8.44772 13 8 12.5523 8 12V4Z"
      fill="#43454A"
    />
    <circle cx={10} cy={11} r={1} fill="#CED0D6" />
    <circle cx={10} cy={5} r={1} fill="#CED0D6" />
    <path
      d="M11 8C11 8.55228 10.5523 9 10 9C9.44772 9 9 8.55228 9 8C9 7.44772 9.44772 7 10 7C10.5523 7 11 7.44772 11 8Z"
      fill="#CED0D6"
    />
    <path
      d="M9 2.5H11C11.8284 2.5 12.5 3.17157 12.5 4V12C12.5 12.8284 11.8284 13.5 11 13.5H9C8.17157 13.5 7.5 12.8284 7.5 12V4C7.5 3.17157 8.17157 2.5 9 2.5Z"
      stroke="#CED0D6"
    />
  </svg>
);

export const LevelAuto: FC<LevelAutoProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? LevelAutoLight : LevelAutoDark;

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

export default LevelAuto;
