/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type SortByTypeProps = SvgProps;

const SortByTypeLight: FC<SvgProps> = ({
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
      d="M7.854 10.854a.5.5 0 0 0-.708-.708L5 12.293V2.5a.5.5 0 0 0-1 0v9.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3a.5.5 0 0 0 .708 0z"
      fill="#6C707E"
    />
    <path
      d="M11 2.5h3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5ZM11 7.5h3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5Z"
      stroke="#6C707E"
    />
  </svg>
);

const SortByTypeDark: FC<SvgProps> = ({
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
      d="M7.854 10.854a.5.5 0 0 0-.708-.708L5 12.293V2.5a.5.5 0 1 0-1 0v9.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3a.5.5 0 0 0 .708 0z"
      fill="#CED0D6"
    />
    <path
      d="M11 2.5h3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5ZM11 7.5h3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5Z"
      stroke="#CED0D6"
    />
  </svg>
);

export const SortByType: FC<SortByTypeProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? SortByTypeLight : SortByTypeDark;

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

export default SortByType;
