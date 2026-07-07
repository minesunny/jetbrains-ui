/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type LogOverlapProps = SvgProps;

const LogOverlapLight: FC<SvgProps> = ({
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
    <path d="M2 3H4V2H2V3Z" fill="#6C707E" />
    <path d="M2 5H4V4H2V5Z" fill="#6C707E" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 0C0.447716 0 0 0.447715 0 1V6C0 6.55228 0.447716 7 1 7H5C5.55228 7 6 6.55228 6 6V1C6 0.447715 5.55228 0 5 0H1ZM5 1H1V6H5V1Z"
      fill="#6C707E"
    />
  </svg>
);

const LogOverlapDark: FC<SvgProps> = ({
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
    <path d="M2 3H4V2H2V3Z" fill="#CED0D6" />
    <path d="M2 5H4V4H2V5Z" fill="#CED0D6" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 0C0.447716 0 0 0.447715 0 1V6C0 6.55228 0.447716 7 1 7H5C5.55228 7 6 6.55228 6 6V1C6 0.447715 5.55228 0 5 0H1ZM5 1H1V6H5V1Z"
      fill="#CED0D6"
    />
  </svg>
);

export const LogOverlap: FC<LogOverlapProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? LogOverlapLight : LogOverlapDark;

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

export default LogOverlap;
