/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type EditDataProps = SvgProps;

const EditDataLight: FC<SvgProps> = ({
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
      d="M1.5 4C1.5 3.17157 2.17157 2.5 3 2.5H13C13.8284 2.5 14.5 3.17157 14.5 4V12C14.5 12.8284 13.8284 13.5 13 13.5H3C2.17157 13.5 1.5 12.8284 1.5 12V4Z"
      stroke="#6C707E"
    />
    <path d="M5.5 3V13" stroke="#6C707E" />
    <path d="M10.5 3V13" stroke="#6C707E" />
    <path d="M2 5.5H14" stroke="#6C707E" />
  </svg>
);

const EditDataDark: FC<SvgProps> = ({
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
      d="M1.5 4C1.5 3.17157 2.17157 2.5 3 2.5H13C13.8284 2.5 14.5 3.17157 14.5 4V12C14.5 12.8284 13.8284 13.5 13 13.5H3C2.17157 13.5 1.5 12.8284 1.5 12V4Z"
      stroke="#CED0D6"
    />
    <path d="M5.5 3V13" stroke="#CED0D6" />
    <path d="M10.5 3V13" stroke="#CED0D6" />
    <path d="M2 5.5H14" stroke="#CED0D6" />
  </svg>
);

export const EditData: FC<EditDataProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? EditDataLight : EditDataDark;

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

export default EditData;
