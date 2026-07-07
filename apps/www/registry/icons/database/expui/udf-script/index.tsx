/**
 * Copyright 2000-2024 JetBrains s.r.o. and contributors.
 * Use of this source code is governed by the Apache 2.0 license.
 */
import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils';

export type UdfScriptProps = Omit<ComponentProps<'svg'>, 'size'> & {
  size?: 12 | 14 | 16 | 20 | 24;
  mode?: 'light' | 'dark';
};

const UdfScriptLight: FC<
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
      d="M11 9H15.5V9.945H12.01V12H15V12.945H12.01V16H11V9Z"
      fill="#3574F0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 3H4.73244C4.90261 3.29417 5 3.63571 5 4V12C5 12.5523 5.44772 13 6 13H10V14H6C4.89543 14 4 13.1046 4 12V5H1.5C1.22386 5 1 4.77614 1 4.5V4C1 2.89543 1.89543 2 3 2H10.5C11.8807 2 13 3.11929 13 4.5V8H12V4.5C12 3.67157 11.3284 3 10.5 3ZM2 4C2 3.44772 2.44772 3 3 3C3.55228 3 4 3.44772 4 4H2Z"
      fill="#6C707E"
    />
  </svg>
);

const UdfScriptDark: FC<
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
      d="M11 9H15.5V9.945H12.01V12H15V12.945H12.01V16H11V9Z"
      fill="#548AF7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 3H4.73244C4.90261 3.29417 5 3.63571 5 4V12C5 12.5523 5.44772 13 6 13H10V14H6C4.89543 14 4 13.1046 4 12V5H1.5C1.22386 5 1 4.77614 1 4.5V4C1 2.89543 1.89543 2 3 2H10.5C11.8807 2 13 3.11929 13 4.5V8H12V4.5C12 3.67157 11.3284 3 10.5 3ZM2 4C2 3.44772 2.44772 3 3 3C3.55228 3 4 3.44772 4 4H2Z"
      fill="#CED0D6"
    />
  </svg>
);

export const UdfScript: FC<UdfScriptProps> = ({
  size = 16,
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? UdfScriptLight : UdfScriptDark;

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

export default UdfScript;
