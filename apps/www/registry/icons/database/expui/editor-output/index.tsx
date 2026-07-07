/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type SvgProps, sizeMap } from '../../../utils';

export type EditorOutputProps = SvgProps;

const EditorOutputLight: FC<SvgProps> = ({
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
      d="M2.5 2.5H13.5"
      stroke="#6C707E"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 13.5H13.5"
      stroke="#6C707E"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 10V6C2.5 5.17157 3.17157 4.5 4 4.5H12C12.8284 4.5 13.5 5.17157 13.5 6V10C13.5 10.8284 12.8284 11.5 12 11.5H4C3.17157 11.5 2.5 10.8284 2.5 10Z"
      stroke="#6C707E"
      strokeLinejoin="round"
    />
    <path d="M5.5 5V11" stroke="#6C707E" />
  </svg>
);

const EditorOutputDark: FC<SvgProps> = ({
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
      d="M2.5 2.5H13.5"
      stroke="#CED0D6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 13.5H13.5"
      stroke="#CED0D6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 10V6C2.5 5.17157 3.17157 4.5 4 4.5H12C12.8284 4.5 13.5 5.17157 13.5 6V10C13.5 10.8284 12.8284 11.5 12 11.5H4C3.17157 11.5 2.5 10.8284 2.5 10Z"
      stroke="#CED0D6"
      strokeLinejoin="round"
    />
    <path d="M5.5 5V11" stroke="#CED0D6" />
  </svg>
);

export const EditorOutput: FC<EditorOutputProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? EditorOutputLight : EditorOutputDark;

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

export default EditorOutput;
